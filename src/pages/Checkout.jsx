import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaCreditCard,
  FaPaypal,
  FaGooglePay,
  FaTag,
  FaTruck,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCity,
  FaMailBulk,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const cartTotal = 2500;
  const shippingCharge = 100;
  const totalPrice = cartTotal - discount + shippingCharge;
  const navigate = useNavigate();

  const applyCoupon = () => {
    if (coupon.toLowerCase() === "save10") {
      setDiscount(cartTotal * 0.1);
      toast.success("✅ Coupon applied! 10% discount.");
    } else {
      toast.error("❌ Invalid coupon code.");
    }
  };

  const placeOrder = () => {
    toast.success("🎉 Order placed successfully!");
    setTimeout(() => {
      navigate("/place-order");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 py-10 px-4 md:px-16">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-10 text-center">
        🛒 Checkout
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Billing Details */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h3 className="text-2xl font-semibold mb-6 text-gray-700">
            Billing Details
          </h3>
          <form className="space-y-5">
            {[
              { placeholder: "Full Name", icon: <FaUser /> },
              { placeholder: "Email Address", icon: <FaEnvelope />, type: "email" },
              { placeholder: "Phone Number", icon: <FaPhone />, type: "tel" },
              { placeholder: "Street Address", icon: <FaMapMarkerAlt /> },
              { placeholder: "City", icon: <FaCity /> },
              { placeholder: "Postal Code", icon: <FaMailBulk /> },
            ].map((field, index) => (
              <div key={index} className="relative">
                <span className="absolute left-4 top-3 text-gray-400 text-lg">
                  {field.icon}
                </span>
                <input
                  type={field.type || "text"}
                  placeholder={field.placeholder}
                  className="w-full border border-gray-200 p-3 pl-12 rounded-lg focus:ring-2 focus:ring-green-500 outline-none transition-all"
                />
              </div>
            ))}

            {/* Shipping Method */}
            <div>
              <h4 className="font-medium mb-2 flex items-center gap-2 text-gray-700">
                <FaTruck /> Shipping Method
              </h4>
              <select className="w-full border border-gray-200 p-3 rounded-lg focus:ring-2 focus:ring-green-500 outline-none transition-all">
                <option>Standard - ₹100</option>
                <option>Express - ₹200</option>
              </select>
            </div>

            {/* Payment Method */}
            <div>
              <h4 className="font-medium mb-2 text-gray-700">Payment Method</h4>
              <div className="space-y-3">
                {[
                  { label: "Credit / Debit Card", icon: <FaCreditCard /> },
                  { label: "PayPal", icon: <FaPaypal /> },
                  { label: "Google Pay / UPI", icon: <FaGooglePay /> },
                ].map((method, idx) => (
                  <label
                    key={idx}
                    className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:border-green-500 transition"
                  >
                    <input type="radio" name="payment" className="accent-green-500" />
                    <span className="text-lg text-gray-600 flex items-center gap-2">
                      {method.icon} {method.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 h-fit sticky top-20">
          <h3 className="text-2xl font-semibold mb-6 text-gray-700">
            Order Summary
          </h3>
          <div className="space-y-3 text-gray-600">
            <div className="flex justify-between">
              <span>Cart Total</span>
              <span>₹{cartTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>₹{shippingCharge.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-green-600 font-medium">
              <span>Discount</span>
              <span>- ₹{discount.toFixed(2)}</span>
            </div>
            <hr />
            <div className="flex justify-between font-bold text-xl text-gray-800">
              <span>Total</span>
              <span>₹{totalPrice.toFixed(2)}</span>
            </div>
          </div>

          {/* Coupon Code */}
          <div className="mt-6 flex gap-2">
            <input
              type="text"
              placeholder="Coupon Code"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              className="border border-gray-200 p-3 rounded-lg flex-grow focus:ring-2 focus:ring-yellow-500 outline-none"
            />
            <button
              type="button"
              onClick={applyCoupon}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg flex items-center gap-1 shadow-md"
            >
              <FaTag /> Apply
            </button>
          </div>

          {/* Place Order Button */}
          <button
            onClick={placeOrder}
            className="mt-8 w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-semibold text-lg shadow-md transition-all"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
