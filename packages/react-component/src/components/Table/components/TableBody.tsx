import { ReactNode, useCallback } from 'react'

import { useTheme } from '@emotion/react'

import { Checkbox } from 'src/components'

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
  onRowClick?: (rowData: Record<string, unknown>) => void
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

  return (
    <tbody>
      {data.map((item, index) => (
        <tr
          key={index}
          css={[
            {
              backgroundColor: theme.colors.white.main,
              borderBottom: `1px solid ${theme.colors.white.lighter}`,
              color: theme.colors.black.dark,
              '&:last-of-type': {
                borderBottom: 'none',
              },
            },
            onRowClick && {
              '&:hover': {
                cursor: 'pointer',
                backgroundColor: theme.colors.white.darker,
              },
            },
          ]}
          onClick={(e) => {
            if (e.target instanceof HTMLTableCellElement) {
              onRowClick?.(item)
            }
          }}
        >
          {withCheckbox && (
            <td
              css={{
                height: 40,
                textAlign: 'center',
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
            </td>
          )}

          {columns.map((column) => (
            <td
              key={column.columnName}
              css={{
                fontSize: 14,
                height: 40,
                textAlign: 'center',
              }}
            >
              {item[column.columnName] as ReactNode}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  )
}
