import React from "react";

export default function Navbar({ scrollToSection }) {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b">
      <div className="max-w-4xl mx-auto px-6 h-18 flex items-center justify-between">
        <div className="text-lg font-bold">Ravikanth</div>

        <nav className="hidden md:flex items-center gap-5 text-sm">
          <button onClick={() => scrollToSection("home")} className="hover:text-blue-600">Home</button>
          <button onClick={() => scrollToSection("about")} className="hover:text-blue-600">About</button>
          <button onClick={() => scrollToSection("skills")} className="hover:text-blue-600">Skills</button>
          <button onClick={() => scrollToSection("projects")} className="hover:text-blue-600">Projects</button>
          <button onClick={() => scrollToSection("resume")} className="hover:text-blue-600">Resume</button>
          <button onClick={() => scrollToSection("contact")} className="hover:text-blue-600">Contact</button>
        </nav>
      </div>
    </header>
  );
}
