/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    'src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@musma/react-component/dist/**.*.{js,ts,jsx,tsx}' // @musma/react-component 안의 컴포넌트 추가
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        pretendard: ["Pretendard", "-apple-system", "BlinkMacSystemFont", "system-ui", "Roboto", "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "sans-serif"]
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
