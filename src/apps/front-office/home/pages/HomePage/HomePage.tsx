import Product from "apps/front-office/design-system/components/Product";
import QuickView from "apps/front-office/design-system/components/QuickView";
import { RealProduct } from "shared/data/testData";
import Features from "./sections/Features";
import HeroSection from "./sections/HeroSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Features />
      <div className="container py-10">
        <Product />
      </div>
      <div className="container py-10">
        <QuickView product={RealProduct} />
      </div>

      <div className="h-[2000px]">Home Page</div>
    </>
  );
}
