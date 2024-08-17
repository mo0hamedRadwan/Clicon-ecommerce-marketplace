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
  const numOfSlides =
    dimensions.width > 1400
      ? 6
      : dimensions.width > 1200
        ? 5
        : dimensions.width > 1024
          ? 4
          : dimensions.width > 640
            ? 3
            : 2;

  return (
    <div className="container py-10">
      <h2 className="mb-10 text-center text-3xl font-semibold">{`${trans("shop")} ${trans("categories")}`}</h2>
      <div className="relative h-60 w-[calc(100%-20px)]">
        <Swiper
          onSwiper={swiper => {
            swiperRef.current = swiper;
          }}
          slidesPerView={numOfSlides}
          spaceBetween={20}
          loop={true}
          className="mySwiper w-full h-full">
          {categories.map((category, index) => (
            <SwiperSlide key={index}>
              <div className="w-56 h-56">
                <Link
                  to={"category/:id"}
                  className="p-5 w-full h-full flex-center flex-col gap-y-5 border border-gray-150 hover:border-orange-450 duration-150">
                  <img src={category.image} alt="" className="w-36 h-36" />
                  <h3 className="text-lg font-semibold text-center">
                    {category.name}
                  </h3>
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
