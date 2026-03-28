import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CodeExample from "@/components/CodeExample";
import CodeSection from "@/components/CodeSection";
import Features from "@/components/Features";
import FeatureGrid from "@/components/FeaturesGrid";
import CTA from "@/components/CTA";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Showcase from "@/components/Showcase";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      {/* <CodeExample /> */}
      <CodeSection />
      <FeatureGrid />
      {/* <Features /> */}
      <HowItWorks />
      <Testimonials />
      <Showcase />
      <CTA />
      <Footer />
    </div>
  );
}