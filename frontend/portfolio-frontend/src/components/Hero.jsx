import { useEffect, useState } from "react";
import axios from "axios";

import { motion } from "framer-motion";
import profileImg from "../assets/profile.png";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  const [resumeUrl, setResumeUrl] = useState("/resume/Tarkeshwar-Parit-Resume.pdf");

  useEffect(() => {
    fetchResumeUrl();
  }, []);

  const fetchResumeUrl = async () => {
    try {
      const response = await axios.get("https://portfolio-backend-paan.onrender.com/api/settings/resume");

      if (response.data.resumeUrl) {
        setResumeUrl(response.data.resumeUrl);
      }
    } catch (error) {
      console.log("Resume URL not loaded");
    }
  };

  return (
    <section className="min-h-screen bg-slate-950 text-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-cyan-400 font-semibold mb-4">Hello, I am</p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
            Tarkeshwar <span className="text-cyan-400">Parit</span>
          </h1>

          <TypeAnimation
            sequence={[
              "Software Developer",
              1500,
              "Java Developer",
              1500,
              "Spring Boot Developer",
              1500,
              "Full Stack Developer",
              1500,
              "React Developer",
              1500,
            ]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
            className="text-2xl md:text-3xl text-slate-300 mt-4"
          />

          <p className="text-slate-400 mt-6 max-w-xl">
            I build modern full-stack web applications using Java, Spring Boot, REST API
            React.js, MySQL, MongoDB, Node.js, and clean architecture.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="px-6 py-3 rounded-full bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition">
              Hire Me
            </button>

            <a
              href="#projects"
              className="px-6 py-3 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-950 transition"
            >
              View Projects
            </a>

            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-950 transition"
            >
              Download Resume
            </a>
          </div>

          <div className="mt-8 flex gap-5 text-2xl">
            <a
              href="https://github.com/parit822"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-cyan-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/tarkeshwarparit/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-cyan-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:tarkeshwarparit0101@gmail.com"
              className="text-slate-300 hover:text-cyan-400 transition"
            >
              <FaEnvelope />
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-3 max-w-md">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <h3 className="text-2xl font-bold text-cyan-400">1+</h3>
              <p className="text-sm text-slate-400">Years</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <h3 className="text-2xl font-bold text-cyan-400">7+</h3>
              <p className="text-sm text-slate-400">Projects</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <h3 className="text-2xl font-bold text-cyan-400">15+</h3>
              <p className="text-sm text-slate-400">Skills</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -12, 0],
          }}
          transition={{
            opacity: { duration: 0.8 },
            scale: { duration: 0.8 },
            y: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-500 rounded-full blur-3xl opacity-30"></div>

            <img
              src={profileImg}
              alt="Tarkeshwar Parit"
              className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 object-cover rounded-full border-4 border-cyan-400 shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;