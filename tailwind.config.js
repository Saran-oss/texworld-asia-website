/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primary: { DEFAULT: '#1B4332', dark: '#122D22' },
        secondary: '#6B7A6E',
        accent: '#B2834F',
        'accent-text': '#8B5E2A',
        bg: { DEFAULT: '#F7F5F0', alt: '#EFEBE2' },
        surface: '#FFFFFF',
        text: { primary: '#1F2421', secondary: '#4B5350', muted: '#5A615C', faint: '#7C847F' },
        border: '#DAD5C8',
        focus: '#2E6E52',
        'focus-on-dark': '#F7F5F0',
        success: '#2F7A4D',
        'warning-text': '#8A5A17',
        error: '#A3402F',
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', '"Times New Roman"', 'serif'],
        body: ['"Public Sans"', '-apple-system', '"Segoe UI"', 'sans-serif'],
      },
      spacing: {
        1: '4px', 2: '8px', 3: '12px', 4: '16px',
        5: '24px', 6: '32px', 7: '48px', 8: '64px', 9: '96px',
      },
      borderRadius: {
        sm: '2px', md: '4px', lg: '0px',
      },
      boxShadow: {
        float: '0 12px 32px rgba(19, 27, 22, 0.08)',
      },
      maxWidth: {
        container: '1200px',
        wide: '1440px',
      },
    },
  },
  plugins: [],
}
