import { HTMLAttributes } from 'react'

import { keyframes } from '@emotion/react'

import { Box } from 'src/elements'

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'circle' | 'rectangle'
  backgroundColor?: string
}

const pulse = keyframes`
  50% {
    opacity: .5;
  }
`

export const Skeleton = ({ variant = 'rectangle', backgroundColor, ...rest }: SkeletonProps) => {
  return (
    <Box
      css={{
        borderRadius: variant === 'rectangle' ? 6 : '50%',
        backgroundColor: backgroundColor || 'rgb(203,213,225)',
        animation: `${pulse} 2s cubic-bezier(.4,0,.6,1) infinite`,
      }}
      {...rest}
    />
  )
}
