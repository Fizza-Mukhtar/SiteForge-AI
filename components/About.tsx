import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  const benefits = [
    "No technical debt or spaghetti code",
    "Generated assets are royalty-free",
    "Seamless integration with marketing tools",
    "Real-time collaboration for teams"
  ];

  return (
    <section id="about" className="scroll-mt-24 py-24 bg-white dark:bg-slate-950 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative mb-12 lg:mb-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800">
               <img 
                 src="https://picsum.photos/id/3/800/800" 
                 alt="Team working on AI" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
               <div className="absolute bottom-6 left-6 text-white">
                 <p className="font-bold text-xl">Trusted by 10,000+ creators</p>
                 <p className="text-slate-200 text-sm">Join the revolution today</p>
               </div>
            </div>
            {/* Decorator */}
            <div className="absolute -z-10 top-10 -left-10 w-full h-full bg-slate-100 dark:bg-slate-800 rounded-2xl transition-colors"></div>
          </div>

          {/* Content Side */}
          <div>
            <h2 className="text-brand-600 dark:text-brand-400 font-semibold tracking-wide uppercase text-sm mb-3">About Us</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Designed for the future of web creation
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              We believe that great ideas shouldn't be held back by technical barriers. SiteForge leverages advanced Large Language Models to translate your vision into pixel-perfect reality, instantly.
            </p>

            <ul className="space-y-4 mb-10">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300 font-medium">{benefit}</span>
                </li>
              ))}
            </ul>

            <button className="text-brand-600 dark:text-brand-400 font-bold hover:text-brand-700 dark:hover:text-brand-300 flex items-center gap-2 group">
              Read our full story 
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;