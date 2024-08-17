import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import { useState } from "react";
import { RealProduct } from "shared/data/testData";
import { twMerge } from "tailwind-merge";
import { ProductType } from "../../types";
import Button from "../form/Button";
import QuickView from "../QuickView";
import Badge from "../ui/Badge";
import ProductButtons from "../ui/ProductButtons";
import StarsRating from "../ui/StarsRating";

type ProductPropsType = {
  product?: ProductType;
  largeProduct?: boolean;
  showRating?: boolean;
  className?: string;
};

export default function Product({
  product = RealProduct,
  largeProduct = false,
  showRating = false,
  className,
}: ProductPropsType) {
  const [viewProduct, setViewProduct] = useState(false);
  return (
    <div
      className={twMerge(
        "min-h-[310px] rounded border border-gray-200 hover:shadow-3",
        largeProduct ? "px-6 pb-6 pt-3" : "p-3",
        className,
      )}>
      <div className="flex flex-col gap-y-2">
        <div
          className={`relative ${largeProduct ? "h-[250px] my-9" : "lg:h-[188px]"} flex justify-center items-end group`}>
          <img src={product.imageUrl} alt="Product image" className="" />
          <ProductButtons setViewProductQuick={setViewProduct} />
        </div>
        <div
          className={`${largeProduct ? "h-[120px]" : showRating ? "h-[85px]" : "h-[95px]"} flex flex-col justify-between gap-y-1`}>
          {showRating && (
            <StarsRating
              rating={product.rating}
              numOfReviews={product.numOfReviews}
              starClassName={
                largeProduct
                  ? "text-xl text-yellow-450 mr-1"
                  : "text-orange-450"
              }
            />
          )}
          <Link
            to="/product/:id"
            className="line-clamp-2 font-medium text-base hover:underline">
            {product.name}
          </Link>
          <p className="mt-2 center-y gap-x-3 text-base">
            {product.oldPrice && (
              <span className="text-gray-450 line-through">
                ${product.oldPrice}
              </span>
            )}
            <span
              className={`font-semibold text-sky-550 ${largeProduct ? "text-xl" : ""}`}>
              ${product.price}
            </span>
          </p>
        </div>

        <div className="absolute flex flex-col items-start gap-y-2">
          {product.badges?.map(badge => <Badge key={badge} title={badge} />)}
        </div>
      </div>

      {largeProduct && (
        <div className="mt-3 flex flex-col gap-y-5">
          <p className="line-clamp-3 text-gray-550 text-sm">
            {product.shortDescription}
          </p>
          <div className="flex gap-x-2">
            <Button
              onClick={() => console.log("add product to wishlist")}
              className="bg-orange-150 text-black hover:text-white text-2xl p-3">
              <i className="bx bx-heart"></i>
            </Button>
            <Button
              onClick={() => console.log("add product to cart")}
              startIcon="bx-cart"
              className="flex-grow text-sm p-3"
              iconClassName="text-xl">
              <span>
                {`${trans("add")} ${trans("to")} ${trans("cart")}`.toUpperCase()}
              </span>
            </Button>
            <Button
              onClick={() => setViewProduct(true)}
              className="bg-orange-150 text-black hover:text-white text-2xl p-3">
              <i className="bx bx-show"></i>
            </Button>
          </div>
        </div>
      )}

      {viewProduct && (
        <div className="z-50 absolute top-0 left-0 min-w-full min-h-full flex-center bg-[rgba(0,0,0,0.8)]">
          {/* Change product props */}
          <QuickView
            product={RealProduct}
            setCloseViewProduct={setViewProduct}
          />
        </div>
      )}
    </div>
  );
}
