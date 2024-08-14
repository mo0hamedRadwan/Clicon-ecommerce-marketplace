import { ProductType } from "apps/front-office/design-system/types";
import Product from "components/ui/Product";

type BestDealsGridPropsType = {
  products: ProductType[];
  numOfColumns: number;
};

export default function BestDealsGrid({
  products,
  numOfColumns,
}: BestDealsGridPropsType) {
  return (
    <ul
      className={`grid ${numOfColumns === 4 ? "grid-cols-4" : "grid-cols-3"}`}>
      {products.map(product => (
        <li key={product.id} className="">
          <Product product={product} />
        </li>
      ))}
    </ul>
  );
}
