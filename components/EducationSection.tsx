
import React from 'react';
import { EDUCATIONS } from '../constants';

const EducationSection: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="flex items-center space-x-4">
        <h2 className="text-3xl font-bold text-white">Education</h2>
        <div className="h-px flex-1 bg-slate-800"></div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {EDUCATIONS.map((edu, index) => (
          <div key={index} className="bg-slate-800/30 p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                <span className="text-indigo-400 font-bold">{edu.year}</span>
              </div>
              <p className="text-slate-400 text-sm">{edu.institution}</p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-700 flex justify-between items-center">
              <span className="text-xs uppercase tracking-widest text-slate-500 font-bold">Result</span>
              <span className="text-indigo-400 font-mono font-bold">{edu.result}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationSection;
