import { ProductType } from "apps/front-office/design-system/types";
import Product from "components/ui/Product";

type BestDealsGridPropsType = {
  products: ProductType[];
};

export default function BestDealsGrid({ products }: BestDealsGridPropsType) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-0">
      {products.map((product, index) => (
        <li
          key={index}
          className={`${index > 5 ? "md:block lg:hidden xl:block" : ""}`}>
          <Product product={product} />
        </li>
      ))}
    </ul>
  );
}
