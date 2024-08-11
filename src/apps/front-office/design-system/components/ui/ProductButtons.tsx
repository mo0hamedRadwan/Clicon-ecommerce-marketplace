import { ProductType } from "../../types";
import Button from "../form/Button";

type ProductButtonsPropsType = {
  product: ProductType;
};

const ButtonActionStyle =
  "w-12 h-12 p-0 flex-center rounded-full bg-gray-150 text-black hover:bg-orange-450 hover:text-white text-2xl";

// eslint-disable-next-line unused-imports/no-unused-vars
export default function ProductButtons({ product }: ProductButtonsPropsType) {
  return (
    <div className="absolute hidden group-hover:center-y gap-x-2">
      <Button
        onClick={() => console.log("add product to wishlist")}
        className={ButtonActionStyle}>
        <i className="bx bx-heart"></i>
      </Button>
      <Button
        onClick={() => console.log("add product to cart")}
        className={ButtonActionStyle}>
        <i className="bx bx-cart"></i>
      </Button>
      <Button
        onClick={() => console.log("view quick product")}
        className={ButtonActionStyle}>
        <i className="bx bx-show"></i>
      </Button>
    </div>
  );
}
