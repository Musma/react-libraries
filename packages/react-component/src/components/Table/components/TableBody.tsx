import { Fragment, ReactNode, useCallback, useMemo } from 'react'

import { useTheme } from '@emotion/react'

import { Checkbox, Typography } from 'src/components'
import { Box } from 'src/elements'

import { TableColumn } from '../Table'

interface TableBodyProps {
  /**
   * @description
   */
  columns: TableColumn[]
  /**
   * @description
   */
  data: Record<string, unknown>[]
  /**
   * @description
   */
  withCheckbox?: boolean
  /**
   * @description
   */
  checkedItems?: string[]
  /**
   * @description
   */
  onRowClick?: (rowData: Record<string, unknown>[]) => void
  /**
   * @description
   */
  onCheckboxClick?: (rowData: Record<string, unknown>) => void
}

export const TableBody = ({
  columns,
  data,
  withCheckbox = false,
  checkedItems,
  onRowClick,
  onCheckboxClick,
}: TableBodyProps) => {
  const theme = useTheme()

  const isSelected = useCallback(
    (id: string) => {
      return checkedItems?.indexOf(id) !== -1
    },
    [checkedItems],
  )

  const gridTemplateColumns = useMemo(() => {
    if (withCheckbox) {
      return `50px repeat(${columns.length}, 1fr)`
    }

    return `repeat(${columns.length}, 1fr)`
  }, [columns, withCheckbox])

  return (
    <Fragment>
      {data.map((item, index) => (
        <Box
          key={index}
          css={{
            display: 'grid',
            gridTemplateColumns,
            borderBottom: `1px solid ${theme.colors.white.lighter}`,
            '&:last-of-type': {
              borderBottom: 'none',
            },
          }}
        >
          {withCheckbox && (
            <Box
              css={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Checkbox
                size="lg"
                checked={isSelected(item.id as string)}
                onChange={() => {
                  if (onCheckboxClick) {
                    onCheckboxClick(item)
                  }
                }}
              />
            </Box>
          )}

          {columns.map((column) => (
            <Typography
              type="body2"
              key={column.columnName}
              css={{
                height: 40,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {item[column.columnName] as ReactNode}
            </Typography>
          ))}
        </Box>
      ))}
    </Fragment>
  )
}
