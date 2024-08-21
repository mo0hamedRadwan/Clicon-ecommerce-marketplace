import { trans } from "@mongez/localization";
import { ProductType } from "apps/front-office/design-system/types";
import { useState } from "react";
import ProductDescription from "./ProductDescription";

type ProductInfoTabsPropsType = {
  product: ProductType;
};

export default function ProductInfoTabs({ product }: ProductInfoTabsPropsType) {
  const [activeTab, setActiveTab] = useState("description");
  return (
    <div className="border border-gray-150">
      <div className="flex-center flex-wrap xs:flex-nowrap">
        {[
          "description",
          "additionalInformation",
          "specification",
          "review",
        ].map(tab => (
          // border-b-2 border-orange-450
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`w-full xs:w-auto p-5 text-gray-550 text-sm sm:text-lg ${activeTab === tab ? "text-zinc-950 border-b-4 border-orange-450 font-bold" : "border-b-4 border-transparent"}`}>
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
