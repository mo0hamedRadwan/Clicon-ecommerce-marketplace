import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { Link } from "@mongez/react-router";
import { Banner } from "apps/front-office/design-system/types";
import { isRTL } from "apps/front-office/utils/helpers";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

type CarouselPropsType = {
  sliders: Banner[];
};

export default function Carousel({ sliders }: CarouselPropsType) {
  return (
    <Swiper
      dir={isRTL() ? "rtl" : "ltr"}
      // spaceBetween={30}
      // slidesPerView={3}
      // pagination={{
      //   clickable: true,
      // }}
      effect={"fade"}
      // centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      // navigation={true}
      modules={[EffectFade, Autoplay, Pagination, Navigation]}
      className="mySwiper w-full h-full">
      {/* <SwiperSlide>
        <Slide />
      </SwiperSlide>
      <SwiperSlide>
        <Slide />
      </SwiperSlide>
      <SwiperSlide>
        <Slide />
      </SwiperSlide> */}
      {sliders.map(banner => (
        <SwiperSlide key={banner.id}>
          <Link to="/product/:id" className="w-full h-full">
            <img src={banner.image.url} className="w-full h-full" />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
