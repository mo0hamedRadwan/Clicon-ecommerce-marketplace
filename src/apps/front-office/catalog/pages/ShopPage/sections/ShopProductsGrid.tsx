import { shopAtom } from "apps/front-office/catalog/atoms/shopAtom";
import ProductsGrid from "apps/front-office/design-system/components/ProductsGrid";
import PaginationList from "./PaginationList";

export default function ShopProductsGrid() {
  const products = shopAtom.use("products");

  return (
    <div className="flex flex-col gap-y-10">
      <ProductsGrid showRating products={products} className="lg:gap-3" />
      <PaginationList />
    </div>
  );
}
