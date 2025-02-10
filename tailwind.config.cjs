// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx}"],
//   mode: "jit",
//   theme: {
//     extend: {
//       colors: {
//         primary: "#042140",
//         secondary: "#aaa6c3",
//         tertiary: "#03162c",
//         // "black-100": "#100d25",
//         "black-100": "03162c",
//         "black-200": "#090325",
//         "white-100": "#f3f3f3",
//       },
//       boxShadow: {
//         card: "0px 35px 120px -15px #211e35",
//       },
//       screens: {
//         xs: "450px",
//       },
//       backgroundImage: {
//         "hero-pattern": "url('/src/assets/bg.jpg')",
//       },
//     },
//   },
//   plugins: [],
// };


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        // Rich dark blue for primary backgrounds
        primary: "#050816",
        
        // Light gray for secondary text and elements
        secondary: "#a8b2d1",
        
        // Slightly lighter blue for tertiary elements
        tertiary: "#151030",
        
        // Dark surfaces
        "black-100": "#100d25",
        "black-200": "#090325",
        
        // Clean white
        "white-100": "#f3f3f3",

        // Accent color
        accent: "#915eff"
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      // backgroundImage: {
      //   "hero-pattern": "url('/src/assets/bg.jpg')",
      // },
    },
  },
  plugins: [],
};