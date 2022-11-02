import { PropsWithChildren } from 'react'

export type BodyType = 'body1' | 'body2' | 'body3'

export interface BodyProps {
  type?: 'body'
  variant?: BodyType
  className?: string
}

export const Body = ({ variant = 'body1', children, className }: PropsWithChildren<BodyProps>) => {
  return (
    <p
      css={[
        {
          margin: 0,
          fontWeight: 400,
        },
        {
          body1: {
            fontSize: 18,
            letterSpacing: -0.2,
          },
          body2: {
            fontSize: 16,
            letterSpacing: -0.2,
          },
          body3: {
            fontSize: 14,
          },
        }[variant],
      ]}
      className={className}
    >
      {children}
    </p>
  )
}
