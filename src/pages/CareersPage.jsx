import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Heart, Sparkles, Users } from "lucide-react";
import PageHeader from "../components/PageHeader";
import { MotionLink } from "../components/MotionLink";

const values = [
  {
    title: "Real ownership",
    description: "You'll work directly on client products, not busywork — your decisions ship.",
    icon: Sparkles,
  },
  {
    title: "A small, close team",
    description: "No layers of process between you and the people you build with.",
    icon: Users,
  },
  {
    title: "Growth that's genuine",
    description: "We invest in the skills you want to build, not just the ones the next project needs.",
    icon: Heart,
  },
];

export default function CareersPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="pt-6 lg:pt-10">
      <PageHeader
        eyebrow="JOIN ELITEINOVA"
        title="Build your career"
        highlight="with us."
        description="We're a small team that cares about craft. If that sounds like you, we'd like to hear from you — even if nothing's open right now."
      />

      <div className="mx-auto max-w-[1400px] px-6 pb-16 lg:px-10">
        <div className="grid gap-5 sm:grid-cols-3">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 shadow-[0_12px_35px_rgba(0,0,0,0.18)]"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-brand-cyan/20 bg-brand-cyan/10 text-brand-cyan">
                  <Icon size={20} strokeWidth={1.8} />
                </span>
                <h3 className="mt-4 text-lg font-semibold tracking-tight text-white">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 pb-24 lg:px-10">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.015] p-8 text-center sm:p-12"
        >
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            No open roles right now
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-white/70">
            We don&apos;t have a specific position open at the moment, but we&apos;re always glad
            to hear from people who do great work. Send us a note and tell us what you&apos;re
            interested in.
          </p>
          <MotionLink
            to="/contact"
            whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-violet px-6 py-3 text-sm font-medium shadow-[0_0_25px_rgba(99,102,241,0.35)] transition hover:brightness-110"
          >
            Get in Touch <ArrowRight size={16} />
          </MotionLink>
        </motion.div>
      </div>
    </div>
  );
}
