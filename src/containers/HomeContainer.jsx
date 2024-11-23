import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useRef } from "react";
import useScrollTop from "../hooks/useScrollTop";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import BenefitSection from "../components/BenefitSection";
import CategorySection from "../components/CategorySection";
import ClientSection from "../components/ClientSection";

/**
 * Main container for the home page.
 * Fetches data, handles error states, and organizes sections.
 *
 * @returns {JSX.Element} The rendered home component.
 */
function HomeContainer() {
  const targetSection = useRef(null);
  const navigate = useNavigate();

  useScrollTop();

  return (
    <div>
      <Navbar></Navbar>

      <HeroSection
        navigate={() => navigate("/products")}
        scroll={() => { if (targetSection.current) targetSection.current.scrollIntoView() }}
      ></HeroSection>

      <AboutSection targetSection={targetSection}></AboutSection>

      <BenefitSection></BenefitSection>

      <CategorySection></CategorySection>
      
      <ClientSection></ClientSection>

      <Footer></Footer>
    </div>
  );
}

export default HomeContainer;
