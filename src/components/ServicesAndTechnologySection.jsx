import { motion, useReducedMotion } from "framer-motion";
import uiDesignImage from "../assets/UIUX-Redesign.jpg";
import websiteImage from "../assets/Speed-Optimization.jpg";
import mobileImage from "../assets/Mobile-Responsiveness.jpg";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "UI/UX Redesign",
    description:
      "Modernize your site layout, improve the user experience, and create clearer paths to conversion.",
    image: uiDesignImage,
    imageAlt: "Web application design visual for UI and UX work",
  },
  {
    title: "Speed Optimization",
    description:
      "Improve performance with optimized code, images, and loading strategies.",
    image: websiteImage,
    imageAlt: "Website development visual for performance optimization",
  },
  {
    title: "Mobile Responsiveness",
    description:
      "Create layouts that adapt smoothly to phones, tablets, and desktop screens.",
    image: mobileImage,
    imageAlt: "Mobile shopping experience displayed on a smartphone",
  },
];

const technologies = [
  { name: "Node.js", slug: "nodedotjs", color: "339933" },
  { name: "WordPress", slug: "wordpress", color: "21759B" },
  { name: "React", slug: "react", color: "61DAFB" },
  { name: "Shopify", slug: "shopify", color: "7AB55C" },
  { name: "Python", slug: "python", color: "3776AB" },
  { name: "PHP", slug: "php", color: "777BB4" },
  { name: "MySQL", slug: "mysql", color: "4479A1" },
  { name: "Java", slug: "openjdk", color: "ED8B00" },
  { name: "JavaScript", slug: "javascript", color: "F7DF1E" },
  { name: "Angular", slug: "angular", color: "DD0031" },
  { name: "Azure", image: "/azure-icon.svg" },
  { name: "Firebase", slug: "firebase", color: "FFCA28" },
  { name: "Figma", slug: "figma", color: "F24E1E" },
  { name: "Git", slug: "git", color: "F05032" },
  { name: "Google Cloud", slug: "googlecloud", color: "4285F4" },
];

export default function ServicesAndTechnologySection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto max-w-[1400px] overflow-hidden px-6 pb-24 lg:px-10">
      <section
        id="our-services"
        className="border-t border-white/10 py-12 lg:py-16"
      >
        <header className="mb-8 text-center sm:mb-10">
          <p className="mb-3 text-sm font-medium tracking-wide text-brand-cyan">
            THOUGHTFUL DIGITAL EXPERIENCES
          </p>
          <h2 className="text-3xl leading-tight tracking-tight sm:text-4xl">
            <span className="font-light">Our </span>
            <span className="bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-violet bg-clip-text font-semibold text-transparent">
              Services
            </span>
          </h2>
        </header>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            return (
              <motion.article
                key={service.title}
                initial={
                  shouldReduceMotion
                    ? false
                    : { opacity: 0, x: index === 1 ? 0 : index === 0 ? -28 : 28 }
                }
                whileInView={
                  shouldReduceMotion ? undefined : { opacity: 1, x: 0 }
                }
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={
                  shouldReduceMotion ? undefined : { y: -5 }
                }
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] shadow-[0_14px_36px_rgba(0,0,0,0.2)] transition-colors duration-300 hover:border-brand-cyan/35 hover:bg-white/[0.06]"
              >
                <div className="relative isolate aspect-[16/9] overflow-hidden bg-navy-900">
                  <motion.img
                    src={service.image}
                    alt={service.imageAlt}
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
                    viewport={{ once: true, amount: 0.25 }}
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
                  <h3 className="text-lg font-semibold tracking-tight text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    {service.description}
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
        id="technologies"
        className="border-t border-white/10 py-12 lg:py-16"
      >
        <header className="mb-8 text-center sm:mb-10">
          <p className="mb-3 text-sm font-medium tracking-wide text-brand-cyan">
            TOOLS BEHIND THE WORK
          </p>
          <h2 className="text-3xl leading-tight tracking-tight sm:text-4xl">
            <span className="font-light">Technologies </span>
            <span className="bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-violet bg-clip-text font-semibold text-transparent">
              We Work With
            </span>
          </h2>
        </header>

        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-3 sm:gap-4">
          {technologies.map((technology, index) => (
            <motion.div
              key={technology.slug}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16, scale: 0.9 }}
              whileInView={
                shouldReduceMotion
                  ? undefined
                  : { opacity: 1, y: 0, scale: 1 }
              }
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.45,
                delay: index * 0.035,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={shouldReduceMotion ? undefined : { y: -4, scale: 1.06 }}
              className="group flex min-h-24 w-20 shrink-0 flex-col items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.025] px-2 py-3 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.06] sm:w-24 lg:w-28"
              title={technology.name}
            >
              <img
                src={
                  technology.image ||
                  `https://cdn.simpleicons.org/${technology.slug}/${technology.color}`
                }
                alt={technology.name}
                loading="lazy"
                decoding="async"
                className="h-8 w-8 object-contain transition-transform duration-300 group-hover:scale-110"
              />
              <span className="text-center text-[11px] leading-tight text-white/65">
                {technology.name}
              </span>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
