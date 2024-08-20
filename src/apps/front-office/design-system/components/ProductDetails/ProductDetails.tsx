import { trans } from "@mongez/localization";
import paymentMethodImg from "assets/images/paymentMethod.png";
import { ProductType } from "../../types";
import Badge from "../ui/Badge";
import StarsRating from "../ui/StarsRating";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProductDetailsForm from "./ProductDetailsForm";
import ProductSliderImages from "./ProductSliderImages";

type ProductDetailsPropsType = {
  product: ProductType;
};

export default function ProductDetails({ product }: ProductDetailsPropsType) {
  return (
    <div className="container p-2 sm:p-10 bg-white rounded flex justify-center items-start flex-wrap gap-10">
      {/* Delete ! mark in future */}
      <ProductSliderImages images={product.images!} />

      <div className="w-full sm:w-[680px] flex flex-col gap-y-3 text-gray-550">
        <div className="">
          <StarsRating longRating />
          <p className="text-black text-lg sm:text-2xl line-clamp-2">
            {product.name}
          </p>
        </div>

        <ul className="grid grid-cols-2 gap-3 text-sm sm:text-base">
          <li className="flex flex-wrap gap-2">
            <span>{trans("sku")}:</span>
            <span className="text-black font-bold">{product.sku}</span>
          </li>
          <li className="flex flex-wrap gap-2">
            <span>{trans("availability")}:</span>
            {product.inStock ? (
              <span className="text-green-500 font-bold">
                {trans("inStock")}
              </span>
            ) : (
              <span className="text-red-500 font-bold">
                {trans("outStock")}
              </span>
            )}
          </li>
          <li className="flex flex-wrap gap-2">
            <span>{trans("brand")}:</span>
            <span className="text-black font-bold">{product.brand}</span>
          </li>
          <li className="flex flex-wrap gap-2">
            <span>{trans("categories")}:</span>
            <span className="text-black font-bold text-xs sm:text-base">
              {product.category}
            </span>
          </li>
        </ul>

        <div className="mt-5 flex items-end gap-x-3">
          <span className="text-3xl font-semibold text-sky-550">
            ${product.price}
          </span>
          <span className="text-lg text-gray-450 line-through">
            ${product.oldPrice}
          </span>
          <ul className="center-y gap-x-2">
            {product.badges?.map(badge => (
              <li key={badge}>
                <Badge title={badge} />
              </li>
            ))}
          </ul>
        </div>

        <hr className="bg-gray-200" />

        <ProductDetailsForm product={product} />

        <div className="space-between flex-wrap text-sm sm:text-base">
          <div className="center-y gap-x-5">
            <div className="center-y gap-x-2 hover:text-black cursor-pointer duration-150">
              <span className="text-2xl">
                <i className="bx bx-heart"></i>
              </span>
              <span className="text-xs sm:text-base">{`${trans("add")} ${trans("to")} ${trans("wishlist").toLowerCase()}`}</span>
            </div>
            <div className="center-y gap-x-2 hover:text-black cursor-pointer duration-150">
              <span className="text-2xl">
                <i className="bx bx-git-compare"></i>
              </span>
              <span className="text-xs sm:text-base">{`${trans("add")} ${trans("to")} ${trans("compare").toLowerCase()}`}</span>
            </div>
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
          <p className="text-black">{`100% ${trans("guaranteeSafe")} ${trans("checkout")}`}</p>
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
