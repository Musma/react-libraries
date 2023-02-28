import { useTheme } from '@emotion/react'

import { Box } from 'src/elements'

import { pulse } from './Keyframes'
import { SkeletonProps } from '../types'

export const ListSkeletons = ({ paragraph = 4, ...rest }: SkeletonProps) => {
  const theme = useTheme()
  const listItem = []

  for (let i = 0; i < paragraph; i++) {
    listItem.push(
      <Box
        key={i}
        css={{
          width: i === 0 ? '50%' : '100%',
          height: 20,
          borderRadius: theme.rounded.md,
          backgroundColor: rest.style?.backgroundColor || theme.colors.gray.main,
          animation: `${pulse} 1.5s cubic-bezier(0.65,0.05,0.36,1) infinite`,
        }}
        {...rest}
      />,
    )
  }

  return (
    <Box css={{ display: 'flex', flexDirection: 'column', gap: theme.spacing.md }}>{listItem}</Box>
  )
}
