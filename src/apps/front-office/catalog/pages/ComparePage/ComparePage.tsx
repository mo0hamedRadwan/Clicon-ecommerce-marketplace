import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import { compareAtom } from "apps/front-office/design-system/atoms/compareAtom";
import Loader1 from "components/loaders/Loader1";
import CompareList from "./sections/CompareList";
import CompareTable2Cols from "./sections/CompareTable2Cols";
import CompareTable3Cols from "./sections/CompareTable3Cols";

export default function ComparePage() {
  const { loading, products } = compareAtom.useValue();

  if (products.length === 0 && !loading) {
    return (
      <div className="h-[500px] flex-center">
        <h1 className="text-center text-4xl">No products to compare</h1>
      </div>
    );
  }

  return (
    <>
      <Helmet title={trans("comparePage")} />
      <div className="py-20 container">
        {loading ? (
          <div className="w-full h-[500px] flex justify-center">
            <Loader1 />
          </div>
        ) : (
          <>
            <div className="hidden lg:block">
              <CompareTable3Cols products={products} />
            </div>
            <div className="hidden sm:block lg:hidden">
              <CompareTable2Cols products={products} />
            </div>
            <div className="block sm:hidden">
              <CompareList products={products} />
            </div>
          </>
        )}
      </div>
    </>
  );
}
