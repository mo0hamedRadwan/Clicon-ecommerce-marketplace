import Features from "./sections/Features";
import HeroSection from "./sections/HeroSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Features />
      <div className="h-[2000px]">Home Page</div>
    </>
  );
}
