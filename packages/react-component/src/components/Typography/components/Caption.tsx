import { PropsWithChildren } from 'react'

import { css } from '@emotion/react'

import { CaptionProps } from 'src/components/Typography/types'

const captionCss = {
  caption1: css({
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '16px',
    margin: 0,
  }),
  caption2: css({
    fontSize: '10px',
    fontWeight: 400,
    lineHeight: '14px',
    margin: 0,
  }),
}

export const Caption = ({
  variant = 'caption1',
  children,
  className,
}: PropsWithChildren<CaptionProps>) => {
  return (
    <span css={captionCss[variant]} className={className}>
      {children}
    </span>
  )
}
