import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { MotionLink } from "../components/MotionLink";

export default function NotFoundPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto flex max-w-[1400px] flex-col items-center px-6 py-32 text-center lg:px-10"
    >
      <p className="text-sm font-medium tracking-wide text-brand-cyan">404</p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        This page doesn&apos;t exist.
      </h1>
      <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/70">
        The page you&apos;re looking for may have moved or never existed.
      </p>
      <MotionLink
        to="/"
        whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
        whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-cyan to-brand-blue px-7 py-3.5 text-sm font-medium shadow-[0_0_28px_rgba(62,200,255,0.45)] transition hover:brightness-110"
      >
        Back to Home <ArrowRight size={16} />
      </MotionLink>
    </motion.div>
  );
}
