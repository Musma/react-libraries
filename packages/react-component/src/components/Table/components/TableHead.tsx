import { useTheme } from '@emotion/react'

import { Checkbox } from 'src/components'

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

  return (
    <thead>
      <tr css={{ backgroundColor: theme.colors.white.lighter }}>
        {withCheckbox && (
          <th
            css={{
              height: 40,
              textAlign: 'center',
              borderRight: `1px solid ${theme.colors.gray.main}`,
              borderBottom: `1px solid ${theme.colors.gray.main}`,
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
          </th>
        )}

        {columns.map((column, index) => (
          <th
            css={{
              height: 40,
              color: theme.colors.black.dark,
              fontWeight: 600,
              fontSize: 14,
              textAlign: 'center',
              borderRight: `1px solid ${theme.colors.gray.main}`,
              borderBottom: `1px solid ${theme.colors.gray.main}`,
              '&:last-of-type': {
                borderRight: 'none',
              },
            }}
            key={`TableHead-${index}-${column.columnName}`}
          >
            {column.columnLabel}
          </th>
        ))}
      </tr>
    </thead>
  )
}
