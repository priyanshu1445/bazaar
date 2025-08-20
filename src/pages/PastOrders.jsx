// src/pages/PastOrders.jsx
import React, { useState } from "react";
import { FaBox, FaTruck, FaCheckCircle, FaRedo } from "react-icons/fa";

const PastOrders = () => {
  const [orders] = useState([
    {
      id: "ORD12345",
      date: "2025-08-15",
      status: "Delivered",
      total: "$120.50",
      items: [
        { name: "Wireless Headphones", qty: 1, price: "$80" },
        { name: "Phone Case", qty: 2, price: "$20" },
      ],
    },
    {
      id: "ORD12344",
      date: "2025-07-20",
      status: "Shipped",
      total: "$59.99",
      items: [{ name: "Smart Watch Strap", qty: 1, price: "$59.99" }],
    },
    {
      id: "ORD12343",
      date: "2025-07-01",
      status: "Processing",
      total: "$250.00",
      items: [{ name: "Mechanical Keyboard", qty: 1, price: "$250" }],
    },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff8f0] via-[#fdf2e3] to-[#F0BB78]/30 py-10 px-4 md:px-10">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100 p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <FaBox className="text-[#F0BB78]" /> Past Orders
        </h2>

        <div className="space-y-6">
          {orders.map((order, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              {/* Order Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b pb-4 mb-4">
                <div>
                  <p className="text-gray-700 font-semibold">Order ID: {order.id}</p>
                  <p className="text-gray-500 text-sm">Date: {order.date}</p>
                </div>
                <span
                  className={`mt-2 sm:mt-0 inline-flex items-center px-3 py-1 text-sm rounded-full font-medium ${
                    order.status === "Delivered"
                      ? "bg-green-100 text-green-700"
                      : order.status === "Shipped"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {order.status === "Delivered" && <FaCheckCircle className="mr-1" />}
                  {order.status === "Shipped" && <FaTruck className="mr-1" />}
                  {order.status === "Processing" && <FaBox className="mr-1" />}
                  {order.status}
                </span>
              </div>

              {/* Order Items */}
              <div className="space-y-3">
                {order.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm"
                  >
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-500">Qty: {item.qty}</p>
                    </div>
                    <p className="font-semibold text-gray-700">{item.price}</p>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between mt-4">
                <p className="text-lg font-semibold text-gray-800">
                  Total: {order.total}
                </p>
                <button className="flex items-center gap-2 bg-[#F0BB78] text-white px-5 py-2 rounded-lg shadow hover:bg-[#e0a865] transition">
                  <FaRedo /> Reorder
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PastOrders;
