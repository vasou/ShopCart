import PageLayout from "@/components/layout/PageLayout";
import CategoriesSection from "@/components/sections/CategoriesSection";
import ChooseByBrand from "@/components/sections/ChooseByBrand";
import GetUptoOfferSection from "@/components/sections/GetUptoOfferSection";
import ServicesToHelpYou from "@/components/sections/ServicesToHelpYou";
import TrendingProductsSection from "@/components/sections/TrendingProductsSection";
import HomeHeroSection from "@/components/sections/header/HomeHeroSection";

export default function LandingPage() {
  return (
    <PageLayout>
      <HomeHeroSection />
      <CategoriesSection />
      <ChooseByBrand />
      <GetUptoOfferSection />
      <ServicesToHelpYou />
      <TrendingProductsSection />
    </PageLayout>
  );
}
