import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/70 backdrop-blur-lg border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <h1 className="text-xl font-bold text-white">
          Tarkeshwar<span className="text-cyan-400">.</span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-slate-300">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-3xl"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-white/10">

          <a href="#home" className="block px-6 py-4 text-white">
            Home
          </a>

          <a href="#about" className="block px-6 py-4 text-white">
            About
          </a>

          <a href="#skills" className="block px-6 py-4 text-white">
            Skills
          </a>

          <a href="#projects" className="block px-6 py-4 text-white">
            Projects
          </a>

          <a href="#contact" className="block px-6 py-4 text-white">
            Contact
          </a>

        </div>
      )}

    </nav>
  );
}

export default Navbar;