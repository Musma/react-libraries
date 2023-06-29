import { HTMLAttributes, useCallback, useMemo } from 'react'

import { useTheme } from '@emotion/react'

import { Pagination, PaginationProps, Skeleton } from 'src/components'
import { Box } from 'src/elements'
import { Size } from 'src/types'

import { TableBody, TableHead, TableToolbar } from './components'
import { TableColumn, ToolbarOption } from './types'

export interface TableProps<T> extends HTMLAttributes<HTMLTableElement> {
  /**
   * @description
   * 테이블 데이터
   * id 컬럼이 필수
   */
  data: T[]
  /**
   * @description
   * 테이블 컬럼
   * id 컬럼이 필수
   */
  columns: TableColumn[]
  /**
   * Wrapper Container의 둥글기
   * @default
   * sm: 8
   * md: 16
   * lg: 24
   */
  rounded?: Size
  /**
   * @description
   * title: 테이블 제목
   * totalCount: 데이터 전체 갯수
   * 오른쪽에 렌더링 될 ReactNode
   */
  toolbar?: ToolbarOption
  /**
   * @default false
   * 체크박스 표시 여부
   */
  withCheckbox?: boolean
  /**
   *
   */
  pagination?: PaginationProps
  /**
   * @description
   * 체크박스 체크한 데이터의 ID 목록
   */
  checkedItems?: string[]
  /**
   *
   */
  loading?: boolean
  /**
   * @description
   * 체크박스 클릭 이벤트
   */
  onCheckItemChange?: (items: string[]) => void
  /**
   * @description
   * 로우 클릭 이벤트
   */
  onRowClick?: (rowData: T) => void
}

export function Table<T extends { id: string }>({
  data,
  columns,
  rounded = 'md',
  toolbar,
  withCheckbox = false,
  pagination,
  checkedItems = [],
  loading = false,
  onCheckItemChange,
  onRowClick,
  ...rest
}: TableProps<T>) {
  const theme = useTheme()

  const handleCheckboxClick = useCallback(
    (rowData: T) => {
      if (onCheckItemChange) {
        const id = rowData.id

        if (checkedItems.includes(id)) {
          onCheckItemChange?.(checkedItems.filter((item) => item != id))
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

      const checkedItemIds = data.map((data) => data.id)
      onCheckItemChange(checkedItemIds)
    }
  }, [allChecked, data, onCheckItemChange])

  if (loading) {
    return <Skeleton variant="table" />
  }

  return (
    <Box {...rest}>
      {toolbar && <TableToolbar {...toolbar} />}

      {/* Table Wrapper */}
      <Box
        css={{
          border: `1px solid ${theme.colors.gray.main}`,
          borderRadius: theme.rounded[rounded],
          overflow: 'hidden',
        }}
      >
        <table
          css={{
            width: '100%',
            borderRadius: theme.rounded[rounded],
            borderSpacing: 0,
            borderCollapse: 'collapse',
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
          <TableBody<T>
            columns={columns}
            data={data}
            withCheckbox={withCheckbox}
            checkedItems={checkedItems}
            onCheckboxClick={handleCheckboxClick}
            onRowClick={onRowClick}
          />
        </table>
      </Box>

      {/* Pagination 있어야하며, totalPage의 값이 0 이상이어야 함 */}
      {pagination && pagination.totalPages > 0 && (
        <Box css={{ marginTop: theme.spacing.md }}>
          <Pagination {...pagination} />
        </Box>
      )}
    </Box>
  )
}
