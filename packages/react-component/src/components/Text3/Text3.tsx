import { HTMLAttributes } from 'react'

import { css } from '@emotion/react'

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: 'small' | 'medium' | 'large'
}

export const Text3 = ({ size, ...rest }: TextProps) => {
  return (
    <p
      css={css`
        font-size: 18px;
        color: blue;
        margin: 0;
      `}
      {...rest}
    />
  )
}
