import { useMemo } from 'react'

import { useTheme } from '@emotion/react'

import { Box } from 'src/elements'

import { pulse } from '../styles'
import { SkeletonProps } from '../types'

export const CardSkeleton = (props: SkeletonProps) => {
  const theme = useTheme()

  /**
   * HOOKS
   */
  // 내용 문단 수 고정
  const contents = useMemo(() => {
    return Array.from(['30%', '100%', '70%', '85%']).map((width, index) => (
      <Box
        key={index}
        css={{
          width,
          height: 16,
          marginBottom: index === 0 ? theme.spacing.sm : undefined,
          borderRadius: theme.rounded.md,
          backgroundColor: theme.colors.white.main,
          opacity: 0.5,
        }}
      />
    ))
  }, [])

  return (
    <Box
      css={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: theme.spacing.lg,
        padding: theme.spacing.lg,
        borderRadius: theme.rounded.md,
        backgroundColor: props.style?.backgroundColor || theme.colors.gray.main,
        animation: `${pulse} 1.5s cubic-bezier(0.65,0.05,0.36,1) infinite`,
      }}
      {...props}
    >
      {/* 텍스트 영역 */}
      <Box
        css={{
          width: 'calc(100% - 100px)',
          height: 100,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: theme.spacing.sm,
        }}
      >
        {contents}
      </Box>

      {/* 이미지 썸네일 */}
      <Box
        css={{
          width: 100,
          height: 100,
          borderRadius: theme.rounded.md,
          backgroundColor: theme.colors.white.main,
          opacity: 0.5,
        }}
      />
    </Box>
  )
}
