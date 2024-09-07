import { trans } from "@mongez/localization";
import { isRTL } from "apps/front-office/utils/helpers";
import URLS from "apps/front-office/utils/urls";
import { twMerge } from "tailwind-merge";
import { ProductType } from "../types";
import LinkAsButton from "./ui/LinkAsButton";

type BannerPropsType = {
  product: ProductType;
  showTitle?: boolean;
  showDescription?: boolean;
  showDiscount?: boolean;
  className?: string;
};

export default function Banner({
  product,
  showTitle,
  showDescription,
  showDiscount,
  className = "",
}: BannerPropsType) {
  return (
    <div
      className={twMerge(
        "w-[310px] px-5 py-10 flex-center flex-col gap-y-3 bg-amber-150 text-center rounded-lg",
        className,
      )}>
      <div className="w-64 h-32 flex-center">
        <img
          src={product.bannerImageUrl || product.imageUrl}
          alt="product Image"
          className="h-full"
        />
      </div>
      {showTitle && (
        <h3 className="mt-3 text-2xl font-bold line-clamp-2">{product.name}</h3>
      )}
      {showDiscount && (
        <h3 className="text-2xl font-bold">
          {product.discount}% {trans("Discount")}
        </h3>
      )}
      {showDescription && (
        <p className="text-base text-neutral-650 line-clamp-2">
          {product.shortDescription}
        </p>
      )}
      <p className="my-3 center-y gap-x-2">
        <span>{trans("startingPrice")}:</span>
        <span className="py-1 px-2 rounded bg-white">${product.price}</span>
      </p>
      <LinkAsButton
        href={URLS.product.view(product)}
        endIcon={isRTL() ? "bx-left-arrow-alt" : "bx-right-arrow-alt"}
        className="w-full">{`${trans("shop")} ${trans("now")}`}</LinkAsButton>
    </div>
  );
}
