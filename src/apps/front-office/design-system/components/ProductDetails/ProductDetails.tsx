import { trans } from "@mongez/localization";
import paymentMethodImg from "assets/images/paymentMethod.png";
import { useState } from "react";
import { compareAtom } from "../../atoms/compareAtom";
import { wishlistAtom } from "../../atoms/wishlistAtom";
import { Product } from "../../types";
import Button from "../form/Button";
import StarsRating from "../ui/StarsRating";
import ProductDetailsForm from "./ProductDetailsForm";
import ProductSliderImages from "./ProductSliderImages";

type ProductDetailsPropsType = {
  product: Product;
};

export default function ProductDetails({ product }: ProductDetailsPropsType) {
  const [wishlistLoading, setWishlistLoading] = useState(false);
  const [compareLoading, setCompareLoading] = useState(false);

  return (
    <div className="container p-2 sm:p-10 bg-white rounded flex justify-center items-start flex-wrap gap-10">
      <ProductSliderImages images={product.images.map(image => image.url)} />

      <div className="w-full sm:w-[680px] flex flex-col gap-y-5 text-gray-550">
        <div className="">
          <StarsRating
            longRating
            rating={5}
            numOfReviews={Math.floor(Math.random() * 1000)}
          />
          <p className="text-zinc-950 text-lg sm:text-2xl line-clamp-2">
            {product.name}
          </p>
        </div>

        <ul className="grid grid-cols-2 gap-3 text-sm sm:text-base">
          <li className="flex flex-col xs:flex-row gap-2">
            <span>{trans("sku")}:</span>
            <span className="text-black font-bold">
              {product.sku || trans("notFound")}
            </span>
          </li>
          <li className="flex flex-col xs:flex-row gap-2">
            <span>{trans("availability")}:</span>
            {product.inStock ? (
              <span className="text-green-500 font-bold">
                {trans("inStock")}
              </span>
            ) : (
              <span className="text-red-500 font-bold">
                {trans("outOfStock")}
              </span>
            )}
          </li>
          <li className="flex flex-col xs:flex-row gap-2">
            <span>{trans("brand")}:</span>
            <span className="text-black font-bold">
              {product.brand || trans("notFound")}
            </span>
          </li>
          <li className="flex flex-col xs:flex-row gap-2">
            <span>{trans("categories")}:</span>
            <span className="text-black font-bold text-xs sm:text-base">
              {product?.category?.name}
            </span>
          </li>
        </ul>

        <div className="mt-5 flex items-end gap-x-3">
          <span className="text-3xl font-semibold text-sky-550">
            ${product.salePrice}
          </span>
          <span className="text-lg text-gray-450 line-through">
            ${product.price}
          </span>
          <span>{product.badge}</span>
          {/* <ul className="center-y gap-x-2">
            {product.badge?.map(badge => (
              <li key={badge}>
                <Badge title={badge} />
              </li>
            ))}
          </ul> */}
        </div>

        <hr className="bg-gray-200" />

        <ProductDetailsForm product={product} />

        <div className="space-between flex-wrap text-sm sm:text-base">
          <div className="center-y gap-x-5">
            <Button
              variant="text"
              className="p-0 text-xs sm:text-base text-zinc-700 hover:bg-transparent hover:text-orange-450"
              iconClassName="text-2xl"
              startIcon="bx-heart"
              disabled={wishlistLoading}
              onClick={() =>
                wishlistAtom.toggleWishlistProduct(setWishlistLoading, product)
              }>{`${trans("add")} ${trans("to")} ${trans("wishlist").toLowerCase()}`}</Button>
            <Button
              variant="text"
              className="p-0 text-xs sm:text-base text-zinc-700 hover:bg-transparent hover:text-orange-450"
              iconClassName="text-2xl"
              startIcon="bx-git-compare"
              disabled={compareLoading}
              onClick={() =>
                compareAtom.toggleCompareProduct(setCompareLoading, product)
              }>{`${trans("add")} ${trans("to")} ${trans("compare").toLowerCase()}`}</Button>
          </div>
          <div className="center-y gap-2">
            <p>{`${trans("share")} ${trans("product").toLowerCase()}:`}</p>
            <ul className="flex gap-x-2 text-xl">
              <li className="hover:text-orange-450 cursor-pointer">
                <i className="bx bx-copy"></i>
              </li>
              <li className="hover:text-orange-450 cursor-pointer">
                <i className="bx bxl-facebook-circle"></i>
              </li>
              <li className="hover:text-orange-450 cursor-pointer">
                <i className="bx bxl-twitter"></i>
              </li>
              <li className="hover:text-orange-450 cursor-pointer">
                <i className="bx bxl-pinterest-alt"></i>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-5 p-5 flex flex-col gap-y-2 border border-gray-200">
          <p className="text-zinc-950 text-sm sm:text-base">{`100% ${trans("guaranteeSafe")} ${trans("checkout")}`}</p>
          <img
            src={paymentMethodImg}
            alt="payment methods image"
            className="w-[310px]"
          />
        </div>
      </div>
    </div>
  );
}
