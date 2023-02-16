import { InputHTMLAttributes } from 'react'

import { useTheme } from '@emotion/react'

import { InputBase, Label } from 'src/elements'
import { Size } from 'src/types'

interface ToggleButtonProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * @optional
   * @type {string}
   * @default md
   *
   * sm: { width: 24, height: 13.2 }
   * md: { width: 16, height: 8 }
   * lg: { width: 14, height: 7.7 }
   *
   * @description
   * Toggle의 크기입니다
   */
  size?: Size
}

/**
 *
 * @param InputHTMLAttributes(optional)
 * @param size(optional) Toggle의 크기입니다
 *
 * @description
 * 토글 버튼입니다
 */
export const ToggleButton = ({ size = 'md', disabled, ...rest }: ToggleButtonProps) => {
  const theme = useTheme()
  return (
    <Label
      css={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 24,
        height: 24,
      }}
    >
      <InputBase
        type="checkbox"
        css={[
          // Input Base CSS
          {
            borderRadius: 10,
            backgroundColor: theme.colors.gray.main,
            '&::before': {
              display: 'block',
              borderRadius: 9999,
              content: '""',
              backgroundColor: theme.colors.white.main,
              // Animation Base CSS
              transitionProperty: 'transform',
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
              transitionDuration: '150ms',
            },
            '&:checked': {
              backgroundColor: theme.colors.green.main,
            },
          },
          // Input Size CSS (size props의 값에 따라 가변)
          {
            lg: {
              width: 24,
              height: 13.2,
              '&::before': {
                marginLeft: 1.8,
                marginTop: 1.8,
                width: 9.6,
                height: 9.6,
              },
              // Animation CSS
              '&:checked::before': {
                transform: 'translate(10.79px)',
              },
            },
            md: {
              width: 16,
              height: 8,
              '&::before': {
                marginLeft: 1,
                marginTop: 1,
                width: 6,
                height: 6,
              },
              // Animation CSS
              '&:checked::before': {
                transform: 'translate(8px)',
              },
            },
            sm: {
              width: 14,
              height: 7.7,
              '&::before': {
                marginLeft: 1.05,
                marginTop: 1,
                width: 5.6,
                height: 5.6,
              },
              // Animation CSS
              '&:checked::before': {
                transform: 'translate(6px)',
              },
            },
          }[size],
          // Disabled CSS
          disabled && {
            backgroundColor: theme.colors.white.light,
            '&::before': {
              backgroundColor: theme.colors.gray.main,
            },
          },
        ]}
        disabled={disabled}
        {...rest}
      />
    </Label>
  )
}
