// src/pages/Login.jsx
import React, { useState } from "react";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaFacebookF,
  FaGithub,
} from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSocialLogin = (provider) => {
    console.log(`Logging in with ${provider}...`);
    // Here you can integrate Firebase, Auth0, etc.
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#f9f6f1] to-[#F0BB78]/30 font-poppins">
      {/* Modal-like Container */}
      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Left Section - Image with Overlay */}
        <div
          className="hidden md:flex w-1/2 bg-cover bg-center relative"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1650&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#F0BB78]/80 to-black/70 flex flex-col justify-center p-10 text-white">
            <h1 className="text-4xl font-bold mb-4">Welcome Back!</h1>
            <p className="text-lg opacity-90">
              Sign in to continue to your account and explore amazing features.
            </p>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <div className="w-full max-w-md mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">
              Login
            </h2>

            <form className="space-y-5">
              {/* Email Field */}
              <div className="relative">
                <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F0BB78] transition"
                />
              </div>

              {/* Password Field with Toggle */}
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

              {/* Sign In Button */}
              <button
                type="submit"
                className="w-full py-2 rounded-lg text-white bg-[#F0BB78] hover:bg-[#d9a565] transition duration-200 shadow-md"
              >
                Sign In
              </button>
            </form>

            {/* OR Divider */}
            <div className="flex items-center my-6">
              <hr className="flex-1 border-gray-300" />
              <span className="mx-4 text-gray-500 text-sm">OR</span>
              <hr className="flex-1 border-gray-300" />
            </div>

            {/* Social Login Buttons */}
            <div className="flex flex-col gap-3">
              <button
                onClick={() => handleSocialLogin("Google")}
                className="flex items-center justify-center gap-3 w-full py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
              >
                <FaGoogle className="text-red-500" /> Continue with Google
              </button>

              <button
                onClick={() => handleSocialLogin("Facebook")}
                className="flex items-center justify-center gap-3 w-full py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
              >
                <FaFacebookF className="text-blue-600" /> Continue with Facebook
              </button>

              <button
                onClick={() => handleSocialLogin("GitHub")}
                className="flex items-center justify-center gap-3 w-full py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
              >
                <FaGithub className="text-gray-800" /> Continue with GitHub
              </button>
            </div>

            {/* Sign Up Redirect */}
            <p className="mt-6 text-center text-gray-600">
              Don’t have an account?{" "}
              <a
                href="/signup"
                className="text-[#F0BB78] font-semibold hover:underline"
              >
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
