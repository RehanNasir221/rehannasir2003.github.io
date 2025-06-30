import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import AboutSection from "./AboutSection";
import Skill from "./skill";
import ContactSection from "./ContactSection";
import ComingSoonPage from "./comingsoon";

export default function PortfolioHero() {
  const [section, setSection] = useState("hero");

  useEffect(() => {
    document.title = "Rehan Nasir - Portfolio";
  }, []);

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-6">
        <h1 className="text-blue-500 text-2xl font-bold">Rehan Nasir</h1>
        <ul className="hidden md:flex space-x-8 font-medium">
          <li className="hover:text-blue-500 cursor-pointer" onClick={() => setSection("about")}>About</li>
          <li className="hover:text-blue-500 cursor-pointer" onClick={() => setSection("comingsoon")}>Services</li>
          <li className="hover:text-blue-500 cursor-pointer"><a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
  <button className="hover:text-blue-500 cursor-pointer">Resume</button>
</a>
</li>
          <li className="hover:text-blue-500 cursor-pointer" onClick={() => setSection("skills")}>Skills</li>
          <li className="hover:text-blue-500 cursor-pointer" onClick={() => setSection("comingsoon")}>Projects</li>
          <li className="hover:text-blue-500 cursor-pointer" onClick={() => setSection("contact")}>Contact</li>
        </ul>
        {section !== "hero" && (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:scale-105 transition"
            onClick={() => setSection("hero")}
          >
            Back to Home
          </button>
        )}
      </nav>

      {/* Animated Sections */}
      <AnimatePresence mode="wait">
        {section === "hero" && (
          <motion.section
            key="hero"
            initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.5, rotate: 180 }}
            transition={{ duration: 1 }}
            className="flex flex-col md:flex-row items-center justify-center px-8 py-12 md:py-24 gap-12"
          >
            {/* Left Content */}
            <div className="max-w-xl">
              <p className="text-gray-400 mb-2">HELLO, I'M</p>
              <h2 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="text-blue-500">Rehan</span> Nasir
              </h2>
              <h3 className="text-blue-500 text-2xl md:text-3xl mb-6">
                Experienced Software Engineer<span className="animate-ping text-blue-500">|</span>
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Dynamic and results-oriented Software Engineer! Specializing in architecting scalable solutions and leading transformative projects.
                Proven track record of diagnosing complex challenges, delivering innovative solutions, and fostering collaborative team environments.
              </p>
              <div className="flex space-x-4 mb-8">
                <a href="/Resume.pdf" download="Rehan_Nasir_Resume.pdf">
  <button className="bg-blue-500 px-4 py-2 rounded hover:scale-105 transition">
    Download Resume
  </button>
</a>

                <button
  className="border border-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition"
  onClick={() => setSection("contact")}
>
  Contact Me
</button>

              </div>
              <div className="flex space-x-4 text-2xl">
                <FaGithub className="hover:text-blue-500 cursor-pointer" />
                <FaLinkedin className="hover:text-blue-500 cursor-pointer" />
                <FaTwitter className="hover:text-blue-500 cursor-pointer" />
                <FaEnvelope className="hover:text-blue-500 cursor-pointer" />
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-blue-500 flex items-center justify-center overflow-hidden">
                <img src="https://via.placeholder.com/300x300.png?text=Your+Photo" alt="Profile" className="object-cover w-full h-full" />
              </div>
            </div>
          </motion.section>
        )}

        {section === "about" && (
          <motion.section
            key="about"
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 1 }}
            className="px-8 py-16"
          >
            <AboutSection />
          </motion.section>
        )}

        {section === "skills" && (
          <motion.section
            key="skills"
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 1 }}
            className="px-8 py-16"
          >
            <Skill />
          </motion.section>
        )}

        {section === "contact" && (
  <motion.section
    key="contact"
    initial={{ opacity: 0, x: 300 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -300 }}
    transition={{ duration: 1 }}
    className="px-8 py-16"
  >
    <ContactSection />
  </motion.section>
)}
 
 {section === "comingsoon" && (
  <motion.section
    key="comingsoon"
    initial={{ opacity: 0, x: 300 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -300 }}
    transition={{ duration: 1 }}
    className="px-8 py-16"
  >
    <ComingSoonPage />
  </motion.section>
)}

      </AnimatePresence>
    </div>
  );
}
