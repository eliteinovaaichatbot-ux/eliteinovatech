import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Clock3, Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";
import { CONTACT_INFO } from "../content/siteInfo";

const currentYear = new Date().getFullYear();

// These all live on the Services page now — the hash scrolls to the
// matching in-page section once that page has loaded (see Layout's
// ScrollManager).
const products = [
  { label: "Corporate E-Commerce Website", to: "/services#product-categories" },
  { label: "Commercial Mobile App Design & Development", to: "/services#mobile-app-features" },
  { label: "Membership Mobile App Design & Development", to: "/services#mobile-app-features" },
  { label: "Real Estate Mobile App Development", to: "/services#product-categories" },
  { label: "Food & Restaurant E-Commerce Apps", to: "/services#product-categories" },
];

const quickLinks = [
  { label: "Website Design & Development", to: "/services#web-development" },
  { label: "E-Commerce Web Development", to: "/services#product-categories" },
  { label: "Mobile App Design & Development", to: "/services#mobile-app-features" },
  { label: "E-Commerce App Development", to: "/services#mobile-app-features" },
  { label: "Web Application Development", to: "/services#web-development" },
];

export default function FooterSection() {
  const shouldReduceMotion = useReducedMotion();
  const columnMotion = (index) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.3 },
          transition: { duration: 0.5, delay: index * 0.08 },
        };

  return (
    <footer className="relative border-t border-white/10">
      <div className="mx-auto max-w-[1400px] px-6 pb-8 pt-12 lg:px-10 lg:pt-16">
        <motion.section
          initial={
            shouldReduceMotion ? false : { opacity: 0, y: 28, scale: 0.985 }
          }
          whileInView={
            shouldReduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }
          }
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative isolate overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#0d2451] via-[#0a1738] to-[#111338] px-6 py-12 text-center shadow-[0_24px_70px_rgba(0,0,0,0.28)] sm:px-10 sm:py-16 lg:px-16 lg:py-20"
        >
          <div className="pointer-events-none absolute left-0 top-0 z-0 h-72 w-72 rounded-full bg-brand-cyan/20 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 right-0 z-0 h-80 w-80 rounded-full bg-brand-violet/20 blur-3xl" />

          <motion.div
            className="relative z-10"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={
              shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
            }
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
          >
            <p className="text-sm font-medium tracking-wide text-brand-cyan">
              TRUSTED BY BUSINESSES BUILDING FOR WHAT&apos;S NEXT
            </p>
            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Web &amp; Mobile App Design
              <span className="block bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-violet bg-clip-text text-transparent">
                &amp; Development
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-white/75">
              Thoughtful design and reliable software, shaped around your
              business goals and the people you serve.
            </p>
            <Link
              to="/services"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-violet px-6 py-3 text-sm font-medium shadow-[0_0_26px_rgba(99,102,241,0.4)] transition hover:brightness-110"
            >
              Explore Our Services
              <ArrowRight
                size={16}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </motion.section>

        <div className="grid gap-10 border-t border-white/10 py-10 sm:grid-cols-2 lg:gap-8 xl:grid-cols-[1.15fr_1.2fr_1fr_1.1fr]">
          <motion.div {...columnMotion(0)}>
            <Link to="/" aria-label="Eliteinova Tech Pvt Ltd home">
              <Logo />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
              We turn innovative ideas into software that solves real-world
              problems, streamlines operations, and creates lasting value.
            </p>
          </motion.div>

          <motion.div {...columnMotion(1)}>
            <h2 className="text-sm font-semibold tracking-wide text-white">
              OUR PRODUCTS
            </h2>
            <div className="mt-3 h-px w-full bg-gradient-to-r from-brand-cyan/70 to-transparent" />
            <ul className="mt-4 space-y-3">
              {products.map((product) => (
                <li key={product.label}>
                  <Link
                    to={product.to}
                    className="text-sm leading-relaxed text-white/65 transition-colors hover:text-brand-cyan"
                  >
                    {product.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.nav aria-label="Quick links" {...columnMotion(2)}>
            <h2 className="text-sm font-semibold tracking-wide text-white">
              QUICK LINKS
            </h2>
            <div className="mt-3 h-px w-full bg-gradient-to-r from-brand-cyan/70 to-transparent" />
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm leading-relaxed text-white/65 transition-colors hover:text-brand-cyan"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>

          <motion.div {...columnMotion(3)}>
            <h2 className="text-sm font-semibold tracking-wide text-white">
              CONTACT INFO
            </h2>
            <div className="mt-3 h-px w-full bg-gradient-to-r from-brand-cyan/70 to-transparent" />
            <ul className="mt-4 space-y-4 text-sm leading-relaxed text-white/65">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-brand-cyan" />
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-brand-cyan" />
                <a href={CONTACT_INFO.phoneHref} className="transition-colors hover:text-brand-cyan">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="shrink-0 text-brand-cyan" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="break-all transition-colors hover:text-brand-cyan"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock3 size={16} className="shrink-0 text-brand-cyan" />
                <span>{CONTACT_INFO.hours}</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-white/10 py-5 text-center text-xs leading-relaxed text-white/45">
          &copy; {currentYear} Eliteinova Tech Pvt Ltd. All rights reserved.
          <span className="hidden sm:inline"> · </span>
          <span className="block sm:inline">{CONTACT_INFO.address}</span>
          <span className="hidden sm:inline"> · </span>
          <a
            href={CONTACT_INFO.phoneHref}
            className="block transition-colors hover:text-brand-cyan sm:inline"
          >
            {CONTACT_INFO.phone}
          </a>
        </div>
      </div>
    </footer>
  );
}
