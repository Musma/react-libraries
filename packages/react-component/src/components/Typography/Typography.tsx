import { PropsWithChildren } from 'react'

import { Body } from './Body'
import { Caption } from './Caption'
import { Heading } from './Heading'
import { SubTitle } from './SubTitle'
import { BodyProps, HeadingProps, CaptionProps, SubTitleProps } from './types'

type TypographyProps = BodyProps | HeadingProps | CaptionProps | SubTitleProps

export const Typography = ({
  type,
  variant,
  className,
  children,
}: PropsWithChildren<TypographyProps>) => {
  switch (type) {
    case 'body':
      return (
        <Body variant={variant} className={className}>
          {children}
        </Body>
      )
    case 'caption':
      return (
        <Caption variant={variant} className={className}>
          {children}
        </Caption>
      )
    case 'heading':
      return (
        <Heading variant={variant} className={className}>
          {children}
        </Heading>
      )
    case 'subTitle':
      return (
        <SubTitle variant={variant} className={className}>
          {children}
        </SubTitle>
      )
    default:
      return (
        <Body variant={'body1'} className={className}>
          {children}
        </Body>
      )
  }
}
