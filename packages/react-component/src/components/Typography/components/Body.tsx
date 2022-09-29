import { PropsWithChildren } from 'react'

import { css, cx } from '@emotion/css'

import { BodyProps } from 'src/components/Typography/types'

const bodyCss = {
  body1: css({
    fontSize: '18px',
    fontWeight: 400,
    lineHeight: '24px',
    letterSpacing: '-0.2px',
    margin: 0,
  }),
  body2: css({
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '22px',
    letterSpacing: '-0.2px',
    margin: 0,
  }),
  body3: css({
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '20px',
    margin: 0,
  }),
}

export const Body = ({ variant = 'body1', children, className }: PropsWithChildren<BodyProps>) => {
  return <p className={cx(bodyCss[variant], className)}>{children}</p>
}
