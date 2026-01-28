
import React from 'react';
import { PROJECTS } from '../constants';

interface ProjectsSectionProps {
  onOpenAI: () => void;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenAI }) => {
  return (
    <div className="space-y-12">
      <div className="flex items-center space-x-4">
        <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
        <div className="h-px flex-1 bg-slate-800"></div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {PROJECTS.map((project, index) => (
          <div key={index} className="group flex flex-col h-full bg-slate-800/40 rounded-2xl border border-slate-700 overflow-hidden hover:border-indigo-500/50 transition-all hover:translate-y-[-4px]">
            <div className="h-48 bg-slate-700 overflow-hidden relative">
              <img 
                src={`https://picsum.photos/seed/${project.title}/800/400`} 
                alt={project.title}
                className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              />
              <div className="absolute top-4 right-4 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                {project.period}
              </div>
            </div>
            
            <div className="p-8 flex flex-col flex-1">
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span key={tech} className="text-xs font-medium text-slate-400 bg-slate-900 px-2 py-1 rounded-md border border-slate-700">
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="text-slate-400 text-sm leading-relaxed list-disc ml-4">
                    {highlight}
                  </li>
                ))}
              </ul>
              <div className="flex space-x-4 mt-auto">
                {project.hasInteractiveDemo ? (
                  <button 
                    onClick={onOpenAI}
                    className="flex-1 py-2 bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white rounded-lg font-bold transition-all transform hover:scale-[1.02] shadow-lg shadow-indigo-500/20 text-center flex items-center justify-center space-x-2"
                  >
                    <svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
                    <span>Try Live Demo</span>
                  </button>
                ) : project.demoUrl ? (
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex-1 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-medium transition-colors text-center">
                    View Demo
                  </a>
                ) : (
                  <button disabled className="flex-1 py-2 bg-slate-800 text-slate-500 rounded-lg font-medium cursor-not-allowed">
                    Demo N/A
                  </button>
                )}
                {project.sourceUrl ? (
                  <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="flex-1 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition-colors text-center">
                    Source Code
                  </a>
                ) : (
                  <button disabled className="flex-1 py-2 bg-slate-800 text-slate-500 rounded-lg font-medium cursor-not-allowed">
                    Private
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
