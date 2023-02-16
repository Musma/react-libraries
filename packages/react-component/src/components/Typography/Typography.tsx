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
   * @optional
   * @type {string}
   * @default body1
   *
   * h1 | h2 | h3 | h4 | h5 | h6
   * body1 | body2 | body3
   * cation1 | cation2
   * subTitle1 | subTitle2 | subTitle3
   *
   * @description
   * 표시될 문자의 타입을 정합니다
   */
  type?: HeadingType | BodyType | CaptionType | SubTitleType
  /**
   * @description
   * CSS Prop입니다
   */
  className?: string
}

/**
 *
 * @param type(optional) h1 | h2 | h3 | h4 | h5 | h6 | body1 | body2 | body3 | cation1 | cation2 | subTitle1 | subTitle2 | subTitle3
 * @param className(optional) CSS Prop입니다
 * @param children(required) 표시할 문자입니다
 * @example
 * <Typography type="h1">
 *    example
 * </Typography>
 *
 * @description
 * 특정 액션이 포함되지 않은 문장이나 문자를 표시할 때 사용합니다
 */
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
