import { trans } from "@mongez/localization";
import { twMerge } from "tailwind-merge";
import { ProductType } from "../types";

type ColumnProductsPropsType = {
  title: string;
  products: ProductType[];
  className?: string;
};

export default function ColumnProducts({
  title,
  products,
  className = "",
}: ColumnProductsPropsType) {
  return (
    <div className={twMerge("", className)}>
      <h3 className="text-lg font-semibold">{trans(title).toUpperCase()}</h3>
      <ul className="w-full flex flex-col gap-y-3 mt-3">
        {products.map(product => (
          <li
            key={product.id}
            className="h-[100px] p-2 flex gap-x-5 border border-gray-150">
            <div className="w-20 h-20">
              <img
                src={product.imageUrl}
                alt="product image"
                className="w-full h-full"
              />
            </div>
            <div className="space-between flex-col">
              <p className="text-base">{product.name}</p>
              <p className="center-y gap-x-2">
                {product.oldPrice && (
                  <span className="text-gray-450 line-through">
                    ${product.oldPrice}
                  </span>
                )}
                <span className="text-sky-550 font-semibold">
                  ${product.price}
                </span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
