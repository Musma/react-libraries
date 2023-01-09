import { PropsWithChildren } from 'react'

import {
  Body,
  BodyType,
  Caption,
  CaptionType,
  Heading,
  HeadingType,
  SubTitle,
  SubTitleType,
} from './components'

export type TypographyProps = {
  /**
   * @description
   */
  type?: HeadingType | BodyType | CaptionType | SubTitleType
  /**
   * @description
   */
  className?: string
}

export const Typography = ({ type, className, children }: PropsWithChildren<TypographyProps>) => {
  if (type === 'body1' || type === 'body2' || type === 'body3') {
    return (
      <Body variant={type} className={className}>
        {children}
      </Body>
    )
  }

  if (type === 'caption1' || type === 'caption2') {
    return (
      <Caption variant={type} className={className}>
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
      <Heading variant={type} className={className}>
        {children}
      </Heading>
    )
  }

  if (type === 'subTitle1' || type === 'subTitle2' || type === 'subTitle3') {
    return (
      <SubTitle variant={type} className={className}>
        {children}
      </SubTitle>
    )
  }

  return (
    <Body variant={'body1'} className={className}>
      {children}
    </Body>
  )
}
