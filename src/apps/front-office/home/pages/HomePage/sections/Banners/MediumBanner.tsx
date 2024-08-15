import { trans } from "@mongez/localization";
import LinkAsButton from "apps/front-office/design-system/components/ui/LinkAsButton";
import { ProductType } from "apps/front-office/design-system/types";
import Badge from "components/ui/Badge";
import { twMerge } from "tailwind-merge";

type MediumBannerPropsType = {
  product: ProductType;
  varient?: "primary" | "secondary";
  showDiscount?: boolean;
  className?: string;
};

export default function MediumBanner({
  product,
  varient = "primary",
  showDiscount = false,
}: MediumBannerPropsType) {
  return (
    <div
      className={twMerge(
        "p-10 space-between",
        varient === "primary"
          ? "bg-gray-150 text-zinc-950"
          : "bg-zinc-950 text-gray-150",
      )}>
      <div className="flex flex-col items-start gap-y-5">
        <Badge title="Introducing" className="bg-sky-550 text-white" />
        <h3 className="text-2xl font-semibold line-clamp-2">{product.name}</h3>
        <p className="line-clamp-2">{product.shortDescription}</p>
        <LinkAsButton href="/product/:id">
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
