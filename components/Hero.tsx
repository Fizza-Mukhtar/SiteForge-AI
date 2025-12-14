import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';

interface HeroProps {
  onStartBuilding: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStartBuilding }) => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-white dark:bg-slate-950 pt-24 lg:pt-32 pb-12 transition-colors duration-300">
      {/* Background Gradients & Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-white via-white/80 to-transparent dark:from-slate-950 dark:via-slate-950/80 z-10"></div>
      
      <div className="absolute top-1/4 right-0 -mr-40 w-[600px] h-[600px] rounded-full bg-brand-200/30 dark:bg-brand-900/20 blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-40 w-[600px] h-[600px] rounded-full bg-purple-200/30 dark:bg-purple-900/20 blur-[100px] pointer-events-none"></div>

      {/* Content Wrapper */}
      <div className="w-full flex flex-col items-center relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          
          {/* Version Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200 dark:border-slate-800 shadow-sm text-slate-600 dark:text-slate-300 text-sm font-medium mb-8 animate-fade-in-up">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            v2.0 is now live
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-slate-900 dark:text-white mb-6 leading-[1.1] max-w-5xl">
            Build your website <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-brand-500 to-purple-600 dark:from-brand-400 dark:via-brand-300 dark:to-purple-400">
               faster with AI.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="max-w-2xl mx-auto text-xl text-slate-500 dark:text-slate-400 mb-10 leading-relaxed font-light">
            Describe your business, and our intelligent engine creates a polished, professional website in seconds.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center mb-12">
            <button 
              onClick={onStartBuilding}
              className="group relative px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-semibold text-lg shadow-xl shadow-slate-900/20 dark:shadow-white/10 hover:shadow-2xl hover:shadow-slate-900/30 dark:hover:shadow-white/20 hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brand-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center gap-2">
                Start Building Free <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            
            <button className="px-8 py-4 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 rounded-full font-semibold text-lg hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 transition-all flex items-center gap-3">
              <PlayCircle className="h-5 w-5" /> Watch Demo
            </button>
          </div>
        </div>

        {/* 3D Dashboard Preview */}
        <div className="relative w-full max-w-6xl mx-auto px-4 perspective-[2000px]">
          <div className="relative rounded-t-2xl border-x-4 border-t-4 border-slate-900 dark:border-slate-800 bg-slate-900 shadow-2xl overflow-hidden aspect-[16/9] rotate-x-12 origin-bottom transform-gpu opacity-90 hover:opacity-100 hover:rotate-x-0 transition-all duration-700 ease-out translate-y-12 hover:translate-y-0 group">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-500 via-purple-500 to-brand-500"></div>
            <img 
              src="https://picsum.photos/id/180/1600/900" 
              alt="Dashboard Preview" 
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
            />
            
            {/* Floating UI Elements within the preview */}
            <div className="absolute top-10 left-10 bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/20 shadow-lg hidden md:block animate-pulse">
              <div className="h-2 w-24 bg-white/20 rounded mb-2"></div>
              <div className="h-2 w-16 bg-white/20 rounded"></div>
            </div>
          </div>
          
          {/* Glow effect under the board */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-brand-500/20 to-transparent blur-3xl -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;