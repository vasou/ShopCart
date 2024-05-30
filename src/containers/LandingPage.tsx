import PageLayout from "@/components/layout/PageLayout";
import CategoriesSection from "@/components/sections/CategoriesSection";
import ChooseByBrand from "@/components/sections/ChooseByBrand";
import GetUptoOfferSection from "@/components/sections/GetUptoOfferSection";
import InBetweenSection from "@/components/sections/InBetweenSection";
import ServicesToHelpYou from "@/components/sections/ServicesToHelpYou";
import TrendingProductsSection from "@/components/sections/TrendingProductsSection";
import HomeHeroSection from "@/components/sections/header/HomeHeroSection";
import DiscountBannerImg1 from "@/assets/banners/discount-furniture-banner.png";
import ProductsSection from "@/components/sections/ProductsSection";

export default function LandingPage() {
  return (
    <PageLayout>
      <HomeHeroSection />
      <CategoriesSection />
      <ChooseByBrand />
      <GetUptoOfferSection />
      <InBetweenSection
        type={"layoutOne"}
        bgImg={DiscountBannerImg1}
        heading="Get 5% Cash Back On $200"
        description="Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance."
      />
      <ProductsSection />
      <ServicesToHelpYou />
      <TrendingProductsSection />
      <InBetweenSection
        type={"layoutTwo"}
        heading="Get 5% Cash Back"
        bgColor="yellow"
        description="on Shopcart.com"
      />
    </PageLayout>
  );
}
