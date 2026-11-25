import { motion } from "framer-motion";
import { ArrowRight, Heart, Home } from "lucide-react";

const brands = [
  {
    id: "matrimony",
    title: "EliteInnova",
    subtitle: "Matrimony",
    description: "Find Your Life Partner with Trust & Care.",
    buttonText: "Explore Matrimony",
    icon: <Heart className="text-rose-400" fill="currentColor" size={24} />,
    bgImage: "url('/eliteinovamatrimony.png')",
    gradient: "from-[#fdf2f2] via-[#fae8e8] to-[#f5d8d8]", 
    textColor: "text-rose-950",
    descColor: "text-rose-900/90",
    borderColor: "border-rose-200/50",
    btnClass: "bg-gradient-to-r from-rose-500 to-rose-400 text-white shadow-[0_0_20px_rgba(244,63,94,0.3)] hover:shadow-[0_0_30px_rgba(244,63,94,0.5)]",
    delay: 0.1,
  },
  {
    id: "properties",
    title: "EliteInnova",
    subtitle: "Properties",
    description: "Discover Premium Homes & Better Living.",
    buttonText: "Explore Properties",
    icon: <Home className="text-amber-500" />,
    bgImage: "url('/eliteproperties.jpg')",
    gradient: "from-[#f8f9fa] via-[#edf0f2] to-[#e2e6e9]", 
    textColor: "text-slate-900",
    descColor: "text-slate-700/90",
    borderColor: "border-slate-200/50",
    btnClass: "bg-[#1e4b38] text-white shadow-[0_0_20px_rgba(30,75,56,0.3)] hover:bg-[#2a6b50] hover:shadow-[0_0_30px_rgba(30,75,56,0.5)]",
    delay: 0.2,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } 
  },
};

export default function BrandEcosystem() {
  return (
    <section className="relative z-10 mx-auto max-w-[1400px] px-6 pb-24 pt-14 sm:pt-20 lg:px-10">
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-8 flex flex-col items-center text-center sm:mb-12"
      >
        <div className="mb-3 flex items-center gap-3">
          <span className="h-[1px] w-8 bg-white/30"></span>
          <span className="text-sm font-medium tracking-tight text-brand-cyan sm:text-[15px]">
            Our Brand Ecosystem
          </span>
          <span className="h-[1px] w-8 bg-white/30"></span>
        </div>
        <h2 className="max-w-4xl text-3xl leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
          <span className="font-light">Two Powerful Brands. One </span>
          <span className="bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-violet bg-clip-text font-semibold text-transparent">
            EliteInnova.
          </span>
        </h2>
      </motion.div>

      {/* Cards Container */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-5xl mx-auto"
      >
        {brands.map((brand) => (
          <motion.div
            key={brand.id}
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border ${brand.borderColor} bg-gradient-to-br ${brand.gradient} p-8 min-h-[320px] shadow-2xl backdrop-blur-sm`}
          >
            {/* Background Image - REMOVED mix-blend-overlay, Increased Opacity */}
            <div 
              className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-80 transition-transform duration-700 ease-out group-hover:scale-110"
              style={{ backgroundImage: brand.bgImage }}
            />
            
            {/* Left-to-Right Gradient Mask: Keeps text readable, shows image on the right */}
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent" />

            {/* Card Content (z-10 to sit above background) */}
            <div className="relative z-10">
              {/* Logo / Title Area */}
              <div className="flex items-center gap-4 mb-5">
                <div className={`grid h-12 w-12 place-items-center rounded-xl bg-white shadow-md`}>
                  {brand.icon}
                </div>
                <div>
                  <h3 className={`text-lg font-semibold leading-tight tracking-tight ${brand.textColor}`}>
                    {brand.title}
                  </h3>
                  <p className={`text-sm font-medium ${brand.descColor}`}>
                    {brand.subtitle}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className={`max-w-[250px] text-[15px] leading-relaxed ${brand.descColor}`}>
                {brand.description}
              </p>
            </div>

            {/* Button (Bottom) */}
            <div className="relative z-10 mt-10">
              <motion.a
                href={`#${brand.id}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ${brand.btnClass}`}
              >
                {brand.buttonText}
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1.5" />
              </motion.a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}