import { useMemo } from 'react'

import { useTheme } from '@emotion/react'

import { Checkbox, Typography } from 'src/components'
import { Box } from 'src/elements'

import { TableColumn } from '../Table'

interface TableHeadProps {
  columns: TableColumn[]
  withCheckbox?: boolean
  allChecked?: boolean
  onAllCheckClick?: () => void
}

export const TableHead = ({
  columns,
  withCheckbox,
  allChecked = false,
  onAllCheckClick,
}: TableHeadProps) => {
  const theme = useTheme()

  const gridTemplateColumns = useMemo(() => {
    if (withCheckbox) {
      return `50px repeat(${columns.length}, 1fr)`
    }
    return `repeat(${columns.length}, 1fr)`
  }, [columns, withCheckbox])

  return (
    <Box
      css={{
        display: 'grid',
        gridTemplateColumns,
        backgroundColor: theme.colors.white.lighter,
        borderBottom: `1px solid ${theme.colors.gray.lighter}`,
      }}
    >
      {withCheckbox && (
        <Box
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRight: `1px solid ${theme.colors.gray.lighter}`,
          }}
        >
          <Checkbox
            size="lg"
            value={'All Check'}
            checked={allChecked}
            onChange={() => {
              if (onAllCheckClick) {
                onAllCheckClick()
              }
            }}
          />
        </Box>
      )}

      {columns.map((column, index) => (
        <Typography
          css={{
            height: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            borderRight: `1px solid ${theme.colors.gray.lighter}`,
            '&:last-of-type': {
              borderRight: 'none',
            },
          }}
          key={`TableHead-${index}-${column.columnName}}`}
        >
          {column.columnLabel}
        </Typography>
      ))}
    </Box>
  )
}
