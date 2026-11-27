import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BrandsPage from "./pages/BrandsPage";
import ServicesPage from "./pages/ServicesPage";
import CareersPage from "./pages/CareersPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/brands" element={<BrandsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
