import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Heart, Home } from "lucide-react";

const brands = [
  {
    id: "matrimony",
    title: "EliteInnova",
    subtitle: "Matrimony",
    description: "Find Your Life Partner with Trust & Care.",
    buttonText: "Explore Matrimony",
    icon: <Heart className="text-rose-400" fill="currentColor" size={24} />,
    image: "/eliteinovamatrimony.png",
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
    image: "/eliteproperties.jpg",
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
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative z-10 mx-auto max-w-[1400px] px-6 pb-24 pt-14 sm:pt-20 lg:px-10">
      {/* Section Header */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
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
        initial={shouldReduceMotion ? false : "hidden"}
        whileInView={shouldReduceMotion ? undefined : "visible"}
        viewport={{ once: true, margin: "-50px" }}
        className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2"
      >
        {brands.map((brand) => (
          <motion.div
            key={brand.id}
            variants={itemVariants}
            whileHover={
              shouldReduceMotion ? undefined : { y: -8, scale: 1.02 }
            }
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`group relative grid min-h-[360px] grid-cols-1 overflow-hidden rounded-2xl border ${brand.borderColor} bg-gradient-to-br ${brand.gradient} shadow-2xl backdrop-blur-sm lg:grid-cols-[1.1fr_0.9fr]`}
          >
            <motion.img
              src={brand.image}
              alt=""
              loading="lazy"
              decoding="async"
              initial={shouldReduceMotion ? false : { scale: 1.04 }}
              whileInView={shouldReduceMotion ? undefined : { scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 1,
                delay: brand.delay,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="h-56 w-full object-cover object-center lg:col-start-2 lg:row-start-1 lg:h-full lg:min-h-[360px]"
            />

            <div className="flex flex-col justify-between p-6 sm:p-7 lg:col-start-1 lg:row-start-1 lg:p-5">
              <div>
                {/* Logo / Title Area */}
                <div className="mb-5 flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-white shadow-md">
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

              <motion.a
                href={`#${brand.id}`}
                whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
                className={`mt-8 inline-flex w-fit items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ${brand.btnClass}`}
              >
                {brand.buttonText}
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 motion-safe:group-hover:translate-x-1.5 motion-reduce:transition-none"
                />
              </motion.a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}