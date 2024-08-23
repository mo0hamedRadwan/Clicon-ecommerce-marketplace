import { trans } from "@mongez/localization";
import { products } from "shared/data/testData";
import CartListItem from "./CartListItem";

export default function ShoppingCartList() {
  return (
    <div>
      <h2 className="text-3xl text-center mb-5">{trans("shoppingCart")}</h2>
      <ul className="flex-center flex-col gap-y-5">
        {products.map(product => (
          <li key={product.id}>
            <CartListItem product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
}
