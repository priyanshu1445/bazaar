import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroSlider = () => {
  const slides = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600",
      title: "Fresh Milk Delivered",
      subtitle: "From our farm to your doorstep",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1514996937319-344454492b37?w=1600",
      title: "Organic Dairy Products",
      subtitle: "Pure and healthy goodness",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1548946526-f69e2424cf45?w=1600",
      title: "Quality You Can Trust",
      subtitle: "Every drop is tested for quality",
    },
  ];

  return (
    <div className="w-full h-[90vh]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-[90vh] flex flex-col items-center justify-center text-white text-center bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
             
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
