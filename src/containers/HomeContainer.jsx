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
import useMediaQuery from "../hooks/useMediaQuery";

/**
 * Main container for the home page.
 * Fetches data, handles error states, and organizes sections.
 *
 * @returns {JSX.Element} - The rendered home component.
 */
function HomeContainer() {
  const targetSection = useRef(null);
  const navigate = useNavigate();
  const matches = useMediaQuery("(max-width: 780px)");

  useScrollTop();
  
  return (
    <div>
      <Navbar isMobile={matches}></Navbar>

      <HeroSection
        navigate={() => navigate("/products")}
        scroll={() => { if (targetSection.current) targetSection.current.scrollIntoView() }}
        isMobile={matches}
      ></HeroSection>

      <AboutSection targetSection={targetSection} isMobile={matches}></AboutSection>

      <BenefitSection isMobile={matches}></BenefitSection>

      <CategorySection isMobile={matches}></CategorySection>
      
      <ClientSection isMobile={matches}></ClientSection>

      <Footer isMobile={matches}></Footer>
    </div>
  );
}

export default HomeContainer;
