import React from "react";
import aboutImage from "../assets/josh.jpg"; // Replace with the path to your image

const About = React.forwardRef((props, ref) => (
  <section ref={ref} className="about h-screen bg-black text-white py-20 relative overflow-hidden">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
      {/* Left Column (Image) */}
      <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center relative">
        <div className="w-96 h-96 bg-gradient-to-r from-teal-400 to-blue-500 shadow-xl overflow-hidden transform transition-all hover:scale-110 hover:rotate-12 rounded-lg">
          <img
            src={aboutImage} // Path to your image
            alt="Joshua C. Medina"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Floating Circles for extra visual interest */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-teal-500 opacity-20 rounded-full animate__animated animate__pulse animate__infinite"></div>
        <div className="absolute bottom-0 right-0 w-56 h-56 bg-blue-500 opacity-20 rounded-full animate__animated animate__pulse animate__infinite animate__delay-1s"></div>
      </div>

      {/* Right Column (Text Content) */}
      <div className="text-center md:text-left md:w-1/2 md:pl-16 space-y-6 animate__animated animate__fadeIn animate__delay-1s">
        <h2 className="text-5xl font-extrabold text-white mb-4 leading-tight animate__animated animate__fadeIn animate__delay-2s">
          About Me
        </h2>
        <p className="text-lg text-gray-200 leading-relaxed mb-4">
          Hello! I'm Joshua C. Medina, a passionate web developer who focuses on creating modern, intuitive, and responsive websites. I enjoy using technology to solve real-world problems and make a positive impact on users' digital experiences.
        </p>
        <p className="text-lg text-gray-200 leading-relaxed mb-6 animate__animated animate__fadeIn animate__delay-3s">
          I specialize in front-end development with a focus on creating beautiful, functional user interfaces using HTML, CSS, JavaScript, and React. I also enjoy diving into back-end technologies to build scalable, full-stack web applications.
        </p>
        <div className="flex justify-center md:justify-start">
          <a
            href="https://www.facebook.com/profile.php?id=100091386252261"
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full shadow-xl transition-all transform hover:scale-105"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  </section>
));

export default About;
