import { trans } from "@mongez/localization";
import { isRTL } from "apps/front-office/utils/helpers";
import { twMerge } from "tailwind-merge";
import { ProductType } from "../types";
import { variantStyle } from "./styles/bannerStyles";
import Badge from "./ui/Badge";
import LinkAsButton from "./ui/LinkAsButton";

type SmallBannerPropsType = {
  product: ProductType;
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
  direction = "right",
  center = false,
  showPrice = false,
  showBadge = false,
  showCaption = false,
}: SmallBannerPropsType) {
  return (
    <div
      className={twMerge(
        "w-[425px] h-[230px] space-between gap-x-3 rounded-md pt-10 shadow-1 group",
        direction === "left" ? "pr-0 pl-10" : "pr-10 pl-0",
        isRTL() ? "pl-0 pr-10" : "pr-0 pl-10",
        direction === "right" ? "flex-row-reverse" : "",
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
            endIcon={isRTL() ? "bx-left-arrow-alt" : "bx-right-arrow-alt"}
            className="px-6 py-3 text-base">
            {`${trans("shop")} ${trans("now")}`.toUpperCase()}
          </LinkAsButton>
        </div>
      </div>
      <div className="relative">
        <div className="h-full overflow-hidden">
          <img
            src={product.imageUrl}
            alt="product image"
            className="h-full group-hover:scale-110 duration-200"
          />
        </div>
        {showBadge && (
          <div
            className={twMerge(
              "absolute -top-5 flex items-start",
              direction === "left" ? "right-5" : "right-0",
            )}>
            {/* Small Banner with one badge */}
            {product.badges ? (
              <Badge title={product.badges[0]} />
            ) : (
              <Badge title={`${product.discount}% ${trans("off")}`} />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
