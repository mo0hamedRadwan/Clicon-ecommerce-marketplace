import { queryString } from "@mongez/react-router";
import { shopAtom } from "apps/front-office/catalog/atoms/shopAtom";
import Loader1 from "apps/front-office/design-system/components/loaders/Loader1";
import ProductsGrid from "apps/front-office/design-system/components/ProductsGrid";
import Pagination from "apps/front-office/design-system/components/ui/Pagination";

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
