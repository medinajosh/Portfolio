import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (section) => {
    const refs = {
      about: aboutRef,
      projects: projectsRef,
      contact: contactRef,
    };
    refs[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home scrollToSection={scrollToSection} />} />
        <Route path="/about" element={<About ref={aboutRef} />} />
        <Route path="/projects" element={<Projects ref={projectsRef} />} />
        <Route path="/contact" element={<Contact ref={contactRef} />} />
      </Routes>
    </Router>
  );
};

export default App;
