import {
  ChangeEvent,
  forwardRef,
  InputHTMLAttributes,
  ReactNode,
  useCallback,
  useState,
} from 'react'

import { useTheme } from '@emotion/react'
import { OutlineEyeCloseIcon, OutlineEyeIcon } from '@musma/react-icons'

import { IconAdornment, InputHelper, InputLabel } from 'src/components'
import { Box, InputBase } from 'src/elements'
import { Size } from 'src/types'

export interface TextInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /**
   * @default text
   */
  type?: 'text' | 'password'
  /**
   * @default md
   */
  size?: Size
  /**
   * @optional
   */
  label?: string
  /**
   * @optional
   * @description
   * TextInput 앞에 나타날 장식품
   */
  startAdornment?: ReactNode
  /**
   * @optional
   */
  endAdornment?: ReactNode
  /**
   * @optional
   */
  error?: boolean
  /**
   * @optional
   * @description
   */
  helperText?: string
  /**
   * @optional
   * @description
   *
   */
  required?: boolean
  /**
   * @optional
   * @description
   * 정규표현식입니다
   * react-utils 패키지에 있는 RegExps를 넣어서 사용하면 됩니다.
   */
  regExp?: RegExp
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      label,
      size = 'md',
      type: _type = 'text',
      helperText,
      id,
      disabled = false,
      error = false,
      startAdornment,
      endAdornment,
      required,
      className,
      regExp,
      onChange,
      ...rest
    },
    ref,
  ) => {
    const theme = useTheme()
    const [type, setType] = useState(_type)

    const toggleType = useCallback(() => {
      setType(type === 'text' ? 'password' : 'text')
    }, [type])

    return (
      // Wrapper Box
      <Box
        css={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          minWidth: theme.inputSize.minWidth,
          position: 'relative',
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
              paddingLeft: theme.spacing.sm,
              paddingRight: theme.spacing.sm,
              overflow: 'hidden',
              fontSize: theme.inputSize.fontSize[size],
              height: theme.inputSize.height[size],
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
          {/* Start Adornment */}
          {startAdornment}

          {/* Input */}
          <InputBase
            id={id}
            type={type}
            ref={ref}
            css={{
              flex: 1,
              width: '100%',
              height: '100%',
              paddingLeft: startAdornment ? theme.spacing.sm : 0,
              paddingRight: endAdornment ? theme.spacing.sm : 0,
              '&:disabled': {
                backgroundColor: theme.colors.transparent,
                cursor: 'inherit',
              },
              '&::placeholder': {
                color: theme.colors.gray.light,
              },
            }}
            disabled={disabled}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              if (onChange) {
                if (regExp) {
                  if (regExp.test(event.target.value)) {
                    onChange(event)
                  }
                  return
                }
                onChange(event)
              }
            }}
            {...rest}
          />

          {/* Password Eye */}
          {_type === 'password' && (
            <IconAdornment onClick={toggleType}>
              {type === 'text' ? (
                <OutlineEyeCloseIcon width={16} height={16} />
              ) : (
                <OutlineEyeIcon width={16} height={16} />
              )}
            </IconAdornment>
          )}

          {/* End Adornment */}
          {type !== 'password' && endAdornment}
        </Box>

        {helperText && <InputHelper error={error}>{helperText}</InputHelper>}
      </Box>
    )
  },
)

TextInput.displayName = 'TextInput'
