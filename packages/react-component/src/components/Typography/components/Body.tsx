import { PropsWithChildren } from 'react'

export type BodyType = 'body1' | 'body2' | 'body3'

export interface BodyProps {
  type?: 'body'
  variant?: BodyType
  color?: string
  className?: string
}

export const Body = ({
  variant = 'body1',
  color,
  children,
  className,
}: PropsWithChildren<BodyProps>) => {
  return (
    <p
      css={[
        {
          margin: 0,
          fontWeight: 400,
          lineHeight: 1,
          color,
        },
        {
          body1: {
            fontSize: '1.125rem',
            letterSpacing: -0.2,
          },
          body2: {
            fontSize: '1rem',
            letterSpacing: -0.2,
          },
          body3: {
            fontSize: '0.875rem',
          },
        }[variant],
      ]}
      className={className}
    >
      {children}
    </p>
  )
}
