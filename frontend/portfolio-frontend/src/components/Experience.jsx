import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

function Experience() {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchExperiences();
  }, []);

  const fetchExperiences = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/experiences"
      );
      setExperiences(response.data);
    } catch (err) {
      setError("Unable to load experiences.");
    } finally {
      setLoading(false);
    }
  };

  const getPoints = (description) => {
    return description
      .split(".")
      .map((item) => item.trim())
      .filter((item) => item.length > 0);
  };

  return (
    <section
      id="experience"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <p className="text-cyan-400 font-semibold mb-3">
          Experience
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          My Journey
        </h2>

        {loading && (
          <p className="text-slate-400">Loading experiences...</p>
        )}

        {error && (
          <p className="text-red-400">{error}</p>
        )}

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-white/10 rounded-3xl p-6 bg-white/5 hover:border-cyan-400 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-cyan-400">
                {experience.role}
              </h3>

              <p className="text-slate-400 mt-2">
                {experience.companyName}
              </p>

              <p className="text-slate-500 mt-1">
                {experience.startDate} - {experience.endDate}
              </p>

              <ul className="mt-4 space-y-2 text-slate-300">
                {getPoints(experience.description).map((point, i) => (
                  <li key={i}>• {point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;