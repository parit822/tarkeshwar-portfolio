import { useState } from "react";
import axios from "axios";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    setSuccess("");
    setError("");

    try {
      await axios.post("http://localhost:8080/api/contact", formData);

      setSuccess("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-4xl mx-auto">

        <p className="text-cyan-400 font-semibold mb-3">
          Contact
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-10">
          Let's Work Together
        </h2>

        {success && (
          <p className="text-green-400 mb-4">{success}</p>
        )}

        {error && (
          <p className="text-red-400 mb-4">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10 outline-none"
          />

          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10 outline-none"
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10 outline-none"
          />

          <textarea
            rows="5"
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10 outline-none"
          ></textarea>

          <button
            type="submit"
            className="px-8 py-4 rounded-xl bg-cyan-500 text-slate-950 font-bold"
          >
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}

export default Contact;