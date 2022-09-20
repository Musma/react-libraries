import { PropsWithChildren } from 'react'

import { css, cx } from '@emotion/css'
import { useTheme } from '@emotion/react'

import { Body } from './Body'
import { Caption } from './Caption'
import { Heading } from './Heading'
import { SubTitle } from './SubTitle'
import { TypographyProps } from './types'

export const Typography = ({ type, className, children }: PropsWithChildren<TypographyProps>) => {
  const theme = useTheme()
  if (type === 'body1' || type === 'body2' || type === 'body3') {
    return (
      <Body variant={type} className={cx(css({ color: theme.color.black.dark }), className)}>
        {children}
      </Body>
    )
  }
  if (type === 'caption1' || type === 'caption2') {
    return (
      <Caption variant={type} className={cx(css({ color: theme.color.black.dark }), className)}>
        {children}
      </Caption>
    )
  }
  if (
    type === 'h1' ||
    type === 'h2' ||
    type === 'h3' ||
    type === 'h4' ||
    type === 'h5' ||
    type === 'h6'
  ) {
    return (
      <Heading variant={type} className={cx(css({ color: theme.color.black.dark }), className)}>
        {children}
      </Heading>
    )
  }
  if (type === 'subTitle1' || type === 'subTitle2' || type === 'subTitle3') {
    return (
      <SubTitle variant={type} className={cx(css({ color: theme.color.black.dark }), className)}>
        {children}
      </SubTitle>
    )
  }
  return (
    <Body variant={'body1'} className={cx(css({ color: theme.color.black.dark }), className)}>
      {children}
    </Body>
  )
}
