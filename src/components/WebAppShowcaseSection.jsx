import { motion, useReducedMotion } from "framer-motion";
import businessWebsiteImage from "../assets/Business-Website.webp";
import ecommerceWebImage from "../assets/E-commerce-Web-Pages.webp";
import portfolioWebsiteImage from "../assets/Portfolio-Website.webp";
import {
  GraduationCap,
  ArrowRight,
  ShoppingCart,
  UsersRound,
} from "lucide-react";

const webExamples = [
  {
    title: "Business Website",
    description:
      "Company profiles, service pages, contact forms, and essential information in one polished site.",
    image: businessWebsiteImage,
    imageAlt: "Business website design and development",
  },
  {
    title: "E-commerce Web Pages",
    description:
      "Online stores with product catalogs, smooth carts, and secure checkout experiences.",
    image: ecommerceWebImage,
    imageAlt: "E-commerce website pages and online store interface",
  },
  {
    title: "Portfolio Website",
    description:
      "Showcase projects, photography, and professional work in a polished portfolio.",
    image: portfolioWebsiteImage,
    imageAlt: "Portfolio website showcasing creative work",
  },
];

const mobileExamples = [
  {
    title: "E-commerce App",
    description:
      "Product catalogs, checkout, payment options, and order tracking for mobile shoppers.",
    icon: ShoppingCart,
    iconColor: "text-cyan-200",
  },
  {
    title: "Social Networking App",
    description:
      "Profiles, messaging, notifications, and media sharing for connected communities.",
    icon: UsersRound,
    iconColor: "text-violet-200",
  },
  {
    title: "Educational App",
    description:
      "Courses, video lessons, quizzes, certificates, and learner progress tracking.",
    icon: GraduationCap,
    iconColor: "text-brand-cyan",
  },
];

const webCardVariants = {
  hidden: { opacity: 0, x: -28, rotateY: -7 },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function WebAppShowcaseSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto max-w-[1400px] space-y-16 overflow-hidden px-6 pb-24 lg:space-y-20 lg:px-10">
      <section id="web-development" className="border-t border-white/10 pt-12 lg:pt-16">
        <header className="mb-8 text-center sm:mb-10">
          <p className="mb-3 text-sm font-medium tracking-wide text-brand-cyan">
            BUILT AROUND YOUR BUSINESS
          </p>
          <h2 className="text-3xl leading-tight tracking-tight sm:text-4xl">
            <span className="font-light">Web Application </span>
            <span className="bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-violet bg-clip-text font-semibold text-transparent">
              Development
            </span>
          </h2>
        </header>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {webExamples.map((example, index) => {
            return (
              <motion.article
                key={example.title}
                initial={shouldReduceMotion ? false : "hidden"}
                whileInView={shouldReduceMotion ? undefined : "visible"}
                viewport={{ once: true, amount: 0.2 }}
                variants={webCardVariants}
                transition={{ delay: index * 0.12 }}
                whileHover={
                  shouldReduceMotion ? undefined : { y: -5, transition: { duration: 0.25 } }
                }
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] shadow-[0_14px_36px_rgba(0,0,0,0.2)] transition-colors duration-300 hover:border-brand-cyan/35 hover:bg-white/[0.06]"
              >
                <div className="relative isolate aspect-[16/9] overflow-hidden bg-navy-900">
                  <motion.img
                    src={example.image}
                    alt={example.imageAlt}
                    loading="lazy"
                    decoding="async"
                    initial={
                      shouldReduceMotion
                        ? false
                        : { opacity: 0.75, scale: 1.06 }
                    }
                    whileInView={
                      shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }
                    }
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-105 motion-reduce:transition-none"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/35 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-35 motion-reduce:transition-none"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-3 rounded-xl border border-white/10"
                  />
                </div>

                <div className="p-5 sm:p-6">
                  <h3 className="text-lg font-semibold leading-snug tracking-tight text-white">
                    {example.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    {example.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-6 flex justify-end">
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/90 transition hover:border-brand-cyan/40 hover:bg-brand-cyan/10"
          >
            Read More <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
      </section>

      <section
        id="mobile-app-features"
        className="border-t border-white/10 pt-12 lg:pt-16"
      >
        <header className="mb-8 text-center sm:mb-10">
          <p className="mb-3 text-sm font-medium tracking-wide text-brand-cyan">
            MADE FOR EVERYDAY USE
          </p>
          <h2 className="text-3xl leading-tight tracking-tight sm:text-4xl">
            <span className="font-light">Explore </span>
            <span className="bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-violet bg-clip-text font-semibold text-transparent">
              Mobile App Features
            </span>
          </h2>
        </header>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {mobileExamples.map((example, index) => {
            const Icon = example.icon;

            return (
              <motion.article
                key={example.title}
                initial={
                  shouldReduceMotion
                    ? false
                    : { opacity: 0, scale: 0.92, rotateX: 8 }
                }
                whileInView={
                  shouldReduceMotion
                    ? undefined
                    : { opacity: 1, scale: 1, rotateX: 0 }
                }
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 18,
                  delay: index * 0.1,
                }}
                whileHover={
                  shouldReduceMotion ? undefined : { y: -5, transition: { duration: 0.25 } }
                }
                className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.025] p-6 text-center shadow-[0_14px_36px_rgba(0,0,0,0.18)] transition-colors duration-300 hover:border-brand-violet/35 sm:p-8"
              >
                <motion.div
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : { rotate: 12, scale: 1.1 }
                  }
                  transition={{ type: "spring", stiffness: 220, damping: 14 }}
                  className={`mx-auto grid h-14 w-14 place-items-center rounded-full border border-white/15 bg-white/[0.06] ${example.iconColor}`}
                >
                  <Icon aria-hidden="true" size={26} strokeWidth={1.7} />
                </motion.div>
                <h3 className="mt-4 text-lg font-semibold tracking-tight text-white">
                  {example.title}
                </h3>
                <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-white/70">
                  {example.description}
                </p>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-6 flex justify-end">
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/90 transition hover:border-brand-cyan/40 hover:bg-brand-cyan/10"
          >
            Read More <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
      </section>
    </div>
  );
}
