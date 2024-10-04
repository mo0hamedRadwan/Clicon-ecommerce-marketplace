import { compareAtom } from "apps/front-office/design-system/atoms/compareAtom";
import CompareList from "./sections/CompareList";
import CompareTable2Cols from "./sections/CompareTable2Cols";
import CompareTable3Cols from "./sections/CompareTable3Cols";

export default function ComparePage() {
  const products = compareAtom.use("products");

  if (!products.length)
    return (
      <div className="h-[500px] flex-center">
        <h1 className="text-center text-4xl">No products to compare</h1>
      </div>
    );

  return (
    <div className="py-20 container">
      <div className="hidden lg:block">
        <CompareTable3Cols products={products} />
      </div>
      <div className="hidden sm:block lg:hidden">
        <CompareTable2Cols products={products} />
      </div>
      <div className="block sm:hidden">
        <CompareList products={products} />
      </div>
    </div>
  );
}
