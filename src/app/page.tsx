import { AnnouncementBar } from "@/components/AnnouncementBar";
import { CtaSection } from "@/components/CtaSection";
import { EditorialSection } from "@/components/EditorialSection";
import { HeroSection } from "@/components/HeroSection";
import { PricingSection } from "@/components/PricingSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ServicesSection } from "@/components/ServicesSection";
import { SiteNav } from "@/components/SiteNav";
import { SiteStarfield } from "@/components/SiteStarfield";
import { StatsSection } from "@/components/StatsSection";

export default function Home() {
  return (
    <>
      <SiteStarfield />
      <div className="relative z-10">
        <AnnouncementBar />
        <SiteNav />
        <main>
          <HeroSection />
          <StatsSection />
          <ServicesSection />
          <ProcessSection />
          <PricingSection />
          <EditorialSection />
          <CtaSection />
        </main>
      </div>
    </>
  );
}
