import { HTMLAttributes } from 'react'

import { useTheme } from '@emotion/react'

import { Box } from 'src/elements'
import { Size } from 'src/types'

interface GridProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Grid Item 갯수
   */
  cols: number
  /**
   * Grid Item 간의 간격
   *
   * @default
   * sm: 8
   * md: 16
   * lg: 24
   */
  spacing: Size
}

export const Grid = ({ cols, spacing, ...rest }: GridProps) => {
  const theme = useTheme()
  return (
    <Box
      css={{
        display: 'grid',
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gap: theme.spacing[spacing],
      }}
      {...rest}
    />
  )
}
