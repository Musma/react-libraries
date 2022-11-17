import { css, Global } from '@emotion/react'

export const PretendardFont = () => {
  return (
    <Global
      styles={css`
        @font-face {
          font-family: 'Pretendard-Regular';
          src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff')
            format('woff');
          font-weight: 400;
          font-style: normal;
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
