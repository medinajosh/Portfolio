import React from "react";
import { Link } from "react-router-dom";
import gifImage from "../assets/codding.gif";
import { FaFacebook, FaInstagram, FaPhone } from "react-icons/fa";

const Home = () => {
  return (
    <section className="hero h-screen bg-gradient-to-r from-gray-800 to-black text-white flex items-center justify-center px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between w-full">
        <div className="text-left md:w-1/2">
          <h1
            className="text-6xl font-extrabold mb-6 leading-tight animate__animated animate__fadeIn"
            style={{ animation: "moveLeftToRight 2s ease-out" }}
          >
            Welcome to <span className="text-blue-500">My Portfolio</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-xl mb-8 animate__animated animate__fadeIn animate__delay-1s">
            Hi, I'm Joshua Medina, a web developer passionate about creating
            intuitive, modern, and responsive websites. Let's build something
            amazing together.
          </p>
          <Link
            to="/about"
            className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-full text-white font-medium shadow-lg transition-transform transform hover:scale-105"
          >
            Learn More
          </Link>

          <div className="flex space-x-6 mt-6">
            <a
              href="https://www.facebook.com/profile.php?id=100091386252261"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-blue-600 transition duration-300"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/kyosh_u/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-pink-600 transition duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="tel:+1234567890"
              className="text-3xl hover:text-green-600 transition duration-300"
            >
              <FaPhone />
            </a>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <div className="w-96 h-96 rounded-full bg-gray-700 overflow-hidden shadow-xl">
            <img
              src={gifImage}
              alt="Joshua Medina"
              className="w-full h-full object-cover transition duration-500 hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
