import { PropsWithChildren } from 'react'

import { css, jsx } from '@emotion/react'

import { HeadingProps } from 'src/components/Typography/types'

const headingCss = {
  h1: css({
    fontSize: '40px',
    fontWeight: 700,
    lineHeight: '56px',
    letterSpacing: '-0.6px',
    margin: 0,
  }),
  h2: css({
    fontSize: '32px',
    fontWeight: 700,
    lineHeight: '48px',
    letterSpacing: '-0.6px',
    margin: 0,
  }),
  h3: css({
    fontSize: '24px',
    fontWeight: 600,
    lineHeight: '32px',
    letterSpacing: '-0.6px',
    margin: 0,
  }),
  h4: css({
    fontSize: '20px',
    fontWeight: 600,
    lineHeight: '30px',
    letterSpacing: '-0.2px',
    margin: 0,
  }),
  h5: css({
    fontSize: '18px',
    fontWeight: 600,
    lineHeight: '24px',
    letterSpacing: '-0.2px',
    margin: 0,
  }),
  h6: css({
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: '24px',
    letterSpacing: '-0.2px',
    margin: 0,
  }),
}

export const Heading = ({
  variant = 'h1',
  children,
  className,
}: PropsWithChildren<HeadingProps>) => {
  return jsx(variant, { css: headingCss[variant], className }, children)
}
