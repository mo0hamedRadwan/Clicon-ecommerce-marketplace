import { trans } from "@mongez/localization";
import LinkAsButton from "apps/front-office/design-system/components/ui/LinkAsButton";
import { ProductType } from "apps/front-office/design-system/types";
import { isRTL } from "apps/front-office/utils/helpers";
import Badge from "components/ui/Badge";
import { twMerge } from "tailwind-merge";

type MediumBannerPropsType = {
  product: ProductType;
  varient?: "primary" | "secondary";
  showDiscount?: boolean;
  className?: string;
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
  showDiscount = false,
}: MediumBannerPropsType) {
  return (
    <div className={twMerge("p-10 space-between", styles[varient].theme)}>
      <div className="flex flex-col items-start gap-y-5">
        {/* get badge title from product badge */}
        <Badge title="introducting" className={styles[varient].badge} />
        <h3 className="text-2xl font-semibold line-clamp-2">{product.name}</h3>
        <p className="line-clamp-2">{product.shortDescription}</p>
        <LinkAsButton
          href="/product/:id"
          endIcon={isRTL() ? "bx-left-arrow-alt" : "bx-right-arrow-alt"}>
          {`${trans("shop")} ${trans("now")}`.toUpperCase()}
        </LinkAsButton>
      </div>
      <div className="relative">
        <img src={product.imageUrl} alt="" />
        {showDiscount && (
          <p className="absolute -top-5 right-0 w-20 h-20 bg-sky-550 rounded-full flex-center text-xl">
            ${product.discount}
          </p>
        )}
      </div>
    </div>
  );
}
