import React from "react";
import { motion } from "framer-motion";
import background from "../assets/background.png";
import img from "../assets/img.png";
import Card from "../components/Card";
import bottom from "../assets/bottom.png";
import "../App.css";

// Import icons
import {
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaJs,
  FaHtml5,
  FaDatabase,
} from "react-icons/fa";
import { SiTailwindcss, SiExpress } from "react-icons/si";

const HeroSection = () => {
  const techStack = [
    { icon: <FaHtml5 className="text-orange-500" />, name: "HTML5" },
    { icon: <FaCss3Alt className="text-blue-600" />, name: "CSS3" },
    { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
    { icon: <FaReact className="text-blue-500" />, name: "React" },
    { icon: <SiTailwindcss className="text-cyan-400" />, name: "Tailwind CSS" },
    { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
    { icon: <SiExpress className="text-gray-300" />, name: "Express.js" },
    { icon: <FaDatabase className="text-green-700" />, name: "MongoDB" },
  ];

  return (
    <>
      {/* Hero Section */}
      <div
        id="home"
        className="relative bg-cover bg-center h-screen bg-no-repeat flex flex-col items-center gap-5 justify-center px-4 text-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <motion.img
          src={img}
          alt="Profile"
          className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-56 lg:h-56 xl:w-64 xl:h-64"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />

        <motion.h1
          className="font-extrabold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Hi, my name is
        </motion.h1>

        <motion.h1
          className="font-bold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Shashank
        </motion.h1>

        <motion.h1
          className="capitalize font-bold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Full Stack Developer
        </motion.h1>

        <motion.button
          className="bg-black rounded-lg py-2 px-6 text-sm sm:text-base text-white font-bold border border-white mt-4"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          Get In Touch
        </motion.button>
      </div>

      {/* Tech Stack Section */}
      <section
        id="about"
        className="relative bg-black py-16 px-4 min-h-screen overflow-hidden"
      >
        <motion.h2
          className="text-4xl font-bold text-white text-center mb-4 relative z-10"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.3 }}
        >
          Technologies I Work With
        </motion.h2>

        <motion.p
          className="text-white text-center text-lg max-w-3xl mx-auto mb-12 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ amount: 0.3 }}
        >
          I'm <span className="text-pink-500 font-semibold">Shashank</span>, a
          passionate Full Stack Developer skilled in building responsive,
          performant, and modern web applications using the technologies below.
          From frontend to backend, I enjoy bringing ideas to life in the
          browser.
        </motion.p>

        {/* Tech Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto relative z-10"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ amount: 0.3 }}
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ amount: 0.3 }}
            >
              <Card icon={tech.icon} Techname={tech.name} />
            </motion.div>
          ))}
        </motion.div>

        {/* Glow Image Below */}
        <img
          src={bottom}
          alt="Glow effect"
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[600px] sm:w-[700px] md:w-[800px] opacity-60 z-0 pointer-events-none"
        />
      </section>
    </>
  );
};

export default HeroSection;
