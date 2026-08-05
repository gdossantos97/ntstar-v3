import { CtaSection } from "@/components/CtaSection";
import { EditorialSection } from "@/components/EditorialSection";
import { HeroSection } from "@/components/HeroSection";
import { PricingSection } from "@/components/PricingSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ServicesSection } from "@/components/ServicesSection";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteStarfield } from "@/components/SiteStarfield";
import { StatsSection } from "@/components/StatsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <>
      <SiteStarfield />
      <div className="relative z-10 overflow-x-clip">
        <SiteHeader />
        <main className="site-main">
          <HeroSection />
          <StatsSection />
          <ServicesSection />
          <ProcessSection />
          <PricingSection />
          <TestimonialsSection />
          <EditorialSection />
          <CtaSection />
        </main>
      </div>
    </>
  );
}
