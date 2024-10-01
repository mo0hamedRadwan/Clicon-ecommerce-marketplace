import { trans } from "@mongez/localization";
import { isRTL } from "apps/front-office/utils/helpers";
import URLS from "apps/front-office/utils/urls";
import { productsImage } from "shared/data/images2";
import { twMerge } from "tailwind-merge";
import { Product } from "../types";
import LinkAsButton from "./ui/LinkAsButton";

export const product1: Product = {
  id: "1",
  name: "Xbox Consoles",
  isActive: true,
  shortDescription: "THE BEST PLACE TO PLAY",
  description:
    "Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD.",
  salePrice: 299,
  images: [
    {
      url: productsImage.product3,
    },
  ],
};

type SlidePropsType = {
  product?: Product; // product is optional is temporary
};

export default function Slide({ product = product1 }: SlidePropsType) {
  return (
    <div
      className={`${isRTL() ? "ml-10" : "mr-10"} center-y justify-between md:justify-between gap-x-10 h-full bg-gray-150`}>
      <div className="w-[370px] flex flex-col">
        <h5 className="hidden md:center-y gap-x-2">
          <span className="block w-[30px] h-[2px] bg-sky-550"></span>
          <span className="text-sky-550">{product.shortDescription}</span>
        </h5>
        <h2 className="text-xl sm:text-4xl font-medium line-clamp-2">
          {product.name.toUpperCase()}
        </h2>
        <p className="my-5 text-base sm:text-lg text-neutral-650 line-clamp-3">
          {product.shortDescription}
        </p>
        <div className="flex ">
          <LinkAsButton
            size="lg"
            href={URLS.product.view(product)}
            endIcon={`bx-${isRTL() ? "left" : "right"}-arrow-alt`}
            className="px-8 text-base">
            {`${trans("shop")} ${trans("now")}`.toUpperCase()}
          </LinkAsButton>
        </div>
      </div>
      <div className="hidden sm:block w-[300px] h-full relative">
        <img
          src={product.images[0].url}
          alt="product image"
          className="w-full h-full"
        />
        <p
          className={twMerge(
            "hidden lg:flex-center absolute top-0 w-24 h-24 bg-sky-550 text-white border-4 border-white rounded-full",
            isRTL() ? "-left-2 2xl:-left-10" : "-right-2 2xl:-right-10",
          )}>
          <span className="text-xl">${product.price}</span>
        </p>
      </div>
    </div>
  );
}
