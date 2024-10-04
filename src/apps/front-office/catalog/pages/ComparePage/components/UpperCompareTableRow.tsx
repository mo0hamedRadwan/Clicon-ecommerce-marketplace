import { trans } from "@mongez/localization";
import { compareAtom } from "apps/front-office/design-system/atoms/compareAtom";
import { wishlistAtom } from "apps/front-office/design-system/atoms/wishlistAtom";
import Button from "apps/front-office/design-system/components/form/Button";
import Loader2 from "apps/front-office/design-system/components/loaders/Loader2";
import { useAddToCart } from "apps/front-office/design-system/hooks/api/use-add-to-cart";
import { Product } from "apps/front-office/design-system/types";

type UpperCompareTableRowPropsType = {
  product: Product;
};

export default function UpperCompareTableRow({
  product,
}: UpperCompareTableRowPropsType) {
  const { loading, addToCart } = useAddToCart(product);

  return (
    <div className="flex flex-col gap-y-5">
      <div className="flex flex-col items-center gap-y-5">
        <button
          onClick={() => compareAtom.removeProductFromCompare(product)}
          className="w-6 h-6 rounded-full border border-gray-150 hover:border-red-500 text-gray-450 hover:text-red-500 duration-200 flex-center">
          x
        </button>
        <img
          src={product.images[0].url}
          alt="product image"
          className="w-40 2xl:w-[270px] h-40 2xl:h-[270px]"
        />
      </div>
      <p className="text-sm xl:text-base font-medium line-clamp-3">
        {product.name}
      </p>
      <div className="center-y gap-x-2">
        <Button
          variant="contained"
          onClick={() => addToCart(true)}
          endIcon="bx-cart"
          className="w-full">
          {loading ? (
            <Loader2 />
          ) : (
            <span>
              {`${trans("add")} ${trans("to")} ${trans("cart")}`.toUpperCase()}
            </span>
          )}
        </Button>
        <Button
          variant="outlined"
          onClick={() => wishlistAtom.toggleWishlistProduct(product)}
          className="md:text-2xl">
          <i className="bx bx-heart"></i>
        </Button>
      </div>
    </div>
  );
}
