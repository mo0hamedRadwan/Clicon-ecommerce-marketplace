import { trans } from "@mongez/localization";
import { twMerge } from "tailwind-merge";
import { ProductType } from "../types";
import LinkAsButton from "./LinkAsButton";

type BannerPropsType = {
  product: ProductType;
  className: string;
};

export default function Banner({ product, className = "" }: BannerPropsType) {
  return (
    <div
      className={twMerge(
        "p-5 flex-center flex-col gap-y-3 bg-amber-150 text-center rounded-lg",
        className,
      )}>
      <div className="w-64 h-24">
        <img
          src={product.bannerImageUrl}
          alt="product Image"
          className="w-full h-full"
        />
      </div>
      {product.discount && (
        <h3 className="text-2xl font-bold">
          {product.discount}% {trans("Discount")}
        </h3>
      )}
      <p className="text-base text-neutral-650 line-clamp-3">
        {product.shortDescription}
      </p>
      <p className="my-3 center-y gap-x-2">
        <span>{trans("startingPrice")}:</span>
        <span className="py-1 px-2 rounded bg-white">${product.price}</span>
      </p>
      <LinkAsButton
        href=""
        className="w-full">{`${trans("shop")} ${trans("now")}`}</LinkAsButton>
    </div>
  );
}
