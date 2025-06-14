import React, { useRef } from "react";
import { motion } from "framer-motion";
import background from "../assets/background.png";
import img from "../assets/img.png";
import Card from "../components/Card";
import bottom from "../assets/bottom.png";
import "../App.css";
import p2 from "../assets/p2.png";
import project from "../assets/project.png";
import { FaLinkedin, FaGithub, FaChevronDown } from "react-icons/fa";
import contact1 from "../assets/contact1.png";
import contact2 from "../assets/contact2.png";
import contact3 from "../assets/contact3.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
import emailjs from "@emailjs/browser";

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

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 400, behavior: "smooth" });
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    // Basic validation
    if (!email.trim() || !message.trim()) {
      toast.error("Email and message fields cannot be empty.");
      return;
    }

    emailjs
      .sendForm(
        IMPORT.meta.env.VITE_SERVICE_ID,
        IMPORT.meta.env.VITE_TEMPLATE_ID,
        form.current,
        VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!");
          form.current.reset(); // Clear the form after success
        },
        (error) => {
          toast.error("Something went wrong. Please try again.");
        }
      );
  };
  const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        type: "spring",
      },
    }),
  };

  const projects = [
    {
      title: "Agency With Unlimited Possibilities",
      description: "Creative design project example.",
      link: "https://your-live-project-link.com",
    },
    {
      title: "Justix & Skychex",
      description: "Branding showcase design.",
      link: "https://your-live-project-link.com",
    },
    {
      title: "Modern UX Dashboard",
      description: "Interactive dashboard for SaaS product.",
      link: "https://your-live-project-link.com",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div
        id="home"
        className=" pt-32 relative bg-cover bg-center h-screen bg-no-repeat flex flex-col items-center gap-5 justify-center px-4 text-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        {" "}
        <div className=" backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-4 flex max-w-4xl w-full flex-col gap-0 items-center">
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

          <p className="text-gray-300 text-lg mt-2">
            I build modern web applications with clean and scalable code.
          </p>

          <motion.button
            className="bg-black rounded-lg py-2 px-6 text-sm sm:text-base text-white font-bold border border-white mt-4"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            Get In Touch
          </motion.button>

          <div className="flex gap-4 mt-4 justify-center">
            <a
              href="https://github.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-2xl hover:text-white" />
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-2xl hover:text-white" />
            </a>
          </div>
        </div>
      </div>

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
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto relative z-10 mb-20"
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

        {/* About Me Section */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative bg-black bg-opacity-30 backdrop-blur-lg border border-transparent rounded-xl p-6 md:p-10 transition duration-300 group">
            <div className="absolute inset-0 rounded-xl border-2 border-blue-600 group-hover:border-pink-500 animate-pulse pointer-events-none z-0"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
              <div className="flex-shrink-0">
                <img
                  src={img}
                  alt="Shashank"
                  className="rounded-full w-40 sm:w-48 md:w-56 object-cover border-4 border-blue-600 shadow-lg"
                />
              </div>
              <div className="flex-1 text-white">
                <h2 className="text-3xl font-bold mb-4">About Me</h2>
                <p className="text-gray-300 mb-3">
                  <strong>Education:</strong>
                  <br />
                  BCA from Chandigarh University
                  <br />
                  MCA from Chandigarh Group of Colleges, Landran
                </p>
                <p className="text-gray-300 mb-3">
                  <strong>Skills:</strong> HTML, CSS, JavaScript, React,
                  Node.js, Express, MongoDB, Tailwind CSS
                </p>
                <p className="text-gray-300 mb-3">
                  <strong>Hobbies:</strong> Yoga, Meditation, Coding, Exploring
                  Tech
                </p>
                <div className="flex gap-4 mt-4">
                  <a
                    href="https://www.linkedin.com/in/your-linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-pink-400 text-2xl"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://github.com/your-github"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white text-2xl"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Glow Image Below */}
        <img
          src={bottom}
          alt="Glow effect"
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[600px] sm:w-[700px] md:w-[800px] opacity-60 z-0 pointer-events-none"
        />
      </section>

      <section
        id="projects"
        className="relative py-12 text-center overflow-hidden bg-black text-white"
      >
        {/* Spiky Background Overlay */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
          <img
            src={project}
            alt="Background Decoration"
            className="w-[500px] "
          />
        </div>

        {/* Header Content */}
        <div className="relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Check our Work
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8 px-4 sm:px-0 text-sm sm:text-base">
            Take a look at some of our recent projects to see how we’ve helped
            businesses like yours succeed online.
          </p>
        </div>

        {/* Arrows */}
        <div className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-20">
          <button
            onClick={scrollLeft}
            className="bg-gray-800 hover:bg-gray-700 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center"
          >
            ←
          </button>
        </div>
        <div className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-20">
          <button
            onClick={scrollRight}
            className="bg-gray-800 hover:bg-gray-700 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center"
          >
            →
          </button>
        </div>

        {/* Slider */}
        <div className="relative z-10 px-2 sm:px-6">
          <div
            ref={scrollRef}
            className="flex gap-6 sm:gap-8 overflow-x-auto snap-x snap-mandatory justify-start scroll-smooth max-w-screen-xl mx-auto scroll-px-[10%]"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariant}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.05 }}
                className="snap-center bg-white rounded-xl shadow-lg w-[90%] sm:w-[80%] md:w-[70%] shrink-0 transition-transform"
              >
                <img
                  src={p2}
                  alt={project.title}
                  className="rounded-t-xl w-full h-52 sm:h-64 object-cover"
                />
                <div className="p-4 text-black">
                  <h3 className="font-bold text-base sm:text-lg">
                    {project.title}
                  </h3>
                  <p className="text-sm mt-2 text-gray-600">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-blue-600 hover:underline font-medium text-sm"
                  >
                    🔗 View Live Project
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative py-20 px-6 bg-black text-white overflow-hidden"
      >
        {/* Overlays */}

        <img
          src={contact1}
          alt="overlay"
          className="absolute top-0 left-100 w-60  pointer-events-none"
        />
        <img
          src={contact2}
          alt="overlay"
          className="absolute bottom-30 right-0 w-40  pointer-events-none"
        />

        <div className="relative z-10 max-w-3xl mx-auto bg-[#111111] p-8 rounded-3xl shadow-lg backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-center mb-6">Let's Connect</h2>

          <form className="space-y-6" ref={form} onSubmit={sendEmail}>
            <div>
              <label className="block mb-1 text-sm text-gray-300">
                Your Name
              </label>
              <input
                name="name"
                type="text"
                className="w-full bg-[#1c1c1c] text-white px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm text-gray-300">Email</label>
              <input
                name="email"
                type="email"
                className="w-full bg-[#1c1c1c] text-white px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm text-gray-300">
                Message
              </label>
              <textarea
                name="message"
                className="w-full bg-[#1c1c1c] text-white px-4 py-2 rounded-xl h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Write your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl transition-all duration-300"
            >
              Send Message
            </button>
            <ToastContainer
              // 👈 This ensures the toast shows on top-right
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          </form>

          {/* Social Links */}
          <div className="mt-8 text-center flex justify-center gap-6">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition text-2xl"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition text-2xl"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Gradient Overlay at Bottom */}
        <div className="absolute bottom-0 left-0 w-full h-60 z-0">
          <div className="w-full h-full bg-gradient-to-r from-orange-500 via-pink-500 to-blue-600 opacity-80 blur-3xl" />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
