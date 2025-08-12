// src/components/ShoppingCartLottie.jsx
import React from "react";
import Lottie from "lottie-react";
import shoppingCartAnimation from "../assets/shopping-cart.json";

const ShoppingCartLottie = () => {
  return (
    <div className="bg-[#fffaf3]"
      style={{ 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        // full viewport height to center vertically too
      }}
    >
      <div style={{ width: 300, maxWidth: "80%" }}>
        <Lottie animationData={shoppingCartAnimation} loop={true} />
      </div>
    </div>
  );
};

export default ShoppingCartLottie;
