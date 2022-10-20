import { PropsWithChildren } from 'react'

import { useTheme } from '@emotion/react'

import { Body, Caption, Heading, SubTitle } from './components'
import { TypographyProps } from './types'

export const Typography = ({ type, className, children }: PropsWithChildren<TypographyProps>) => {
  const theme = useTheme()
  if (type === 'body1' || type === 'body2' || type === 'body3') {
    return (
      <Body variant={type} css={{ color: theme.colors.black.dark }} className={className}>
        {children}
      </Body>
    )
  }
  if (type === 'caption1' || type === 'caption2') {
    return (
      <Caption variant={type} css={{ color: theme.colors.black.dark }} className={className}>
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
      <Heading variant={type} css={{ color: theme.colors.black.dark }} className={className}>
        {children}
      </Heading>
    )
  }
  if (type === 'subTitle1' || type === 'subTitle2' || type === 'subTitle3') {
    return (
      <SubTitle variant={type} css={{ color: theme.colors.black.dark }} className={className}>
        {children}
      </SubTitle>
    )
  }
  return (
    <Body variant={'body1'} css={{ color: theme.colors.black.dark }} className={className}>
      {children}
    </Body>
  )
}
