
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const ContactSection: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="flex items-center space-x-4">
        <h2 className="text-3xl font-bold text-white">Let's Connect</h2>
        <div className="h-px flex-1 bg-slate-800"></div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <p className="text-slate-400 text-lg leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
            Feel free to reach out through any of these channels.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700">
              <div className="p-3 bg-indigo-500/20 text-indigo-400 rounded-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Email</p>
                <p className="text-slate-300">{PERSONAL_INFO.email}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700">
              <div className="p-3 bg-indigo-500/20 text-indigo-400 rounded-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Phone</p>
                <p className="text-slate-300">{PERSONAL_INFO.phone}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700">
              <div className="p-3 bg-indigo-500/20 text-indigo-400 rounded-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Location</p>
                <p className="text-slate-300">{PERSONAL_INFO.location}</p>
              </div>
            </div>
          </div>
        </div>
        
        <form className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-400">Full Name</label>
            <input 
              type="text" 
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500 text-white transition-colors"
              placeholder="Your Name"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-400">Email Address</label>
            <input 
              type="email" 
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500 text-white transition-colors"
              placeholder="you@example.com"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-400">Message</label>
            <textarea 
              rows={4}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500 text-white transition-colors resize-none"
              placeholder="Tell me about your project..."
            />
          </div>
          <button className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-bold transition-all transform active:scale-95 shadow-lg shadow-indigo-600/30">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
