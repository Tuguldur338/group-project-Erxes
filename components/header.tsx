"use client";

import React from "react";
import Image from "next/image";
import { IoSearchOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <header className="flex sticky top-0 z-[10] h-[100px] bg-amber-100 items-center px-6">
      <div className="flex w-full justify-between items-center">
        {/* Left - Logo */}
        <div>
          <nav>
            <a href="http://localhost:3000/" className="cursor-pointer">
              <Image
                src="/images/baTu-website-logo.png"
                alt="Header logo BaTu png image"
                width={70}
                height={70}
              />
            </a>
          </nav>
        </div>

        {/* Center - Nav links */}
        <nav className="flex gap-8 text-gray-800 font-medium">
          <a href="/home" className="!no-underline">
            Home
          </a>
          <a href="/about" className="!no-underline">
            About
          </a>
          <a href="/services" className="!no-underline">
            Services
          </a>
          <a href="/contact" className="!no-underline">
            Contact
          </a>
        </nav>

        {/* Right - Search */}
        <div className="flex gap-2 group w-[150px]">
          <IoSearchOutline size={20} />

          <input
            type="text"
            placeholder="Search"
            className="!outline-none text-gray-800 transition-all duration-300 w-0 focus:w-[120px] group-hover:w-[120px]"
          />
        </div>

        {/* Social Media */}
        <div className="flex gap-[5px]">
          <div>
            <a href="https://www.facebook.com/batbayar.tuguldur.2025">
              <FaFacebookF
                size={20}
                className="transition-all duration-300 hover:text-white hover:bg-blue-800  rounded-[30px]"
              />
            </a>
          </div>

          <div
            className="
            flex items-center justify-center 
            cursor-pointer 
            transition-all duration-300
            hover:bg-gradient-to-tr 
            hover:from-pink-500 
            hover:via-red-500 
            hover:to-yellow-500
            hover:scale-110
            rounded-[8px]
          "
          >
            <FaInstagram size={20} className="text-gray-800" />
          </div>

          <div></div>

          <div></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
