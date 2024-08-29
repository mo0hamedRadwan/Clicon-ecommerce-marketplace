import SubscribeSection from "components/sections/SubscribeSection";
import TopProducts from "components/sections/TopProducts";
import AboutSection from "./sections/AboutSection";
import BannerVideo from "./sections/BannerVideo";
import OurTeamSection from "./sections/OurTeamSection";

export default function AboutUsPage() {
  return (
    <div className="">
      <AboutSection />
      <OurTeamSection />
      <BannerVideo />
      <TopProducts />
      <SubscribeSection />
    </div>
  );
}