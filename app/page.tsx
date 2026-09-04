import Footer from "@/components/Footer";
import TeamSection from "@/components/TeamSection";
import Testimonials from "@/components/Testimonials";
import BusinessPillars from "@/components/marketing/BusinessPillars";
import DevelopmentSpotlight from "@/components/marketing/DevelopmentSpotlight";
import MarketingCTA from "@/components/marketing/MarketingCTA";
import ParallaxHero from "@/components/marketing/ParallaxHero";
import PartnersSection from "@/components/marketing/PartnersSection";
import PlatformShowcase from "@/components/marketing/PlatformShowcase";
import StoryScroller from "@/components/marketing/StoryScroller";
import WorkshopGallery from "@/components/marketing/WorkshopGallery";

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main>
        <ParallaxHero />
        <BusinessPillars />
        <StoryScroller />
        <PlatformShowcase />
        <DevelopmentSpotlight />
        <WorkshopGallery />
        <Testimonials />
        <TeamSection />
        <PartnersSection />
        <MarketingCTA />
      </main>
      <Footer />
    </div>
  );
}
