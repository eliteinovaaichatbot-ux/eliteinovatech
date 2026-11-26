import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import businessWebsiteImageseo from "../assets/seo-optimize.jpg";
import ecommerceAppImage1 from "../assets/E-Commerce-App.webp";
import ecommerceWebImage from "../assets/E-commerce-Web-Pages.webp";
import mobileAppImage from "../assets/mobile-app-design.jpg";
import webDesignImage from "../assets/Web-Application-Design.webp";
import webDevelopmentImage from "../assets/Web-Application-Development.webp";

const categories = [
  {
    title: "Web Application Design & Development",
    description:
      "Thoughtful design and dependable development for functional, engaging web experiences.",
    image: webDesignImage,
    imageAlt: "Web application design shown across digital devices",
  },
  {
    title: "E-Commerce Web Application Development",
    description:
      "Online stores with clear product journeys, smooth carts, and secure checkout flows.",
    image: ecommerceWebImage,
    imageAlt: "E-commerce website and online shopping interface",
  },
  {
    title: "Mobile App Design & Development",
    description:
      "Intuitive mobile experiences built around your users and business goals.",
    image: mobileAppImage,
    imageAlt: "Mobile app and shopping experience on a smartphone",
  },
  {
    title: "E-Commerce App Development",
    description:
      "Mobile shopping experiences that make browsing, ordering, and managing purchases easy.",
    image: ecommerceAppImage1,
    imageAlt: "E-commerce app and digital payment experience",
  },
  {
    title: "SEO Services",
    description:
      "Search-friendly structure and content foundations to improve online visibility.",
    image: businessWebsiteImageseo,
    imageAlt: "Business website and web development visual",
  },
  {
    title: "Web Application Development",
    description:
      "Custom browser-based software designed around your workflows and users.",
    image: webDevelopmentImage,
    imageAlt: "Web application presented on laptop and mobile devices",
  },
];

function CategoryFlipCard({
  category,
  index,
  centeredPlacement,
  shouldReduceMotion,
}) {
  const [flipped, setFlipped] = useState(false);
  const [pinned, setPinned] = useState(false);

  const flipOnHover = () => {
    if (!pinned) setFlipped(true);
  };
  const resetOnLeave = () => {
    if (!pinned) setFlipped(false);
  };
  const togglePinned = () => {
    const nextPinned = !pinned;
    setPinned(nextPinned);
    setFlipped(nextPinned);
  };

  return (
    <motion.article
      initial={shouldReduceMotion ? false : { opacity: 0, y: 28, scale: 0.97 }}
      whileInView={
        shouldReduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }
      }
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.65,
        delay: index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={shouldReduceMotion ? undefined : { y: -7, scale: 1.015 }}
      className={`relative [perspective:1200px] ${centeredPlacement}`}
    >
      <button
        type="button"
        aria-expanded={flipped}
        aria-label={`${category.title}. ${
          flipped ? category.description : "Activate to view details."
        }`}
        onClick={togglePinned}
        onMouseEnter={flipOnHover}
        onMouseLeave={resetOnLeave}
        onFocus={flipOnHover}
        onBlur={resetOnLeave}
        className="group relative block h-[330px] w-full rounded-2xl text-left outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-4 focus-visible:ring-offset-navy-950 sm:h-[350px]"
      >
        <span
          className="relative block h-full w-full transition-transform duration-900 ease-[cubic-bezier(0.2,0.75,0.25,1)] motion-reduce:transition-none [transform-style:preserve-3d]"
          style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
        >
          <span
            aria-hidden={flipped}
            className="absolute inset-0 flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] shadow-[0_14px_36px_rgba(0,0,0,0.2)] [backface-visibility:hidden]"
          >
            <span className="relative block h-[190px] shrink-0 overflow-hidden rounded-t-2xl bg-navy-900">
              <motion.img
                src={category.image}
                alt=""
                loading="lazy"
                decoding="async"
                initial={
                  shouldReduceMotion ? false : { opacity: 0.75, scale: 1.06 }
                }
                whileInView={
                  shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }
                }
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="h-full w-full object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-105 motion-reduce:transition-none"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/35 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-35 motion-reduce:transition-none"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-3 rounded-xl border border-white/10"
              />
            </span>
            <span className="flex flex-1 flex-col justify-center p-5 sm:p-6">
              <span className="text-base font-semibold leading-snug tracking-tight text-white sm:text-lg">
                {category.title}
              </span>
              <span className="mt-3 text-sm leading-relaxed text-white/60">
                Hover or tap to view details
              </span>
            </span>
          </span>

          <span
            aria-hidden={!flipped}
            className="absolute inset-0 flex flex-col justify-center overflow-hidden rounded-2xl border border-brand-cyan/35 bg-gradient-to-br from-[#0c2940] via-[#111a35] to-[#202044] p-6 shadow-[0_18px_42px_rgba(0,0,0,0.3)] [backface-visibility:hidden] [transform:rotateY(180deg)] sm:p-7"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-12 h-40 w-40 rounded-full border border-white/10"
            />
            <span className="relative mb-3 text-xs font-semibold tracking-[0.16em] text-brand-cyan uppercase">
              Service details
            </span>
            <span className="relative text-lg font-semibold leading-snug tracking-tight text-white sm:text-xl">
              {category.title}
            </span>
            <span className="relative mt-4 text-sm leading-relaxed text-white/75">
              {category.description}
            </span>
            <span className="relative mt-auto pt-6 text-xs font-medium tracking-wide text-brand-cyan/90">
              Tap to flip back
            </span>
          </span>
        </span>
      </button>
    </motion.article>
  );
}

export default function ProductCategoriesSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="product-categories"
      className="relative mx-auto max-w-[1400px] overflow-hidden border-t border-white/10 px-6 pb-24 pt-12 lg:px-10 lg:pt-16"
    >
      <div className="pointer-events-none absolute -left-28 top-24 h-64 w-64 rounded-full bg-brand-cyan/10 blur-3xl" />

      <header className="relative mb-8 text-center sm:mb-10">
        <p className="mb-3 text-sm font-medium tracking-wide text-brand-cyan">
          DIGITAL SOLUTIONS FOR YOUR BUSINESS
        </p>
        <h2 className="text-3xl leading-tight tracking-tight sm:text-4xl">
          <span className="font-light">Product </span>
          <span className="bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-violet bg-clip-text font-semibold text-transparent">
            Categories
          </span>
        </h2>
        <p className="mt-3 text-sm text-white/55">
          Hover or tap a card to see the details
        </p>
      </header>

      <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {categories.map((category, index) => {
          const centeredPlacement =
            index === 4 ? "xl:col-start-2" : index === 5 ? "xl:col-start-3" : "";

          return (
            <CategoryFlipCard
              key={category.title}
              category={category}
              index={index}
              centeredPlacement={centeredPlacement}
              shouldReduceMotion={shouldReduceMotion}
            />
          );
        })}
      </div>
    </section>
  );
}
