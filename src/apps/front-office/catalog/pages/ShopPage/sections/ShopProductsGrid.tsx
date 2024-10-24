import { trans } from "@mongez/localization";
import { queryString } from "@mongez/react-router";
import { shopAtom } from "apps/front-office/catalog/atoms/shopAtom";
import Loader1 from "components/loaders/Loader1";
import ProductsGrid from "components/ProductsGrid";
import Pagination from "components/ui/Pagination";

export default function ShopProductsGrid() {
  const { loading, products, paginationInfo } = shopAtom.useValue();
  const { page, pages } = paginationInfo;

  const handleChangePage = (page: number) => {
    const query = queryString.all();
    query.page = page;
    queryString.update(query);

    shopAtom.loadProducts({
      page: page,
    });
  };

  return loading ? (
    <div className="w-full h-[600px] flex-center">
      <Loader1 />
    </div>
  ) : products.length === 0 ? (
    <div className="w-full h-[600px] flex-center">
      <p className="text-center text-2xl font-medium">
        {trans("noProductsFound")}.
      </p>
    </div>
  ) : (
    <div className="flex flex-col gap-y-10">
      <ProductsGrid showRating products={products} className="lg:gap-3" />
      <Pagination
        activePage={page}
        totalPages={pages}
        handleChangePage={handleChangePage}
      />
    </div>
  );
}
