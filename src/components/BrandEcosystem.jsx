import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { Check, ExternalLink, Heart, Home } from "lucide-react";

// Spring presets (see .claude/skills/ui-motion) — real stiffness/damping,
// not duration+easing, for anything responding to a live hover.
const springs = {
  snappy: { type: "spring", stiffness: 400, damping: 28, mass: 1 },
  default: { type: "spring", stiffness: 300, damping: 24, mass: 1 },
};

const brands = [
  {
    id: "matrimony",
    eyebrow: "MATCHMAKING PLATFORM",
    title: "EliteInnova",
    subtitle: "Matrimony",
    description:
      "A matchmaking platform built on trust — verified profiles and real human support behind every introduction, not just another swipe deck.",
    features: [
      "Verified, genuine profiles",
      "Personalized matchmaking support",
      "Privacy-first, secure platform",
    ],
    buttonText: "Visit Matrimony Site",
    externalUrl: "https://eliteinovamatrimony.in/",
    icon: <Heart className="text-rose-400" fill="currentColor" size={24} />,
    image: "/eliteinovamatrimony.png",
    gradient: "from-[#fdf2f2] via-[#fae8e8] to-[#f5d8d8]",
    textColor: "text-rose-950",
    descColor: "text-rose-900/90",
    borderColor: "border-rose-200/50",
    btnClass:
      "bg-gradient-to-r from-rose-500 to-rose-400 text-white shadow-[0_0_20px_rgba(244,63,94,0.3)] hover:shadow-[0_0_30px_rgba(244,63,94,0.5)]",
    checkColor: "text-rose-500",
    spotlight: "rgba(251,113,133,0.45)",
    restShadow: "0 20px 45px -20px rgba(190,18,60,0.35)",
    hoverShadow: "0 32px 70px -20px rgba(190,18,60,0.5)",
    delay: 0.1,
  },
  {
    id: "properties",
    eyebrow: "REAL ESTATE PLATFORM",
    title: "EliteInnova",
    subtitle: "Properties",
    description:
      "Premium homes and transparent transactions — from the first listing to the final paperwork, with support at every step.",
    features: [
      "Curated, verified listings",
      "End-to-end buying & rental support",
      "Transparent pricing, no hidden fees",
    ],
    buttonText: "Visit Properties Site",
    externalUrl: "https://eliteinovapropertieshub.in/",
    icon: <Home className="text-amber-500" />,
    image: "/eliteproperties.jpg",
    gradient: "from-[#f8f9fa] via-[#edf0f2] to-[#e2e6e9]",
    textColor: "text-slate-900",
    descColor: "text-slate-700/90",
    borderColor: "border-slate-200/50",
    btnClass:
      "bg-[#1e4b38] text-white shadow-[0_0_20px_rgba(30,75,56,0.3)] hover:bg-[#2a6b50] hover:shadow-[0_0_30px_rgba(30,75,56,0.5)]",
    checkColor: "text-[#1e4b38]",
    spotlight: "rgba(45,140,105,0.4)",
    restShadow: "0 20px 45px -20px rgba(15,40,30,0.4)",
    hoverShadow: "0 32px 70px -20px rgba(15,40,30,0.55)",
    delay: 0.2,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

function buildCardVariants(brand) {
  return {
    hidden: { opacity: 0, y: 40, boxShadow: brand.restShadow },
    visible: {
      opacity: 1,
      y: 0,
      boxShadow: brand.restShadow,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
    hover: {
      y: -8,
      scale: 1.015,
      boxShadow: brand.hoverShadow,
      transition: springs.default,
    },
  };
}

const iconPopVariants = {
  rest: { scale: 1, rotate: 0 },
  hover: { scale: 1.12, rotate: -8 },
};

const ctaVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.05 },
};

const arrowVariants = {
  rest: { x: 0 },
  hover: { x: 4 },
};

function BrandCard({ brand, reduced }) {
  const cardRef = useRef(null);

  // Cursor-tracked tilt + spotlight sheen — a real spring following the
  // pointer, not a CSS hover snap. Skipped entirely under reduced motion.
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const spotlightX = useMotionValue(50);
  const spotlightY = useMotionValue(50);
  const springRotateX = useSpring(rotateX, springs.default);
  const springRotateY = useSpring(rotateY, springs.default);
  const spotlightBackground = useMotionTemplate`radial-gradient(420px circle at ${spotlightX}% ${spotlightY}%, ${brand.spotlight}, transparent 70%)`;

  const handlePointerMove = (e) => {
    if (reduced || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    rotateY.set((px - 0.5) * 10);
    rotateX.set((0.5 - py) * 8);
    spotlightX.set(px * 100);
    spotlightY.set(py * 100);
  };

  const handlePointerLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      variants={buildCardVariants(brand)}
      whileHover={reduced ? undefined : "hover"}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={
        reduced
          ? undefined
          : { rotateX: springRotateX, rotateY: springRotateY, transformPerspective: 1200 }
      }
      className={`relative grid min-h-[460px] grid-cols-1 overflow-hidden rounded-2xl border ${brand.borderColor} bg-gradient-to-br ${brand.gradient} lg:grid-cols-2`}
    >
      {!reduced && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 hover:opacity-100"
          style={{ background: spotlightBackground }}
        />
      )}

      <motion.img
        src={brand.image}
        alt=""
        loading="lazy"
        decoding="async"
        initial={reduced ? false : { scale: 1.04 }}
        whileInView={reduced ? undefined : { scale: 1 }}
        whileHover={reduced ? undefined : { scale: 1.06 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, delay: brand.delay, ease: [0.22, 1, 0.36, 1] }}
        className="h-56 w-full object-cover object-center lg:col-start-2 lg:row-start-1 lg:h-full lg:min-h-[460px]"
      />

      <div className="relative z-10 flex flex-col justify-between p-6 sm:p-7 lg:col-start-1 lg:row-start-1 lg:p-8">
        <div>
          <p className={`mb-3 text-xs font-semibold tracking-[0.14em] ${brand.descColor}`}>
            {brand.eyebrow}
          </p>
          <div className="mb-5 flex items-center gap-4">
            <motion.div
              variants={iconPopVariants}
              transition={springs.snappy}
              className="grid h-12 w-12 place-items-center rounded-xl bg-white shadow-md"
            >
              {brand.icon}
            </motion.div>
            <div>
              <h3 className={`text-lg font-semibold leading-tight tracking-tight ${brand.textColor}`}>
                {brand.title}
              </h3>
              <p className={`text-sm font-medium ${brand.descColor}`}>{brand.subtitle}</p>
            </div>
          </div>

          <p className={`max-w-[320px] text-[15px] leading-relaxed ${brand.descColor}`}>
            {brand.description}
          </p>

          <ul className="mt-5 space-y-2.5">
            {brand.features.map((feature) => (
              <li key={feature} className={`flex items-start gap-2.5 text-sm ${brand.descColor}`}>
                <Check size={16} className={`mt-0.5 shrink-0 ${brand.checkColor}`} />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <motion.a
          href={brand.externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${brand.buttonText} (opens in a new tab)`}
          initial="rest"
          whileHover={reduced ? undefined : "hover"}
          whileTap={reduced ? undefined : { scale: 0.95, transition: springs.snappy }}
          variants={ctaVariants}
          transition={springs.snappy}
          className={`mt-8 inline-flex w-fit items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-[background-color,box-shadow] duration-200 ${brand.btnClass}`}
        >
          {brand.buttonText}
          <motion.span variants={arrowVariants} transition={springs.snappy} className="inline-flex">
            <ExternalLink size={16} />
          </motion.span>
        </motion.a>
      </div>
    </motion.div>
  );
}

// `includeHeading` adds a visually-hidden <h1> — pass it only when this
// component is the first thing on its own page; omit it when nested below a
// page that already has its own h1 (e.g. Home, under Hero's).
export default function BrandEcosystem({ includeHeading = false }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative z-10 mx-auto max-w-[1400px] px-6 pb-24 pt-14 sm:pt-20 lg:px-10">
      {includeHeading && <h1 className="sr-only">Our Brand Ecosystem</h1>}
      {/* Section Header */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="mb-8 flex flex-col items-center text-center sm:mb-12"
      >
        <div className="mb-3 flex items-center gap-3">
          <span className="h-[1px] w-8 bg-white/30"></span>
          <span className="text-sm font-medium tracking-tight text-brand-cyan sm:text-[15px]">
            Our Brand Ecosystem
          </span>
          <span className="h-[1px] w-8 bg-white/30"></span>
        </div>
        <h2 className="max-w-4xl text-3xl leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
          <span className="font-light">Two Powerful Brands. One </span>
          <span className="bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-violet bg-clip-text font-semibold text-transparent">
            EliteInnova.
          </span>
        </h2>
      </motion.div>

      {/* Cards Container */}
      <motion.div
        variants={containerVariants}
        initial={shouldReduceMotion ? false : "hidden"}
        whileInView={shouldReduceMotion ? undefined : "visible"}
        viewport={{ once: true, margin: "-50px" }}
        className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2"
        style={{ perspective: 1200 }}
      >
        {brands.map((brand) => (
          <BrandCard key={brand.id} brand={brand} reduced={!!shouldReduceMotion} />
        ))}
      </motion.div>
    </section>
  );
}
