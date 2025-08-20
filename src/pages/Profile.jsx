// src/pages/Profile.jsx
import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaEdit, FaCheck, FaTimes, FaInfoCircle, FaHeart, FaShoppingCart, FaBox } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+91 9876543210",
    address: "New Delhi, India",
    bio: "Software engineer passionate about building beautiful and functional web applications.",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [tempProfile, setTempProfile] = useState({});

  const handleEdit = () => {
    setTempProfile(profile);
    setIsEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTempProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    if (!tempProfile.name || !tempProfile.email || !tempProfile.phone || !tempProfile.address) {
      toast.error("Please fill in all fields.", { position: "top-right", autoClose: 3000 });
      return;
    }
    setProfile(tempProfile);
    setIsEditing(false);
    toast.success("Profile updated successfully!", { position: "top-right", autoClose: 2000 });
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const membershipStatus = "Premium Member";

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff8f0] via-[#fdf2e3] to-[#F0BB78]/30 py-10 px-4 md:px-10">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
        <div className="grid md:grid-cols-3">
          {/* Left Section */}
          <div className="bg-[#F0BB78] flex flex-col items-center justify-center py-12 px-6 relative">
            <button
              onClick={isEditing ? handleCancel : handleEdit}
              className="absolute top-4 right-4 bg-white p-2 rounded-full shadow cursor-pointer hover:scale-105 transition"
            >
              {isEditing ? <FaTimes className="text-red-500" /> : <FaEdit className="text-[#F0BB78]" />}
            </button>
            <img
              src="https://i.pravatar.cc/150"
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-white shadow-md hover:scale-105 transition-transform duration-300"
            />
            <h2 className="text-2xl font-bold text-white mt-4">{isEditing ? tempProfile.name : profile.name}</h2>
            <p className="text-white/80">{membershipStatus}</p>

            {/* Quick Navigation */}
            <div className="mt-6 flex flex-col gap-3 w-full">
              <button
                onClick={() => navigate("/wishlist")}
                className="bg-white/90 hover:bg-white text-[#F0BB78] font-medium px-4 py-2 rounded-lg shadow flex items-center gap-2 justify-center transition"
              >
                <FaHeart /> Wishlist
              </button>
              <button
                onClick={() => navigate("/cart")}
                className="bg-white/90 hover:bg-white text-[#F0BB78] font-medium px-4 py-2 rounded-lg shadow flex items-center gap-2 justify-center transition"
              >
                <FaShoppingCart /> Cart
              </button>
              <button
                onClick={() => navigate("/past-orders")}
                className="bg-white/90 hover:bg-white text-[#F0BB78] font-medium px-4 py-2 rounded-lg shadow flex items-center gap-2 justify-center transition"
              >
                <FaBox /> Past Orders
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-span-2 p-8 space-y-6">
            {/* Personal Information Section */}
            <h3 className="text-xl font-semibold flex items-center gap-2 border-b pb-2">
              <FaUser className="text-[#F0BB78]" /> Personal Information
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg shadow-sm hover:shadow-md transition">
                <FaEnvelope className="text-[#F0BB78]" />
                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={tempProfile.email}
                    onChange={handleChange}
                    className="bg-transparent w-full outline-none"
                  />
                ) : (
                  <span>{profile.email}</span>
                )}
              </div>
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg shadow-sm hover:shadow-md transition">
                <FaPhone className="text-[#F0BB78]" />
                {isEditing ? (
                  <input
                    type="tel"
                    name="phone"
                    value={tempProfile.phone}
                    onChange={handleChange}
                    className="bg-transparent w-full outline-none"
                  />
                ) : (
                  <span>{profile.phone}</span>
                )}
              </div>
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg shadow-sm hover:shadow-md transition sm:col-span-2">
                <FaMapMarkerAlt className="text-[#F0BB78]" />
                {isEditing ? (
                  <input
                    type="text"
                    name="address"
                    value={tempProfile.address}
                    onChange={handleChange}
                    className="bg-transparent w-full outline-none"
                  />
                ) : (
                  <span>{profile.address}</span>
                )}
              </div>
            </div>

            {/* Bio Section */}
            <h3 className="text-xl font-semibold flex items-center gap-2 border-b pb-2 mt-8">
              <FaInfoCircle className="text-[#F0BB78]" /> About Me
            </h3>
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
              {isEditing ? (
                <textarea
                  name="bio"
                  value={tempProfile.bio}
                  onChange={handleChange}
                  className="bg-transparent w-full h-24 outline-none resize-none"
                />
              ) : (
                <p className="text-gray-700">{profile.bio}</p>
              )}
            </div>

            {/* Action Buttons */}
            {isEditing ? (
              <div className="flex gap-4 pt-4">
                <button
                  onClick={handleUpdate}
                  className="bg-[#F0BB78] text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-[#e0a865] transition shadow-md"
                >
                  <FaCheck /> Save Changes
                </button>
                <button
                  onClick={handleCancel}
                  className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-300 transition shadow-md"
                >
                  <FaTimes /> Cancel
                </button>
              </div>
            ) : (
              <div className="flex gap-4 pt-4">
                <button
                  onClick={handleEdit}
                  className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-300 transition shadow-md"
                >
                  <FaEdit /> Edit Profile
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Profile;
