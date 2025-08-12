import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CategoryCarousel = ({ categories }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const navigate = useNavigate();

  const handleCategoryClick = (slug) => {
    navigate(`/category/${slug}`);
  };

  return (
    <div className="w-full px-6 py-10 bg-white relative">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Explore Our Categories
      </h2>

      {/* Navigation buttons */}
      <button
        ref={prevRef}
        className="absolute top-1/2 left-0 -translate-y-1/2 bg-[#F0BB78] hover:bg-[#e0a85c] text-white p-3 rounded-full shadow-md z-20 transition"
        aria-label="Previous"
      >
        <FaChevronLeft size={20} />
      </button>
      <button
        ref={nextRef}
        className="absolute top-1/2 right-0 -translate-y-1/2 bg-[#F0BB78] hover:bg-[#e0a85c] text-white p-3 rounded-full shadow-md z-20 transition"
        aria-label="Next"
      >
        <FaChevronRight size={20} />
      </button>

      <Swiper
        slidesPerView={4}
        spaceBetween={24}
        modules={[Navigation, Pagination]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        pagination={{ clickable: true }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 12 },
          640: { slidesPerView: 2, spaceBetween: 16 },
          1024: { slidesPerView: 4, spaceBetween: 24 },
        }}
      >
        {categories.map((cat, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-shadow duration-300 select-none"
              onClick={() => handleCategoryClick(cat.slug)}
            >
              <div className="h-48 overflow-hidden rounded-t-3xl">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5 flex flex-col justify-between h-40">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {cat.name}
                </h3>
                <p className="text-gray-500 flex-grow">{cat.description}</p>
                <button className="mt-4 self-start bg-[#F0BB78] hover:bg-[#e0a85c] text-white font-semibold px-5 py-2 rounded-lg shadow-md transition">
                  Shop Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategoryCarousel;
