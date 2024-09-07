import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import { isRTL } from "apps/front-office/utils/helpers";
import URLS from "apps/front-office/utils/urls";
import { twMerge } from "tailwind-merge";
import { ProductType } from "../types";
import { variantStyle } from "./styles/bannerStyles";
import Badge from "./ui/Badge";
import LinkAsButton from "./ui/LinkAsButton";

type SmallBannerPropsType = {
  product: ProductType;
  productImage: string;
  variant?: "light" | "dark";
  center?: boolean;
  showPrice?: boolean;
  showBadge?: boolean;
  showCaption?: boolean;
  direction?: "left" | "right";
};

export default function SmallBanner({
  product,
  productImage,
  variant = "light",
  direction = "right",
  center = false,
  showPrice = false,
  showBadge = false,
  showCaption = false,
}: SmallBannerPropsType) {
  return (
    <>
      {productImage ? (
        <Link
          to={URLS.product.view(product)}
          className="w-[450px] h-[230px] rounded-md shadow-2">
          <img src={productImage} className="w-full h-full" />
        </Link>
      ) : (
        <div
          className={twMerge(
            "w-[450px] h-[230px] space-between gap-x-3 rounded-md pt-10 shadow-2 group",
            direction === "left" ? "pr-0 pl-10" : "pr-10 pl-0",
            isRTL() ? "pl-0 pr-10" : "pr-0 pl-10",
            direction === "right" ? "flex-row-reverse" : "",
            center && "p-8",
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
                "text-2xl font-medium line-clamp-2",
                `${variantStyle[variant].textColor}`,
              )}>
              {product.name}
            </p>
            {showPrice && (
              <p className="text-base font-medium text-sky-550">
                ${product.price} USD
              </p>
            )}
            <LinkAsButton
              href={URLS.product.view(product)}
              size="md"
              endIcon={isRTL() ? "bx-left-arrow-alt" : "bx-right-arrow-alt"}
              className="px-6 py-3 text-base mt-1">
              {`${trans("shop")} ${trans("now")}`.toUpperCase()}
            </LinkAsButton>
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
      )}
    </>
  );
}
