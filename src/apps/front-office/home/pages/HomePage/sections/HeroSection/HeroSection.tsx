import SmallBanner from "apps/front-office/design-system/components/SmallBanner";
import { smallBannerProduct1, smallBannerProduct2 } from "shared/data/testData";
import Carousel from "./Carousel";

export default function HeroSection() {
  return (
    <div className="py-5 container md:h-[450px] lg:h-[520px] flex gap-x-4">
      <div className="flex-grow w-[450px] sm:w-[550px] md:w-[700px] lg:w-[820px] 2xl:w-[900px] h-full p-5 lg:p-10 bg-gray-100 rounded-lg shadow-1">
        <Carousel />
      </div>
      <div className="hidden xl:flex flex-col gap-y-5">
        <SmallBanner
          product={smallBannerProduct1}
          variant="dark"
          direction="left"
          showCaption
          showBadge
        />
        <SmallBanner
          product={smallBannerProduct2}
          direction="right"
          center
          showPrice
        />
      </div>
    </div>
  );
}
