import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  FaHeart,
  FaRegHeart,
  FaPlus,
  FaMinus,
  FaShoppingCart,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

// Import react-toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// NEW: Import Link for navigation
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    title: "Organic Cow Milk",
    description: "Fresh organic cow milk delivered daily.",
    price: 60,
    image:
      "https://images.unsplash.com/photo-1604908176997-75f1b5fbbd63?w=500",
  },
  {
    id: 2,
    title: "Paneer",
    description: "Soft and fresh cottage cheese.",
    price: 250,
    image:
      "https://images.unsplash.com/photo-1587740896339-9696cb8ed621?w=500",
  },
  {
    id: 3,
    title: "Butter",
    description: "Rich homemade butter.",
    price: 180,
    image:
      "https://images.unsplash.com/photo-1562440499-64c9a111f713?w=500",
  },
  {
    id: 4,
    title: "Ghee",
    description: "Pure desi ghee from cow milk.",
    price: 600,
    image:
      "https://images.unsplash.com/photo-1576828831022-ca41c4bbf6b1?w=500",
  },
  {
    id: 5,
    title: "Greek Yogurt",
    description: "Thick and creamy Greek yogurt made from fresh milk.",
    price: 120,
    image:
      "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=500",
  },
  {
    id: 6,
    title: "Cheddar Cheese",
    description: "Aged cheddar cheese with rich flavor.",
    price: 350,
    image:
      "https://images.unsplash.com/photo-1583337130417-f9a5bc4b4e9d?w=500",
  },
  {
    id: 7,
    title: "Lassi",
    description: "Refreshing sweet lassi made with fresh yogurt.",
    price: 80,
    image:
      "https://images.unsplash.com/photo-1630384060421-77ec2a3f8e7c?w=500",
  },
  {
    id: 8,
    title: "Flavored Milk",
    description: "Chilled flavored milk with a hint of vanilla.",
    price: 70,
    image:
      "https://images.unsplash.com/photo-1600180758890-6b94519a5e17?w=500",
  },
  {
    id: 9,
    title: "Cottage Cheese Cubes",
    description: "Freshly cut cottage cheese cubes ready to cook.",
    price: 200,
    image:
      "https://images.unsplash.com/photo-1625944391098-c0f5ec70ffb0?w=500",
  },
  {
    id: 10,
    title: "Whipping Cream",
    description: "Rich whipping cream for desserts and coffee.",
    price: 150,
    image:
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500",
  },
];

const ProductSlider = ({heading}) => {
  const [wishlist, setWishlist] = useState({});
  const [quantity, setQuantity] = useState({});
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const toggleWishlist = (id) => {
    setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const increaseQty = (id) => {
    setQuantity((prev) => ({ ...prev, [id]: (prev[id] || 1) + 1 }));
  };

  const decreaseQty = (id) => {
    setQuantity((prev) => ({
      ...prev,
      [id]: prev[id] > 1 ? prev[id] - 1 : 1,
    }));
  };

  const addToCart = (id) => {
    const qty = quantity[id] || 1;
    toast.success(`Added ${qty} item(s) of product ID: ${id} to cart!`, {
      position: "top-right",
      autoClose: 3000,
    });
  };

  return (
    <div className="px-6 py-8 bg-[#fffaf3] relative">
      {/* Toast Container */}
      <ToastContainer />

      <h2 className="text-3xl font-bold mb-8 text-gray-800 tracking-wide">
        🛒{heading}
      </h2>

      {/* Custom Navigation Buttons */}
      <button
        ref={prevRef}
        className="absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-[#F0BB78] hover:bg-[#e0a85c] text-white p-3 rounded-full shadow-md transition"
      >
        <FaChevronLeft size={18} />
      </button>
      <button
        ref={nextRef}
        className="absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-[#F0BB78] hover:bg-[#e0a85c] text-white p-3 rounded-full shadow-md transition"
      >
        <FaChevronRight size={18} />
      </button>

      <Swiper
        slidesPerView={4}
        spaceBetween={25}
        pagination={{ clickable: true }}
        modules={[Navigation]}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 p-5 flex flex-col relative overflow-hidden">
              
              {/* Link wraps image and title */}
              <Link to={`/product/${product.id}`} className="block group">
                {/* Image Section */}
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-52 object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Price Badge */}
                  <span className="absolute bottom-3 left-3 bg-[#F0BB78] text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                    ₹{product.price}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col mt-4 flex-grow">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {product.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1 flex-grow">
                    {product.description}
                  </p>
                </div>
              </Link>

              {/* Wishlist Button (outside Link) */}
              <button
                className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md text-red-500 hover:scale-110 transition"
                onClick={() => toggleWishlist(product.id)}
              >
                {wishlist[product.id] ? <FaHeart /> : <FaRegHeart />}
              </button>

              {/* Quantity Controls */}
              <div className="flex items-center mt-4 gap-2">
                <button
                  className="p-2 bg-gray-200 rounded hover:bg-gray-300"
                  onClick={() => decreaseQty(product.id)}
                >
                  <FaMinus />
                </button>
                <span className="px-3 font-medium">
                  {quantity[product.id] || 1}
                </span>
                <button
                  className="p-2 bg-gray-200 rounded hover:bg-gray-300"
                  onClick={() => increaseQty(product.id)}
                >
                  <FaPlus />
                </button>
              </div>

              {/* Add to Cart */}
              <button
                onClick={() => addToCart(product.id)}
                className="mt-5 flex items-center justify-center gap-2 bg-[#F0BB78] hover:bg-[#e0a85c] text-white py-2.5 rounded-lg font-medium shadow-md transition"
              >
                <FaShoppingCart /> Add to Cart
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
