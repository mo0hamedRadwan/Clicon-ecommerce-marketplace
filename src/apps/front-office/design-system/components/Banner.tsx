import { trans } from "@mongez/localization";
import { twMerge } from "tailwind-merge";
import { ProductType } from "../types";
import LinkAsButton from "./ui/LinkAsButton";

type BannerPropsType = {
  product: ProductType;
  showTitle?: boolean;
  showDiscount?: boolean;
  className?: string;
};

export default function Banner({
  product,
  showTitle,
  showDiscount,
  className = "",
}: BannerPropsType) {
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
      {showTitle && (
        <h3 className="text-3xl font-bold line-clamp-2">{product.name}</h3>
      )}
      {showDiscount && (
        <h3 className="text-2xl font-bold">
          {product.discount}% {trans("Discount")}
        </h3>
      )}
      <p className="text-base text-neutral-650 line-clamp-2">
        {product.shortDescription}
      </p>
      <p className="my-3 center-y gap-x-2">
        <span>{trans("startingPrice")}:</span>
        <span className="py-1 px-2 rounded bg-white">${product.price}</span>
      </p>
      <LinkAsButton
        href="/product/:id"
        endIcon="bx-right-arrow-alt"
        className="w-full">{`${trans("shop")} ${trans("now")}`}</LinkAsButton>
    </div>
  );
}
