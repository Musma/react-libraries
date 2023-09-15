import { PropsWithChildren } from 'react'

import { jsx } from '@emotion/react'

export type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export interface HeadingProps {
  type?: 'heading'
  variant?: HeadingType
  color?: string
  className?: string
}

export const Heading = ({
  variant = 'h1',
  color,
  children,
  className,
}: PropsWithChildren<HeadingProps>) => {
  return jsx(
    variant,
    {
      css: [
        {
          margin: 0,
          lineHeight: 1,
          color,
        },
        {
          h1: { fontSize: '2.5rem', fontWeight: 700, letterSpacing: -0.6 },
          h2: { fontSize: '2rem', fontWeight: 700, letterSpacing: -0.6 },
          h3: { fontSize: '1.5rem', fontWeight: 600, letterSpacing: -0.6 },
          h4: { fontSize: '1.25rem', fontWeight: 600, letterSpacing: -0.2 },
          h5: { fontSize: '1.125rem', fontWeight: 600, letterSpacing: -0.2 },
          h6: { fontSize: '1rem', fontWeight: 600, letterSpacing: -0.2 },
        }[variant],
      ],
      className,
    },
    children,
  )
}
