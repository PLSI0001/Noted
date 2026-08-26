import C1StickyNavigation from "@/components/sections/C1StickyNavigation";
import C2HeroSection from "@/components/sections/C2HeroSection";
import C3IntroPhilosophySection from "@/components/sections/C3IntroPhilosophySection";
import C4CoreFeaturesShowcase from "@/components/sections/C4CoreFeaturesShowcase";
import C5AlternatingFeatureGrid from "@/components/sections/C5AlternatingFeatureGrid";
import C6PricingSection from "@/components/sections/C6PricingSection";
import C7FAQSection from "@/components/sections/C7FAQSection";
import C8BlogCardGrid from "@/components/sections/C8BlogCardGrid";
import C9BottomCTA from "@/components/sections/C9BottomCTA";
import C10Footer from "@/components/sections/C10Footer";

export default function HomePage() {
  return (
    <>
      <C1StickyNavigation />
      <main id="main-content" className="overflow-x-hidden bg-white-canvas text-portrait-ink">
        <C2HeroSection />
        <C3IntroPhilosophySection />
        <C4CoreFeaturesShowcase />
        <C5AlternatingFeatureGrid />
        <C6PricingSection />
        <C7FAQSection />
        <C8BlogCardGrid />
        <C9BottomCTA />
        <C10Footer />
      </main>
    </>
  );
}
