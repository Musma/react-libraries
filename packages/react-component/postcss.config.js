module.exports = {
  plugins: {
    // Nesting CSS 사용하기 위함. 
    // index.css
    // @layer utilities 안의 .custom-scroll
    // https://tailwindcss.com/docs/using-with-preprocessors#nesting
    'tailwindcss/nesting': {}, 
    tailwindcss: {},
    autoprefixer: {},
  },
}
