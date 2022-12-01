import { ButtonHTMLAttributes, SVGProps } from 'react'

import { useTheme } from '@emotion/react'
import { convertHexToRGB } from '@musma/react-utils'

import { InputIcon, Typography } from 'src/components'
import { ButtonBase } from 'src/elements'
import { Size } from 'src/types'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * @default md
   * sm: 28
   * md: 32
   * lg: 36
   */
  size?: Size
  /**
   * @default false
   *
   * 부모 컨테이너 Width 꽉 차게 할지 여부
   */
  fullWidth?: boolean
  /**
   * @default contained
   * outlined : 외곽선
   * contained: 채워져 있음
   */
  variant?: 'outlined' | 'contained'
  /**
   * @optional
   * 버튼의 색을 커스텀하게 바꾸고 싶을 때 사용합니다.
   */
  color?: string
  /**
   * @optional
   * 버튼 텍스트 앞에 렌더링되는 SVG 아이콘입니다.
   */
  startIcon?: (props: SVGProps<SVGSVGElement>) => JSX.Element
}

/**
 *
 * @param param0
 * @returns
 */
export const Button = ({
  variant = 'contained',
  fullWidth = false,
  size = 'md',
  disabled,
  color,
  startIcon,
  children,
  ...rest
}: ButtonProps) => {
  const theme = useTheme()

  return (
    <ButtonBase
      css={[
        {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: theme.inputSize.height[size],
          borderRadius: theme.rounded.md,
          padding: theme.spacing.sm,
        },
        variant === 'contained' && {
          backgroundColor: color || theme.colors.primary.main,
          '&:hover': {
            backgroundColor: convertHexToRGB(color || theme.colors.primary.main, 0.9),
          },
        },
        variant === 'outlined' && {
          backgroundColor: theme.colors.white.main,
          border: `solid 1px ${color || theme.colors.primary.main}`,
          '&:hover': {
            backgroundColor: theme.colors.white.lighter,
          },
        },
        disabled && {
          border: 0,
          backgroundColor: theme.colors.white.darker,
          cursor: 'not-allowed',
          '&:active': {
            transform: 'none',
          },
          '&:hover': {
            backgroundColor: theme.colors.white.darker,
          },
        },
        fullWidth && { width: '100%' },
      ]}
      disabled={disabled}
      {...rest}
    >
      {startIcon && (
        <InputIcon
          icon={startIcon}
          size={size}
          color={
            disabled
              ? theme.colors.gray.main
              : variant === 'outlined'
              ? theme.colors.primary.main
              : theme.colors.white.main
          }
          css={{ marginRight: 4 }}
        />
      )}

      <Typography
        css={[
          {
            color:
              variant === 'outlined' ? color || theme.colors.primary.main : theme.colors.white.main,
          },
          disabled && { color: theme.colors.gray.main },
        ]}
        type={size === 'lg' ? 'body3' : 'caption1'}
      >
        {children}
      </Typography>
    </ButtonBase>
  )
}
