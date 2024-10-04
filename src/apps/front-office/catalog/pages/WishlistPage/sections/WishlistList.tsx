import { trans } from "@mongez/localization";
import { Product } from "apps/front-office/design-system/types";
import WishlistItem from "./WishlistItem";

type WishlistListPropsType = {
  products: Product[];
};

export default function WishlistList({ products }: WishlistListPropsType) {
  return (
    <div>
      <h2 className="text-3xl text-center mb-5">{trans("wishlist")}</h2>
      <ul className="flex-center flex-col gap-y-5">
        {products.map(product => (
          <WishlistItem product={product} key={product.id} />
        ))}
      </ul>
    </div>
  );
}
