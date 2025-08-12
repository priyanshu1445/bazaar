import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const TrendingSlider = () => {
  const slides = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1587486913048-cf2f1b35186c?auto=format&fit=crop&w=1200&q=80",
      title: "Fresh Grocery Deals",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1598514983771-5cd2a971fba8?auto=format&fit=crop&w=1200&q=80",
      title: "Dairy & Milk Offers",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1574226516831-e1dff420e37f?auto=format&fit=crop&w=1200&q=80",
      title: "Weekend Snacking",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1475090169767-e6f847684a2d?auto=format&fit=crop&w=1200&q=80",
      title: "Spice up Your Pantry",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto mt-12 px-4">
      <h2 className="text-4xl font-extrabold mb-8 text-center  ">
        ✨ Premium Picks & Hot Trends
      </h2>

      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          bulletClass:
            "swiper-pagination-bullet bg-yellow-400 opacity-50 hover:opacity-100 transition",
          bulletActiveClass: "swiper-pagination-bullet-active opacity-100",
        }}
        loop
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 16 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group border border-yellow-400/30 backdrop-blur-sm">
              {/* Image */}
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />

              {/* Overlay with glass effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="backdrop-blur-md bg-white/10 p-4 rounded-xl border border-white/20 shadow-lg">
                  <h3 className="text-lg font-bold text-yellow-300 drop-shadow-md tracking-wide">
                    {slide.title}
                  </h3>
                  <p className="text-xs text-gray-200 mt-1">
                    Explore exclusive deals & offers
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TrendingSlider;
