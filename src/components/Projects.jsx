import React from "react";

const Projects = React.forwardRef((props, ref) => (
    <section ref={ref} className="projects h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white py-20 px-6">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-5xl font-extrabold text-blue-500 mb-6 animate__animated animate__fadeIn">
        My Projects
      </h2>
      <p className="text-lg leading-relaxed text-gray-300 mb-12 animate__animated animate__fadeIn animate__delay-1s">
        Here are some of the projects I’ve worked on, demonstrating my skills in web development, design, and problem-solving.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Project 1 */}
        <div className="bg-gray-700 p-8 rounded-2xl shadow-xl hover:scale-105 transition duration-500 transform hover:bg-gray-600">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-blue-300 mb-4">Siomai Madness</h3>
            <p className="text-sm text-gray-400 mb-4">
            The Siomai Madness Website is an engaging and user-friendly platform designed to showcase the delicious
             offerings of the popular siomai food brand, Siomai Madness. With its vibrant design and intuitive navigation, 
             the website aims to attract customers, enhance brand visibility, and make ordering siomai a seamless experience.
            </p>
          </div>
          <a
            href="https://drive.google.com/drive/u/0/folders/1X1_Ryjwr8fP0p27mgJW8DfahaA3NMgAz"
            className="text-blue-500 hover:text-blue-400 font-medium transition duration-300"
          >
            View Details
          </a>
        </div>
        {/* Project 2 */}
        <div className="bg-gray-700 p-8 rounded-2xl shadow-xl hover:scale-105 transition duration-500 transform hover:bg-gray-600">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-blue-300 mb-4">UI/UX Desing of POS System</h3>
            <p className="text-sm text-gray-400 mb-4">
            The UI/UX design of this Point of Sale (POS) System prioritizes simplicity, efficiency, and user-friendliness.
             It features an intuitive interface with a clean layout, enabling users to perform sales transactions quickly 
             and effortlessly.
            </p>
          </div>
          <a
            href="#"
            className="text-blue-500 hover:text-blue-400 font-medium transition duration-300"
          >
            View Details
          </a>
        </div>
        {/* Project 3 */}
        <div className="bg-gray-700 p-8 rounded-2xl shadow-xl hover:scale-105 transition duration-500 transform hover:bg-gray-600">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-blue-300 mb-4">POS System</h3>
            <p className="text-sm text-gray-400 mb-4">
            A streamlined and user-friendly POS system design focused on efficiency, featuring an intuitive layout, 
            touch-friendly controls, quick navigation, and a seamless checkout process to enhance operational productivity 
            and user experience.
            </p>
          </div>
          <a
            href="#"
            className="text-blue-500 hover:text-blue-400 font-medium transition duration-300"
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  </section>
));

export default Projects;
