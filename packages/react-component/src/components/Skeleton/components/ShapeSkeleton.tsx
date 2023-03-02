import { useTheme } from '@emotion/react'

import { Box } from 'src/elements'

import { pulse } from '../styles'
import { SkeletonProps } from '../types'

export const ShapeSkeleton = ({ variant, ...rest }: SkeletonProps) => {
  const theme = useTheme()

  return (
    <Box
      css={{
        borderRadius: variant === 'rectangle' ? theme.rounded.md : '50%',
        backgroundColor: rest.style?.backgroundColor || theme.colors.gray.main,
        animation: `${pulse} 1.5s cubic-bezier(0.65,0.05,0.36,1) infinite`,
      }}
      {...rest}
    />
  )
}
