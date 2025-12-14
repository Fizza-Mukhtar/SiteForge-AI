import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SiteForge AI - Build Better Websites',
  description: 'A modern, high-conversion landing page for an AI website builder SaaS.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth scroll-pt-24">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                darkMode: 'class',
                theme: {
                  extend: {
                    fontFamily: {
                      sans: ['Inter', 'sans-serif'],
                    },
                    colors: {
                      brand: {
                        50: '#eff6ff',
                        100: '#dbeafe',
                        200: '#bfdbfe',
                        300: '#93c5fd',
                        400: '#60a5fa',
                        500: '#3b82f6',
                        600: '#2563eb',
                        700: '#1d4ed8',
                        800: '#1e40af',
                        900: '#1e3a8a',
                      }
                    },
                    animation: {
                      'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                      'bounce-slow': 'bounce 3s infinite',
                    },
                    keyframes: {
                      fadeInUp: {
                        '0%': { opacity: '0', transform: 'translateY(20px)' },
                        '100%': { opacity: '1', transform: 'translateY(0)' },
                      }
                    }
                  }
                }
              }
            `
          }}
        />
      </head>
      <body className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 antialiased selection:bg-brand-500 selection:text-white transition-colors duration-300">
        <div id="root">{children}</div>
      </body>
    </html>
  );
}