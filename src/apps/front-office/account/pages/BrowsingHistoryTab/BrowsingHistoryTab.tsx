import { trans } from "@mongez/localization";
import { browseHistoryAtom } from "apps/front-office/design-system/atoms/browseHistoryAtom";
import ProductCard from "apps/front-office/design-system/components/ui/ProductCard";

export default function BrowsingHistoryTab() {
  const browserHistory = browseHistoryAtom.use("productsHistory");
  // const products = Object.keys(browserHistory).reduce(
  //   (prev: Product[], curr: string) => [...prev, ...browserHistory[curr]],
  //   [],
  // );

  return (
    <ul className="flex flex-col gap-y-5">
      {Object.keys(browserHistory).map(key => (
        <li className="border border-gray-150 shadow-2" key={key}>
          <div className="flex gap-5 border-b border-gray-150">
            <h2 className="p-5 font-semibold">{key}</h2>
          </div>

          {browserHistory[key].length > 0 ? (
            <>
              <ul className="p-5 flex flex-wrap justify-center gap-5">
                {browserHistory[key].map(product => (
                  <li
                    key={product.id}
                    className="w-[calc(25%-15px)] min-w-[240px] min-h-[330px]">
                    <ProductCard product={product} />
                  </li>
                ))}
                {/* <li className="w-[calc(25%-15px)] min-w-[240px] h-[330px] border border-red-500"></li> */}
              </ul>
            </>
          ) : (
            <div className="p-5 h-[370px] flex-center">
              <p className="text-2xl">{trans("noHistoryFound")}</p>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
