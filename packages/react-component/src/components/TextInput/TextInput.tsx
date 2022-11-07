import { forwardRef, InputHTMLAttributes, ReactNode, useCallback, useState } from 'react'

import { useTheme } from '@emotion/react'
import { OutlineEyeCloseIcon, OutlineEyeIcon } from '@musma/react-icons'

import { IconAdornment, InputLabel, Typography } from 'src/components'
import { Box, InputBase } from 'src/elements'
import { Size } from 'src/types'

import { ReactComponent as InvalidIcon } from './images/invalid.svg'
import { ReactComponent as ValidIcon } from './images/valid.svg'

export interface TextInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /**
   * @description
   */
  type?: 'text' | 'password'
  /**
   * @description
   */
  size?: Size
  /**
   * @description
   */
  label?: string
  /**
   * @description
   */
  startAdornment?: ReactNode
  /**
   * @description
   */
  endAdornment?: ReactNode
  /**
   * @description
   */
  error?: boolean
  /**
   * @description
   */
  helperText?: string
  /**
   * @description
   */
  required?: boolean
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
        css={{ display: 'flex', flexDirection: 'column', width: '100%', minWidth: 64 }}
        className={className}
      >
        {/* 라벨 */}
        <InputLabel size={size} required={required}>
          {label}
        </InputLabel>

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
              fontSize: size === 'lg' ? 14 : 12,
              height: theme.inputSize[size],
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

        {helperText && (
          <Typography
            type="caption2"
            css={{
              display: 'flex',
              gap: 4,
              color: error ? theme.colors.red.main : theme.colors.green.main,
            }}
          >
            {error ? <InvalidIcon /> : <ValidIcon />}
            {helperText}
          </Typography>
        )}
      </Box>
    )
  },
)

TextInput.displayName = 'TextInput'
