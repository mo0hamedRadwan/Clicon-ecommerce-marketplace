import { Product } from "apps/front-office/design-system/types";
import CompareListItem from "./CompareListItem";

type CompareListPropsType = {
  products: Product[];
};

export default function CompareList({ products }: CompareListPropsType) {
  return (
    <div className="flex flex-col gap-y-5">
      {products.map(product => (
        <CompareListItem product={product} key={product.id} />
      ))}
    </div>
  );
}
