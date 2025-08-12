import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import backgroundImage from '../assets/parallax.jpg'; // Adjust path if needed

const ParallaxScroll = () => {
  return (
    <div
      className="w-full h-[50vh] bg-fixed bg-center bg-cover flex flex-col items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.6)),url(${backgroundImage})`,
      }}
    >
      <h1 className="text-white text-3xl sm:text-5xl md:text-6xl font-semibold text-center px-4 mb-6">
        Exciting Offers Coming Soon !!
      </h1>

      <a
        href="#"
        className="inline-flex items-center bg-white text-black font-semibold px-6 py-3 rounded-md shadow-md hover:bg-yellow-400 hover:text-white transition-colors duration-300"
      >
        Grab Now <FaArrowRight className="ml-2" />
      </a>
    </div>
  );
};

export default ParallaxScroll;
