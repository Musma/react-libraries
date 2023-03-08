import { ReactNode, useCallback } from 'react'

import { useTheme } from '@emotion/react'

import { Checkbox, Typography } from 'src/components'

import { TableColumn } from '../types'

interface TableBodyProps {
  /**
   * @description
   */
  columns: TableColumn[]
  /**
   * @description
   * 이중 컬럼인 경우 key가 columnsChild의 key와 동일해야 함
   * 컬럼은 부모 key 명시, 데이터는 부모 key 명시 안함
   * ex) [
   * {
   *  a: 'A',
   *  'b-1': 'B-1',
   *  'b-2': 'B-2',
   *  'b-3': 'B-3',
   *  'c-1': 'C-1',
   *  'c-2': 'C-2',
   *  d: 'd',
   * }
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

  if (data.length === 0) {
    return (
      <tbody>
        <tr css={{ backgroundColor: theme.colors.white.main }}>
          <td
            colSpan={100}
            css={{
              textAlign: 'center',
              height: 40 * 4,
              fontSize: 14,
              color: theme.colors.black.darker,
            }}
          >
            <Typography type="body2" css={{ color: theme.colors.gray.light }}>
              등록된 데이터가 없습니다.
            </Typography>
          </td>
        </tr>
      </tbody>
    )
  }

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
              align="center"
              css={{
                height: 40,
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

          {columns.map((column) => {
            return column.columnChild ? (
              // 이중 컬럼인 경우 child를 map으로 출력
              column.columnChild.map((child) => (
                <td
                  key={child.columnName}
                  align="center"
                  css={{
                    fontSize: 14,
                    height: 40,
                  }}
                >
                  {item[child.columnName] as ReactNode}
                </td>
              ))
            ) : (
              <td
                key={column.columnName}
                align="center"
                css={{
                  fontSize: 14,
                  height: 40,
                }}
              >
                {item[column.columnName] as ReactNode}
              </td>
            )
          })}
        </tr>
      ))}
    </tbody>
  )
}
