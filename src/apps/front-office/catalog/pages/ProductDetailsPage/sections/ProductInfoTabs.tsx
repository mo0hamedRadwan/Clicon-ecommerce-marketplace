import { trans } from "@mongez/localization";
import { ProductType } from "apps/front-office/design-system/types";
import ProductDescription from "./ProductDescription";

type ProductInfoTabsPropsType = {
  product: ProductType;
};

export default function ProductInfoTabs({ product }: ProductInfoTabsPropsType) {
  return (
    <div className="border border-gray-150">
      <div className="flex-center">
        {[
          "description",
          "additionalInformation",
          "specification",
          "review",
        ].map(tab => (
          // border-b-2 border-orange-450
          <button key={tab} className="p-5 text-gray-550 text-sm sm:text-lg">
            {trans(tab).toUpperCase()}
          </button>
        ))}
      </div>
      <div className="p-10 border-t border-gray-150">
        <ProductDescription
          description={product.description || product.shortDescription || ""}
        />
      </div>
    </div>
  );
}
