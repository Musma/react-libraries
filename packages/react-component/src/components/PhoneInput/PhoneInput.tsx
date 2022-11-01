import { forwardRef, InputHTMLAttributes } from 'react'

import { useTheme } from '@emotion/react'

import { InputLabel, Typography } from 'src/components'
import { Box, InputBase } from 'src/elements'
import { Size } from 'src/types'

import { ReactComponent as InvalidIcon } from './images/invalid.svg'
import { ReactComponent as ValidIcon } from './images/valid.svg'

const COUNTRY_LIST = [
  {
    label: '대한민국 +82',
    value: '+82',
  },
]

export interface PhoneInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: Size
  label?: string
  error?: boolean
  helperText?: string
}

export const PhoneInput = forwardRef<HTMLInputElement, PhoneInputProps>(
  (
    { label, size = 'md', helperText, id, disabled = false, error = false, className, ...rest },
    ref,
  ) => {
    const theme = useTheme()

    return (
      // Wrapper Box
      <Box
        css={{ display: 'flex', flexDirection: 'column', width: '100%', minWidth: 64 }}
        className={className}
      >
        {/* 라벨 */}
        <InputLabel size={size}>{label}</InputLabel>

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
          <Box css={{ minWidth: 100 }}>
            <InputBase type="" />
          </Box>

          {/* Input */}
          <InputBase
            id={id}
            ref={ref}
            css={{
              flex: 1,
              height: '100%',
              paddingLeft: theme.spacing.sm,
              paddingRight: theme.spacing.sm,
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

PhoneInput.displayName = 'PhoneInput'
