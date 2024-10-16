import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import { useOnce } from "@mongez/react-hooks";
import { shopAtom } from "../../atoms/shopAtom";
import CategoryFilter from "./filterSections/CategoryFilter";
import PopularBrandsFilter from "./filterSections/PopularBrandsFilter";
import PopularTagsFilter from "./filterSections/PopularTagsFilter";
import PriceRangeFilter from "./filterSections/PriceRangeFilter";
import ProductNameFilter from "./filterSections/ProductNameFilter";
import SortProducts from "./filterSections/SortProducts";
import ActiveFilters from "./sections/ActiveFilters";
import ShopProductsGrid from "./sections/ShopProductsGrid";

export default function ShopPage() {
  useOnce(() => {
    shopAtom.loadProducts();
  });

  return (
    <>
      <Helmet title={trans("shopPage")} />
      <div className="py-10 container">
        <div className="flex flex-wrap xl:flex-nowrap gap-5">
          <div className="min-w-[310px] max-w-[310px] flex flex-col gap-y-5">
            <CategoryFilter />
            <hr className="bg-gray-150" />
            <PriceRangeFilter />
            <hr className="bg-gray-150" />
            <PopularBrandsFilter />
            <hr className="bg-gray-150" />
            <PopularTagsFilter />
            {/* <Banner
            product={product2}
            showTitle
            className="bg-transparent border-2 border-orange-450 shadow-4 rounded-sm"
          /> */}
          </div>

          <div className="w-full flex flex-col gap-y-5">
            <div className="w-full space-between flex-wrap gap-5">
              <ProductNameFilter />
              <SortProducts />
            </div>
            <ActiveFilters />
            <ShopProductsGrid />
          </div>
        </div>
      </div>
    </>
  );
}
