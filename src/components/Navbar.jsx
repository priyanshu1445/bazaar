import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingCart, User, Search } from "lucide-react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const menuItems = [
    { title: "Milk Products", path: "/milk" },
    { title: "Snacks", path: "/snacks" },
    { title: "Grocery", path: "/grocery" },
  ];

  const dropdownItem = {
    title: "Trending Offers",
    path: "/offers",
    subLinks: ["Discounts", "Buy 1 Get 1", "New Arrivals"],
  };

  return (
    <nav className="sticky top-0 z-50" style={{ backgroundColor: "#F0BB78" }}>
      <div className="container mx-auto flex items-center justify-between px-4 py-3 gap-6 relative">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-black">
          GAONBAZAR
        </Link>

        {/* Main Links */}
        <ul className="hidden md:flex items-center gap-6">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link to={item.path} className="text-gray-800 hover:text-black font-medium">
                {item.title}
              </Link>
            </li>
          ))}

          {/* Dropdown */}
          <li className="relative group">
            <Link to={dropdownItem.path} className="flex items-center gap-1 text-gray-800 hover:text-black font-medium">
              {dropdownItem.title} <FaChevronDown className="text-xs" />
            </Link>
            <ul className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg rounded-md w-48 z-50">
              {dropdownItem.subLinks.map((sub, i) => (
                <li key={i}>
                  <Link
                    to={`${dropdownItem.path}/${sub.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    {sub}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>

        {/* Search */}
        <div className="hidden md:flex items-center border border-gray-400 rounded-lg overflow-hidden bg-white">
          <input type="text" placeholder="Search for products..." className="px-3 py-2 outline-none w-64" />
          <button className=" p-2 text-gray-500 ">
            <Search size={18} />
          </button>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <Link to="/wishlist" className="relative">
            <Heart className="w-6 h-6 text-gray-700 hover:text-black" />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1">3</span>
          </Link>

          <Link to="/cart" className="relative">
            <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-black" />
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full px-1">2</span>
          </Link>

          <Link to="/profile">
            <User className="w-6 h-6 text-gray-700 hover:text-black" />
          </Link>

          <div className="hidden md:flex gap-2">
            <Link to="/login" className="px-3 py-1 border border-black text-black rounded hover:bg-black hover:text-white transition">
              Login
            </Link>
            <Link to="/signup" className="px-3 py-1 bg-black text-white rounded hover:bg-gray-900 transition">
              Sign Up
            </Link>
          </div>

          <button className="md:hidden text-gray-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg px-4 py-3 space-y-3 transition-all duration-300 ease-in-out z-[999] ${
          mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        {/* Search */}
        <div className="flex items-center border border-gray-400 rounded-lg overflow-hidden">
          <input type="text" placeholder="Search for products..." className="px-3 py-2 outline-none w-full" />
          <button className=" p-2 text-gray-500">
            <Search size={18} />
          </button>
        </div>

        {/* Direct Links */}
        {menuItems.map((item, idx) => (
          <Link key={idx} to={item.path} className="block py-2 border-b hover:text-black">
            {item.title}
          </Link>
        ))}

        {/* Mobile Dropdown */}
        <div>
          <button
            className="flex items-center justify-between w-full py-2 font-semibold border-b"
            onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
          >
            {dropdownItem.title}
            <FaChevronDown
              className={`transition-transform duration-300 ${mobileDropdownOpen ? "rotate-180" : ""}`}
            />
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              mobileDropdownOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <ul className="pl-4 pt-2">
              {dropdownItem.subLinks.map((sub, i) => (
                <li key={i}>
                  <Link
                    to={`${dropdownItem.path}/${sub.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block py-1 text-sm hover:text-black"
                  >
                    {sub}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Auth Buttons */}
        <div className="flex gap-2 pt-2">
          <Link
            to="/login"
            className="w-full text-center border border-black text-black rounded py-1 hover:bg-black hover:text-white transition"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="w-full text-center bg-black text-white rounded py-1 hover:bg-gray-900 transition"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
