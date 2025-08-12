import React, { useState } from "react";
import { FaTrash, FaPlus, FaMinus, FaShoppingCart } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Premium Leather Backpack",
      price: 89.99,
      image: "https://placehold.co/150x150",
      quantity: 1,
    },
    {
      id: 2,
      name: "Wireless Headphones",
      price: 129.99,
      image: "https://placehold.co/150x150",
      quantity: 2,
    },
  ]);

  const navigate = useNavigate();

  const increaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
    toast.info("Quantity increased");
  };

  const decreaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
    toast.info("Quantity decreased");
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    toast.error("Item removed from cart");
  };

  const totalPrice = cartItems
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.warning("Your cart is empty");
      return;
    }
    navigate("/checkout");
  };

  const buyNow = () => {
    if (cartItems.length === 0) {
      toast.warning("No items to buy");
      return;
    }
    toast.success("Proceeding to buy now...");
  };

  return (
    <div
      className="min-h-screen py-10 px-5"
      style={{
        background: "linear-gradient(135deg, #F0BB78 0%, #fff 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <FaShoppingCart /> Your Cart
        </h2>
        {cartItems.length === 0 ? (
          <p className="text-center text-lg">Your cart is empty.</p>
        ) : (
          <>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b pb-4"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <p className="text-gray-600">${item.price}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="bg-gray-200 p-2 rounded hover:bg-gray-300"
                    >
                      <FaMinus />
                    </button>
                    <span className="font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="bg-gray-200 p-2 rounded hover:bg-gray-300"
                    >
                      <FaPlus />
                    </button>
                  </div>

                  <div className="flex items-center gap-4">
                    <p className="font-semibold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4">
              <h3 className="text-xl font-bold">Total: ${totalPrice}</h3>
              <div className="flex gap-4">
                <button
                  onClick={handleCheckout}
                  className="bg-[#F0BB78] hover:bg-[#e0a95f] text-white px-6 py-3 rounded-lg shadow-lg font-semibold"
                >
                  Checkout
                </button>
                <button
                  onClick={buyNow}
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg font-semibold"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </>
        )}
      </div>
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default Cart;
