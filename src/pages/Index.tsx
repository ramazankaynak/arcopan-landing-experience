import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import WhyArcopan from "@/components/WhyArcopan";
import SolutionsSection from "@/components/SolutionsSection";
import ProductsSection from "@/components/ProductsSection";
import IndustriesSection from "@/components/IndustriesSection";
import ProjectsSection from "@/components/ProjectsSection";
import TrustBar from "@/components/TrustBar";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <StatsBar />
      <WhyArcopan />
      <SolutionsSection />
      <ProductsSection />
      <IndustriesSection />
      <ProjectsSection />
      <TrustBar />
      <CTABanner />
      <Footer />
    </main>
  );
};

export default Index;
