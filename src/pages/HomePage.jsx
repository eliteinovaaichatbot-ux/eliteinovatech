import Hero from "../components/Hero";
import BrandEcosystem from "../components/BrandEcosystem";
import ServicesIntro from "../components/ServicesIntro";
import AboutSection from "../components/AboutSection";
import FeaturesSection from "../components/FeaturesSection";
import ProductCategoriesSection from "../components/ProductCategoriesSection";
import WebAppShowcaseSection from "../components/WebAppShowcaseSection";
import ServicesAndTechnologySection from "../components/ServicesAndTechnologySection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandEcosystem />
      <ServicesIntro />
      <AboutSection />
      <FeaturesSection />
      <ProductCategoriesSection />
      <WebAppShowcaseSection />
      <ServicesAndTechnologySection />
    </>
  );
}
