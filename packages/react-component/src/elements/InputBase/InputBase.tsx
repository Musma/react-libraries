import { forwardRef, InputHTMLAttributes } from 'react'

import { useTheme } from '@emotion/react'

import { Size } from 'src/types'
export interface InputBaseProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * @default md
   */
  size?: Size
}

export const InputBase = forwardRef<HTMLInputElement, InputBaseProps>(
  ({ size = 'md', ...props }, ref) => {
    const theme = useTheme()
    return (
      <input
        ref={ref}
        autoComplete="off"
        css={[
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
          {
            padding: 0,
            border: 0,
            appearance: 'none',
            outline: 'none',
            boxSizing: 'border-box',
            flex: 1,
            width: '100%',
            height: '100%',
            cursor: 'inherit',
            color: 'inherit',
            fontSize: theme.inputSize.fontSize[size],
            backgroundColor: 'transparent',
            '&::placeholder': {
              color: theme.colors.gray.main,
            },
            '&:disabled': {
              cursor: 'not-allowed',
              backgroundColor: theme.colors.white.light,
              borderColor: theme.colors.gray.darker,
              color: theme.colors.gray.main,
            },
          },
        ]}
        {...props}
      />
    )
  },
)

InputBase.displayName = 'InputBase'
