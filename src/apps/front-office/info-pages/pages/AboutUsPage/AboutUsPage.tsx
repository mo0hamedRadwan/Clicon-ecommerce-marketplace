import Helmet from "@mongez/react-helmet";
import SubscribeSection from "components/sections/SubscribeSection";
import AboutSection from "./sections/AboutSection";
import BannerVideo from "./sections/BannerVideo";
import OurTeamSection from "./sections/OurTeamSection";

export default function AboutUsPage() {
  return (
    <>
      <Helmet title={"aboutUsPage"} />
      <AboutSection />
      <OurTeamSection />
      <BannerVideo />
      {/* <TopProducts /> */}
      <SubscribeSection />
    </>
  );
}
