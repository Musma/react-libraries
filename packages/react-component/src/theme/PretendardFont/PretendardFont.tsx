import { css, Global } from '@emotion/react'

import PretendardRegular from 'src/assets/fonts/Pretendard-Regular.subset.woff2'

export const PretendardFont = () => {
  return (
    <Global
      styles={css`
        @font-face {
          font-family: 'Pretendard';
          font-weight: 400;
          font-display: swap;
          src: local('Pretendard Regular'), url(${PretendardRegular}) format('woff2');
        }

        html {
          font-family: 'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont,
            system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR',
            'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
        }
      `}
    />
  )
}
