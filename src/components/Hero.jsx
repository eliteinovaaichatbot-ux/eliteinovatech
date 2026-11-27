import { lazy, Suspense, useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { MotionLink } from "./MotionLink";

// Three.js/R3F adds well over 1MB to the bundle — split it into its own
// chunk so it loads in the background instead of delaying first paint.
const Globe3D = lazy(() => import("./Globe3D"));

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// What we build, cycling through the hero headline — add more here and the
// rotation (and the reserved space below it) picks them up automatically.
const HEADLINE_PHRASES = [
  "WEB APPLICATION & MOBILE APP DESIGN",
  "E-COMMERCE WEB & APP DEVELOPMENT",
  "MOBILE APP DESIGN & DEVELOPMENT",
  "SEO & DIGITAL GROWTH SERVICES",
  "CUSTOM WEB APPLICATION DEVELOPMENT",
];
const HEADLINE_INTERVAL_MS = 3200;

function RotatingHeadline({ phrases, reduced }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduced || phrases.length < 2) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % phrases.length);
    }, HEADLINE_INTERVAL_MS);
    return () => clearInterval(id);
  }, [reduced, phrases.length]);

  return (
    // Fixed reserved height (in em, so it scales with the clamp()'d font
    // size) — phrases of different lengths swap without ever shifting the
    // CTA buttons below.
    <span className="relative block" style={{ minHeight: "2.25em" }}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={index}
          initial={reduced ? false : { y: 28, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={reduced ? undefined : { y: -28, opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-violet bg-clip-text font-semibold text-transparent"
        >
          {phrases[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative lg:flex lg:min-h-[calc(100vh-6rem)] lg:items-center">
      {/* Background: glow + 3D globe */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Animated Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_40%,rgba(59,130,246,0.35),transparent_55%),radial-gradient(ellipse_at_10%_90%,rgba(168,85,247,0.18),transparent_50%)] animate-pulse-glow" />

        {/* Globe is 3D/WebGL — only render it where there's room to appreciate it
            and the GPU cost is worth paying; mobile keeps the gradient glow alone. */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="absolute right-[2%] top-1/2 hidden h-[26rem] w-[26rem] -translate-y-1/2 sm:right-[1%] sm:block lg:right-[1%] lg:h-[32rem] lg:w-[32rem]"
          style={{
            maskImage: "radial-gradient(circle at 42% 50%, black 55%, transparent 78%)",
            WebkitMaskImage: "radial-gradient(circle at 42% 50%, black 55%, transparent 78%)",
          }}
        >
          <Suspense fallback={<div className="h-full w-full rounded-full bg-[radial-gradient(circle_at_42%_42%,rgba(59,130,246,0.25),transparent_65%)]" />}>
            <Globe3D reducedMotion={!!shouldReduceMotion} className="h-full w-full" />
          </Suspense>
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pb-16 pt-10 lg:px-10 lg:pb-4 lg:pt-4">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-[700px]"
        >
          <motion.h1
            variants={itemVariants}
            className="text-[clamp(2rem,5vw,3.75rem)] leading-[1.05] tracking-tight"
          >
            <span className="block font-light">BUILD CUSTOMIZED</span>
            <RotatingHeadline phrases={HEADLINE_PHRASES} reduced={!!shouldReduceMotion} />
          </motion.h1>

          <motion.p variants={itemVariants} className="mt-8 max-w-[540px] border-l-2 border-brand-violet/70 pl-4 text-[15px] leading-relaxed text-white/80">
            We specialise in custom software and create responsive,
            user-friendly, performance-driven web and mobile experiences
            tailored to your brand and business goals, for startups and
            established companies alike.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-8 flex flex-wrap items-center gap-4">
            <MotionLink
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              to="/brands"
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-cyan to-brand-blue px-7 py-3.5 text-sm font-medium shadow-[0_0_28px_rgba(62,200,255,0.45)] transition hover:brightness-110"
            >
              Explore Our Ecosystem <ArrowRight size={16} />
            </MotionLink>
            <MotionLink
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
              whileTap={{ scale: 0.95 }}
              to="/brands"
              className="flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm backdrop-blur-md transition"
            >
              Discover Our Brands
              <span className="grid h-6 w-6 place-items-center rounded-full bg-white/20">
                <Play size={11} fill="currentColor" />
              </span>
            </MotionLink>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}