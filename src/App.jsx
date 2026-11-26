import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BrandEcosystem from "./components/BrandEcosystem";
import ServicesSection from "./components/ServicesSection";
import FeaturesSection from "./components/FeaturesSection";
import ProductCategoriesSection from "./components/ProductCategoriesSection";
import WebAppShowcaseSection from "./components/WebAppShowcaseSection";
import ServicesAndTechnologySection from "./components/ServicesAndTechnologySection";
import FooterSection from "./components/FooterSection";
export default function App() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-navy-950">
      <div aria-hidden="true" className="site-atmosphere">
        <span className="site-atmosphere__globe site-atmosphere__globe--top" />
        <span className="site-atmosphere__orbit site-atmosphere__orbit--top" />
        <span className="site-atmosphere__globe site-atmosphere__globe--middle" />
        <span className="site-atmosphere__orbit site-atmosphere__orbit--middle" />
        <span className="site-atmosphere__globe site-atmosphere__globe--bottom" />
        <span className="site-atmosphere__orbit site-atmosphere__orbit--bottom" />
      </div>
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <BrandEcosystem />
        <ServicesSection />
        <FeaturesSection />
        <ProductCategoriesSection />
        <WebAppShowcaseSection />
        <ServicesAndTechnologySection />
        <FooterSection />
       
      </div>
    </div>
  );
}
