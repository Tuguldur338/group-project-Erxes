"use client";

import React from "react";
import Image from "next/image";
import { IoSearchOutline } from "react-icons/io5";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <header className="flex sticky top-0 z-50 h-[100px] bg-gradient-to-r from-green-200 via-green-300 to-green-100 shadow-md items-center px-6">
      <div className="flex w-full justify-between items-center max-w-screen-xl mx-auto">
        {/* Left - Logo */}
        <div className="flex items-center">
          <a href="http://localhost:3000/" className="cursor-pointer">
            <Image
              src="/images/baTu-website-logo.png"
              alt="BaTu Logo"
              width={70}
              height={70}
              className="hover:scale-105 transition-transform duration-300"
            />
          </a>
        </div>

        {/* Center - Nav links */}
        <nav className="flex gap-10 text-gray-900 font-semibold text-lg relative">
          {/* Services Dropdown */}
          <div className="relative group">
            <a
              href="#"
              className="cursor-pointer relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-gray-900 after:transition-all after:duration-300 hover:after:w-full"
            >
              Services
            </a>

            {/* Dropdown content */}
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 z-50">
              <a
                href="#"
                className="block px-4 py-2 text-gray-900 hover:bg-green-100 hover:text-green-800"
              >
                Full Truckload
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-900 hover:bg-green-100 hover:text-green-800"
              >
                Part Truckload
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-900 hover:bg-green-100 hover:text-green-800"
              >
                LTL Shipping
              </a>
            </div>
          </div>

          <a
            href="/about"
            className="relative cursor-pointer after:content-[''] after:block after:w-0 after:h-[2px] after:bg-gray-900 after:transition-all after:duration-300 hover:after:w-full"
          >
            About
          </a>

          <a
            href="/contact"
            className="relative cursor-pointer after:content-[''] after:block after:w-0 after:h-[2px] after:bg-gray-900 after:transition-all after:duration-300 hover:after:w-full"
          >
            Contact
          </a>
        </nav>

        {/* Right - Search */}
        <div className="flex items-center gap-2 absolute left-[60%] group">
          <IoSearchOutline size={22} className="text-gray-800" />

          <input
            type="text"
            placeholder="Search..."
            className="transition-all duration-300 w-0 focus:w-[150px] group-hover:w-[150px] px-2 py-1 rounded-md border border-gray-300 focus:border-gray-600 focus:ring-0 outline-none"
          />
        </div>

        {/* Social Media */}
        <div className="flex gap-3 ml-6">
          <a
            href="https://www.facebook.com/batbayar.tuguldur.2025"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-blue-800 hover:bg-blue-800 hover:text-white transition-all duration-300 shadow-md"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-pink-500 hover:bg-gradient-to-tr hover:from-pink-500 hover:via-red-500 hover:to-yellow-400 hover:text-white transition-all duration-300 shadow-md"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
