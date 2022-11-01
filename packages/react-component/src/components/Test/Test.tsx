import { ReactNode } from 'react'

import { useTheme } from '@emotion/react'

import { Typography } from 'src/components'
import { Box } from 'src/elements'
import { Size } from 'src/types'

export type TableData = Record<string, ReactNode>

export interface TableColumn {
  columnName: string
  columnLabel: ReactNode
}

export interface TestProps {
  data: TableData[]
  columns: TableColumn[]
  rounded?: Size
  onRowClick?: (rowData: TableData) => void
}

export const Test = ({ data, columns, rounded = 'md' }: TestProps) => {
  const theme = useTheme()
  return (
    <Box>
      <Box css={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box css={{ display: 'flex', alignItems: 'center' }}>
          <Typography type="h6">카메라 리스트</Typography>
          <Typography type="body3">{`(${30})`}</Typography>
        </Box>

        <Box></Box>
      </Box>

      {/* Table Wrapper */}
      <Box
        css={{
          borderRadius: theme.rounded.md,
          border: `1px solid ${theme.colors.gray.lighter}`,
        }}
      >
        {/* Table Header */}
        <Box
          css={{
            display: 'grid',
            gridTemplateColumns: `repeat(${columns.length}, 1fr)`,
            backgroundColor: theme.colors.white.lighter,
            borderBottom: `1px solid ${theme.colors.gray.lighter}`,
          }}
        >
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

        {/* Table Body */}
        {data.map((item, index) => (
          <Box
            key={index}
            css={{ display: 'grid', gridTemplateColumns: `repeat(${columns.length}, 1fr)` }}
          >
            {columns.map((column) => (
              <Typography
                type="body2"
                key={column.columnName}
                css={{
                  height: 40,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderBottom: `1px solid ${theme.colors.white.lighter}`,
                  '&:last-of-type': {
                    borderBottom: 'none',
                  },
                }}
              >
                {item[column.columnName]}
              </Typography>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  )
}
