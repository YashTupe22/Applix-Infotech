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
        outfit: ['Inter Variable', 'Inter', 'sans-serif'],
        inter: ['Inter Variable', 'Inter', 'sans-serif'],
      },
      colors: {
        navy: '#08090a',
        charcoal: '#0f1011',
        electric: '#5e6ad2',
        cyan: '#7170ff',
        purple: '#828fff',
        'electric-light': '#7170ff',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(180deg, #08090a 0%, #0b0c0e 50%, #08090a 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
        'glow-gradient': 'radial-gradient(ellipse at center, rgba(94,106,210,0.14) 0%, transparent 70%)',
      },
      boxShadow: {
        'glow-blue': '0 0 0 1px rgba(255,255,255,0.08), 0 8px 24px rgba(0,0,0,0.25)',
        'glow-cyan': '0 0 0 1px rgba(255,255,255,0.08), 0 8px 24px rgba(0,0,0,0.25)',
        'glow-purple': '0 0 0 1px rgba(255,255,255,0.08), 0 8px 24px rgba(0,0,0,0.25)',
        'glass': '0 0 0 1px rgba(255,255,255,0.08), 0 10px 30px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.03)',
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
