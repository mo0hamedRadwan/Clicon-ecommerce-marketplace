import { bestDeals } from "shared/data/testData";
import BestDeals from "./sections/BestDeals";
import Features from "./sections/Features";
import HeroSection from "./sections/HeroSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Features />
      <BestDeals bestDeals={bestDeals} />
      <div className="h-[2000px]">Home Page</div>
    </>
  );
}
