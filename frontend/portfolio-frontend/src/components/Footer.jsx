function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10 py-6">
  <div className="max-w-7xl mx-auto px-6">

    <div className="flex justify-center gap-6 mb-4">
      <a
        href="#"
        className="text-cyan-400 hover:text-white transition"
      >
        GitHub
      </a>

      <a
        href="#"
        className="text-cyan-400 hover:text-white transition"
      >
        LinkedIn
      </a>

      <a
        href="mailto:parittarkeshwar04@gmail.com"
        className="text-cyan-400 hover:text-white transition"
      >
        Email
      </a>
    </div>

    <p className="text-center text-slate-500 text-sm">
      © 2026 Tarkeshwar Parit. All Rights Reserved.
    </p>

  </div>
</footer>
  );
}

export default Footer;