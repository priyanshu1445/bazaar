import React from "react";
import { useNavigate } from "react-router-dom";

const CategoryGrid = ({ categories }) => {
  const navigate = useNavigate();

  const handleCategoryClick = (slug) => {
    navigate(`/category/${slug}`);
  };

  return (
    <div className="w-full px-6 py-10 bg-white">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Explore Our Categories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-shadow duration-300 select-none"
            onClick={() => handleCategoryClick(cat.slug)}
          >
            <div className="h-32 overflow-hidden rounded-t-3xl">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-4 flex flex-col justify-between h-32">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {cat.name}
              </h3>
              <p className="text-gray-500 text-sm flex-grow">{cat.description}</p>
              <button className="mt-3 self-start bg-[#F0BB78] hover:bg-[#e0a85c] text-white font-semibold px-4 py-1.5 rounded-lg shadow-md transition text-sm">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;