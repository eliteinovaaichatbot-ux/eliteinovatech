import { motion, useReducedMotion } from "framer-motion";
import {
  Code2,
  Gauge,
  LockKeyhole,
  Monitor,
  Search,
  Smartphone,
} from "lucide-react";

const features = [
  {
    title: "Dynamic CMS Website",
    description:
      "Flexible, content-managed websites with polished designs and simple updates.",
    icon: Monitor,
  },
  {
    title: "Static Website",
    description:
      "Lightweight, secure pages built for fast delivery and dependable performance.",
    icon: Code2,
  },
  {
    title: "Mobile Responsive",
    description:
      "Consistent, easy-to-use experiences across phones, tablets, and desktops.",
    icon: Smartphone,
  },
  {
    title: "SSL Certificate",
    description:
      "HTTPS encryption protects connections and helps build visitor trust.",
    icon: LockKeyhole,
  },
  {
    title: "SEO Friendly",
    description:
      "Search-ready structure helps customers discover your business online.",
    icon: Search,
  },
  {
    title: "Fast Loading Website",
    description:
      "Optimized assets and efficient code create a faster, smoother experience.",
    icon: Gauge,
  },
];

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function FeaturesSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="features"
      className="relative mx-auto max-w-[1400px] overflow-hidden px-6 pb-24 pt-12 lg:px-10 lg:pt-16"
    >
      <div className="pointer-events-none absolute inset-x-1/4 top-12 h-48 rounded-full bg-brand-blue/10 blur-3xl" />

      <motion.div
        initial={shouldReduceMotion ? false : "hidden"}
        whileInView={shouldReduceMotion ? undefined : "visible"}
        viewport={{ once: true, amount: 0.25 }}
        variants={gridVariants}
        className="relative"
      >
        <motion.header variants={cardVariants} className="mb-8 text-center sm:mb-10">
          <p className="mb-3 text-sm font-medium tracking-wide text-brand-cyan">
            DESIGNED FOR YOUR NEXT BIG IDEA
          </p>
          <h2 className="text-3xl leading-tight tracking-tight sm:text-4xl">
            <span className="font-light">Web Design &amp; </span>
            <span className="bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-violet bg-clip-text font-semibold text-transparent">
              Mobile App Features
            </span>
          </h2>
        </motion.header>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <motion.article
                key={feature.title}
                variants={cardVariants}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.025] p-6 shadow-[0_12px_35px_rgba(0,0,0,0.18)] backdrop-blur-sm transition-colors duration-300 hover:border-brand-cyan/35 sm:p-7"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-cyan/0 via-transparent to-brand-violet/0 opacity-0 transition-opacity duration-500 group-hover:from-brand-cyan/[0.08] group-hover:to-brand-violet/[0.1] group-hover:opacity-100" />

                <div className="relative z-10 flex items-start gap-4">
                  <span
                    aria-hidden="true"
                    className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-brand-cyan/20 bg-brand-cyan/10 text-brand-cyan shadow-[0_0_22px_rgba(62,200,255,0.08)]"
                  >
                    <span
                      className={`grid place-items-center ${
                        shouldReduceMotion
                          ? ""
                          : "transition-transform duration-700 ease-in-out group-hover:rotate-[360deg]"
                      }`}
                    >
                      <Icon size={22} strokeWidth={1.8} />
                    </span>
                  </span>
                  <div>
                    <h3 className="pt-1 text-lg font-semibold tracking-tight text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </motion.div>

      <div className="pointer-events-none absolute -bottom-24 -right-20 h-56 w-56 rounded-full bg-brand-violet/10 blur-3xl" />
    </section>
  );
}
