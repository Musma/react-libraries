import { forwardRef, InputHTMLAttributes, ReactNode, useMemo } from 'react'

import { useTheme } from '@emotion/react'
import { uniqueId } from '@musma/react-utils'

import { Typography } from 'src/components'
import { Box, InputBase, Label } from 'src/elements'
import { Size } from 'src/types'

import { Check } from './components'

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
  label?: ReactNode
  size?: Size
  onChange: (checked: boolean) => void
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    { id: _id, label, size = 'md', checked, disabled = false, className, onChange, ...rest },
    ref,
  ) => {
    const theme = useTheme()

    const id = useMemo(() => {
      return _id || uniqueId()
    }, [_id])

    const checkColor = useMemo(() => {
      if (disabled) {
        return theme.colors.gray.darker
      }

      if (checked) {
        return theme.colors.white.main
      }

      return theme.colors.transparent
    }, [
      checked,
      disabled,
      theme.colors.gray.darker,
      theme.colors.transparent,
      theme.colors.white.main,
    ])

    const checkSize = useMemo(() => {
      return {
        sm: {
          width: 10,
          height: 10,
        },
        md: {
          width: 12,
          height: 12,
        },
        lg: {
          width: 20,
          height: 20,
        },
      }[size]
    }, [size])

    return (
      <Label
        htmlFor={id}
        css={{
          display: 'inline-flex',
          alignItems: 'center',
          cursor: disabled ? 'not-allowed' : 'pointer',
        }}
        className={className}
      >
        {/* Hidden true로 Input이 화면에 나타나지 않음 */}
        <InputBase
          id={id}
          ref={ref}
          type="checkbox"
          checked={checked}
          hidden={true}
          readOnly={true}
          disabled={disabled}
          onChange={(e) => {
            onChange(e.target.checked)
          }}
          {...rest}
        />

        <Box
          css={[
            {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 2,
              backgroundColor: theme.colors.white.main,
              border: `1px solid ${theme.colors.gray.darker}`,
            },
            {
              sm: {
                width: 14,
                height: 14,
              },
              md: {
                width: 16,
                height: 16,
              },
              lg: {
                width: 24,
                height: 24,
              },
            }[size],
            checked && { backgroundColor: theme.colors.green.main, border: 'none' },
            disabled && {
              backgroundColor: theme.colors.white.lighter,
              border: 'none',
            },
          ]}
        >
          <Check color={checkColor} {...checkSize} />
        </Box>

        {label && (
          <Typography
            css={{
              marginLeft: {
                sm: 4,
                md: 4,
                lg: 8,
              }[size],
            }}
            type={size === 'sm' ? 'caption1' : size === 'md' ? 'body3' : 'body2'}
          >
            {label}
          </Typography>
        )}
      </Label>
    )
  },
)

Checkbox.displayName = 'Checkbox'
