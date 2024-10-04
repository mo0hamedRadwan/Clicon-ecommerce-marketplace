import { trans } from "@mongez/localization";
import { wishlistAtom } from "../../atoms/wishlistAtom";
import { useAddToCart } from "../../hooks/api/use-add-to-cart";
import { Product } from "../../types";
import Button from "../form/Button";
import Loader2 from "../loaders/Loader2";

type ProductLargeButtonPropsType = {
  product: Product;
  setViewProduct: (value: boolean) => void;
};

export default function ProductLargeButton({
  product,
  setViewProduct,
}: ProductLargeButtonPropsType) {
  const { loading, addToCart } = useAddToCart(product);

  return (
    <div className="flex gap-x-2">
      <Button
        onClick={() => wishlistAtom.toggleWishlistProduct(product)}
        className="bg-orange-150 text-black hover:text-white text-2xl p-3">
        <i className="bx bx-heart"></i>
      </Button>
      <Button
        onClick={() => addToCart(true)}
        startIcon={!loading ? "bx-cart" : ""}
        className="flex-grow text-sm p-3"
        iconClassName="text-xl">
        {loading ? (
          <Loader2 />
        ) : (
          <span>
            {`${trans("add")} ${trans("to")} ${trans("cart")}`.toUpperCase()}
          </span>
        )}
      </Button>
      <Button
        onClick={() => setViewProduct(true)}
        className="bg-orange-150 text-black hover:text-white text-2xl p-3">
        <i className="bx bx-show"></i>
      </Button>
    </div>
  );
}
