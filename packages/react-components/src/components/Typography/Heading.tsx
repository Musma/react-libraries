import { css, cx } from '@emotion/css'
import { createElement, PropsWithChildren } from 'react'
import { HeadingProps } from './types'

const headingCss = {
  h1: css({
    fontSize: '40px',
    fontWeight: 'bold',
    lineHeight: '56px',
    letterSpacing: '-0.6px',
  }),
  h2: css({
    fontSize: '32px',
    fontWeight: 'bold',
    lineHeight: '48px',
    letterSpacing: '-0.6px',
  }),
  h3: css({
    fontSize: '24px',
    fontWeight: 600,
    lineHeight: '32px',
    letterSpacing: '-0.6px',
  }),
  h4: css({
    fontSize: '20px',
    fontWeight: 600,
    lineHeight: '30px',
    letterSpacing: '-0.2px',
  }),
  h5: css({
    fontSize: '18px',
    fontWeight: 600,
    lineHeight: '24px',
    letterSpacing: '-0.2px',
  }),
  h6: css({
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: '24px',
    letterSpacing: '-0.2px',
  }),
}

export const Heading = ({
  variant = 'h1',
  children,
  className,
}: PropsWithChildren<HeadingProps>) => {
  return createElement(variant, { className: cx(headingCss[variant], className) }, children)
}
