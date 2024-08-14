import { trans } from "@mongez/localization";
import { Category } from "apps/front-office/design-system/types";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { Link } from "@mongez/react-router";
import { useWindowDimensions } from "apps/front-office/design-system/hooks/use-window-dimensions";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type ShopCategoriesPropsType = {
  categories: Category[];
};

export default function ShopCategories({
  categories,
}: ShopCategoriesPropsType) {
  const swiperRef = useRef<any>(null);
  const dimensions = useWindowDimensions();
  return (
    <div className="container py-10 flex flex-col items-center gap-y-10">
      <h2 className="text-3xl font-semibold">{`${trans("shop")} ${trans("categories")}`}</h2>
      <div className="relative w-full h-60">
        <Swiper
          onSwiper={swiper => {
            swiperRef.current = swiper;
          }}
          slidesPerView={
            dimensions.width > 1280
              ? 6
              : dimensions.width > 1024
                ? 4
                : dimensions.width > 640
                  ? 3
                  : 2
          }
          spaceBetween={40}
          loop={true}
          className="mySwiper w-full h-full">
          {categories.map((category, index) => (
            <SwiperSlide key={index}>
              <div className="p-5 w-60 h-60 cursor-pointer border">
                <Link
                  to={"category/:id"}
                  className="flex-center flex-col gap-y-5">
                  <img src={category.image} alt="" className="w-36 h-36" />
                  <h3 className="text-lg font-semibold">{category.name}</h3>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="">
          <button
            className="z-20 absolute top-20 -left-6 w-12 h-12 text-4xl font-light bg-orange-450 text-white rounded-full"
            onClick={() => swiperRef.current.slidePrev()}>
            <i className="bx bx-left-arrow-alt"></i>
          </button>
          <button
            className="z-20 absolute top-20 -right-6 w-12 h-12 text-4xl font-light bg-orange-450 text-white rounded-full"
            onClick={() => swiperRef.current.slideNext()}>
            <i className="bx bx-right-arrow-alt"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
