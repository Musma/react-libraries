import { css, Global } from '@emotion/react'
import emotionNormalize from 'emotion-normalize'

import regular from 'src/fonts/Pretendard-Regular.subset.woff2'
import medium from 'src/fonts/Pretendard-Medium.subset.woff2'
import semiBold from 'src/fonts/Pretendard-SemiBold.subset.woff2'
import bold from 'src/fonts/Pretendard-Bold.subset.woff2'

export const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        ${emotionNormalize}

        @font-face {
          font-family: 'Pretendard';
          font-weight: 400;
          src: url(${regular}) format('woff2');
        }
        @font-face {
          font-family: 'Pretendard';
          font-weight: 500;
          src: url(${medium}) format('woff2');
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

        *,
        *::after,
        *::before {
          box-sizing: border-box;
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
          font-smoothing: antialiased;
          font-family: 'Pretendard';
          margin: 0;
          line-height: 1;
        }
      `}
    />
  )
}
