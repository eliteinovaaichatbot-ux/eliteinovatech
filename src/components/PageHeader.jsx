import { motion, useReducedMotion } from "framer-motion";

// Top-of-page header for standalone routes that don't already have their
// own section header to reuse (Careers, Contact). Renders a real <h1> —
// animates in on load (`animate`, not `whileInView`) since it's always
// above the fold when its page mounts.
export default function PageHeader({ eyebrow, title, highlight, description }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto max-w-[1400px] px-6 pb-4 pt-16 text-center lg:px-10 lg:pt-20"
    >
      <p className="mb-3 text-sm font-medium tracking-wide text-brand-cyan">{eyebrow}</p>
      <h1 className="mx-auto max-w-3xl text-4xl leading-tight tracking-tight sm:text-5xl">
        <span className="font-light">{title} </span>
        {highlight && (
          <span className="bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-violet bg-clip-text font-semibold text-transparent">
            {highlight}
          </span>
        )}
      </h1>
      {description && (
        <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-white/70">
          {description}
        </p>
      )}
    </motion.div>
  );
}
