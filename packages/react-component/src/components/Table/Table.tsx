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
   * @description
   * 테이블 데이터
   * Record<string, unknown>
   * id 컬럼이 필수
   */
  data: Record<string, unknown>[]
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
  toolbar?: ToolbarOptions
  /**
   * @default false
   * 체크박스 표시 여부
   */
  withCheckbox?: boolean
  /**
   * @default false
   * 페이지네이션 표시 여부
   * TODO:
   * 페이지네이션 관련 로직 개발이 아직 안됨
   */
  withPagination?: boolean
  /**
   * @description
   * 체크박스 체크한 데이터의 ID 목록
   */
  checkedItems?: string[]
  /**
   * @description
   * 체크박스 클릭 이벤트
   */
  onCheckItemChange?: (items: string[]) => void
  /**
   * @description
   * 로우 클릭 이벤트
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
          withCheckbox={withCheckbox}
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
