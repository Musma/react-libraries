import { HTMLAttributes, useMemo } from 'react'

import { useTheme } from '@emotion/react'
import { FillCloseCircleIcon } from '@musma/react-icons'
import { convertHexToRGB } from '@musma/react-utils'

import { IconAdornment, Typography } from 'src/components'
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
  /**
   * @optional
   * onDelete Props를 전달하면 Chip 내부에 X 아이콘이 나타납니다.
   */
  onDelete?: () => void
}

const ICON_SIZE = {
  sm: {
    width: 10,
    height: 10,
  },
  md: {
    width: 12,
    height: 12,
  },
  lg: {
    width: 12,
    height: 12,
  },
}

/**
 * 칩은 입력, 특성 또는 작업을 나타내는 압축 요소입니다.
 */
export const Chip = ({
  size = 'md',
  variant = 'contained',
  shape = 'rectangle',
  color: colorProp,
  onDelete,
  onClick,
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
          cursor: onClick ? 'pointer' : 'default',
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
      onClick={onClick}
      {...rest}
    >
      <Typography type={size === 'sm' ? 'caption2' : 'caption1'}>{children}</Typography>

      {onDelete && (
        <IconAdornment
          noPadding={true}
          css={{ marginLeft: 4 }}
          onClick={() => {
            onDelete()
          }}
        >
          <FillCloseCircleIcon {...ICON_SIZE[size]} color={color} />
        </IconAdornment>
      )}
    </Box>
  )
}
