import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="bg-slate-950 text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <p className="text-cyan-400 font-semibold mb-3">About Me</p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Building clean and scalable web applications
          </h2>

          <p className="text-slate-400 leading-8">
            I am Tarkeshwar Parit, a Software Developer focused on building
            modern full-stack applications using Java, Spring Boot, REST API, spring security, React.js,
            MySQL, MongoDB, Node.js, Express.js, Jenkins and CI/CD. I enjoy
            creating clean, responsive and user-friendly applications with
            industry-standard architecture.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-cyan-400 font-bold text-xl">Backend</h3>
                <p className="text-slate-400 text-sm mt-2">Java, Spring Boot, MySQL</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-cyan-400 font-bold text-xl">Frontend</h3>
                <p className="text-slate-400 text-sm mt-2">React, Tailwind, JavaScript</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-cyan-400 font-bold text-xl">DevOps</h3>
                <p className="text-slate-400 text-sm mt-2">Jenkins, GitHub, CI/CD</p>
            </div>
            </div>
        </motion.div>

      </div>
    </section>
  );
}

export default About;