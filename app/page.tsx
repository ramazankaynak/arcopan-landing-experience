import { HeroSection } from "@/components/home/hero-section"
import { FeaturesSection } from "@/components/home/features-section"
import { ProductsSection } from "@/components/home/products-section"
import { SolutionsSection } from "@/components/home/solutions-section"
import { IndustriesSection } from "@/components/home/industries-section"
import { StatsSection } from "@/components/home/stats-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ProductsSection />
      <SolutionsSection />
      <IndustriesSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
