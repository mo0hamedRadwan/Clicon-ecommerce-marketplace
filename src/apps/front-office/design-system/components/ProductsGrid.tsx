import { twMerge } from "tailwind-merge";
import { Product } from "../types";
import ProductCard from "./ui/ProductCard";

type ProductsGridPropsType = {
  products: Product[];
  showRating?: boolean;
  className?: string;
  productClassName?: string;
};

export default function ProductsGrid({
  products,
  showRating = false,
  className = "",
  productClassName = "",
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
          <ProductCard
            product={product}
            showRating={showRating}
            className={productClassName}
          />
        </li>
      ))}
    </ul>
  );
}
