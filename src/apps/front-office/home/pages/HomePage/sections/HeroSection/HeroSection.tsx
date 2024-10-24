import { Banner, Product, Slider } from "apps/front-office/design-system/types";
import SmallBanner from "components/SmallBanner";
import { productsImage } from "shared/data/images2";
import Carousel from "./Carousel";

const product2: Product = {
  id: "2",
  isActive: true,
  name: "New Google Pixel 6 Pro",
  shortDescription: "Summer Sales",
  salePrice: 399,
  images: [
    {
      url: productsImage.product2,
    },
  ],
  badge: "29% off",
};

const product3: Product = {
  id: "3",
  isActive: true,
  name: "Xiaomi FlipBuds Pro",
  shortDescription:
    "Escape the noise, It’s time to hear the magic with Xiaomi Earbuds.",
  salePrice: 299,
  images: [
    {
      url: productsImage.product3,
    },
  ],
};

type HeroSectionPropsType = {
  slider: Slider;
  banners: Banner[];
};

export default function HeroSection({ slider, banners }: HeroSectionPropsType) {
  return (
    <div className="py-5 container md:h-[450px] lg:h-[520px] flex gap-x-4">
      <div className="flex-grow w-full xs:w-[450px] sm:w-[550px] md:w-[700px] lg:w-[820px] 2xl:max-w-[980px] h-full p-5 lg:p-10 bg-gray-100 rounded-lg shadow-2">
        <Carousel sliders={slider.banners} />
      </div>
      <div className="hidden xl:flex flex-col gap-y-5">
        <SmallBanner
          product={product2}
          productImage={banners[0].image.url}
          variant="dark"
          direction="left"
          showCaption
          showBadge
        />
        <SmallBanner
          product={product3}
          productImage={banners[1].image.url}
          direction="right"
          center
          showPrice
        />
      </div>
    </div>
  );
}
