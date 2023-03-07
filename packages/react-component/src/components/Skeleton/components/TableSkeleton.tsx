import { useMemo } from 'react'

import { useTheme } from '@emotion/react'

import { Grid } from 'src/components/Grid'
import { Box } from 'src/elements'

import { pulse } from '../styles'
import { SkeletonProps } from '../types'

export const TableSkeletons = ({ paragraph = 4, column = 5, ...rest }: SkeletonProps) => {
  const theme = useTheme()

  /**
   * HOOKS
   */
  const tableHead = useMemo(() => {
    return (
      <Box
        css={{
          borderRadius: theme.rounded.md,
          padding: theme.spacing.md,
          backgroundColor: theme.colors.white.main,
          borderBottom: `1px solid ${theme.colors.white.lighter}`,
        }}
      >
        <Box
          css={{
            width: '46%',
            height: 20,
            borderRadius: theme.rounded.md,
            backgroundColor: rest.style?.backgroundColor || theme.colors.gray.lighter,
            animation: `${pulse} 1.5s cubic-bezier(0.65,0.05,0.36,1) infinite`,
          }}
          {...rest}
        />
      </Box>
    )
  }, [])

  const tableBody = useMemo(() => {
    return Array.from({ length: paragraph }).map((_, index) => (
      <Box
        key={index}
        css={{
          padding: theme.spacing.md,
          backgroundColor: theme.colors.white.main,
          borderBottom: `1px solid ${theme.colors.white.lighter}`,
        }}
      >
        <Box
          css={{
            height: 15,
            borderRadius: theme.rounded.md,
            backgroundColor: rest.style?.backgroundColor || theme.colors.gray.lighter,
            animation: `${pulse} 1.5s cubic-bezier(0.65,0.05,0.36,1) infinite`,
          }}
          {...rest}
        />
      </Box>
    ))
  }, [paragraph])

  return (
    <Grid
      cols={column}
      css={{ border: `1px solid ${theme.colors.white.lighter}`, borderBottom: 0 }}
    >
      {Array.from({ length: column }).map((_, index) => (
        <Box key={index}>
          {tableHead}

          {tableBody}
        </Box>
      ))}
    </Grid>
  )
}
