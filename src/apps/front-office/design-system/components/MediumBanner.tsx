import { trans } from "@mongez/localization";
import { isRTL } from "apps/front-office/utils/helpers";
import URLS from "apps/front-office/utils/urls";
import Badge from "components/ui/Badge";
import LinkAsButton from "components/ui/LinkAsButton";
import { twMerge } from "tailwind-merge";
import { Product } from "../types";

type MediumBannerPropsType = {
  product: Product;
  varient?: "primary" | "secondary";
  showPrice?: boolean;
  className?: string;
  center?: boolean;
};

const styles = {
  primary: {
    theme: "bg-gray-150 text-zinc-950",
    badge: "bg-sky-550 text-gray-150",
  },
  secondary: {
    theme: "bg-zinc-950 text-gray-150 font-semibold",
    badge: "bg-amber-350 text-zinc-950 font-semibold",
  },
};

export default function MediumBanner({
  product,
  varient = "primary",
  showPrice = false,
  center = false,
}: MediumBannerPropsType) {
  return (
    <div
      className={twMerge(
        "px-10 w-full space-between gap-5",
        styles[varient].theme,
      )}>
      <div className="py-10 flex flex-col items-start justify-center gap-y-5">
        {/* get badge title from product badge */}
        <Badge title="introducting" className={styles[varient].badge} />
        <h3 className="text-4xl font-semibold line-clamp-2">{product.name}</h3>
        <p className="line-clamp-2">{product.shortDescription}</p>
        <LinkAsButton
          href={URLS.product.view(product)}
          endIcon={isRTL() ? "bx-left-arrow-alt" : "bx-right-arrow-alt"}
          className="px-6 py-3 text-sm"
          iconClassName="text-2xl">
          {`${trans("shop")} ${trans("now")}`.toUpperCase()}
        </LinkAsButton>
      </div>
      <div className={`relative ${center ? "py-10" : "pt-10"}`}>
        <img src={product.images[0].url} alt="" className="h-full" />
        {showPrice && (
          <p className="absolute top-5 right-0 w-24 h-24 bg-sky-550 rounded-full flex-center text-xl">
            ${product.price}
          </p>
        )}
      </div>
    </div>
  );
}
