import { HTMLAttributes } from 'react'

import { keyframes } from '@emotion/react'

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'circle' | 'rectangle'
}

const pulse = keyframes`
  50% {
    opacity: .5;
  }
`

export const Skeleton = ({ variant = 'rectangle', ...rest }: SkeletonProps) => {
  return (
    <div
      css={{
        borderRadius: variant === 'rectangle' ? 6 : '50%',
        backgroundColor: 'rgb(203,213,225)',
        animation: `${pulse} 2s cubic-bezier(.4,0,.6,1) infinite`,
      }}
      {...rest}
    />
  )
}
