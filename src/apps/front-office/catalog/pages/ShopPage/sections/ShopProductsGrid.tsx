import { queryString } from "@mongez/react-router";
import { shopAtom } from "apps/front-office/catalog/atoms/shopAtom";
import ProductsGrid from "apps/front-office/design-system/components/ProductsGrid";
import Pagination from "apps/front-office/design-system/components/ui/Pagination";

export default function ShopProductsGrid() {
  const products = shopAtom.use("products");
  const { page, pages } = shopAtom.use("paginationInfo");

  const handleChangePage = (page: number) => {
    const query = queryString.all();
    query.page = page;
    queryString.update(query);

    shopAtom.loadProducts({
      page: page,
    });
  };

  return (
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
