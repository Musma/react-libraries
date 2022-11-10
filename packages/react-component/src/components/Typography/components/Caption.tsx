import { PropsWithChildren } from 'react'

export type CaptionType = 'caption1' | 'caption2'

export type CaptionProps = {
  type?: 'caption'
  variant?: CaptionType
  className?: string
}

export const Caption = ({
  variant = 'caption1',
  children,
  className,
}: PropsWithChildren<CaptionProps>) => {
  return (
    <span
      css={[
        {
          margin: 0,
          fontWeight: 400,
          lineHeight: 1,
        },
        {
          caption1: {
            fontSize: '0.75rem',
          },
          caption2: {
            fontSize: '0.625rem',
          },
        }[variant],
      ]}
      className={className}
    >
      {children}
    </span>
  )
}
