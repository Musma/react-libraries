import { forwardRef, InputHTMLAttributes, ReactNode, useMemo } from 'react'

import { useTheme } from '@emotion/react'
import { uniqueId } from 'lodash-es'

import { Typography } from 'src/components'
import { Box, InputBase, Label } from 'src/elements'
import { Size } from 'src/types'

import { ReactComponent as DoneDisabledLgIcon } from './images/done_disabled_lg.svg'
import { ReactComponent as DoneDisabledMdIcon } from './images/done_disabled_md.svg'
import { ReactComponent as DoneDisabledSmIcon } from './images/done_disabled_sm.svg'
import { ReactComponent as DoneLgIcon } from './images/done_lg.svg'
import { ReactComponent as DoneMdIcon } from './images/done_md.svg'
import { ReactComponent as DoneSmIcon } from './images/done_sm.svg'

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

    const iconElement = useMemo(() => {
      if (disabled) {
        return {
          sm: <DoneDisabledSmIcon />,
          md: <DoneDisabledMdIcon />,
          lg: <DoneDisabledLgIcon />,
        }[size]
      }

      if (checked) {
        return {
          sm: <DoneSmIcon />,
          md: <DoneMdIcon />,
          lg: <DoneLgIcon />,
        }[size]
      }
    }, [checked, disabled, size])

    const labelElement = useMemo(() => {
      return (
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
      )
    }, [size, label])

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
        <InputBase
          id={id}
          type="checkbox"
          ref={ref}
          checked={checked}
          hidden={true}
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
              cursor: 'pointer',
              borderRadius: 2,
              backgroundColor: theme.colors.white.main,
              border: `1px solid ${theme.colors.gray.darker}`,
            },
            size === 'sm' && { width: 14, height: 14 },
            size === 'md' && { width: 16, height: 16 },
            size === 'lg' && { width: 24, height: 24 },
            checked && { backgroundColor: theme.colors.green.main, border: 'none' },
            disabled && {
              backgroundColor: theme.colors.white.lighter,
              cursor: 'not-allowed',
              border: 'none',
            },
          ]}
        >
          {iconElement}
        </Box>

        {labelElement}
      </Label>
    )
  },
)

Checkbox.displayName = 'Checkbox'
