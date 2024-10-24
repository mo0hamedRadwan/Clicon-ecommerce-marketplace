import { trans } from "@mongez/localization";
import { browseHistoryAtom } from "apps/front-office/design-system/atoms/browseHistoryAtom";
import { Product } from "apps/front-office/design-system/types";
import { isRTL } from "apps/front-office/utils/helpers";
import URLS from "apps/front-office/utils/urls";
import LinkAsButton from "components/ui/LinkAsButton";
import Pagination from "components/ui/Pagination";
import ProductCard from "components/ui/ProductCard";
import { useState } from "react";

const productsPerPage = 4;

export default function BrowseHistorySection() {
  const browserHistory = browseHistoryAtom.use("productsHistory");
  const products = Object.keys(browserHistory).reduce(
    (prev: Product[], curr: string) => [...prev, ...browserHistory[curr]],
    [],
  );

  const pages = Math.ceil(products.length / productsPerPage);
  const [activePage, setActivePage] = useState(1);
  const idx = (activePage - 1) * productsPerPage;

  return (
    <div className="border border-gray-150 shadow-2">
      <div className="space-between-center gap-5 border-b border-gray-150">
        <h2 className="p-5 font-semibold">{trans("browsingHistory")}</h2>
        <LinkAsButton
          variant="text"
          endIcon={isRTL() ? "bx-left-arrow-alt" : "bx-right-arrow-alt"}
          href={
            URLS.userAccount.browsingHistory
          }>{`${trans("view")} ${trans("all")}`}</LinkAsButton>
      </div>

      {products.length > 0 ? (
        <>
          <ul className="p-5 flex flex-wrap justify-center gap-5">
            {products.slice(idx, idx + productsPerPage).map(product => (
              <li key={product.id} className="w-[calc(25%-15px)] min-w-[240px]">
                <ProductCard product={product} />
              </li>
            ))}
            {/* <li className="w-[calc(25%-15px)] min-w-[240px] h-[330px] border border-red-500"></li> */}
          </ul>
          <Pagination
            activePage={activePage}
            totalPages={pages}
            handleChangePage={setActivePage}
          />
        </>
      ) : (
        <div className="p-5 h-[370px] flex-center">
          <p className="text-2xl">{trans("noHistoryFound")}</p>
        </div>
      )}
    </div>
  );
}
