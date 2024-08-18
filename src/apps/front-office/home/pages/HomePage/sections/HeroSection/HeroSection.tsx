import SmallBanner from "apps/front-office/design-system/components/SmallBanner";
import { product2, product3 } from "shared/data/testData2";
import Carousel from "./Carousel";

export default function HeroSection() {
  return (
    <div className="py-5 container md:h-[450px] lg:h-[520px] flex gap-x-4">
      <div className="flex-grow w-full xs:w-[450px] sm:w-[550px] md:w-[700px] lg:w-[820px] 2xl:max-w-[980px] h-full p-5 lg:p-10 bg-gray-100 rounded-lg shadow-2">
        <Carousel />
      </div>
      <div className="hidden xl:flex flex-col gap-y-5">
        <SmallBanner
          product={product2}
          variant="dark"
          direction="left"
          showCaption
          showBadge
        />
        <SmallBanner product={product3} direction="right" center showPrice />
      </div>
    </div>
  );
}
