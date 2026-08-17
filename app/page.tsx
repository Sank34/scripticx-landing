import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CodeSection from "@/components/CodeSection";
import FeatureGrid from "@/components/FeaturesGrid";
import CTA from "@/components/CTA";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Showcasing from "@/components/Showcasing";
import ShowcaseTabs from "@/components/ShowcaseTabs";
import MiniScriptSection from "@/components/MiniScriptSection";
import DataUsageDisclosure from "@/components/DataUsageDisclosure";
import TeamSection from "@/components/TeamSection";
import EventsSection from "@/components/EventsSection";
import SponsorsSection from "@/components/SponsorsSection";
import MaintenanceNotice from "@/components/MaintenanceNotice";

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <MaintenanceNotice />
      <Hero />
      <CodeSection />
      <FeatureGrid />
      <Showcasing />
      <ShowcaseTabs />
      <MiniScriptSection />
      <EventsSection />
      <DataUsageDisclosure />
      <HowItWorks />
      <TeamSection />
      <Testimonials />
      <SponsorsSection />
      {/* <Showcase /> */}
      <CTA />
      <Footer />
    </div>
  );
}
