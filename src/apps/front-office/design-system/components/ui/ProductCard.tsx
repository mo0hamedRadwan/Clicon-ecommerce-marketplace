import { Link } from "@mongez/react-router";
import URLS from "apps/front-office/utils/urls";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { browseHistoryAtom } from "../../atoms/browseHistoryAtom";
import { Product } from "../../types";
import QuickView from "../QuickView";
import Badge from "./Badge";
import ProductButtons from "./ProductButtons";
import ProductLargeButton from "./ProductLargeButton";
import StarsRating from "./StarsRating";

type ProductCardPropsType = {
  product: Product;
  largeProduct?: boolean;
  showRating?: boolean;
  className?: string;
};

export default function ProductCard({
  product,
  largeProduct = false,
  showRating = false,
  className,
}: ProductCardPropsType) {
  const [viewProduct, setViewProduct] = useState(false);

  return (
    <div
      className={twMerge(
        "min-h-[310px] rounded border border-gray-200 hover:shadow-3",
        largeProduct
          ? "min-h-[634px] max-w-full lg:max-w-[350px] px-6 pb-6 pt-3"
          : "min-w-[225px] p-3",
        className,
      )}>
      {/* I will add this to pop up model */}
      {viewProduct && (
        <div className="">
          <QuickView product={product} setCloseViewProduct={setViewProduct} />
        </div>
      )}
      <div className="flex flex-col gap-y-2">
        <div
          className={`relative ${largeProduct ? "min-h-[250px] my-9" : "h-[250px] lg:h-[188px]"} flex justify-center items-end group`}>
          <img
            src={product.images[0].url}
            alt="Product image"
            className="h-full"
          />
          <ProductButtons
            setViewProductQuick={setViewProduct}
            product={product}
          />
        </div>
        <div
          className={`${largeProduct ? "h-[120px]" : showRating ? "min-h-[85px]" : "min-h-[95px]"} flex flex-col justify-between gap-y-1`}>
          {showRating && (
            <StarsRating
              rating={4}
              numOfReviews={Math.floor(Math.random() * 1000)}
              starClassName={
                largeProduct
                  ? "text-xl text-yellow-450 mr-1"
                  : "text-orange-450"
              }
            />
          )}
          <Link
            to={URLS.product.view(product)}
            className="h-[50px] line-clamp-2 font-medium text-base hover:underline">
            <span
              onClick={() => browseHistoryAtom.addProductToHistory(product)}>
              {product.name}
            </span>
          </Link>
          <p className="mt-2 center-y gap-x-3 text-base">
            {product.price && (
              <span className="text-gray-450 line-through">
                ${product.price}
              </span>
            )}
            <span
              className={`font-semibold text-sky-550 ${largeProduct ? "text-xl" : ""}`}>
              ${product.salePrice}
            </span>
          </p>
        </div>

        {/* <div className="absolute flex flex-col items-start gap-y-2">
          {product.badges?.map(badge => <Badge key={badge} title={badge} />)}
        </div> */}
        {product.badge && (
          <div className="absolute flex flex-col items-start gap-y-2">
            <Badge title={product.badge} />
          </div>
        )}
      </div>

      {largeProduct && (
        <div className="mt-3 flex flex-col gap-y-5">
          <p className="line-clamp-3 text-gray-550 text-sm">
            {product.shortDescription}
          </p>

          <ProductLargeButton
            product={product}
            setViewProduct={setViewProduct}
          />
        </div>
      )}
    </div>
  );
}
