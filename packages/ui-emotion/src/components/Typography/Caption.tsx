import { css, cx } from '@emotion/css'
import { PropsWithChildren } from 'react'
import { CaptionProps } from './types'
// FIXME: import 순서 및 정렬해주세요.

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
