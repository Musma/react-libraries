import { useTheme } from '@emotion/react'

import { Box } from 'src/components'
import { Size } from 'src/types'

interface GridProps {
  cols: number
  spacing: Size
}

export const Grid = ({ cols, spacing }: GridProps) => {
  const theme = useTheme()
  return (
    <Box
      css={{
        display: 'grid',
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gap: theme.spacing[spacing],
      }}
    />
  )
}
