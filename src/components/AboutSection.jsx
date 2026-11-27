import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { MotionLink } from "./MotionLink";
import image2 from "../assets/About-us.webp";

// `includeHeading` adds a visually-hidden <h1> — pass it only when this
// component is the first thing on its own page; omit it when nested below a
// page that already has its own h1 (e.g. Home, under Hero's).
export default function AboutSection({ includeHeading = false }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="mx-auto max-w-[1400px] px-6 pb-16 lg:px-10">
      {includeHeading && <h1 className="sr-only">About Eliteinova</h1>}
      <section
        id="about"
        className="grid items-center gap-8 border-t border-white/10 py-8 sm:py-10 lg:grid-cols-2 lg:gap-12 lg:py-6"
      >
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, x: -32 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="group relative min-w-0 overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
        >
          <motion.img
            src={image2}
            alt="Contemporary property in a landscaped setting"
            initial={shouldReduceMotion ? false : { scale: 1.08 }}
            whileInView={shouldReduceMotion ? undefined : { scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-video max-h-[320px] w-full object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-105 motion-reduce:transition-none"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/25 via-transparent to-transparent"
          />
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, x: 32 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.75,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="lg:order-2"
        >
          <p className="mb-4 text-sm font-medium tracking-wide text-brand-cyan">
            ABOUT ELITEINOVA
          </p>
          <h2 className="text-3xl leading-tight tracking-tight sm:text-4xl">
            <span className="font-light">About </span>
            <span className="bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-violet bg-clip-text font-semibold text-transparent">
              Eliteinova
            </span>
          </h2>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/75">
            At Eliteinova Tech Pvt Ltd, we turn innovative ideas into powerful
            software solutions that help businesses thrive in the digital age.
            Our goal is to empower organizations with technology that solves
            real-world problems, streamlines operations, and creates lasting
            value.
          </p>
          <MotionLink
            to="/about"
            whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium backdrop-blur-md transition hover:bg-white/10"
          >
            About Us <ArrowRight size={16} />
          </MotionLink>
        </motion.div>
      </section>
    </div>
  );
}
