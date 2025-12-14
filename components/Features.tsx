import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="features" className="scroll-mt-24 py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-600 dark:text-brand-400 font-semibold tracking-wide uppercase text-sm mb-3">Features</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">Everything you need to launch</h3>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            We've packed SiteForge with powerful tools to ensure your online presence is professional, secure, and fast.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl dark:shadow-slate-900/50 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="h-12 w-12 bg-brand-100 dark:bg-brand-900/50 text-brand-600 dark:text-brand-400 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                <feature.icon className="h-6 w-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{feature.title}</h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;