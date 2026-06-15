import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AdminDashboard() {
  const navigate = useNavigate();

  const [message, setMessage] = useState("");

  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);

  const [resumeUrl, setResumeUrl] = useState("");
  const [resumeFile, setResumeFile] = useState(null);

  const [project, setProject] = useState({
    title: "",
    description: "",
    techStack: "",
    githubUrl: "",
    liveUrl: "",
    imageUrl: "",
  });

  const [skill, setSkill] = useState({
    name: "",
    category: "",
    proficiency: "",
  });

  const [experience, setExperience] = useState({
    companyName: "",
    role: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  useEffect(() => {
    fetchProjects();
    fetchSkills();
    fetchExperiences();
    fetchResumeUrl();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/admin-login");
  };

  const fetchProjects = async () => {
    const res = await axios.get("http://localhost:8080/api/projects");
    setProjects(res.data);
  };

  const fetchSkills = async () => {
    const res = await axios.get("http://localhost:8080/api/skills");
    setSkills(res.data);
  };

  const fetchExperiences = async () => {
    const res = await axios.get("http://localhost:8080/api/experiences");
    setExperiences(res.data);
  };

  const fetchResumeUrl = async () => {
    const res = await axios.get("http://localhost:8080/api/settings/resume");
    setResumeUrl(res.data.resumeUrl || "");
  };

  const uploadResumeFile = async (e) => {
    e.preventDefault();

    if (!resumeFile) {
      setMessage("Please select a PDF file ❌");
      return;
    }

    const formData = new FormData();
    formData.append("file", resumeFile);

    const res = await axios.post(
      "http://localhost:8080/api/settings/resume/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    setResumeUrl(res.data.resumeUrl);
    setResumeFile(null);
    setMessage("Resume PDF Uploaded Successfully ✅");
  };

  const updateResumeUrl = async (e) => {
    e.preventDefault();

    await axios.put("http://localhost:8080/api/settings/resume", {
      resumeUrl: resumeUrl,
    });

    setMessage("Resume URL Updated Successfully ✅");
  };

  const handleProjectChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleSkillChange = (e) => {
    setSkill({ ...skill, [e.target.name]: e.target.value });
  };

  const handleExperienceChange = (e) => {
    setExperience({ ...experience, [e.target.name]: e.target.value });
  };

  const addProject = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:8080/api/projects", project);

    setMessage("Project Added Successfully ✅");

    setProject({
      title: "",
      description: "",
      techStack: "",
      githubUrl: "",
      liveUrl: "",
      imageUrl: "",
    });

    fetchProjects();
  };

  const addSkill = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:8080/api/skills", {
      ...skill,
      proficiency: Number(skill.proficiency),
    });

    setMessage("Skill Added Successfully ✅");

    setSkill({
      name: "",
      category: "",
      proficiency: "",
    });

    fetchSkills();
  };

  const addExperience = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:8080/api/experiences", experience);

    setMessage("Experience Added Successfully ✅");

    setExperience({
      companyName: "",
      role: "",
      startDate: "",
      endDate: "",
      description: "",
    });

    fetchExperiences();
  };

  const deleteProject = async (id) => {
    await axios.delete(`http://localhost:8080/api/projects/${id}`);
    setMessage("Project Deleted Successfully ✅");
    fetchProjects();
  };

  const deleteSkill = async (id) => {
    await axios.delete(`http://localhost:8080/api/skills/${id}`);
    setMessage("Skill Deleted Successfully ✅");
    fetchSkills();
  };

  const deleteExperience = async (id) => {
    await axios.delete(`http://localhost:8080/api/experiences/${id}`);
    setMessage("Experience Deleted Successfully ✅");
    fetchExperiences();
  };

  return (
    <section className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold text-cyan-400">
            Admin Dashboard
          </h1>

          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-lg font-bold"
          >
            Logout
          </button>
        </div>

        {message && <p className="text-green-400 mb-6">{message}</p>}

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 space-y-6">
          <h2 className="text-2xl font-bold">Update Resume</h2>

          <form onSubmit={uploadResumeFile} className="space-y-4">
            <input
              type="file"
              accept="application/pdf"
              onChange={(e) => setResumeFile(e.target.files[0])}
              className="input"
            />

            <button className="bg-yellow-400 text-black font-bold px-6 py-3 rounded">
              Upload Resume PDF
            </button>
          </form>

          <form onSubmit={updateResumeUrl} className="space-y-4">
            <input
              name="resumeUrl"
              placeholder="Or paste Resume URL"
              value={resumeUrl}
              onChange={(e) => setResumeUrl(e.target.value)}
              className="input"
            />

            <button className="bg-cyan-500 text-black font-bold px-6 py-3 rounded">
              Update Resume URL
            </button>
          </form>
        </div>

        <form
          onSubmit={addProject}
          className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 space-y-4"
        >
          <h2 className="text-2xl font-bold">Add Project</h2>

          <input
            name="title"
            placeholder="Project Title"
            value={project.title}
            onChange={handleProjectChange}
            className="input"
          />

          <textarea
            name="description"
            placeholder="Project Description"
            value={project.description}
            onChange={handleProjectChange}
            className="input"
          />

          <input
            name="techStack"
            placeholder="Tech Stack"
            value={project.techStack}
            onChange={handleProjectChange}
            className="input"
          />

          <input
            name="githubUrl"
            placeholder="GitHub URL"
            value={project.githubUrl}
            onChange={handleProjectChange}
            className="input"
          />

          <input
            name="liveUrl"
            placeholder="Live URL"
            value={project.liveUrl}
            onChange={handleProjectChange}
            className="input"
          />

          <input
            name="imageUrl"
            placeholder="Image URL"
            value={project.imageUrl}
            onChange={handleProjectChange}
            className="input"
          />

          <button className="bg-cyan-500 text-slate-950 font-bold px-6 py-3 rounded">
            Add Project
          </button>
        </form>

        <form
          onSubmit={addSkill}
          className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 space-y-4"
        >
          <h2 className="text-2xl font-bold">Add Skill</h2>

          <input
            name="name"
            placeholder="Skill Name"
            value={skill.name}
            onChange={handleSkillChange}
            className="input"
          />

          <input
            name="category"
            placeholder="Category"
            value={skill.category}
            onChange={handleSkillChange}
            className="input"
          />

          <input
            type="number"
            name="proficiency"
            placeholder="Proficiency"
            value={skill.proficiency}
            onChange={handleSkillChange}
            className="input"
          />

          <button className="bg-green-500 text-black font-bold px-6 py-3 rounded">
            Add Skill
          </button>
        </form>

        <form
          onSubmit={addExperience}
          className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-10 space-y-4"
        >
          <h2 className="text-2xl font-bold">Add Experience</h2>

          <input
            name="companyName"
            placeholder="Company Name"
            value={experience.companyName}
            onChange={handleExperienceChange}
            className="input"
          />

          <input
            name="role"
            placeholder="Role"
            value={experience.role}
            onChange={handleExperienceChange}
            className="input"
          />

          <input
            name="startDate"
            placeholder="Start Date"
            value={experience.startDate}
            onChange={handleExperienceChange}
            className="input"
          />

          <input
            name="endDate"
            placeholder="End Date"
            value={experience.endDate}
            onChange={handleExperienceChange}
            className="input"
          />

          <textarea
            name="description"
            placeholder="Description"
            value={experience.description}
            onChange={handleExperienceChange}
            className="input"
          />

          <button className="bg-purple-500 text-white font-bold px-6 py-3 rounded">
            Add Experience
          </button>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <h2 className="text-xl font-bold mb-4">Delete Project</h2>

            {projects.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b border-white/10 py-3"
              >
                <span className="text-sm">{item.title}</span>

                <button
                  onClick={() => deleteProject(item.id)}
                  className="bg-red-500 px-3 py-1 rounded text-sm"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <h2 className="text-xl font-bold mb-4">Delete Skill</h2>

            {skills.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b border-white/10 py-3"
              >
                <span className="text-sm">{item.name}</span>

                <button
                  onClick={() => deleteSkill(item.id)}
                  className="bg-red-500 px-3 py-1 rounded text-sm"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <h2 className="text-xl font-bold mb-4">Delete Experience</h2>

            {experiences.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b border-white/10 py-3"
              >
                <span className="text-sm">{item.role}</span>

                <button
                  onClick={() => deleteExperience(item.id)}
                  className="bg-red-500 px-3 py-1 rounded text-sm"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdminDashboard;