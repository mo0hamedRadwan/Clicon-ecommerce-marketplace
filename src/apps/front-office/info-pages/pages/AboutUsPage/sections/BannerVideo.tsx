import bannerVideo from "assets/videos/banner.mp4";
import { useRef, useState } from "react";

export default function BannerVideo() {
  const [playVideo, setPlayVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayVideo = () => {
    const paused = videoRef.current?.paused;
    if (paused) {
      videoRef.current.play();
      setPlayVideo(true);
    } else {
      videoRef.current?.pause();
      setPlayVideo(false);
    }
  };

  return (
    <div className="relative py-10 h-[440px]">
      <video className="w-full h-full object-cover" muted ref={videoRef}>
        <source src={bannerVideo} type="video/mp4" />
      </video>
      <div className="absolute top-1/2 -translate-y-1/2 left-10  flex flex-col gap-y-5 text-white">
        <h3 className="w-[300px] text-3xl">
          Your trusted and reliable retail shop
        </h3>
        <p className="w-[400px]">
          Praesent sed semper metus. Nunc aliquet dolor mauris, et fringilla
          elit gravida eget. Nunc consequat auctor urna a placerat.
        </p>
        <button
          type="button"
          className="w-16 h-16 bg-orange-450 text-white text-4xl rounded-full"
          onClick={() => handlePlayVideo()}>
          {playVideo ? (
            <i className="bx bx-pause"></i>
          ) : (
            <i className="bx bx-play"></i>
          )}
        </button>
      </div>
    </div>
  );
}
