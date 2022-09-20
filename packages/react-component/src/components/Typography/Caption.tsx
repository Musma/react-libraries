import { PropsWithChildren } from 'react'

import { css, cx } from '@emotion/css'

import { CaptionProps } from 'src/components/Typography/types'

const captionCss = {
  caption1: css({
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '16px',
  }),
  caption2: css({
    fontSize: '10px',
    fontWeight: 400,
    lineHeight: '14px',
  }),
}

export const Caption = ({
  variant = 'caption1',
  children,
  className,
}: PropsWithChildren<CaptionProps>) => {
  return <span className={cx(captionCss[variant], className)}>{children}</span>
}
