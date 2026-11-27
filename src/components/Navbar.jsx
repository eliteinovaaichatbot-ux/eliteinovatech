import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import Logo from "./Logo";
import { MotionLink, MotionNavLink } from "./MotionLink";

const springs = {
  snappy: { type: "spring", stiffness: 400, damping: 28, mass: 1 },
  pill: { type: "spring", stiffness: 380, damping: 32, mass: 1 },
};

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Our Brands", to: "/brands", dropdown: true },
  { label: "Services", to: "/services" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];

const navLinkClass = ({ isActive }) =>
  `relative flex items-center gap-1 rounded-full px-5 py-2 text-sm transition-colors ${
    isActive ? "text-white" : "text-white/80 hover:text-white"
  }`;

const menuPanelVariants = {
  hidden: { opacity: 0, y: -16, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
  exit: { opacity: 0, y: -12, scale: 0.97, transition: { duration: 0.2, ease: [0.4, 0, 1, 1] } },
};

const menuItemVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
};

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-30 border-b border-white/10 bg-navy-950/70 backdrop-blur-md"
    >
      <div className="relative mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 lg:px-10">
      <MotionLink to="/" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} transition={springs.snappy}>
        <Logo />
      </MotionLink>

      {/* Desktop glass pill — the active link's highlight is one shared
          element (layoutId) that glides to wherever the route changes to,
          instead of popping between positions. */}
      <nav className="hidden items-center gap-1 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-md lg:flex">
        {links.map((l) => (
          <MotionNavLink
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={springs.snappy}
            key={l.label}
            to={l.to}
            end={l.to === "/"}
            className={navLinkClass}
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <motion.span
                    layoutId="nav-active-pill"
                    transition={springs.pill}
                    className="absolute inset-0 rounded-full border border-brand-cyan/60 bg-brand-cyan/10 shadow-[0_0_18px_rgba(62,200,255,0.35)]"
                  />
                )}
                <span className="relative z-10 flex items-center gap-1">
                  {l.label}
                  {l.dropdown && <ChevronDown size={14} />}
                </span>
              </>
            )}
          </MotionNavLink>
        ))}
      </nav>

      <MotionLink
        whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(99,102,241,0.7)" }}
        whileTap={{ scale: 0.95 }}
        transition={springs.snappy}
        to="/contact"
        className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-violet px-6 py-3 text-sm font-medium shadow-[0_0_25px_rgba(99,102,241,0.5)] transition lg:flex"
      >
        Connect With Us <ArrowRight size={16} />
      </MotionLink>

      {/* Mobile toggle */}
      <button
        className="rounded-lg p-2 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cyan lg:hidden"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
      >
        {open ? <X /> : <Menu />}
      </button>

      {/* Animated Mobile Menu — panel and items stagger in together rather
          than popping in as one flat block. */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuPanelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            id="mobile-menu"
            className="absolute left-4 right-4 top-full flex flex-col gap-1 rounded-2xl border border-white/10 bg-navy-900/95 p-4 backdrop-blur-lg lg:hidden"
          >
            {links.map((l) => (
              <MotionNavLink
                variants={menuItemVariants}
                whileHover={{ x: 8, backgroundColor: "rgba(255,255,255,0.1)" }}
                transition={springs.snappy}
                key={l.label}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-3 ${isActive ? "text-brand-cyan" : ""}`
                }
              >
                {l.label}
              </MotionNavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </motion.header>
  );
}
