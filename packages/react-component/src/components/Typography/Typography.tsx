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
   * @default body1
   *
   * 표시될 문자의 타입을 정합니다
   */
  type?: HeadingType | BodyType | CaptionType | SubTitleType
  /**
   *
   */
  color?: string
  /**
   * CSS Prop입니다
   */
  className?: string
}

/**
 * https://www.developers.musma.net/docs/react-components/typography
 *
 * 특정 액션이 포함되지 않은 문장이나 문자를 표시할 때 사용합니다
 */
export const Typography = ({
  type,
  color,
  className,
  children,
}: PropsWithChildren<TypographyProps>) => {
  if (type === 'body1' || type === 'body2' || type === 'body3') {
    return (
      <Body variant={type} color={color} className={className}>
        {children}
      </Body>
    )
  }

  if (type === 'caption1' || type === 'caption2') {
    return (
      <Caption variant={type} color={color} className={className}>
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
      <Heading variant={type} color={color} className={className}>
        {children}
      </Heading>
    )
  }

  if (type === 'subTitle1' || type === 'subTitle2' || type === 'subTitle3') {
    return (
      <SubTitle variant={type} color={color} className={className}>
        {children}
      </SubTitle>
    )
  }

  return (
    <Body variant={'body1'} color={color} className={className}>
      {children}
    </Body>
  )
}
