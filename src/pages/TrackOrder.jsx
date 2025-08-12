// src/pages/TrackOrder.jsx
import React from "react";
import {
  FaBoxOpen,
  FaTruckMoving,
  FaCheckCircle,
  FaShoppingCart,
} from "react-icons/fa";

const steps = [
  { id: 1, label: "Order Placed", icon: <FaShoppingCart />, status: "completed" },
  { id: 2, label: "Shipped", icon: <FaTruckMoving />, status: "active" },
  { id: 3, label: "Out for Delivery", icon: <FaBoxOpen />, status: "pending" },
  { id: 4, label: "Delivered", icon: <FaCheckCircle />, status: "pending" },
];

const TrackOrder = () => {
  const estimatedDate = "15th Aug, 2025";
  const orderId = "#ORD123456";

  const handleContinueShopping = () => {
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 flex items-center justify-center px-4">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-4xl">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Track Your Order
        </h1>
        <p className="text-center text-gray-500 mb-6">
          Tracking details for <span className="font-semibold">{orderId}</span>
        </p>

        {/* Progress Bar */}
        <div className="flex items-center justify-between relative mb-10">
          {/* Line */}
          <div className="absolute top-6 left-0 w-full h-1 bg-gray-200 z-0"></div>
          <div
            className="absolute top-6 left-0 h-1 bg-gradient-to-r from-green-500 to-green-400 z-10 transition-all duration-500"
            style={{
              width: `${
                ((steps.filter((step) => step.status === "completed").length +
                  steps.filter((step) => step.status === "active").length -
                  1) /
                  (steps.length - 1)) *
                100
              }%`,
            }}
          ></div>

          {steps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col items-center z-20 w-20 text-center"
            >
              <div
                className={`flex items-center justify-center w-12 h-12 rounded-full text-white text-xl shadow-md ${
                  step.status === "completed"
                    ? "bg-green-500"
                    : step.status === "active"
                    ? "bg-yellow-500 animate-pulse"
                    : "bg-gray-300"
                }`}
              >
                {step.icon}
              </div>
              <span className="mt-2 text-sm text-gray-700">{step.label}</span>
            </div>
          ))}
        </div>

        {/* Delivery ETA */}
        <div className="bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-xl p-5 text-center mb-8">
          <p className="text-lg font-semibold text-green-700">
            Estimated Delivery: {estimatedDate}
          </p>
          <p className="text-sm text-gray-600 mt-1">
            We’ll notify you when your package is out for delivery.
          </p>
        </div>

        {/* Order Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left */}
          <div className="border rounded-xl p-5 shadow-sm bg-gray-50">
            <h2 className="font-bold text-gray-800 mb-3">Shipping Address</h2>
            <p className="text-sm text-gray-600">
              John Doe
              <br />
              123 Main Street, Springfield
              <br />
              NY, USA
              <br />
              +1 234 567 890
            </p>
          </div>

          {/* Right */}
          <div className="border rounded-xl p-5 shadow-sm bg-gray-50">
            <h2 className="font-bold text-gray-800 mb-3">Items in Order</h2>
            <div className="flex items-center gap-4">
              <img
                src="https://placehold.co/80x80"
                alt="Product"
                className="rounded-lg border"
              />
              <div>
                <p className="text-sm font-medium">Wireless Headphones</p>
                <p className="text-xs text-gray-500">Qty: 1</p>
              </div>
            </div>
          </div>
        </div>

        {/* Support */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Need help?{" "}
            <span className="text-green-600 font-medium cursor-pointer hover:underline">
              Contact Support
            </span>
          </p>
        </div>

        {/* Continue Shopping Button */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={handleContinueShopping}
            className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-md transition duration-300"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;
