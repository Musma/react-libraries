import { ReactNode, useCallback, useMemo } from 'react'

import { useTheme } from '@emotion/react'

import { Box } from 'src/elements'
import { Size } from 'src/types'

import { Pagination, TableBody, TableHead, TableToolbar } from './components'
import { usePagination } from './hooks'

export interface TableColumn {
  columnName: string
  columnLabel: ReactNode
}

interface ToolbarOptions {
  title: string
  totalCount: number
  children?: ReactNode
}

export interface TableProps {
  /**
   * 테이블 데이터
   * Record<string, ReactNode>
   */
  data: Record<string, unknown>[]
  /**
   *
   */
  columns: TableColumn[]
  /**
   * Wrapper Container의 둥글기
   */
  rounded?: Size
  /**
   *
   */
  toolbar?: ToolbarOptions
  /**
   *
   */
  withCheckbox?: boolean
  /**
   *
   */
  withPagination?: boolean
  /**
   *
   */
  checkedItems?: string[]
  /**
   *
   */
  onCheckItemChange?: (items: string[]) => void
  /**
   *
   */
  onRowClick?: (rowData: Record<string, unknown>) => void
}

export const Table = ({
  data,
  columns,
  rounded = 'md',
  toolbar,
  withCheckbox = false,
  withPagination = false,
  checkedItems = [],
  onCheckItemChange,
}: TableProps) => {
  const theme = useTheme()
  const pagination = usePagination()

  const handleCheckboxClick = useCallback(
    (rowData: Record<string, unknown>) => {
      if (onCheckItemChange) {
        const id = rowData.id as string

        if (checkedItems.includes(id)) {
          onCheckItemChange(checkedItems.filter((item) => item != id))
          return
        }

        onCheckItemChange([...checkedItems, id])
      }
      return undefined
    },
    [checkedItems, onCheckItemChange],
  )

  // 전체 선택 체크박스 여부
  const allChecked = useMemo(() => {
    if (data.length === checkedItems.length) {
      return true
    }
    return false
  }, [data, checkedItems])

  // 헤더에 있는 체크박스 클릭 이벤트
  const handleAllCheckClick = useCallback(() => {
    if (onCheckItemChange) {
      if (allChecked) {
        onCheckItemChange([])
        return
      }

      const ccc = data.map((data) => data.id as string)
      onCheckItemChange(ccc)
    }
  }, [allChecked, data, onCheckItemChange])

  return (
    <Box>
      {toolbar && <TableToolbar {...toolbar} />}

      {/* Table Wrapper */}
      <Box
        css={{
          borderRadius: theme.rounded[rounded],
          border: `1px solid ${theme.colors.gray.lighter}`,
        }}
      >
        {/* Table Header */}
        <TableHead
          columns={columns}
          withCheckbox={withCheckbox}
          allChecked={allChecked}
          onAllCheckClick={handleAllCheckClick}
        />

        {/* Table Body */}
        <TableBody
          columns={columns}
          data={data}
          withCheckbox={true}
          checkedItems={checkedItems}
          onCheckboxClick={handleCheckboxClick}
        />
      </Box>

      {withPagination && (
        <Box css={{ marginTop: theme.spacing.md }}>
          <Pagination pagination={pagination} totalCount={toolbar?.totalCount || 0} />
        </Box>
      )}
    </Box>
  )
}
