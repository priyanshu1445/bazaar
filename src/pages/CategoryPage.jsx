import React from "react";
import { useParams } from "react-router-dom";
import ProductSlider from "../components/ProductSlider";
import HeroSlider from "../components/HeroSlider";

const categoryData = {
  "dairy-products": {
    name: "Dairy Products",
    description: "Explore more fresh dairy products here.",
    products: [
      { id: 1, name: "Fresh Milk", price: "₹50" },
      { id: 2, name: "Paneer", price: "₹250" },
      { id: 3, name: "Ghee", price: "₹600" }
    ]
  },
  "fresh-fruits": {
    name: "Fresh Fruits",
    description: "Explore more fresh fruits here.",
    products: [
      { id: 4, name: "Mango", price: "₹300" },
      { id: 5, name: "Banana", price: "₹50" }
    ]
  }
};

const CategoryPage = () => {
  const { categoryId } = useParams();
  const category = categoryData[categoryId];

  if (!category) {
    return <p className="p-6">Category not found.</p>;
  }

  return (
    <div >
      <HeroSlider />
  
  +
  

  
     <ProductSlider heading={category.name} />
    </div>
  );
};

export default CategoryPage;
