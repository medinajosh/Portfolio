import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaUserAlt, FaCode, FaEnvelope } from "react-icons/fa"; // Optional: Import icons for the links

const Navbar = () => {
  return (
    <header className="bg-gray-900 shadow-lg sticky top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center px-6 py-4 md:px-10 md:py-6">
        {/* Logo/Branding */}
        <h1 className="text-2xl font-bold text-white tracking-wide">
          My <span className="text-blue-500">Portfolio</span>
        </h1>

        {/* Navbar Links */}
        <nav>
          <ul className="flex space-x-6 md:space-x-12">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-300 py-2 px-3 rounded-lg ${
                    isActive ? "text-blue-500 border-b-2 border-blue-500" : ""
                  }`
                }
              >
                <FaHome className="mr-2" /> Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-300 py-2 px-3 rounded-lg ${
                    isActive ? "text-blue-500 border-b-2 border-blue-500" : ""
                  }`
                }
              >
                <FaUserAlt className="mr-2" /> About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-300 py-2 px-3 rounded-lg ${
                    isActive ? "text-blue-500 border-b-2 border-blue-500" : ""
                  }`
                }
              >
                <FaCode className="mr-2" /> Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-300 py-2 px-3 rounded-lg ${
                    isActive ? "text-blue-500 border-b-2 border-blue-500" : ""
                  }`
                }
              >
                <FaEnvelope className="mr-2" /> Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
