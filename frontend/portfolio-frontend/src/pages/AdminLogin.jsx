import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (form.username === "Parit" && form.password === "Parit123") {
      localStorage.setItem("isAdmin", "true");
      navigate("/admin");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <section className="min-h-screen bg-slate-950 flex items-center justify-center text-white px-6">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-white/5 border border-white/10 rounded-2xl p-8 space-y-5"
      >
        <h1 className="text-3xl font-bold text-cyan-400">
          Admin Login
        </h1>

        {error && <p className="text-red-400">{error}</p>}

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          className="w-full p-3 rounded bg-slate-900 border border-white/10"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full p-3 rounded bg-slate-900 border border-white/10"
        />

        <button className="w-full bg-cyan-500 text-slate-950 font-bold py-3 rounded">
          Login
        </button>
      </form>
    </section>
  );
}

export default AdminLogin;