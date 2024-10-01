import { Link } from "@mongez/react-router";
import Loader2 from "apps/front-office/design-system/components/loaders/Loader2";
import { useClickOutside } from "apps/front-office/design-system/hooks/use-click-outside";
import { Product } from "apps/front-office/design-system/types";
import URLS from "apps/front-office/utils/urls";
import { useState } from "react";

type SuggestProductsPropsType = {
  loading: boolean;
  products: Product[];
};

export default function SuggestProducts({
  loading = false,
  products,
}: SuggestProductsPropsType) {
  const [openMenu, setOpenMenu] = useState(true);
  const menuRef = useClickOutside(() => setOpenMenu(false));

  return (
    <div className="z-20 absolute w-full bg-sky-750 text-white" ref={menuRef}>
      {loading ? (
        <div className="w-full h-[300px] flex-center">
          <Loader2 />
        </div>
      ) : (
        openMenu && (
          <ul className="flex flex-col">
            {products.map(product => (
              <li
                key={product.id}
                onClick={() => setOpenMenu(false)}
                className="p-2 hover:bg-orange-450 hover:text-white duration-150 cursor-pointer rounded">
                <Link to={URLS.product.view(product)} className="line-clamp-1">
                  {product.name}
                </Link>
              </li>
            ))}
          </ul>
        )
      )}
    </div>
  );
}
