module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  //TailwindとMantineを同時に使う場合は、ここに記述する
  corePlugins: {
    preflight: false,
  },
};
