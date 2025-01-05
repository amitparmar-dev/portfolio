/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend:{
    fontFamily: {
      'sans': ['-apple-system', 'BlinkMacSystemFont'],
      'serif': ['Georgia', 'Cambria'],
      'mono': ['SFMono-Regular', 'Menlo'],
      'display': ['Oswald'],
      'body': ['Open Sans'],
      'ProtestRiot': ['Protest Riot', 'sans-serif'],
    }
  }
  },
  plugins: [],
}