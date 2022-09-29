import { PropsWithChildren } from 'react'

import { css, cx } from '@emotion/css'

import { SubTitleProps } from '../types'

const subTitleCss = {
  subTitle1: css({
    fontSize: '20px',
    fontWeight: 400,
    lineHeight: 1,
    letterSpacing: '-0.2px',
    margin: 0,
  }),
  subTitle2: css({
    fontSize: '14px',
    fontWeight: 600,
    lineHeight: '20px',
    margin: 0,
  }),
  subTitle3: css({
    fontSize: '12px',
    fontWeight: 600,
    lineHeight: '18px',
    margin: 0,
  }),
}

export const SubTitle = ({
  variant = 'subTitle1',
  children,
  className,
}: PropsWithChildren<SubTitleProps>) => {
  return <p className={cx(subTitleCss[variant], className)}>{children}</p>
}
