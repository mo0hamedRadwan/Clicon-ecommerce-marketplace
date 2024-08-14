import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type ProductSliderImagesPropsType = {
  images: string[];
};

export default function ProductSliderImages({
  images,
}: ProductSliderImagesPropsType) {
  const swiperRef = useRef<any>(null);
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="w-[620px] flex flex-col items-center gap-y-5">
      <div className="w-full h-[460px] p-10 border border-gray-200">
        <img src={images[currentImage]} alt="" className="w-full h-full" />
      </div>

      <div className="relative w-full h-24">
        <Swiper
          onSwiper={swiper => {
            swiperRef.current = swiper;
          }}
          slidesPerView={6}
          loop={true}
          // spaceBetween={30}
          // centeredSlides={true}
          // navigation={true}
          // modules={[Navigation]}
          className="mySwiper w-full h-full">
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div
                className={`w-24 h-24 cursor-pointer border ${currentImage === index ? "border-orange-450" : "border-gray-200"}`}
                onClick={() => setCurrentImage(index)}>
                <img src={image} alt="" className="w-full h-full" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="">
          <button
            className="z-20 absolute top-6 -left-6 w-12 h-12 text-4xl font-light bg-orange-450 text-white rounded-full"
            onClick={() => swiperRef.current.slidePrev()}>
            <i className="bx bx-left-arrow-alt"></i>
          </button>
          <button
            className="z-20 absolute top-6 -right-6 w-12 h-12 text-4xl font-light bg-orange-450 text-white rounded-full"
            onClick={() => swiperRef.current.slideNext()}>
            <i className="bx bx-right-arrow-alt"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
