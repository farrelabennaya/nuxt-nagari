/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/flowbite/**/*.{js,ts}",
    'node_modules/preline/dist/*.js',
     './app.vue',
  ],
  theme: {
    extend: {},
  },
  darkMode: 'false',
  plugins: [
    require('flowbite/plugin',),
    require('preline/plugin'),
  ],
  
}

