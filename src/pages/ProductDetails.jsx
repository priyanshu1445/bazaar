// src/pages/ProductDetails.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { FaCheckCircle, FaTruck, FaLock } from "react-icons/fa";

const products = [
  {
    id: 1,
    title: "Organic Cow Milk",
    description: "Fresh organic cow milk delivered daily.",
    price: 60,
    images: [
      "https://images.unsplash.com/photo-1604908176997-75f1b5fbbd63?w=800",
      "https://images.unsplash.com/photo-1600180758890-6b94519a5e17?w=800",
      "https://images.unsplash.com/photo-1625944391098-c0f5ec70ffb0?w=800",
    ],
  },
  {
    id: 2,
    title: "Paneer",
    description: "Soft and fresh cottage cheese.",
    price: 250,
    images: [
      "https://images.unsplash.com/photo-1587740896339-9696cb8ed621?w=800",
      "https://images.unsplash.com/photo-1630384060421-77ec2a3f8e7c?w=800",
      "https://images.unsplash.com/photo-1562440499-64c9a111f713?w=800",
    ],
  },
  // Add more products...
];

export default function ProductDetails() {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));
  const [mainImage, setMainImage] = useState(product?.images?.[0] || "");

  if (!product) {
    return <h2 className="text-center text-red-500 mt-10">Product not found</h2>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* LEFT COLUMN */}
      <div className="space-y-4">
        {/* Main Image */}
        <div className="w-full h-[500px] bg-white rounded-lg shadow-md overflow-hidden flex items-center justify-center">
          <img
            src={mainImage}
            alt={product.title}
            className="max-h-full max-w-full object-contain"
          />
        </div>

        {/* Thumbnails with Swiper */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={4}
          navigation
          className="mt-4"
        >
          {product.images.map((img, index) => (
            <SwiperSlide key={index}>
              <div
                className={`border-2 rounded-lg overflow-hidden cursor-pointer ${
                  img === mainImage ? "border-[#F0BB78]" : "border-transparent"
                }`}
                onClick={() => setMainImage(img)}
              >
                <img
                  src={img}
                  alt={`${product.title} ${index + 1}`}
                  className="w-full h-24 object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Product Description */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-3">{product.title}</h1>
          <p className="text-gray-600">{product.description}</p>

          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2">Product Details</h2>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              <li>Fresh & 100% Organic</li>
              <li>Farm-to-home delivery</li>
              <li>High nutritional value</li>
              <li>No added preservatives</li>
            </ul>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN (Sticky) */}
      <div className="lg:sticky lg:top-20 h-fit bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-gray-900">{product.title}</h2>
        <p className="text-lg text-gray-500 mt-2">{product.description}</p>
        <p className="text-2xl font-semibold text-green-600 mt-4">
          ₹{product.price}
        </p>

        {/* Actions */}
        <div className="mt-6 space-y-4">
          <button className="w-full bg-[#F0BB78] hover:bg-[#e0a85c] text-white py-3 rounded-lg font-semibold shadow-md transition">
            Add to Cart
          </button>
          <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold shadow-md transition">
            Buy Now
          </button>
        </div>

        {/* Extra Info */}
        <div className="mt-8 border-t pt-4 space-y-2 text-sm text-gray-500">
          <p className="flex items-center gap-2">
            <FaCheckCircle className="text-green-500" />
            Free delivery on orders over ₹500
          </p>
          <p className="flex items-center gap-2">
            <FaTruck className="text-green-500" />
            Delivery within 24 hours
          </p>
          <p className="flex items-center gap-2">
            <FaLock className="text-green-500" />
            Secure payment options
          </p>
        </div>
      </div>
    </div>
  );
}
