"use client";

import Image from "next/image";
import { IoSearchOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header className="flex sticky top-0 z-[10] h-[100px] bg-amber-100 items-center px-6">
      <div className="flex w-full justify-between items-center">
        {/* Left - Logo */}
        <div>
          <nav>
            <a>
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
          <a href="/home" className="!no-underline">Home</a>
          <a href="/about" className="!no-underline">About</a>
          <a href="/services" className="!no-underline">Services</a>
          <a href="/contact" className="!no-underline">Contact</a>
        </nav>

        {/* Right - Search */}
        <div className="flex gap-2 group">
          <IoSearchOutline size={20} />

          <input
            type="text"
            placeholder="Search"
            className="!outline-none text-gray-800 transition-all duration-300 w-0 focus:w-[120px] group-hover:w-[120px]"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
