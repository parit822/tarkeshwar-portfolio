import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

import {
  FaJava,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaServer,
  FaShieldAlt,
  FaRocket,
  FaTools,
  FaPaintBrush,
  FaCloud,
  FaChartBar,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiMysql,
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiRabbitmq,
} from "react-icons/si";

const skillIcons = {
  Java: <FaJava />,
  "Spring Boot": <SiSpringboot />,
  MySQL: <SiMysql />,
  MongoDB: <SiMongodb />,
  "Node.js": <FaNodeJs />,
  "Express.js": <SiExpress />,
  "React.js": <FaReact />,
  JavaScript: <SiJavascript />,
  HTML: <SiHtml5 />,
  CSS: <FaPaintBrush />,
  "Tailwind CSS": <SiTailwindcss />,
  Jenkins: <FaTools />,
  GitHub: <FaGithub />,
  "CI/CD": <FaRocket />,
  "Power BI": <FaChartBar />,
  RabbitMQ: <SiRabbitmq />,
  "Microsoft Azure": <FaCloud />,
  "Virtual Machines": <FaServer />,
  "Cloud Security": <FaShieldAlt />,
};

function Skills() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/skills");
      setSkills(response.data);
    } catch (err) {
      setError("Unable to load skills.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="skills" className="bg-slate-950 text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-cyan-400 font-semibold mb-3">Skills</p>

        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Technologies I Work With
        </h2>

        {loading && <p className="text-slate-400">Loading skills...</p>}
        {error && <p className="text-red-400">{error}</p>}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center hover:border-cyan-400 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(34,211,238,0.3)] transition-all duration-300"
            >
              <div className="text-4xl mb-3 flex justify-center text-cyan-400">
                {skillIcons[skill.name] || <FaRocket />}
              </div>

              <p className="font-semibold text-slate-200">{skill.name}</p>

              <p className="text-xs text-slate-400 mt-2">
                {skill.category}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;