import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-green-200 via-green-300 to-green-100 text-gray-900 px-8 py-12 shadow-inner">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-gray-900 text-xl font-bold mb-6">
          Questions? Contact us.
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
          <a
            href="#"
            className="transition-all duration-300 hover:text-white hover:bg-green-400 px-3 py-1 rounded-md"
          >
            FAQ
          </a>
          <a
            href="#"
            className="transition-all duration-300 hover:text-white hover:bg-green-400 px-3 py-1 rounded-md"
          >
            Help Center
          </a>
          <a
            href="#"
            className="transition-all duration-300 hover:text-white hover:bg-green-400 px-3 py-1 rounded-md"
          >
            Terms of Use
          </a>
          <a
            href="#"
            className="transition-all duration-300 hover:text-white hover:bg-green-400 px-3 py-1 rounded-md"
          >
            Privacy
          </a>
        </div>

        <p className="text-xs text-gray-700">
          &copy; 2025 BaTu, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
