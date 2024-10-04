import CompareList from "apps/front-office/catalog/pages/ComparePage/sections/CompareList";
import CompareTable2Cols from "apps/front-office/catalog/pages/ComparePage/sections/CompareTable2Cols";
import CompareTable3Cols from "apps/front-office/catalog/pages/ComparePage/sections/CompareTable3Cols";
import { compareAtom } from "apps/front-office/design-system/atoms/compareAtom";

export default function CompareTab() {
  const products = compareAtom.use("products");

  return (
    <>
      <div className="hidden xl:block">
        <CompareTable3Cols products={products} />
      </div>
      <div className="hidden sm:block md:hidden lg:block xl:hidden">
        <CompareTable2Cols products={products} />
      </div>
      <div className="block sm:hidden md:block lg:hidden">
        <CompareList products={products} />
      </div>
    </>
  );
}
