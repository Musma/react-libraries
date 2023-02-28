import { useTheme } from '@emotion/react'

import { Grid } from 'src/components/Grid'
import { Box } from 'src/elements'

import { pulse } from './Keyframes'
import { SkeletonProps } from '../types'

export const TableSkeletons = ({ paragraph = 4, ...rest }: SkeletonProps) => {
  const theme = useTheme()
  const tableBody = []

  for (let i = 0; i < paragraph; i++) {
    tableBody.push(
      <Box
        key={i}
        css={{
          width: '100%',
          height: 20,
          borderRadius: theme.rounded.md,
          backgroundColor: rest.color || theme.colors.gray.main,
          animation: `${pulse} 1.5s cubic-bezier(0.65,0.05,0.36,1) infinite`,
        }}
        {...rest}
      />,
    )
  }

  return (
    <Grid cols={3} spacing="lg">
      <Box css={{ display: 'flex', flexDirection: 'column', gap: theme.spacing.md }}>
        {/* head */}
        <Box
          css={{
            width: '50%',
            height: 20,
            borderRadius: theme.rounded.md,
            backgroundColor: rest.style?.backgroundColor || theme.colors.gray.main,
            animation: `${pulse} 1.5s cubic-bezier(0.65,0.05,0.36,1) infinite`,
          }}
          {...rest}
        />

        {/* body */}
        {tableBody}
      </Box>

      <Box css={{ display: 'flex', flexDirection: 'column', gap: theme.spacing.md }}>
        {/* head */}
        <Box
          css={{
            width: '50%',
            height: 20,
            borderRadius: theme.rounded.md,
            backgroundColor: rest.style?.backgroundColor || theme.colors.gray.main,
            animation: `${pulse} 1.5s cubic-bezier(0.65,0.05,0.36,1) infinite`,
          }}
          {...rest}
        />

        {/* body */}
        {tableBody}
      </Box>

      <Box css={{ display: 'flex', flexDirection: 'column', gap: theme.spacing.md }}>
        {/* head */}
        <Box
          css={{
            width: '50%',
            height: 20,
            borderRadius: theme.rounded.md,
            backgroundColor: rest.style?.backgroundColor || theme.colors.gray.main,
            animation: `${pulse} 1.5s cubic-bezier(0.65,0.05,0.36,1) infinite`,
          }}
          {...rest}
        />

        {/* body */}
        {tableBody}
      </Box>
    </Grid>
  )
}
