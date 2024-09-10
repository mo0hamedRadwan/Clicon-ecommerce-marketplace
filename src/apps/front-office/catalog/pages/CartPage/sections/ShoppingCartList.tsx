import { trans } from "@mongez/localization";
import { CartItem } from "apps/front-office/design-system/types";
import CartListItem from "./CartListItem";

type ShoppingCartListPropsType = {
  items: CartItem[];
};

export default function ShoppingCartList({ items }: ShoppingCartListPropsType) {
  return (
    <div>
      <h2 className="text-3xl text-center mb-5">{trans("shoppingCart")}</h2>
      <ul className="flex-center flex-col gap-y-5">
        {items.map(item => (
          <li key={item.id}>
            <CartListItem item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
