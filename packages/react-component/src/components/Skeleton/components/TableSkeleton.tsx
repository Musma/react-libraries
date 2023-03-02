import { useMemo } from 'react'

import { useTheme } from '@emotion/react'

import { Grid } from 'src/components/Grid'
import { Box } from 'src/elements'

import { pulse } from '../styles'
import { SkeletonProps } from '../types'

export const TableSkeletons = ({ paragraph = 4, ...rest }: SkeletonProps) => {
  const theme = useTheme()

  /**
   * HOOKS
   */
  const tableHead = useMemo(() => {
    return (
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
    )
  }, [])

  const tableBody = useMemo(() => {
    return Array.from({ length: paragraph }).map((_, index) => (
      <Box
        key={index}
        css={{
          width: '100%',
          height: 20,
          borderRadius: theme.rounded.md,
          backgroundColor: rest.color || theme.colors.gray.main,
          animation: `${pulse} 1.5s cubic-bezier(0.65,0.05,0.36,1) infinite`,
        }}
        {...rest}
      />
    ))
  }, [paragraph])

  return (
    <Grid cols={3} spacing="lg">
      <Box css={{ display: 'flex', flexDirection: 'column', gap: theme.spacing.md }}>
        {tableHead}

        {tableBody}
      </Box>

      <Box css={{ display: 'flex', flexDirection: 'column', gap: theme.spacing.md }}>
        {tableHead}

        {tableBody}
      </Box>

      <Box css={{ display: 'flex', flexDirection: 'column', gap: theme.spacing.md }}>
        {tableHead}

        {tableBody}
      </Box>
    </Grid>
  )
}
