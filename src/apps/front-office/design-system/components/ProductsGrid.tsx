import { ProductType } from "apps/front-office/design-system/types";
import Product from "components/ui/Product";
import { twMerge } from "tailwind-merge";

type ProductsGridPropsType = {
  products: ProductType[];
  showRating?: boolean;
  className?: string;
};

export default function ProductsGrid({
  products,
  showRating = false,
  className = "",
}: ProductsGridPropsType) {
  return (
    <ul
      className={twMerge(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-0",
        className,
      )}>
      {products.map((product, index) => (
        <li
          key={index}
          className={`${index > 5 ? "md:block lg:hidden xl:block" : ""}`}>
          <Product product={product} showRating={showRating} />
        </li>
      ))}
    </ul>
  );
}
