// tailwind.config.js
module.exports = {
  darkMode: 'class', // Change from 'media' to 'class'
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        greenDark: 'var(--green-dark)',
        greenLight: 'var(--green-light)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Arial', 'Helvetica', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
    },
  },
}