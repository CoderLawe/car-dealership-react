import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { GiCarKey } from "react-icons/gi";
const Navbar = () => {
  return (
    <nav className="bg-gray-900 fixed top-0 z-[50] w-full">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-[8px]">
              <GiCarKey className="text-[#F75D34] text-[32px]" />
            <a to="/" className="text-white font-bold text-2xl">
              SosahMotors
            </a>

          </div>


        {/* Search bar */}
          <div className="flex items-center space-x-[8px]">
            <input className="w-[200px] px-2 bg-gray-100 text-black font-serif rounded-[4px]" placeholder="Search for your dream car!"/>
            <AiOutlineSearch className="text-white" />
          </div>
          <div className="flex">
            <a
              to="/"
              className="text-gray-300 hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </a>
            <a
              to="/cars"
              className="text-gray-300 hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium"
            >
              Cars
            </a>
            <a
              to="/about"
              className="text-gray-300 hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </a>
            <a
              to="/contact"
              className="text-gray-300 hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
