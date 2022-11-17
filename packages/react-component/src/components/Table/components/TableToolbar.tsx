import { ReactNode } from 'react'

import { useTheme } from '@emotion/react'

import { Typography } from 'src/components'
import { Box } from 'src/elements'

interface TableToolbarProps {
  /**
   * @description
   */
  title: string
  /**
   * @description
   */
  totalCount?: number
  /**
   * @description
   */
  children?: ReactNode
}

export const TableToolbar = ({ title, totalCount, children }: TableToolbarProps) => {
  const theme = useTheme()
  return (
    <Box
      css={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: theme.spacing.sm,
      }}
    >
      <Box css={{ display: 'flex', gap: 4 }}>
        {/* 제목 */}
        <Typography type="h6" css={{ color: theme.colors.black.lighter }}>
          {title}
        </Typography>

        {/* 전체 데이터 개수 */}
        {totalCount && (
          <Typography
            type="body2"
            css={{ color: theme.colors.blue.main }}
          >{`(${totalCount})`}</Typography>
        )}
      </Box>

      {/* 툴바 오른쪽에 버튼 */}
      {children}
    </Box>
  )
}
