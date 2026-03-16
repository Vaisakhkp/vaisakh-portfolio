/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#111318',
        ember: '#d58e32',
        moss: '#365547',
        sand: '#efe4d2',
        shell: '#f8f3eb',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Manrope"', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 24px 80px rgba(213, 142, 50, 0.18)',
      },
      backgroundImage: {
        noise:
          "radial-gradient(circle at 20% 20%, rgba(213, 142, 50, 0.22), transparent 30%), radial-gradient(circle at 80% 0%, rgba(54, 85, 71, 0.18), transparent 26%), radial-gradient(circle at 50% 100%, rgba(255, 255, 255, 0.05), transparent 28%)",
      },
    },
  },
  plugins: [],
};
