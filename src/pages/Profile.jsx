// src/pages/Profile.jsx
import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaEdit,
  FaCheck,
  FaTimes,
  FaInfoCircle,
  FaHeart,
  FaShoppingCart,
  FaBox,
} from "react-icons/fa";
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
    <div className="min-h-screen bg-gradient-to-br from-[#fff8f0] via-[#fdf2e3] to-[#F0BB78]/30 py-8 px-4 sm:px-6 md:px-10">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
        <div className="md:grid md:grid-cols-3">
          {/* Left Section */}
          <div className="bg-[#F0BB78] flex flex-col items-center justify-center py-10 px-6 relative md:rounded-l-2xl">
            <button
              onClick={isEditing ? handleCancel : handleEdit}
              className="absolute top-4 right-4 bg-white p-2 rounded-full shadow cursor-pointer hover:scale-105 transition"
            >
              {isEditing ? <FaTimes className="text-red-500" /> : <FaEdit className="text-[#F0BB78]" />}
            </button>
            <img
              src="https://i.pravatar.cc/150"
              alt="Profile"
              className="w-28 h-28 rounded-full border-4 border-white shadow-md hover:scale-105 transition-transform duration-300"
            />
            <h2 className="text-xl font-bold text-white mt-4 text-center">
              {isEditing ? tempProfile.name : profile.name}
            </h2>
            <p className="text-white/80 text-sm">{membershipStatus}</p>

            {/* Quick Navigation */}
            <div className="mt-6 flex flex-col gap-3 w-full">
              <button
                onClick={() => navigate("/wishlist")}
                className="bg-white/90 hover:bg-white text-[#F0BB78] font-medium px-4 py-2 rounded-lg shadow flex items-center gap-2 justify-center transition text-sm sm:text-base"
              >
                <FaHeart /> Wishlist
              </button>
              <button
                onClick={() => navigate("/cart")}
                className="bg-white/90 hover:bg-white text-[#F0BB78] font-medium px-4 py-2 rounded-lg shadow flex items-center gap-2 justify-center transition text-sm sm:text-base"
              >
                <FaShoppingCart /> Cart
              </button>
              <button
                onClick={() => navigate("/past-orders")}
                className="bg-white/90 hover:bg-white text-[#F0BB78] font-medium px-4 py-2 rounded-lg shadow flex items-center gap-2 justify-center transition text-sm sm:text-base"
              >
                <FaBox /> Past Orders
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-span-2 p-6 space-y-6">
            {/* Personal Information Section */}
            <h3 className="text-lg font-semibold flex items-center gap-2 border-b pb-2">
              <FaUser className="text-[#F0BB78]" /> Personal Information
            </h3>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg shadow-sm hover:shadow-md transition text-sm">
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
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg shadow-sm hover:shadow-md transition text-sm">
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
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg shadow-sm hover:shadow-md transition text-sm">
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
            <h3 className="text-lg font-semibold flex items-center gap-2 border-b pb-2 mt-6">
              <FaInfoCircle className="text-[#F0BB78]" /> About Me
            </h3>
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition text-sm">
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
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button
                  onClick={handleUpdate}
                  className="bg-[#F0BB78] text-white px-5 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-[#e0a865] transition shadow-md text-sm"
                >
                  <FaCheck /> Save
                </button>
                <button
                  onClick={handleCancel}
                  className="bg-gray-200 text-gray-800 px-5 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-300 transition shadow-md text-sm"
                >
                  <FaTimes /> Cancel
                </button>
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button
                  onClick={handleEdit}
                  className="bg-gray-200 text-gray-800 px-5 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-300 transition shadow-md text-sm"
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