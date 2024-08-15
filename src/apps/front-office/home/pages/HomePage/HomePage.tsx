import { bestDeals, categories, RealProduct } from "shared/data/testData";
import Banners from "./sections/Banners";
import BestDeals from "./sections/BestDeals";
import Features from "./sections/Features";
import HeroSection from "./sections/HeroSection";
import LargeBanner from "./sections/LargeBanner";
import ShopCategories from "./sections/ShopCategories";
import SubscribeSection from "./sections/SubscribeSection";
import TopProducts from "./sections/TopProducts";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Features />
      <BestDeals bestDeals={bestDeals} />
      <ShopCategories categories={categories} />
      {/* <div className="h-[2000px]">Home Page</div> */}
      <Banners />
      <LargeBanner product={RealProduct} />
      <TopProducts />
      {/* <LatestNews /> */}
      <SubscribeSection />
    </>
  );
}
