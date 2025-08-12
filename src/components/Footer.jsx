import React from 'react';
import { Link } from 'react-router-dom';
import footerImage from "../assets/footer-banner.png"
import {
  RiFacebookFill,
  RiTwitterXLine,
  RiInstagramLine,
  RiLinkedinBoxFill,
} from '@remixicon/react';

const Foooter = () => {
  return (
    <footer  style={{
        backgroundImage: `url(${footerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }} 
      className="bg-cover sm:h-[60vh]  text-black bg-center bg-no-repeat   py-10 px-5" >
      <div className="max-w-7xl mx-auto font-medium grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">GaonBazar</h2>
          <p className="text-black text-sm">
  GaonBazar — Bringing fresh, quality groceries from local farms straight to your home.
Fast delivery, trusted products, and the best prices — all in one place.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-black text-sm">
            <li><Link to="/" className="hover:text-amber-800 hover:underline">Home</Link></li>
            <li><Link to="/about" className="hover:text-amber-800 hover:underline">About</Link></li>
            <li><Link to="/services" className="hover:text-amber-800 hover:underline">category</Link></li>
            {/* <li><Link to="/contact" className="hover:text-amber-800 hover:underline">Contact</Link></li> */}
          </ul>
        </div>

        {/* Address */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Address</h2>
          <p className="text-black text-sm">
            123 Business Street,<br />
            Tech City, IN 560001<br />
            Email: contact@mycompany.com<br />
            Phone: +91 9876543210
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4 text-2xl">
            <Link to="#" className="hover:text-blue-500"><RiFacebookFill size={24} /></Link>
            <Link to="#" className="hover:text-sky-400"><RiTwitterXLine size={24} /></Link>
            <Link to="#" className="hover:text-pink-500"><RiInstagramLine size={24} /></Link>
            <Link to="#" className="hover:text-blue-400"><RiLinkedinBoxFill size={24} /></Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center tex-black text-sm">
        © {new Date().getFullYear()} GaonBazar. All rights reserved.
      </div>
    </footer>
  );
};

export default Foooter;
