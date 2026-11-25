import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BrandEcosystem from "./components/BrandEcosystem";
import ServicesSection from "./components/ServicesSection";
export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-navy-950">
       <Navbar />
      <Hero />
      <BrandEcosystem />
      
      {/* New Sections */}
      <ServicesSection />
    </div>
  );
}
