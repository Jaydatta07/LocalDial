import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-orange-700 text-orange-100 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="https://images.squarespace-cdn.com/content/v1/586ea31b9f74567913da6257/1609880453141-E1KENPFR7OK6QZTYVP08/LD+icon.png"
            alt="Logo"
            className="h-10 w-10 mr-2 rounded-full"
          />
          <span className="text-xl font-bold">LocalDial</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-6 ml-auto">
        
          <a
            href="/"
            className="hover:text-orange-200 transition duration-300"
          >
            Home
         
          </a>
          <a
            href="/AboutUs"
            className="hover:text-orange-200 transition duration-300"
          >
            About Us
          </a>
          <a
            href="/Advertise"
            className="hover:text-orange-200 transition duration-300"
          >
            Advertise
          </a>
          <a
            href="#contact"
            className="hover:text-orange-200 transition duration-300"
          >
            Contact
          </a>
          {/* Sign Up Button */}
          <a
            href="/signup"
            className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition duration-300 shadow-md"
          >
            Sign Up
          </a>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button className="focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-orange-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

