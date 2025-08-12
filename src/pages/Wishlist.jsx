import React, { useState } from "react";
import { FaHeartBroken, FaShoppingCart, FaTrashAlt, FaHome } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const wishlistItemsData = [
  {
    id: 1,
    name: "Premium Leather Wallet",
    price: "₹2,499",
    image: "https://placehold.co/400x400",
  },
  {
    id: 2,
    name: "Classic Analog Watch",
    price: "₹7,999",
    image: "https://placehold.co/400x400",
  },
];

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState(wishlistItemsData);

  const notifySuccess = (message) =>
    toast.success(message, {
      position: "top-right",
    });

  const notifyError = (message) =>
    toast.error(message, {
      position: "top-right",
    });

  const removeItem = (id, showToast = true) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== id));
    if (showToast) {
      notifyError("Removed from Wishlist");
    }
  };

  const moveToCart = (item) => {
    removeItem(item.id, false);
    notifySuccess(`${item.name} moved to Cart`);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-8">
      {/* Toast Container */}
      <ToastContainer />

      {/* Page Header */}
      <div className="max-w-6xl mx-auto mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">My Wishlist</h1>
          <p className="text-gray-500">Items you’ve saved for later</p>
        </div>
        {wishlistItems.length > 0 && (
          <span className="text-gray-600 mt-4 sm:mt-0">
            Total Items: <strong>{wishlistItems.length}</strong>
          </span>
        )}
      </div>

      {/* Wishlist Items */}
      {wishlistItems.length > 0 ? (
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <button
                  onClick={() => removeItem(item.id)}
                  className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-red-100 transition-colors"
                  title="Remove from Wishlist"
                >
                  <FaTrashAlt className="text-red-500" />
                </button>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                <p className="text-gray-500 mb-4">{item.price}</p>
                <button
                  onClick={() => moveToCart(item)}
                  className="w-full flex items-center justify-center gap-2 font-medium py-2 px-4 rounded-lg shadow-md transition-colors"
                  style={{ backgroundColor: "#F0BB78", color: "#000" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#e0a864")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "#F0BB78")
                  }
                >
                  <FaShoppingCart /> Move to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // Empty Wishlist State
        <div className="flex flex-col items-center justify-center text-center mt-20">
          <FaHeartBroken className="text-6xl text-gray-300 mb-4 animate-pulse" />
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Your wishlist is empty
          </h2>
          <p className="text-gray-500 mb-6">
            Browse products and save your favorites here.
          </p>
          <a
            href="/"
            className="flex items-center gap-2 font-medium py-3 px-6 rounded-lg shadow-md transition-colors"
            style={{ backgroundColor: "#F0BB78", color: "#000" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#e0a864")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#F0BB78")
            }
          >
            <FaHome /> Continue Shopping
          </a>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
