import { useLayoutEffect, useRef } from "react";
import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";
import ThreeGlobe from "three-globe";
import { feature } from "topojson-client";
import { polygonToCells } from "h3-js";
import * as THREE from "three";
import countriesTopology from "world-atlas/countries-110m.json";

// Registers <threeGlobe /> as a usable R3F primitive. three-globe is a real
// THREE.Group subclass (vasturiano/three-globe) built specifically for this
// "spinning network globe" look — real country shapes, animated connection
// arcs — so we lean on it instead of hand-rolling continents from scratch.
extend({ ThreeGlobe });

// Real country boundaries (110m = coarse/fast, plenty for a decorative hero
// globe) — no texture image, no network request, just local topojson data.
const ALL_COUNTRIES = feature(countriesTopology, countriesTopology.objects.countries).features;

// three-globe's hex-polygon layer converts each country into H3 cells via
// h3-js's polygonToCells — which throws on a small number of real-world
// geometries (verified: North Korea's simplified 110m shape crashes it at
// this resolution). Drop whatever fails instead of hardcoding a country
// list, so this stays correct if the dataset or resolution ever changes.
const HEX_RESOLUTION = 3;
const COUNTRIES = ALL_COUNTRIES.filter(({ geometry: g }) => {
  if (!g) return false;
  try {
    if (g.type === "Polygon") polygonToCells(g.coordinates, HEX_RESOLUTION, true);
    else if (g.type === "MultiPolygon") g.coordinates.forEach((c) => polygonToCells(c, HEX_RESOLUTION, true));
    return true;
  } catch {
    return false;
  }
});

const HUBS = [
  { lat: 40.7, lng: -74 }, // New York
  { lat: 51.5, lng: -0.1 }, // London
  { lat: 28.6, lng: 77.2 }, // Delhi
  { lat: 1.35, lng: 103.8 }, // Singapore
  { lat: -33.9, lng: 151.2 }, // Sydney
  { lat: 35.7, lng: 139.7 }, // Tokyo
  { lat: 37.8, lng: -122.4 }, // San Francisco
  { lat: -23.55, lng: -46.63 }, // São Paulo
  { lat: 25.2, lng: 55.27 }, // Dubai
  { lat: -33.9, lng: 18.4 }, // Cape Town
  { lat: 55.75, lng: 37.6 }, // Moscow
  { lat: 43.65, lng: -79.38 }, // Toronto
  { lat: 31.23, lng: 121.47 }, // Shanghai
  { lat: 6.5, lng: 3.35 }, // Lagos
  { lat: -34.6, lng: -58.38 }, // Buenos Aires
  { lat: 52.52, lng: 13.4 }, // Berlin
];

// Deterministic PRNG (same reload = same look) for staggering arc timing —
// a full mesh over every pair grows O(n²) and turns into visual spaghetti
// once there are this many hubs, and connections that all pulse in lockstep
// read as one repeated animation rather than a living network. Instead:
// each hub links to its few nearest neighbors (regional clusters) plus a
// handful of the longest-distance pairs (intercontinental backbone lines),
// and every arc gets its own randomized dash speed/phase.
function seededRandom(seed) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}
const rand = seededRandom(7);

function angularDistance(a, b) {
  const toRad = (d) => (d * Math.PI) / 180;
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);
  const dLat = lat2 - lat1;
  const dLng = toRad(b.lng - a.lng);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return 2 * Math.asin(Math.min(1, Math.sqrt(h)));
}

function buildArcPairs(hubs, { nearest = 3, longHaul = 5 } = {}) {
  const key = (i, j) => (i < j ? `${i}-${j}` : `${j}-${i}`);
  const pairs = new Map();

  hubs.forEach((hub, i) => {
    hubs
      .map((other, j) => ({ j, d: i === j ? Infinity : angularDistance(hub, other) }))
      .sort((a, b) => a.d - b.d)
      .slice(0, nearest)
      .forEach(({ j }) => pairs.set(key(i, j), [Math.min(i, j), Math.max(i, j)]));
  });

  const remaining = [];
  for (let i = 0; i < hubs.length; i++) {
    for (let j = i + 1; j < hubs.length; j++) {
      if (!pairs.has(key(i, j))) remaining.push({ i, j, d: angularDistance(hubs[i], hubs[j]) });
    }
  }
  remaining
    .sort((a, b) => b.d - a.d)
    .slice(0, longHaul)
    .forEach(({ i, j }) => pairs.set(key(i, j), [i, j]));

  return Array.from(pairs.values());
}

const ARC_PAIRS = buildArcPairs(HUBS);

const ARCS_DATA = ARC_PAIRS.map(([a, b]) => ({
  startLat: HUBS[a].lat,
  startLng: HUBS[a].lng,
  endLat: HUBS[b].lat,
  endLng: HUBS[b].lng,
  // Randomized per arc so they don't all animate in lockstep.
  animateTime: 1200 + rand() * 1600,
  initialGap: rand() * 2.2,
}));

const POINTS_DATA = HUBS.map((h) => ({ lat: h.lat, lng: h.lng }));

// The world-space size we want the globe to render at, independent of
// three-globe's own (undocumented) internal radius — measured at setup time
// via getGlobeRadius() and converted with a scale factor rather than assumed.
const TARGET_RADIUS = 1.3;

// Fixed resting tilt (so the globe reads like a planet viewed from a slight
// angle, not face-on) — pointer parallax nudges around this, it doesn't
// replace it.
const BASE_TILT = { x: 0.22, z: -0.05 };

function GlobeMesh({ reduced, pointerRef }) {
  const globeRef = useRef(null);
  const tiltRef = useRef(null);
  const spinRef = useRef(null);
  const invalidate = useThree((s) => s.invalidate);

  useLayoutEffect(() => {
    const g = globeRef.current;
    if (!g) return;

    g.globeMaterial(new THREE.MeshPhongMaterial({ color: "#071225", transparent: true, opacity: 0.94 }));
    g.showAtmosphere(true);
    g.atmosphereColor("#3ec8ff");
    g.atmosphereAltitude(0.2);

    g.hexPolygonsData(COUNTRIES);
    g.hexPolygonResolution(HEX_RESOLUTION);
    g.hexPolygonMargin(0.3);
    g.hexPolygonColor(() => "#4fd2ff");
    g.hexPolygonAltitude(0.006);

    g.arcsData(ARCS_DATA);
    g.arcColor(() => "#7fe0ff");
    g.arcAltitude(0.28);
    g.arcStroke(0.4);
    g.arcDashLength(0.35);
    g.arcDashGap(1.8);
    g.arcDashInitialGap((d) => d.initialGap);
    g.arcDashAnimateTime((d) => (reduced ? 0 : d.animateTime));

    g.pointsData(POINTS_DATA);
    g.pointColor(() => "#eaf6ff");
    g.pointAltitude(0.012);
    g.pointRadius(0.32);

    if (reduced) g.pauseAnimation();

    // three-globe doesn't expose a radius setter — measure what it built and
    // scale the wrapping group to the size we actually want.
    const builtRadius = typeof g.getGlobeRadius === "function" ? g.getGlobeRadius() : 100;
    if (spinRef.current) spinRef.current.scale.setScalar(TARGET_RADIUS / builtRadius);

    invalidate();

    return () => {
      g.pauseAnimation?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced]);

  useFrame((_, delta) => {
    if (spinRef.current && !reduced) {
      // ~45s per revolution — slow, but unmistakably spinning.
      spinRef.current.rotation.y += delta * 0.14;
    }
    if (tiltRef.current) {
      const targetX = BASE_TILT.x + (reduced ? 0 : pointerRef.current.y * 0.12);
      const targetZ = BASE_TILT.z + (reduced ? 0 : -pointerRef.current.x * 0.08);
      tiltRef.current.rotation.x += (targetX - tiltRef.current.rotation.x) * 0.04;
      tiltRef.current.rotation.z += (targetZ - tiltRef.current.rotation.z) * 0.04;
    }
  });

  return (
    <group ref={tiltRef}>
      <group ref={spinRef}>
        <threeGlobe ref={globeRef} />
      </group>
    </group>
  );
}

export default function Globe3D({ reducedMotion = false, className = "" }) {
  const pointerRef = useRef({ x: 0, y: 0 });

  useLayoutEffect(() => {
    if (reducedMotion) return;
    const handleMove = (e) => {
      pointerRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointerRef.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", handleMove, { passive: true });
    return () => window.removeEventListener("pointermove", handleMove);
  }, [reducedMotion]);

  return (
    <div className={className} aria-hidden="true">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 4.4], fov: 40 }}
        gl={{ antialias: true, alpha: true }}
        frameloop={reducedMotion ? "demand" : "always"}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[4, 3, 5]} intensity={1.3} color="#bfe6ff" />
        <GlobeMesh reduced={reducedMotion} pointerRef={pointerRef} />
      </Canvas>
    </div>
  );
}
