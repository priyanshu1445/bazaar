import React from "react";
import { FaCheckCircle, FaTruck, FaBox, FaCreditCard } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom"; // ✅ Import navigation
import "react-toastify/dist/ReactToastify.css";

const PlaceOrder = () => {
  const navigate = useNavigate();

  const handleTrackOrder = () => {
    navigate("/track-order"); // ✅ Go to TrackOrder page
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-4xl w-full">
        {/* Order Success Header */}
        <div className="text-center">
          <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-800">Order Placed Successfully!</h1>
          <p className="text-gray-500 mt-2">
            Thank you for shopping with us. Your order is being processed.
          </p>
        </div>

        {/* Order Summary */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="bg-gray-100 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span>Product Name</span>
                <span>$45.00</span>
              </li>
              <li className="flex justify-between">
                <span>Shipping</span>
                <span>$5.00</span>
              </li>
              <li className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>$50.00</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-100 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Delivery Details</h2>
            <p className="text-gray-600">John Doe</p>
            <p className="text-gray-600">123 Main Street, New York, NY</p>
            <p className="text-gray-600">Estimated Delivery: 15th Aug, 2025</p>
            <div className="mt-4 flex items-center gap-3 text-blue-600">
              <FaCreditCard /> Payment Method: Credit Card
            </div>
          </div>
        </div>

        {/* Order Progress */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Order Status</h2>
          <div className="flex justify-between items-center">
            <div className="flex flex-col items-center">
              <FaCheckCircle className="text-green-500 text-2xl" />
              <span className="mt-1 text-sm">Placed</span>
            </div>
            <div className="w-20 border-t-2 border-gray-300"></div>
            <div className="flex flex-col items-center">
              <FaTruck className="text-gray-400 text-2xl" />
              <span className="mt-1 text-sm">Shipped</span>
            </div>
            <div className="w-20 border-t-2 border-gray-300"></div>
            <div className="flex flex-col items-center">
              <FaBox className="text-gray-400 text-2xl" />
              <span className="mt-1 text-sm">Delivered</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex gap-4">
          <button
            onClick={handleTrackOrder}
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg flex-1"
          >
            Track Order
          </button>
          <button
            onClick={() => window.location.href = "/"}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 px-6 rounded-lg flex-1"
          >
            Back to Shop
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default PlaceOrder;
