import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { css, Global, ThemeProvider } from '@emotion/react'
import App from './App'

import regular from './fonts/Pretendard-Regular.subset.woff2'
import semiBold from './fonts/Pretendard-SemiBold.subset.woff2'
import bold from './fonts/Pretendard-Bold.subset.woff2'

import { theme } from './styles/theme'
// FIXME:
// https://github.com/Sayegh7/emotion-reset
// 전역 CSS가 reset.css와 <Global /> 두 가지에서 관리되는것 보다 <Global /> 안에서 다 관리하는게 나아보이네요.
// FIXME: emotion-reset 을 사용하던지 글로벌 스타일 컴포넌트를 따로 빼주세요.
import './reset.css'

const rootElement = document.getElementById('root')

// FIXME: font-weight 500 추가해놓는게 나을 것 같네요.
// FIXME: Context API나 Provider 감싸는건 App.tsx에서 하는게 좋아보입니다.
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
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
    </StrictMode>,
  )
}
