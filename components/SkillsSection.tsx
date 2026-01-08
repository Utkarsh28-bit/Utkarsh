
import React from 'react';
import { SKILLS } from '../constants';

const SkillsSection: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="flex items-center space-x-4">
        <h2 className="text-3xl font-bold text-white">Technical Skills</h2>
        <div className="h-px flex-1 bg-slate-800"></div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {SKILLS.map((category) => (
          <div key={category.name} className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 hover:border-indigo-500/50 transition-colors">
            <h3 className="text-xl font-semibold text-indigo-400 mb-6">{category.name}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-3 py-1.5 bg-slate-900 text-slate-300 text-sm rounded-lg border border-slate-700 hover:bg-indigo-500 hover:text-white hover:border-indigo-500 transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
