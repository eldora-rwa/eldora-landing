import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import AccessGlobalMarketsSection from "@/components/AccessGlobalMarketsSection";
import EcosystemSection from "@/components/EcosystemSection";
import FaqSection from "@/components/FaqSection";
import HeroSection from "@/components/HeroSection";
import LandingFooter from "@/components/LandingFooter";
import LandingNav from "@/components/LandingNav";
import LiquidityAccessSection from "@/components/LiquidityAccessSection";
import PortfolioIntelligenceSection from "@/components/PortfolioIntelligenceSection";
import TeamSection from "@/components/TeamSection";
import WhyEldoraSection from "@/components/WhyEldoraSection";

const APP_URL = "https://app.eldora.do";
const PRICING_URL = `${APP_URL}/pricing`;

const LandingPageNew = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpenApp = () => {
    window.open(APP_URL, "_self");
  };

  const handleOpenPricing = () => {
    window.open(PRICING_URL, "_self");
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="h-full w-full">
      <LandingNav
        isScrolled={isScrolled}
        onLaunchApp={handleOpenApp}
        onScrollToSection={scrollToSection}
      />
      <HeroSection onLaunchApp={handleOpenApp} />
      <WhyEldoraSection />
      <AccessGlobalMarketsSection />
      <LiquidityAccessSection />
      <PortfolioIntelligenceSection
        onLaunchApp={handleOpenApp}
        onOpenPricing={handleOpenPricing}
      />
      <TeamSection />
      <EcosystemSection />
      <FaqSection />
      <LandingFooter navigate={navigate} onScrollToSection={scrollToSection} />
    </div>
  );
};

export default LandingPageNew;
