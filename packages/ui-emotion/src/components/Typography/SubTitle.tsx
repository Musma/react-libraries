import { css, cx } from '@emotion/css'
import { PropsWithChildren } from 'react'
import { SubTitleProps } from './types'

// FIXME: import 순서 및 정렬해주세요.

const subTitleCss = {
  subTitle1: css({
    fontSize: '20px',
    fontWeight: 400,
    lineHeight: 1,
    letterSpacing: '-0.2px',
  }),
  subTitle2: css({
    fontSize: '14px',
    fontWeight: 600,
    lineHeight: '20px',
  }),
  subTitle3: css({
    fontSize: '12px',
    fontWeight: 600,
    lineHeight: '18px',
  }),
}

export const SubTitle = ({
  variant = 'subTitle1',
  children,
  className,
}: PropsWithChildren<SubTitleProps>) => {
  return <p className={cx(subTitleCss[variant], className)}>{children}</p>
}
