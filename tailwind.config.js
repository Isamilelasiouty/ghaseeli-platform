/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: 'var(--white)',
        surface: 'var(--surface)',
        'blue-50': 'var(--blue-50)',
        'blue-500': 'var(--blue-500)',
        'blue-700': 'var(--blue-700)',
        'blue-900': 'var(--blue-900)',
        ink: 'var(--ink)',
        muted: 'var(--muted)',
        ok: 'var(--ok)',
        warn: 'var(--warn)',
        danger: 'var(--danger)',
      },
      fontFamily: {
        heading: ['Cairo', 'sans-serif'],
        body: ['"IBM Plex Sans Arabic"', 'sans-serif'],
      },
      borderRadius: {
        'card': '20px',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(10, 110, 189, 0.08)',
        'elevated': '0 12px 32px -4px rgba(10, 47, 82, 0.12)',
        'glow': '0 0 24px rgba(10, 110, 189, 0.25)',
      }
    },
  },
  plugins: [],
}
