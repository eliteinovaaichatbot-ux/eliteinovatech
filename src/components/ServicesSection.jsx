import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import image1 from "../assets/WE-HAVE-BUILD.webp";
import image2 from "../assets/About-us.webp";

export default function ServicesSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="mx-auto max-w-[1400px] px-6 pb-16 lg:px-10">
      <section
        id="services"
        className="grid items-center gap-8 py-8 sm:py-10 lg:grid-cols-2 lg:gap-12 lg:py-6"
      >
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, x: -32 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-4 text-sm font-medium tracking-wide text-brand-cyan">
            CUSTOM SOFTWARE DEVELOPMENT
          </p>
          <h2 className="text-3xl leading-tight tracking-tight sm:text-4xl">
            <span className="font-light">Build customized </span>
            <span className="bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-violet bg-clip-text font-semibold text-transparent">
              web and mobile apps
            </span>
            <span className="font-light"> for your business.</span>
          </h2>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/75">
            We turn your ideas into digital products with thoughtful UI/UX,
            scalable development, and seamless functionality. From enterprise
            solutions to SEO and ongoing maintenance, we help transform ideas
            into impactful products.
          </p>
          <motion.a
            href="#contact"
            whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-violet px-6 py-3 text-sm font-medium shadow-[0_0_25px_rgba(99,102,241,0.35)] transition hover:brightness-110"
          >
            Book a Free Consultation <ArrowRight size={16} />
          </motion.a>
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
          className="group relative min-w-0 overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
        >
          <motion.img
            src={image1}
            alt="Modern city skyline representing digital business growth"
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
      </section>

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
          <motion.a
            href="#about"
            whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium backdrop-blur-md transition hover:bg-white/10"
          >
            About Us <ArrowRight size={16} />
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}