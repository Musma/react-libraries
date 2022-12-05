import { HTMLAttributes, useMemo } from 'react'

import { useTheme } from '@emotion/react'
import { convertHexToRGB } from '@musma/react-utils'

import { Typography } from 'src/components'
import { Box } from 'src/elements'
import { Size } from 'src/types'

interface ChipProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * @default md
   */
  size?: Size
  /**
   * @default contained
   *
   * Chip의 변형
   */
  variant?: 'outlined' | 'contained'
  /**
   * @default rectangle
   *
   * Chip의 모양을 결정합니다.
   */
  shape?: 'rectangle' | 'rounded'
  /**
   *
   */
  color?: string
}

/**
 * 칩은 입력, 특성 또는 작업을 나타내는 압축 요소입니다.
 */
export const Chip = ({
  size = 'md',
  variant = 'contained',
  shape = 'rectangle',
  color: colorProp,
  children,
  ...rest
}: ChipProps) => {
  const theme = useTheme()

  const color = useMemo(() => {
    return colorProp || theme.colors.primary.main
  }, [colorProp])

  const backgroundColor = useMemo(() => {
    return convertHexToRGB(color, 0.2)
  }, [color])

  return (
    <Box
      css={[
        {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingLeft: theme.spacing.sm,
          paddingRight: theme.spacing.sm,
          color,
          backgroundColor,
        },
        // Size별 스타일
        {
          sm: {
            height: 18,
          },
          md: {
            height: 24,
          },
          lg: {
            height: 32,
          },
        }[size],
        // Variant별 스타일
        {
          outlined: {
            border: `1px solid ${color}`,
          },
          contained: {
            border: 0,
          },
        }[variant],
        // Shape별 스타일
        {
          rectangle: {
            borderRadius: 2,
          },
          rounded: {
            borderRadius: 100,
          },
        }[shape],
      ]}
      {...rest}
    >
      <Typography type={size === 'sm' ? 'caption2' : 'caption1'} css={{ color: 'inherit' }}>
        {children}
      </Typography>
    </Box>
  )
}