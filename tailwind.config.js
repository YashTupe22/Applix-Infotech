/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        navy: '#0A0F1E',
        charcoal: '#0D1117',
        electric: '#4F46E5',
        cyan: '#06B6D4',
        purple: '#7C3AED',
        'electric-light': '#818CF8',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0A0F1E 0%, #1a0533 50%, #0A0F1E 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(79,70,229,0.15) 0%, rgba(124,58,237,0.1) 100%)',
        'glow-gradient': 'radial-gradient(ellipse at center, rgba(79,70,229,0.3) 0%, transparent 70%)',
      },
      boxShadow: {
        'glow-blue': '0 0 30px rgba(79,70,229,0.4), 0 0 60px rgba(79,70,229,0.15)',
        'glow-cyan': '0 0 30px rgba(6,182,212,0.4), 0 0 60px rgba(6,182,212,0.15)',
        'glow-purple': '0 0 30px rgba(124,58,237,0.4), 0 0 60px rgba(124,58,237,0.15)',
        'glass': '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'float-slow': 'float 8s ease-in-out 1s infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(79,70,229,0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(79,70,229,0.8), 0 0 80px rgba(79,70,229,0.3)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0px)' },
        },
      },
    },
  },
  plugins: [],
}
