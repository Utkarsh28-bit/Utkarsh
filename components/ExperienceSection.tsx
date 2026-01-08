
import React from 'react';
import { EXPERIENCES } from '../constants';

const ExperienceSection: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="flex items-center space-x-4">
        <h2 className="text-3xl font-bold text-white">Experience</h2>
        <div className="h-px flex-1 bg-slate-800"></div>
      </div>
      
      <div className="space-y-8">
        {EXPERIENCES.map((exp, index) => (
          <div key={index} className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-slate-700">
            <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-indigo-500 ring-4 ring-slate-900"></div>
            <div className="bg-slate-800/30 p-8 rounded-2xl border border-slate-800 hover:bg-slate-800/50 transition-all">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-2">
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <p className="text-indigo-400 font-medium">{exp.company}</p>
                </div>
                <span className="px-4 py-1 bg-slate-700 text-slate-300 rounded-full text-sm font-medium self-start">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-3">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-slate-400 flex items-start">
                    <span className="text-indigo-500 mr-2 mt-1.5">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
