// src/components/Footer.jsx

import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-[#ededed] py-10 px-6 border-t border-[#333]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Navigation Links */}
        <div>
          <h4 className="text-lg font-semibold text-[#c1440e] mb-4">Pages</h4>
        <div>
            <ul className="space-y-2">
            <li><Link to="/" className="hover:text-[#c1440e] transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-[#c1440e] transition">About</Link></li>
          </ul>
        </div>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold text-[#c1440e] mb-4">Connect with me</h4>
          <div className="flex space-x-4">
            <a href="https://facebook.com/jasleogutierrez" target="_blank" rel="noopener noreferrer" className="hover:text-[#c1440e] transition">
              <FaFacebookF size={20} />
            </a>
            <a href="https://instagram.com/jasper.gutierrezz" target="_blank" rel="noopener noreferrer" className="hover:text-[#c1440e] transition">
              <FaInstagram size={20} />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-[#c1440e] transition">
              <FaLinkedinIn size={20} />
            </a>
            <a href="https://github.com/jasleorez" target="_blank" rel="noopener noreferrer" className="hover:text-[#c1440e] transition">
              <FaGithub size={20} />
            </a>
            <a href="https://youtube.com/@LeoooGutierrez" target="_blank" rel="noopener noreferrer" className="hover:text-[#c1440e] transition">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>

        {/* Signature or Short Bio */}
        <div className="text-sm text-gray-400">
          <p>
            Designed & developed by <span className="text-[#ededed] font-semibold">Jasper Leonard Gutierrez</span>
          </p>
          <p className="mt-2">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

