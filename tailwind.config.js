/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'obsidian': '#050505',
        'electric-indigo': '#4F46E5',
        'cyan-neon': '#00D1FF',
        'glass-border': 'rgba(59, 130, 246, 0.5)',
        'glass-surface': 'rgba(255, 255, 255, 0.03)',
        'glass-white': 'rgba(255, 255, 255, 0.1)',
      },
      fontFamily: {
        'sans': ['"Space Grotesk"', 'sans-serif'],
        'mono': ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'galaxy': 'radial-gradient(ellipse at bottom, #0d1117 0%, #050505 100%)',
      }
    },
  },
  plugins: [],
}
