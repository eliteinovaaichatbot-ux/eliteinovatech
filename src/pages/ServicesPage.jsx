import ServicesIntro from "../components/ServicesIntro";
import FeaturesSection from "../components/FeaturesSection";
import ProductCategoriesSection from "../components/ProductCategoriesSection";
import WebAppShowcaseSection from "../components/WebAppShowcaseSection";
import ServicesAndTechnologySection from "../components/ServicesAndTechnologySection";

export default function ServicesPage() {
  return (
    <div className="pt-6 lg:pt-10">
      <ServicesIntro includeHeading />
      <FeaturesSection />
      <ProductCategoriesSection />
      <WebAppShowcaseSection />
      <ServicesAndTechnologySection />
    </div>
  );
}
