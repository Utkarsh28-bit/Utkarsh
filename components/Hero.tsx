
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-center pt-20 pb-10">
      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 p-1 mb-8 shadow-2xl shadow-indigo-500/20">
        <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
           <span className="text-4xl font-bold text-white">UR</span>
        </div>
      </div>
      <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
        Hi, I'm <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">{PERSONAL_INFO.name.split(' ')[0]}</span>
      </h1>
      <h2 className="text-xl md:text-2xl text-slate-400 font-medium mb-8 mono">
        {PERSONAL_INFO.title}
      </h2>
      <p className="max-w-2xl text-slate-300 leading-relaxed text-lg mb-10">
        {PERSONAL_INFO.summary}
      </p>
      
      <div className="flex space-x-4">
        <a 
          href={PERSONAL_INFO.linkedin} 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full text-slate-300 hover:text-indigo-400 transition-all border border-slate-700"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
        </a>
        <a 
          href={PERSONAL_INFO.github} 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full text-slate-300 hover:text-indigo-400 transition-all border border-slate-700"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        </a>
        <a 
          href={`mailto:${PERSONAL_INFO.email}`}
          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-full text-white font-medium transition-all shadow-lg shadow-indigo-600/30"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
};

export default Hero;
