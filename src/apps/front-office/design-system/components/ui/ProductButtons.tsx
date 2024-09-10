import { cartAtom } from "../../atoms/cartAtom";
import { wishlistAtom } from "../../atoms/wishlistAtom";
import { Product } from "../../types";
import Button from "../form/Button";

type ProductButtonsPropsType = {
  product: Product;
  setViewProductQuick: (value: boolean) => void;
};

const ButtonActionStyle =
  "w-12 h-12 p-0 flex-center rounded-full bg-gray-150 text-black hover:bg-orange-450 hover:text-white text-2xl";

export default function ProductButtons({
  product,
  setViewProductQuick,
}: ProductButtonsPropsType) {
  return (
    <div className="hidden z-40 absolute top-0 left-0 w-full h-full group-hover:flex-center hover:bg-[rgba(0,0,0,0.2)] duration-200">
      <div className="center-y gap-x-2">
        <Button
          onClick={() => wishlistAtom.addToWishlist(product)}
          className={ButtonActionStyle}>
          <i className="bx bx-heart"></i>
        </Button>
        <Button
          onClick={() => cartAtom.addToCart(product.id)}
          className={ButtonActionStyle}>
          <i className="bx bx-cart"></i>
        </Button>
        <Button
          onClick={() => setViewProductQuick(true)}
          className={ButtonActionStyle}>
          <i className="bx bx-show"></i>
        </Button>
      </div>
    </div>
  );
}
