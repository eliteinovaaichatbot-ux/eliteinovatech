import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section className="relative">
      {/* Background: glow + city image */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Animated Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_40%,rgba(59,130,246,0.35),transparent_55%),radial-gradient(ellipse_at_10%_90%,rgba(168,85,247,0.18),transparent_50%)] animate-pulse-glow" />
        
        {/* City Image with slight float */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.9, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-y-0 right-0 w-full bg-cover bg-right bg-no-repeat lg:w-[62%]"
          style={{
            backgroundImage: "url('/hero-city.jpg')",
            maskImage: "linear-gradient(to right, transparent 0%, black 35%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 35%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 pb-24 pt-10 lg:px-10 lg:pt-16">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-[700px]"
        >
          <motion.h1
            variants={itemVariants}
            className="text-[clamp(2rem,5vw,3.75rem)] leading-[1.05] tracking-tight"
          >
            <span className="block font-light">BUILD CUSTOMIZED</span>
            <span className="block bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-violet bg-clip-text font-semibold text-transparent">
              WEB APPLICATION &amp;
              <br />
              MOBILE APP DESIGN
              
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="mt-8 max-w-[540px] border-l-2 border-brand-violet/70 pl-4 text-[15px] leading-relaxed text-white/80">
            We specialise in custom software and create responsive,
            user-friendly, performance-driven web and mobile experiences
            tailored to your brand and business goals, for startups and
            established companies alike.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-8 flex flex-wrap items-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#ecosystem"
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-cyan to-brand-blue px-7 py-3.5 text-sm font-medium shadow-[0_0_28px_rgba(62,200,255,0.45)] transition hover:brightness-110"
            >
              Explore Our Ecosystem <ArrowRight size={16} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
              whileTap={{ scale: 0.95 }}
              href="#brands"
              className="flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm backdrop-blur-md transition"
            >
              Discover Our Brands
              <span className="grid h-6 w-6 place-items-center rounded-full bg-white/20">
                <Play size={11} fill="currentColor" />
              </span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}