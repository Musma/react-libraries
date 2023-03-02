import { useMemo } from 'react'

import { useTheme } from '@emotion/react'

import { Box } from 'src/elements'

import { pulse } from '../styles'
import { SkeletonProps } from '../types'

export const ListSkeletons = ({ paragraph = 4, ...rest }: SkeletonProps) => {
  const theme = useTheme()

  /**
   * HOOKS
   */
  const listItem = useMemo(() => {
    return Array.from({ length: paragraph }).map((_, index) => (
      <Box
        key={index}
        css={{
          width: index === 0 ? '50%' : '100%',
          height: 20,
          borderRadius: theme.rounded.md,
          backgroundColor: rest.style?.backgroundColor || theme.colors.gray.main,
          animation: `${pulse} 1.5s cubic-bezier(0.65,0.05,0.36,1) infinite`,
        }}
        {...rest}
      />
    ))
  }, [paragraph])

  return (
    <Box css={{ display: 'flex', flexDirection: 'column', gap: theme.spacing.md }}>{listItem}</Box>
  )
}
