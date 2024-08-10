import { trans } from "@mongez/localization";
import { twMerge } from "tailwind-merge";
import { Product } from "../types";
import LinkAsButton from "./LinkAsButton";
import { variantStyle } from "./styles/bannerStyles";

type SmallBannerPropsType = {
  product: Product;
  variant?: "light" | "dark";
  center?: boolean;
  showPrice?: boolean;
  showBadge?: boolean;
  showCaption?: boolean;
  direction?: "left" | "right";
};

export default function SmallBanner({
  product,
  variant = "light",
  direction = "left",
  center = false,
  showPrice = false,
  showBadge = false,
  showCaption = false,
}: SmallBannerPropsType) {
  return (
    <div
      className={twMerge(
        "w-[425px] h-[230px] space-between gap-x-3 rounded-md pt-10 shadow-1",
        direction === "left" ? "pl-10" : "pr-10",
        center && "p-10",
        `${variantStyle[variant].bgColor}`,
      )}>
      <div className="w-[180px] flex flex-col gap-y-2">
        {showCaption && (
          <p
            className={twMerge(
              "text-sm line-clamp-1",
              `${variantStyle[variant].captionColor}`,
            )}>
            {product.caption?.toUpperCase()}
          </p>
        )}
        <p
          className={twMerge(
            "text-xl font-semibold line-clamp-2",
            `${variantStyle[variant].textColor}`,
          )}>
          {product.name}
        </p>
        {showPrice && (
          <p className="text-lg font-semibold text-sky-550">
            ${product.price} USD
          </p>
        )}
        <div className="mt-1 flex">
          <LinkAsButton
            href="/product/:id"
            size="md"
            className="px-6">{`${trans("show")} ${trans("now")}`}</LinkAsButton>
        </div>
      </div>
      <div className="relative">
        <img src={product.imageUrl} alt="product image" className="h-full" />
        {showBadge && product.discount && (
          <div className="absolute -top-6 right-6">
            <p
              className={twMerge(
                "py-2 px-3 font-semibold rounded-sm",
                `${variantStyle[variant].badgeColor} ${variantStyle[variant].badgeTextColor}`,
              )}>
              {product.discount}% {trans("off").toUpperCase()}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
