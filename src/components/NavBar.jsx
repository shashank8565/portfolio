// NavBar.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { to: "#home", label: "Home" },
    { to: "#projects", label: "Projects" },
    { to: "#contact", label: "Contact" },
    { to: "#about", label: "About" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 z-50 bg-transparent text-white w-full"
    >
      <div className="max-w-4xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="sm:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex justify-center items-center gap-4 font-bold text-sm sm:text-md mt-4 border rounded-2xl py-4 px-6 bg-black bg-opacity-60">
          {navItems.map((item) => (
            <motion.li
              key={item.to}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a href={item.to} className="hover:underline px-4 py-2">
                {item.label}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="sm:hidden flex flex-col mt-4 gap-2 font-bold bg-black bg-opacity-80 rounded-xl p-4"
            >
              {navItems.map((item) => (
                <li key={item.to} onClick={() => setIsOpen(false)}>
                  <a href={item.to} className="hover:underline px-4 py-2 block">
                    {item.label}
                  </a>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default NavBar;

// index.css or global.css
