import { forwardRef, TextareaHTMLAttributes } from 'react'

import { useTheme } from '@emotion/react'

import { InputHelper, InputLabel } from 'src/components'
import { Box, TextareaBase } from 'src/elements'
import { Size } from 'src/types'

export interface TextareaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  /**
   * @default md
   * @description
   * sm: minHeight: 28, fontSize: 12
   * md: minHeight: 32, fontSize: 12
   * lg: minHeight: 44, fontSize: 14
   */
  size?: Size
  /**
   * @optional
   * @description
   * 라벨입니다.
   */
  label?: string
  /**
   * @optional
   * @description
   * 에러 표시할 때 사용합니다.
   */
  error?: boolean
  /**
   * @optional
   * @description
   * Textarea 태그밑에 설명 글입니다.
   */
  helperText?: string
  /**
   * @optional
   * @description
   * label에 별표를 추가할 수 있습니다.
   */
  required?: boolean
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      size = 'md',
      helperText,
      id,
      disabled = false,
      error = false,
      required,
      className,
      ...rest
    },
    ref,
  ) => {
    const theme = useTheme()

    return (
      // Wrapper Box
      <Box
        css={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          minWidth: theme.inputSize.minWidth,
        }}
        className={className}
      >
        {/* 라벨 */}
        {label && (
          <InputLabel size={size} required={required}>
            {label}
          </InputLabel>
        )}

        {/* Input Container */}
        <Box
          css={[
            // Base CSS
            {
              display: 'flex',
              alignItems: 'center',
              position: 'relative',
              backgroundColor: theme.colors.white.main,
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: error ? theme.colors.red.main : theme.colors.gray.darker,
              borderRadius: theme.rounded.md,
              overflow: 'hidden',
              fontSize: theme.inputSize.fontSize[size],
              minHeight: theme.inputSize.height[size],
              '&:focus-within': {
                borderColor: error ? theme.colors.red.main : theme.colors.blue.main,
                boxShadow: theme.shadow.md,
              },
            },
            // Disabled CSS
            disabled && {
              cursor: 'not-allowed',
              borderColor: theme.colors.white.darker,
            },
          ]}
        >
          {/* Input */}
          <TextareaBase
            id={id}
            ref={ref}
            css={{
              flex: 1,
              height: '100%',
              padding: theme.spacing.sm,
              fontSize: 'inherit',
              '&:disabled': {
                backgroundColor: theme.colors.transparent,
                cursor: 'inherit',
              },
              '&::placeholder': {
                color: theme.colors.gray.light,
              },
            }}
            disabled={disabled}
            {...rest}
          />
        </Box>

        {helperText && <InputHelper error={error}>{helperText}</InputHelper>}
      </Box>
    )
  },
)

Textarea.displayName = 'Textarea'
