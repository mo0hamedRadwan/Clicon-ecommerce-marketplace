import { trans } from "@mongez/localization";
import { isRTL } from "apps/front-office/utils/helpers";
import { sliderProduct } from "shared/data/testData";
import { twMerge } from "tailwind-merge";
import { ProductType } from "../types";
import LinkAsButton from "./LinkAsButton";

type SlidePropsType = {
  product?: ProductType; // product is optional is temporary
};

export default function Slide({ product = sliderProduct }: SlidePropsType) {
  return (
    <div className="center-y justify-around md:justify-evenly gap-x-10 h-full">
      <div className="w-[380px] flex flex-col">
        <h5 className="hidden md:center-y gap-x-2">
          <span className="block w-[30px] h-[2px] bg-sky-550"></span>
          <span className="text-sky-550">{product.caption}</span>
        </h5>
        <h2 className="text-xl sm:text-3xl font-semibold line-clamp-2">
          {product.name}
        </h2>
        <p className="my-5 text-base sm:text-lg line-clamp-3">
          {product.shortDescription}
        </p>
        <div className="flex ">
          <LinkAsButton
            size="lg"
            href="/product/:id"
            endIcon={`bx-${isRTL() ? "left" : "right"}-arrow-alt`}
            className="px-8">{`${trans("shop")} ${trans("now")}`}</LinkAsButton>
        </div>
      </div>
      <div className="hidden sm:block w-[300px] h-full relative">
        <img
          src={product.bannerImageUrl}
          alt="product image"
          className="w-full h-full"
        />
        <p
          className={twMerge(
            "hidden lg:flex-center absolute top-0 w-24 h-24 bg-sky-550 text-white border-4 border-white rounded-full",
            isRTL() ? "-left-2 2xl:-left-10" : "-right-2 2xl:-right-10",
          )}>
          <span className="text-3xl">${product.price}</span>
        </p>
      </div>
    </div>
  );
}
