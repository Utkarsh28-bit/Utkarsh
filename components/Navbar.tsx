
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center max-w-6xl">
        <div className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
          UR.
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-300">
          <a href="#skills" className="hover:text-indigo-400 transition-colors">Skills</a>
          <a href="#experience" className="hover:text-indigo-400 transition-colors">Experience</a>
          <a href="#projects" className="hover:text-indigo-400 transition-colors">Projects</a>
          <a href="#education" className="hover:text-indigo-400 transition-colors">Education</a>
          <a href="#contact" className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-white transition-all transform hover:scale-105">Hire Me</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
