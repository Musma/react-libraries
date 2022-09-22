type headingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
type bodyType = 'body1' | 'body2' | 'body3'
type captionType = 'caption1' | 'caption2'
type subTitleType = 'subTitle1' | 'subTitle2' | 'subTitle3'

export type TypographyProps = {
  type?: headingType | bodyType | captionType | subTitleType
  className?: string
}

export interface HeadingProps {
  type?: 'heading'
  variant?: headingType
  className?: string
}

export interface BodyProps {
  type?: 'body'
  variant?: bodyType
  className?: string
}

export type CaptionProps = {
  type?: 'caption'
  variant?: captionType
  className?: string
}

export type SubTitleProps = {
  type?: 'subTitle'
  variant?: subTitleType
  className?: string
}
