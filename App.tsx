'use client';
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Builder from './components/Builder';

const App: React.FC = () => {
  const [view, setView] = useState<'landing' | 'builder'>('landing');
  const [isDark, setIsDark] = useState(false);

  // Initialize theme based on system preference or local storage
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  if (view === 'builder') {
    return <Builder onBack={() => setView('landing')} isDark={isDark} />;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <Navbar 
        onStartBuilding={() => setView('builder')} 
        isDark={isDark} 
        toggleTheme={toggleTheme} 
      />
      <main>
        <Hero onStartBuilding={() => setView('builder')} />
        <Features />
        <About />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;