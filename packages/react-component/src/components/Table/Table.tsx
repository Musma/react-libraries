import { ReactNode } from 'react'

import { css, useTheme } from '@emotion/react'

import { Typography, Pagination, PaginationProps } from 'src/components'

interface TableProps {
  data: Array<Data>
  className?: string
  columns: {
    id: string
    label: string
  }[]
  /**
   * usePagination의 반환값을 전달해주세요
   */
  pagination?: PaginationProps
  totalCount: number
  onRowClick?: (data: Data) => void
}

type Data = Record<string, string | number | ReactNode>

const containerCss = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
  rowGap: '16px',
})

const tableCss = css({
  width: '100%',
  borderCollapse: 'collapse',
  borderRadius: '4px',
  borderStyle: 'hidden',
})

const thCss = css({
  height: '40px',
  '&:first-of-type': {
    borderTopLeftRadius: '4px',
  },
  '&:last-child': {
    borderTopRightRadius: '4px',
  },
})

const tdCss = css({ height: '40px', textAlign: 'center' })

export const Table = ({
  data,
  className = '',
  columns,
  pagination,
  totalCount,
  onRowClick,
}: TableProps) => {
  const theme = useTheme()
  return (
    <div css={containerCss} className={className}>
      <table
        css={[
          tableCss,
          css({
            boxShadow: `0 0 0 1px ${theme.color.gray.main}`,
            backgroundColor: theme.color.white.main,
          }),
        ]}
      >
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.id}
                css={[
                  thCss,
                  css({
                    border: `1px solid ${theme.color.gray.lighter}`,
                    backgroundColor: theme.color.white.lighter,
                  }),
                ]}
              >
                <Typography type="h6">{column.label}</Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              onClick={onRowClick && (() => onRowClick(item))}
              css={
                onRowClick
                  ? {
                      cursor: 'pointer',
                      '&:hover': { backgroundColor: theme.color.blue.lighter },
                    }
                  : {}
              }
            >
              {columns.map((column) => (
                <td
                  css={[tdCss, css({ borderBottom: `1px solid ${theme.color.gray.lighter}` })]}
                  key={column.id}
                >
                  <Typography type="body2" css={{ textAlign: 'center' }}>
                    {item[column.id]}
                  </Typography>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {pagination && <Pagination {...pagination} totalCount={totalCount} />}
    </div>
  )
}
