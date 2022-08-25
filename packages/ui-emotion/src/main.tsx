import { css, Global, ThemeProvider } from '@emotion/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import regular from './fonts/Pretendard-Regular.subset.woff2'
import semiBold from './fonts/Pretendard-SemiBold.subset.woff2'
import bold from './fonts/Pretendard-Bold.subset.woff2'

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
          font-weight: 400;
          src: url(${regular}) format('woff2');
        }
        @font-face {
          font-family: 'Pretendard';
          font-weight: 600;
          src: url(${semiBold}) format('woff2');
        }
        @font-face {
          font-family: 'Pretendard';
          font-weight: 700;
          src: url(${bold}) format('woff2');
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
