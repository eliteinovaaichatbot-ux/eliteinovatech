import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Clock3, Mail, MapPin, Phone } from "lucide-react";
import PageHeader from "../components/PageHeader";
import { CONTACT_INFO } from "../content/siteInfo";

export default function ContactPage() {
  const shouldReduceMotion = useReducedMotion();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  // This form only updates local state for now — there's no backend or
  // email service wired up. Point it at a real endpoint (an API route,
  // Formspree, Resend, etc.) before relying on it to reach anyone.
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-6 lg:pt-10">
      <PageHeader
        eyebrow="GET IN TOUCH"
        title="Let's build something"
        highlight="great together."
        description="Tell us about your project and we'll get back to you within one business day."
      />

      <div className="mx-auto grid max-w-[1400px] gap-10 px-6 pb-24 pt-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14 lg:px-10">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-xl font-semibold tracking-tight text-white">Contact details</h2>
          <div className="mt-3 h-px w-full bg-gradient-to-r from-brand-cyan/70 to-transparent" />
          <ul className="mt-6 space-y-5 text-[15px] leading-relaxed text-white/75">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-brand-cyan" />
              <span>{CONTACT_INFO.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="shrink-0 text-brand-cyan" />
              <a href={CONTACT_INFO.phoneHref} className="transition-colors hover:text-brand-cyan">
                {CONTACT_INFO.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="shrink-0 text-brand-cyan" />
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="break-all transition-colors hover:text-brand-cyan"
              >
                {CONTACT_INFO.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Clock3 size={18} className="shrink-0 text-brand-cyan" />
              <span>{CONTACT_INFO.hours}</span>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 shadow-2xl sm:p-8"
        >
          {submitted ? (
            <div className="flex flex-col items-start gap-3 py-6">
              <h2 className="text-xl font-semibold tracking-tight text-white">
                Thanks — message received.
              </h2>
              <p className="text-[15px] leading-relaxed text-white/70">
                We&apos;ll get back to you at {form.email || "the email you provided"} shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-white/80">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-brand-cyan/60 focus:bg-white/[0.07]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-white/80">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-brand-cyan/60 focus:bg-white/[0.07]"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-white/80">
                  Project details
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full resize-none rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-brand-cyan/60 focus:bg-white/[0.07]"
                  placeholder="Tell us a bit about what you're building."
                />
              </div>
              <motion.button
                type="submit"
                whileHover={shouldReduceMotion ? undefined : { scale: 1.03 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 28 }}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-violet px-6 py-3 text-sm font-medium shadow-[0_0_25px_rgba(99,102,241,0.35)] transition hover:brightness-110"
              >
                Send Message <ArrowRight size={16} />
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}
