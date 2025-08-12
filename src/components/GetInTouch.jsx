import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  const accentColor = "#F0BB78";

  return (
    <section className="max-w-7xl mx-auto my-20 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left side - Contact Info */}
        <div className="p-8 md:p-12 rounded-3xl shadow-lg bg-white relative overflow-hidden">
          {/* Decorative shape */}
          <div
            className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-20"
            style={{ background: accentColor }}
          ></div>
          <h2
            className="text-5xl font-extrabold mb-6 tracking-wide"
            style={{ color: "#1a1a1a" }}
          >
            Get in Touch
          </h2>
          <p className="mb-6 text-gray-600 text-lg leading-relaxed">
            Have questions or want to learn more? We’re here to help! Send us a
            message and we’ll get back to you as soon as possible.
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <FaPhoneAlt size={24} style={{ color: accentColor }} />
              <span className="text-gray-700 font-medium">
                +1 (234) 567-8901
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope size={24} style={{ color: accentColor }} />
              <span className="text-gray-700 font-medium">
                contact@yourdomain.com
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt size={24} style={{ color: accentColor }} />
              <span className="text-gray-700 font-medium">
                123 Main Street, Your City, Country
              </span>
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="relative rounded-3xl shadow-xl bg-white p-8 md:p-12">
          {/* Decorative blob */}
          <div
            className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full blur-3xl opacity-30"
            style={{ background: accentColor }}
          ></div>

          {submitted && (
            <div
              className="mb-8 px-6 py-4 rounded-lg text-center font-semibold shadow-md"
              style={{
                backgroundColor: accentColor,
                color: "#000",
              }}
            >
              Thank you for reaching out! We will get back to you shortly.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 font-semibold text-gray-700"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 placeholder-gray-400 focus:outline-none focus:border-[#F0BB78] focus:ring-1 focus:ring-[#F0BB78] transition"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block mb-2 font-semibold text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 placeholder-gray-400 focus:outline-none focus:border-[#F0BB78] focus:ring-1 focus:ring-[#F0BB78] transition"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block mb-2 font-semibold text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 placeholder-gray-400 resize-none focus:outline-none focus:border-[#F0BB78] focus:ring-1 focus:ring-[#F0BB78] transition"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full font-extrabold py-3 rounded-lg shadow-lg transition"
              style={{
                background: `linear-gradient(90deg, ${accentColor} 0%, #d9a65c 100%)`,
                color: "#000",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = `linear-gradient(90deg, #d9a65c 0%, ${accentColor} 100%)`)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = `linear-gradient(90deg, ${accentColor} 0%, #d9a65c 100%)`)
              }
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
