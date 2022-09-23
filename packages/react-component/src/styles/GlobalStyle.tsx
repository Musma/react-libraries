import { css, Global } from '@emotion/react'

export interface GlobalStyleProps {
  globalStyle?: string
}

export const GlobalStyle = ({ globalStyle }: GlobalStyleProps) => {
  return (
    <Global
      styles={css`
        *,
        *::after,
        *::before {
          box-sizing: border-box;
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
          font-smoothing: antialiased;
          font-family: 'Pretendard';
        }

        li {
          list-style-type: none;
        }

        ${globalStyle}
      `}
    />
  )
}
