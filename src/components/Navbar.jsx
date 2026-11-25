import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import Logo from "./Logo";

const links = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Our Brands", href: "#brands", dropdown: true },
  { label: "Services", href: "#services" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [open, setOpen] = useState(false);

  return (
    <motion.header 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative z-30 mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 lg:px-10"
    >
      <a href="#"><Logo /></a>

      {/* Desktop glass pill */}
      <nav className="hidden items-center gap-1 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-md lg:flex">
        {links.map((l) => (
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            key={l.label}
            href={l.href}
            onClick={() => setActive(l.label)}
            className={`flex items-center gap-1 rounded-full px-5 py-2 text-sm transition ${
              active === l.label
                ? "border border-brand-cyan/60 bg-brand-cyan/10 text-white shadow-[0_0_18px_rgba(62,200,255,0.35)]"
                : "text-white/80 hover:text-white"
            }`}
          >
            {l.label}
            {l.dropdown && <ChevronDown size={14} />}
          </motion.a>
        ))}
      </nav>

      <motion.a
        whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(99,102,241,0.7)" }}
        whileTap={{ scale: 0.95 }}
        href="#contact"
        className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-violet px-6 py-3 text-sm font-medium shadow-[0_0_25px_rgba(99,102,241,0.5)] transition lg:flex"
      >
        Connect With Us <ArrowRight size={16} />
      </motion.a>

      {/* Mobile toggle */}
      <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
        {open ? <X /> : <Menu />}
      </button>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute left-4 right-4 top-full flex flex-col gap-1 rounded-2xl border border-white/10 bg-navy-900/95 p-4 backdrop-blur-lg lg:hidden"
          >
            {links.map((l) => (
              <motion.a 
                whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.1)" }}
                key={l.label} 
                href={l.href} 
                className="rounded-lg px-4 py-3"
              >
                {l.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}