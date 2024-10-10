import { trans } from "@mongez/localization";
import URLS from "apps/front-office/utils/urls";
import { useState } from "react";
import { cartAtom } from "../../atoms/cartAtom";
import { Product } from "../../types";
import Button from "../form/Button";
import Loader2 from "../loaders/Loader2";
import LinkAsButton from "../ui/LinkAsButton";
import QuantityInput from "../ui/QuantityInput";

type ProductDetailsFormPropsType = {
  product: Product;
};

export default function ProductDetailsForm({
  product,
}: ProductDetailsFormPropsType) {
  const [productQuantity, setProductQuantity] = useState(1);
  const [loadingCart, setLoadingCart] = useState(false);
  // const [selectedColor, setSelectedColor] = useState(0);
  // const [loadingWishlist, setLoadingWishlist] = useState(false);

  // const sizeOptions: SelectOption[] | undefined = product.sizes?.map(size => {
  //   return { label: size, value: size };
  // });
  // const memoryOptions: SelectOption[] | undefined = product.memories?.map(
  //   memory => {
  //     return { label: memory, value: memory };
  //   },
  // );
  // const storageOtions: SelectOption[] | undefined = product.storages?.map(
  //   storage => {
  //     return { label: storage, value: storage };
  //   },
  // );

  return (
    <>
      {/* <ul className="grid grid-cols-2 gap-3">
        <li className="flex flex-col gap-y-2">
          <h5 className="text-black">{trans("color")}</h5>
          <ul className="flex gap-x-2">
            {product.colors?.map((color, index) => (
              <li
                key={color}
                className={`${selectedColor === index ? "border-2 border-orange-450" : ""} rounded-full`}
                onClick={() => setSelectedColor(index)}>
                <span
                  className="block w-12 h-12 rounded-full border-4 border-white cursor-pointer"
                  style={{ backgroundColor: color }}></span>
              </li>
            ))}
          </ul>
        </li>
        <li className="flex flex-col gap-y-2">
          {sizeOptions && (
            <>
              <h5 className="text-black">{trans("size")}</h5>
              <Select
                triggerValue={sizeOptions[0].label}
                options={sizeOptions}
                className="w-full border border-gray-200"
                itemClassName="hover:bg-orange-450 hover:text-white"
              />
            </>
          )}
        </li>
        <li className="flex flex-col gap-y-2">
          {memoryOptions && (
            <>
              <h5 className="text-black">{trans("memory")}</h5>
              <Select
                triggerValue={memoryOptions[0].label}
                options={memoryOptions}
                className="w-full border border-gray-200"
                itemClassName="hover:bg-orange-450 hover:text-white"
              />
            </>
          )}
        </li>
        <li className="flex flex-col gap-y-2">
          {storageOtions && (
            <>
              <h5 className="text-black">{trans("storage")}</h5>
              <Select
                triggerValue={storageOtions[0].label}
                options={storageOtions}
                className="w-full border border-gray-200"
                itemClassName="hover:bg-orange-450 hover:text-white"
              />
            </>
          )}
        </li>
      </ul> */}

      <div className="mt-5 center-y justify-center flex-wrap md:flex-nowrap gap-3">
        <QuantityInput value={productQuantity} setValue={setProductQuantity} />
        <div className="flex-grow center-y gap-3 flex-wrap xs:flex-nowrap">
          <Button
            variant="contained"
            size="lg"
            endIcon={!loadingCart ? "bx-cart" : ""}
            disabled={loadingCart}
            onClick={() =>
              cartAtom.addToCart(setLoadingCart, product.id, productQuantity)
            }
            className="flex-grow font-semibold"
            iconClassName="md:text-2xl">
            {loadingCart ? (
              <Loader2 />
            ) : (
              <span>
                {`${trans("add")} ${trans("to")} ${trans("cart")}`.toUpperCase()}
              </span>
            )}
          </Button>
          <LinkAsButton
            variant="outlined"
            size="lg"
            href={URLS.checkout.root}
            className="flex-grow xs:flex-grow-0 font-semibold">
            {`${trans("buy")} ${trans("now")}`.toUpperCase()}
          </LinkAsButton>
        </div>
      </div>
    </>
  );
}
