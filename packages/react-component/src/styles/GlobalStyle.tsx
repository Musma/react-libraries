import { css, Global } from '@emotion/react'
import emotionNormalize from 'emotion-normalize'

export interface GlobalStyleProps {
  globalStyle?: string
}

export const GlobalStyle = ({ globalStyle }: GlobalStyleProps) => {
  return (
    <Global
      styles={css`
        ${emotionNormalize}

        @font-face {
          font-family: 'Pretendard';
          font-weight: 900;
          font-display: swap;
          src: local('Pretendard Black'),
            url('/src/assets/fonts/Pretendard-Black.subset.woff2') format('woff2');
        }

        @font-face {
          font-family: 'Pretendard';
          font-weight: 800;
          font-display: swap;
          src: local('Pretendard ExtraBold'),
            url('/src/assets/fonts/Pretendard-ExtraBold.subset.woff2') format('woff2');
        }

        @font-face {
          font-family: 'Pretendard';
          font-weight: 700;
          font-display: swap;
          src: local('Pretendard Bold'),
            url('/src/assets/fonts/Pretendard-Bold.subset.woff2') format('woff2');
        }

        @font-face {
          font-family: 'Pretendard';
          font-weight: 600;
          font-display: swap;
          src: local('Pretendard SemiBold'),
            url('/src/assets/fonts/Pretendard-SemiBold.subset.woff2') format('woff2');
        }

        @font-face {
          font-family: 'Pretendard';
          font-weight: 500;
          font-display: swap;
          src: local('Pretendard Medium'),
            url('/src/assets/fonts/Pretendard-Medium.subset.woff2') format('woff2');
        }

        @font-face {
          font-family: 'Pretendard';
          font-weight: 400;
          font-display: swap;
          src: local('Pretendard Regular'),
            url('/src/assets/fonts/Pretendard-Regular.subset.woff2') format('woff2');
        }

        @font-face {
          font-family: 'Pretendard';
          font-weight: 300;
          font-display: swap;
          src: local('Pretendard Light'),
            url('/src/assets/fonts/Pretendard-Light.subset.woff2') format('woff2');
        }

        @font-face {
          font-family: 'Pretendard';
          font-weight: 200;
          font-display: swap;
          src: local('Pretendard ExtraLight'),
            url('/src/assets/fonts/Pretendard-ExtraLight.subset.woff2') format('woff2');
        }

        @font-face {
          font-family: 'Pretendard';
          font-weight: 100;
          font-display: swap;
          src: local('Pretendard Thin'),
            url('/src/assets/fonts/Pretendard-Thin.subset.woff2') format('woff2');
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
          padding: 0;
          line-height: 1;
        }

        li {
          list-style-type: none;
        }

        ${globalStyle}
      `}
    />
  )
}
