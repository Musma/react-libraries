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
        },
        {
          caption1: {
            fontSize: 12,
          },
          caption2: {
            fontSize: 10,
          },
        }[variant],
      ]}
      className={className}
    >
      {children}
    </span>
  )
}
