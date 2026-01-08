
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <main className="container mx-auto px-4 py-8 max-w-6xl space-y-24">
        <Hero />
        <section id="skills">
          <SkillsSection />
        </section>
        <section id="experience">
          <ExperienceSection />
        </section>
        <section id="projects">
          <ProjectsSection />
        </section>
        <section id="education">
          <EducationSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      
      <footer className="border-t border-slate-800 py-12 bg-slate-900/50 mt-20">
        <div className="container mx-auto px-4 text-center text-slate-400">
          <p>© {new Date().getFullYear()} Utkarsh Ravaliya. Built with React & Gemini API.</p>
        </div>
      </footer>

      {/* Floating AI Assistant Chatbot */}
      <AIAssistant />
    </div>
  );
};

export default App;
