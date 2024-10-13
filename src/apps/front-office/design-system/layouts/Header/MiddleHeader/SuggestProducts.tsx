import { Link } from "@mongez/react-router";
import Loader2 from "apps/front-office/design-system/components/loaders/Loader2";
import { Product } from "apps/front-office/design-system/types";
import URLS from "apps/front-office/utils/urls";

type SuggestProductsPropsType = {
  loading: boolean;
  products: Product[];
  setOpenMenu: (value: boolean) => void;
};

export default function SuggestProducts({
  loading,
  products,
  setOpenMenu,
}: SuggestProductsPropsType) {
  return (
    <div className="z-20 absolute w-full max-h-[310px] overflow-y-auto bg-sky-750 text-white">
      {loading ? (
        <div className="w-full h-[300px] flex-center">
          <Loader2 />
        </div>
      ) : (
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
      )}
    </div>
  );
}
