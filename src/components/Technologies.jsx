import React from "react";
import Card from "./Card";
import { FaReact, FaNodeJs, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const Technologies = () => {
  const techStack = [
    { icon: <FaReact className="text-blue-500" />, name: "React" },
    { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
    { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
    { icon: <SiTailwindcss className="text-cyan-400" />, name: "Tailwind CSS" },
    { icon: <FaCss3Alt className="text-blue-600" />, name: "CSS3" }, // Optional
  ];

  return (
    <section className="bg-black py-16 px-4 h-screen">
      <h2 className="text-4xl font-bold text-white text-center mb-12">
        Technologies I Work With
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {techStack.map((tech, index) => (
          <Card key={index} icon={tech.icon} name={tech.name} />
        ))}
      </div>
    </section>
  );
};

export default Technologies;
