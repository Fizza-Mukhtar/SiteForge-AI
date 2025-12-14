import React from 'react';
import { Check } from 'lucide-react';
import { PRICING_PLANS } from '../constants';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="scroll-mt-24 py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-600 dark:text-brand-400 font-semibold tracking-wide uppercase text-sm mb-3">Pricing</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">Simple, transparent pricing</h3>
          <p className="text-lg text-slate-600 dark:text-slate-400">Start for free, scale as you grow. No hidden fees.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {PRICING_PLANS.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-white dark:bg-slate-900 rounded-2xl p-8 border transition-all duration-300 ${
                plan.popular 
                  ? 'border-brand-500 dark:border-brand-500 shadow-xl shadow-brand-100 dark:shadow-brand-900/20 scale-105 z-10' 
                  : 'border-slate-200 dark:border-slate-800 shadow-sm'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-600 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">{plan.name}</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{plan.description}</p>
              </div>

              <div className="mb-8">
                <span className="text-4xl font-bold text-slate-900 dark:text-white">{plan.price}</span>
                <span className="text-slate-500 dark:text-slate-400">{plan.period}</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center text-slate-600 dark:text-slate-300">
                    <Check className="h-5 w-5 text-brand-600 dark:text-brand-400 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-3 px-6 rounded-lg font-bold transition-all ${
                  plan.popular 
                    ? 'bg-brand-600 text-white hover:bg-brand-700 shadow-md hover:shadow-lg' 
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;