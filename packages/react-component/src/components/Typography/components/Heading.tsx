import { PropsWithChildren } from 'react'

import { jsx } from '@emotion/react'

export type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export interface HeadingProps {
  type?: 'heading'
  variant?: HeadingType
  className?: string
}

export const Heading = ({
  variant = 'h1',
  children,
  className,
}: PropsWithChildren<HeadingProps>) => {
  return jsx(
    variant,
    {
      css: [
        {
          margin: 0,
        },
        {
          h1: { fontSize: 40, fontWeight: 700, letterSpacing: -0.6 },
          h2: { fontSize: 32, fontWeight: 700, letterSpacing: -0.6 },
          h3: { fontSize: 24, fontWeight: 600, letterSpacing: -0.6 },
          h4: { fontSize: 20, fontWeight: 600, letterSpacing: -0.2 },
          h5: { fontSize: 18, fontWeight: 600, letterSpacing: -0.2 },
          h6: { fontSize: 16, fontWeight: 600, letterSpacing: -0.2 },
        }[variant],
      ],
      className,
    },
    children,
  )
}
