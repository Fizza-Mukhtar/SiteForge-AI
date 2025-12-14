import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="scroll-mt-24 py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-400 font-semibold tracking-wide uppercase text-sm mb-3">Testimonials</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Loved by startups & enterprises</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <div key={index} className="bg-slate-800 p-8 rounded-2xl border border-slate-700 relative">
              {/* Stars */}
              <div className="flex gap-1 mb-6 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              
              <p className="text-slate-300 mb-8 text-lg italic">"{t.content}"</p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={t.image} 
                  alt={t.author} 
                  className="h-12 w-12 rounded-full object-cover border-2 border-brand-500"
                />
                <div>
                  <p className="font-bold text-white">{t.author}</p>
                  <p className="text-sm text-slate-400">{t.role}, {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;