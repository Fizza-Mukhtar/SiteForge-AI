import React, { useState } from 'react';
import { ArrowLeft, Rocket, Loader2, Sparkles, RefreshCw, Code, Eye } from 'lucide-react';
import { APP_NAME } from '../constants';

interface BuilderProps {
  onBack: () => void;
  isDark: boolean;
}

const Builder: React.FC<BuilderProps> = ({ onBack, isDark }) => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [generatedCode, setGeneratedCode] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setLoading(true);
    setGeneratedCode(null);

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate website');
      }

      setGeneratedCode(data.code);
    } catch (error) {
      console.error("Failed to generate website:", error);
      alert("Something went wrong while generating your site. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-white dark:bg-slate-950 flex flex-col transition-colors duration-300">
      {/* Builder Navbar */}
      <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 md:px-6 py-3 flex justify-between items-center shrink-0">
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack}
            className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full text-slate-500 dark:text-slate-400 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-2">
            <div className="bg-brand-600 p-1.5 rounded-lg">
              <Rocket className="h-4 w-4 text-white" />
            </div>
            <span className="font-bold text-lg text-slate-900 dark:text-white hidden md:inline">{APP_NAME} Builder</span>
          </div>
        </div>
        
        {generatedCode && (
          <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab('preview')}
              className={`px-3 md:px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
                activeTab === 'preview' 
                  ? 'bg-white dark:bg-slate-700 text-brand-600 dark:text-brand-400 shadow-sm' 
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <div className="flex items-center gap-2">
                <Eye className="h-4 w-4" /> <span className="hidden md:inline">Preview</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('code')}
              className={`px-3 md:px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
                activeTab === 'code' 
                  ? 'bg-white dark:bg-slate-700 text-brand-600 dark:text-brand-400 shadow-sm' 
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
               <div className="flex items-center gap-2">
                <Code className="h-4 w-4" /> <span className="hidden md:inline">Code</span>
              </div>
            </button>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col relative overflow-hidden bg-slate-50 dark:bg-slate-950">
        {!generatedCode && !loading && (
          <div className="flex-1 flex flex-col justify-center items-center p-4 overflow-y-auto">
            <div className="max-w-3xl w-full animate-fade-in-up">
              <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 text-center">
                <div className="bg-brand-50 dark:bg-brand-900/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="h-8 w-8 text-brand-600 dark:text-brand-400" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                  What do you want to build?
                </h1>
                <p className="text-slate-500 dark:text-slate-400 mb-8 text-lg">
                  Describe your dream website in detail. Our AI will handle the design, code, and responsiveness.
                </p>
                
                <div className="relative mb-6">
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="e.g., A portfolio for a landscape photographer featuring a gallery grid, dark aesthetic, and a contact form..."
                    className="w-full h-40 p-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 dark:focus:ring-brand-900 outline-none resize-none text-lg text-slate-800 dark:text-white placeholder:text-slate-400"
                  />
                </div>

                <button
                  onClick={handleGenerate}
                  disabled={!prompt.trim()}
                  className="w-full bg-brand-600 hover:bg-brand-700 disabled:bg-slate-300 dark:disabled:bg-slate-800 disabled:cursor-not-allowed text-white text-lg font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="h-5 w-5" />
                  Generate Website
                </button>
              </div>
              
              <p className="mt-8 text-slate-400 text-sm text-center">
                Powered by Gemini 2.5 Flash • Generates HTML + Tailwind CSS
              </p>
            </div>
          </div>
        )}

        {loading && (
          <div className="flex-1 flex flex-col justify-center items-center bg-white dark:bg-slate-950">
            <div className="relative">
              <div className="absolute inset-0 bg-brand-100 dark:bg-brand-900 rounded-full animate-ping opacity-75"></div>
              <div className="bg-brand-600 dark:bg-brand-500 p-4 rounded-full relative z-10 shadow-xl">
                <Loader2 className="h-8 w-8 text-white animate-spin" />
              </div>
            </div>
            <h2 className="mt-8 text-2xl font-bold text-slate-900 dark:text-white animate-pulse">
              Constructing your site...
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mt-2">Writing code, optimizing styles, and fixing pixels.</p>
          </div>
        )}

        {generatedCode && !loading && (
          <div className="flex-1 flex flex-col relative w-full h-full">
            {activeTab === 'preview' ? (
              <div className="flex-1 w-full h-full bg-white relative">
                <iframe
                  title="Generated Website"
                  srcDoc={generatedCode}
                  className="absolute inset-0 w-full h-full border-0"
                  sandbox="allow-scripts"
                />
              </div>
            ) : (
              <div className="flex-1 bg-slate-900 flex flex-col overflow-hidden relative">
                 <div className="flex justify-between items-center px-4 py-2 bg-slate-800 border-b border-slate-700 shrink-0">
                    <span className="text-slate-400 text-xs font-mono">index.html</span>
                    <button 
                      onClick={() => {navigator.clipboard.writeText(generatedCode)}}
                      className="text-xs text-brand-400 hover:text-brand-300 font-medium"
                    >
                      Copy Code
                    </button>
                 </div>
                 <div className="flex-1 overflow-auto p-6">
                    <pre className="text-sm font-mono text-slate-300 whitespace-pre-wrap">
                      {generatedCode}
                    </pre>
                 </div>
              </div>
            )}
            
            {/* Floating Re-prompt bar */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-[90%] max-w-2xl z-50">
               <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-2 rounded-full shadow-2xl border border-slate-200 dark:border-slate-700 flex gap-2 items-center">
                <input
                   type="text"
                   value={prompt}
                   onChange={(e) => setPrompt(e.target.value)}
                   className="flex-1 bg-transparent border-none focus:ring-0 px-4 py-2 text-slate-800 dark:text-white placeholder:text-slate-500 focus:outline-none"
                   placeholder="Refine (e.g. 'Make the background dark')"
                   onKeyDown={(e) => {
                     if (e.key === 'Enter' && prompt.trim()) {
                       handleGenerate();
                     }
                   }}
                />
                <button 
                  onClick={handleGenerate}
                  disabled={!prompt.trim()}
                  className="bg-slate-900 dark:bg-slate-700 hover:bg-slate-800 dark:hover:bg-slate-600 text-white p-3 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <RefreshCw className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Builder;