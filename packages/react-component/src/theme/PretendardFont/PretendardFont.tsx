import { css, Global } from '@emotion/react'

export const PretendardFont = () => {
  return (
    <Global
      styles={css`
        @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable-dynamic-subset.css');

        html {
          font-family: 'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont,
            system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR',
            'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
        }
      `}
    />
  )
}
