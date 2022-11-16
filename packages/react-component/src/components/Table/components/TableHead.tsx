import { useMemo } from 'react'

import { useTheme } from '@emotion/react'

import { Checkbox } from 'src/components'
import { Box } from 'src/elements'

import { TableColumn } from '../Table'

interface TableHeadProps {
  /**
   * @description
   */
  columns: TableColumn[]
  /**
   * @description
   */
  withCheckbox?: boolean
  /**
   * @description
   */
  allChecked?: boolean
  /**
   * @description
   */
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
        <Box
          css={{
            height: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: theme.colors.black.dark,
            fontWeight: 600,
            fontSize: 14,
            textAlign: 'center',
            borderRight: `1px solid ${theme.colors.gray.lighter}`,
            '&:last-of-type': {
              borderRight: 'none',
            },
          }}
          key={`TableHead-${index}-${column.columnName}}`}
        >
          {column.columnLabel}
        </Box>
      ))}
    </Box>
  )
}
