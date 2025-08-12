// src/pages/Signup.jsx
import React, { useState } from "react";
import {
  FaEnvelope,
  FaLock,
  FaUser,
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaFacebookF,
  FaGithub,
} from "react-icons/fa";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSocialSignup = (provider) => {
    console.log(`Signing up with ${provider}...`);
    // Integrate Firebase, Auth0, etc.
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#f9f6f1] to-[#F0BB78]/30 font-poppins">
      {/* Modal-like Container */}
      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        
        {/* Left Section - Image with Overlay */}
        <div
          className="hidden md:flex w-1/2 bg-cover bg-center relative"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1650&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#F0BB78]/80 to-black/70 flex flex-col justify-center p-10 text-white">
            <h1 className="text-4xl font-bold mb-4">Join Us Today</h1>
            <p className="text-lg opacity-90">
              Create your account to start using our amazing platform.
            </p>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <div className="w-full max-w-md mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">
              Sign Up
            </h2>

            <form className="space-y-5">
              {/* Full Name Field */}
              <div className="relative">
                <FaUser className="absolute top-3 left-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F0BB78] transition"
                />
              </div>

              {/* Email Field */}
              <div className="relative">
                <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F0BB78] transition"
                />
              </div>

              {/* Password Field */}
              <div className="relative">
                <FaLock className="absolute top-3 left-3 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full pl-10 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F0BB78] transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              {/* Confirm Password Field */}
              <div className="relative">
                <FaLock className="absolute top-3 left-3 text-gray-400" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  className="w-full pl-10 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F0BB78] transition"
                />
                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition"
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              {/* Terms & Conditions */}
              <div className="flex items-center text-gray-600 text-sm">
                <input
                  type="checkbox"
                  className="mr-2 accent-[#F0BB78]"
                />
                <span>
                  I agree to the{" "}
                  <a
                    href="/terms"
                    className="text-[#F0BB78] hover:underline"
                  >
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a
                    href="/privacy"
                    className="text-[#F0BB78] hover:underline"
                  >
                    Privacy Policy
                  </a>.
                </span>
              </div>

              {/* Sign Up Button */}
              <button
                type="submit"
                className="w-full py-2 rounded-lg text-white bg-[#F0BB78] hover:bg-[#d9a565] transition duration-200 shadow-md"
              >
                Create Account
              </button>
            </form>

            {/* OR Divider */}
            <div className="flex items-center my-6">
              <hr className="flex-1 border-gray-300" />
              <span className="mx-4 text-gray-500 text-sm">OR</span>
              <hr className="flex-1 border-gray-300" />
            </div>

            {/* Social Sign Up Buttons */}
            <div className="flex flex-col gap-3">
              <button
                onClick={() => handleSocialSignup("Google")}
                className="flex items-center justify-center gap-3 w-full py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
              >
                <FaGoogle className="text-red-500" /> Sign up with Google
              </button>

              <button
                onClick={() => handleSocialSignup("Facebook")}
                className="flex items-center justify-center gap-3 w-full py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
              >
                <FaFacebookF className="text-blue-600" /> Sign up with Facebook
              </button>

          
            </div>

            {/* Login Redirect */}
            <p className="mt-6 text-center text-gray-600">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-[#F0BB78] font-semibold hover:underline"
              >
                Log in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
