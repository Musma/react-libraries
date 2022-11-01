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
    { id: _id, label, size = 'md', onChange, checked, className, disabled = false, ...rest },
    ref,
  ) => {
    const theme = useTheme()

    const id = useMemo(() => {
      return _id || uniqueId()
    }, [_id])

    const iconElement = useMemo(() => {
      const disabledIcon = {
        lg: <DoneDisabledLgIcon />,
        md: <DoneDisabledMdIcon />,
        sm: <DoneDisabledSmIcon />,
      }

      const activeIcon = {
        lg: <DoneLgIcon />,
        md: <DoneMdIcon />,
        sm: <DoneSmIcon />,
      }

      if (disabled) {
        return disabledIcon[size]
      }

      if (checked) {
        return activeIcon[size]
      }
    }, [checked, disabled, size])

    const labelElement = useMemo(() => {
      if (size === 'sm') {
        return (
          <Typography css={{ marginLeft: '4px' }} type="caption1">
            {label}
          </Typography>
        )
      }

      return (
        <Typography css={{ marginLeft: '8px' }} type={size === 'lg' ? 'body2' : 'body3'}>
          {label}
        </Typography>
      )
    }, [size, label])

    return (
      <Label
        htmlFor={id}
        css={{
          display: 'flex',
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
              borderRadius: '2px',
              backgroundColor: theme.colors.white.main,
              border: `1px solid ${theme.colors.gray.darker}`,
            },
            size === 'sm' && { width: '14px', height: '14px' },
            size === 'md' && { width: '16px', height: '16px' },
            size === 'lg' && { width: '24px', height: '24px' },
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
