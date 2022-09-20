import { PropsWithChildren } from 'react'

import { css, cx } from '@emotion/css'

import { BodyProps } from 'src/components/Typography/types'

const bodyCss = {
  body1: css({
    fontSize: '18px',
    fontWeight: 400,
    lineHeight: '24px',
    letterSpacing: '-0.2px',
  }),
  body2: css({
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '22px',
    letterSpacing: '-0.2px',
  }),
  body3: css({
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '20px',
  }),
}

export const Body = ({ variant = 'body1', children, className }: PropsWithChildren<BodyProps>) => {
  return <p className={cx(bodyCss[variant], className)}>{children}</p>
}
