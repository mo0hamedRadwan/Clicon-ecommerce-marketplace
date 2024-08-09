import { trans } from "@mongez/localization";
import Banner from "apps/front-office/design-system/components/Banner";
import ColumnProducts from "apps/front-office/design-system/components/ColumnProducts";
import { Product, SubCategory } from "apps/front-office/design-system/types";
import { isRTL } from "apps/front-office/utils/helpers";
import { useState } from "react";

type SubCategoryMenuPropsType = {
  subcategories: SubCategory[];
  categoryTopProducts: Product[];
};

export default function SubCategoryMenu({
  subcategories,
  categoryTopProducts,
}: SubCategoryMenuPropsType) {
  /**
   * select SubCategory for display products if user don't hover
   * then by default all sub categories is selected
   */
  const [selectedSubCategoryId, setSelectedSubCategoryId] = useState<number>(
    subcategories.length,
  );

  // console.log(selectedSubCategoryId);

  return (
    <div
      className={`absolute w-[900px] h-[440px] top-0 ${isRTL() ? "right-56" : "left-56"} rounded hidden group-hover:center-y font-normal`}>
      <div className="w-[40px] h-full bg-transparent"></div>
      <div className="p-5 w-[calc(100%-40px)] h-full bg-white space-between shadow-2 relative">
        <ul className="w-36">
          <li
            className="py-2 px-4 rounded hover:bg-gray-100 hover:font-bold"
            onMouseEnter={() => setSelectedSubCategoryId(subcategories.length)}>
            All
          </li>
          {subcategories.map((subcategory, index) => (
            <li
              key={subcategory.id}
              className="py-2 px-4 rounded hover:bg-gray-100"
              onMouseEnter={() => setSelectedSubCategoryId(index)}
              onMouseLeave={() =>
                setSelectedSubCategoryId(subcategories.length)
              }>
              <p className="hover:font-bold">{subcategory.name}</p>

              <div
                className={`absolute top-5 ${isRTL() ? "left-5" : "right-5"} space-between gap-x-5`}>
                <ColumnProducts
                  title={`${selectedSubCategoryId < subcategories.length ? subcategories[selectedSubCategoryId].name : trans("all")} ${trans("products")}`}
                  products={
                    selectedSubCategoryId < subcategories.length
                      ? subcategories[selectedSubCategoryId].products
                      : categoryTopProducts
                  }
                  className="w-[310px]"
                />
                <Banner
                  className="w-[310px]"
                  product={
                    selectedSubCategoryId < subcategories.length
                      ? subcategories[selectedSubCategoryId].topProduct!
                      : categoryTopProducts[0]
                  }
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
