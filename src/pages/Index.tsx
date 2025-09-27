import HeroSection from "@/components/portfolio/HeroSection";
import CareerJourney from "@/components/portfolio/CareerJourney";
import SkillsShowcase from "@/components/portfolio/SkillsShowcase";
import GrowthChart from "@/components/portfolio/GrowthChart";
import PortfolioProjects from "@/components/portfolio/PortfolioProjects";
import ContactFooter from "@/components/portfolio/ContactFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <CareerJourney />
      <SkillsShowcase />
      <GrowthChart />
      <PortfolioProjects />
      <ContactFooter />
    </div>
  );
};

export default Index;