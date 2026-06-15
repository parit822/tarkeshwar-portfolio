import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const projectIcons = {
  "Doctor AI Assistant": "🤖",
  "Hospital Management System": "🏥",
  "Dynamic Prescription Template Builder": "📄",
  "RabbitMQ Notification System": "📨",
  "Jenkins Multi Project Pipeline": "⚙️",
  "Employee Management System": "👨‍💼",
};

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/projects");
      setProjects(response.data);
      setLoading(false);
    } catch (err) {
      setError("Unable to load projects.");
      setLoading(false);
    }
  };

  return (
    <section id="projects" className="bg-slate-950 text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-cyan-400 font-semibold mb-3">Projects</p>

        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Featured Projects
        </h2>

        {loading && (
          <p className="text-slate-400">Loading projects...</p>
        )}

        {error && (
          <p className="text-red-400">{error}</p>
        )}

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 hover:border-cyan-400 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)] transition-all duration-300"
            >
              <div className="text-5xl mb-4">
                {projectIcons[project.title] || "🚀"}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-slate-400 leading-7 mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.techStack.split(",").map((item, i) => (
                  <span
                    key={i}
                    className="text-sm px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-300"
                  >
                    {item.trim()}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-6">
                <a
                  href={project.githubUrl || "#"}
                  target="_blank"
                  className="px-4 py-2 rounded-lg bg-cyan-500 text-slate-950 font-semibold"
                >
                  GitHub
                </a>

                <a
                  href={project.liveUrl || "#"}
                  target="_blank"
                  className="px-4 py-2 rounded-lg border border-cyan-400 text-cyan-400"
                >
                  Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;