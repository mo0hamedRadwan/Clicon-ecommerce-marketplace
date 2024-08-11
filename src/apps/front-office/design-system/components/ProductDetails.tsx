import { trans } from "@mongez/localization";
import URLS from "apps/front-office/utils/urls";
import paymentMethodImg from "assets/images/paymentMethod.png";
import { useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { ProductType, SelectOption } from "../types";
import Button from "./form/Button";
import LinkAsButton from "./LinkAsButton";
import Badge from "./ui/Badge";
import QuantityInput from "./ui/QuantityInput";
import StarsRating from "./ui/StarsRating";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Select from "./form/Select";

type ProductDetailsPropsType = {
  product: ProductType;
};

export default function ProductDetails({ product }: ProductDetailsPropsType) {
  const swiper = useSwiper();
  const [selectedColor, setSelectedColor] = useState(0);
  const sizeOptions: SelectOption[] | undefined = product.sizes?.map(size => {
    return { label: size, value: size };
  });
  const memoryOptions: SelectOption[] | undefined = product.memories?.map(
    memory => {
      return { label: memory, value: memory };
    },
  );
  const storageOtions: SelectOption[] | undefined = product.storages?.map(
    storage => {
      return { label: storage, value: storage };
    },
  );

  return (
    <div className="p-10 rounded flex justify-center items-start flex-wrap gap-10">
      <div className="w-[620px] flex flex-col items-center gap-y-5">
        <div className="w-full h-[460px] p-10 border border-gray-200">
          <img src={product.imageUrl} alt="" className="w-full h-full" />
        </div>

        <div className="relative w-full h-24">
          <Swiper
            slidesPerView={6}
            loop={true}
            // spaceBetween={30}
            // centeredSlides={true}
            // navigation={true}
            // navigation={true}
            // modules={[Navigation]}
            className="mySwiper w-full h-full static">
            {product.images?.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="w-24 h-24 border border-gray-200">
                  <img src={image} alt="" className="w-full h-full" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="">
            <button
              className="z-20 absolute top-6 -left-6 w-12 h-12 text-4xl font-light bg-orange-450 text-white rounded-full"
              onClick={() => swiper.slidePrev()}>
              <i className="bx bx-left-arrow-alt"></i>
            </button>
            <button
              className="z-20 absolute top-6 -right-6 w-12 h-12 text-4xl font-light bg-orange-450 text-white rounded-full"
              onClick={() => swiper.slideNext()}>
              <i className="bx bx-right-arrow-alt"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="w-[680px] flex flex-col gap-y-3 text-gray-550">
        <div className="">
          <StarsRating longRating />
          <p className="text-black text-2xl line-clamp-2">{product.name}</p>
        </div>

        <ul className="grid grid-cols-2 gap-3">
          <li>
            <span>Sku: </span>
            <span className="text-black font-bold">{product.sku}</span>
          </li>
          <li>
            <span>Availability: </span>
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
          <li>
            <span>Brand: </span>
            <span className="text-black font-bold">{product.brand}</span>
          </li>
          <li>
            <span>Categories: </span>
            <span className="text-black font-bold">{product.category}</span>
          </li>
        </ul>

        <div className="mt-5 flex items-end gap-x-3">
          <span className="text-3xl font-semibold text-sky-550">
            ${product.price}
          </span>
          <span className="text-lg text-gray-450 line-through">
            ${product.oldPrice}
          </span>
          <Badge />
        </div>

        <hr className="bg-gray-200" />

        <ul className="grid grid-cols-2 gap-3">
          <li className="flex flex-col gap-y-2">
            <h5 className="text-black">{trans("color")}</h5>
            <ul className="flex gap-x-2">
              {/* product.colors */}
              {["#f00", "#0f0", "#00f"].map((color, index) => (
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
                />
              </>
            )}
          </li>
        </ul>

        <div className="mt-5 center-y gap-3">
          <QuantityInput />
          <Button
            variant="contained"
            size="lg"
            endIcon="bx-cart"
            onClick={() => console.log("add product to cart")}
            className="w-[320px] font-semibold"
            iconClassName="text-2xl">
            {`${trans("add")} ${trans("to")} ${trans("cart")}`.toUpperCase()}
          </Button>
          <LinkAsButton
            variant="outlined"
            size="lg"
            href={URLS.checkout}
            className="font-semibold">
            {`${trans("buy")} ${trans("now")}`.toUpperCase()}
          </LinkAsButton>
        </div>

        <div className="space-between">
          <div className="center-y gap-x-5">
            <div className="center-y gap-x-2 hover:text-black cursor-pointer duration-150">
              <span className="text-2xl">
                <i className="bx bx-heart"></i>
              </span>
              <span>{`${trans("add")} ${trans("to")} ${trans("wishlist").toLowerCase()}`}</span>
            </div>
            <div className="center-y gap-x-2 hover:text-black cursor-pointer duration-150">
              <span className="text-2xl">
                <i className="bx bx-git-compare"></i>
              </span>
              <span>{`${trans("add")} ${trans("to")} ${trans("compare").toLowerCase()}`}</span>
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
          <p className="text-black">{`100% ${trans("guarantee")} ${trans("safe")} ${trans("checkout")}`}</p>
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
