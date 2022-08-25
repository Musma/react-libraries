import { css, Global, ThemeProvider } from '@emotion/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import font1 from './fonts/Pretendard-Regular.subset.woff2'
import { theme } from './styles/theme'
import './reset.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Global
      styles={css`
        :root {
          font-synthesis: none;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          -webkit-text-size-adjust: 100%;
        }
        @font-face {
          font-family: 'Pretendard';
          font-style: normal;
          font-weight: 400;
          src: local('Pretendard'), url(${font1}) format('woff2');
        }
        body {
          font-family: 'Pretendard';
          margin: 0;
          min-width: 320px;
        }
      `}
    />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
