import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import Slide from "apps/front-office/design-system/components/Slide";
import { isRTL } from "apps/front-office/utils/helpers";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

export default function Carousel() {
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
      <SwiperSlide>
        <Slide />
      </SwiperSlide>
      <SwiperSlide>
        <Slide />
      </SwiperSlide>
      <SwiperSlide>
        <Slide />
      </SwiperSlide>
    </Swiper>
  );
}
