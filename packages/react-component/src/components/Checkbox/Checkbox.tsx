import { useMemo } from 'react'

import { css, useTheme } from '@emotion/react'
import { uniqueId } from 'lodash-es'

import { Box, Typography } from 'src/components'
import { Size } from 'src/types'

import { ReactComponent as DoneDisabledLgIcon } from './images/done_disabled_lg.svg'
import { ReactComponent as DoneDisabledMdIcon } from './images/done_disabled_md.svg'
import { ReactComponent as DoneDisabledSmIcon } from './images/done_disabled_sm.svg'
import { ReactComponent as DoneLgIcon } from './images/done_lg.svg'
import { ReactComponent as DoneMdIcon } from './images/done_md.svg'
import { ReactComponent as DoneSmIcon } from './images/done_sm.svg'

interface CheckboxProps {
  id?: string
  checked?: boolean
  onChange?: (checked: boolean) => void
  disabled?: boolean
  label?: string
  size?: Size
}

export const Checkbox = ({
  id = uniqueId(),
  label,
  size = 'md',
  checked = false,
  onChange,
  disabled = false,
  ...rest
}: CheckboxProps) => {
  const theme = useTheme()

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
        <Typography css={css({ marginLeft: '4px' })} type="caption1">
          {label}
        </Typography>
      )
    }

    return (
      <Typography css={css({ marginLeft: '8px' })} type={size === 'lg' ? 'body2' : 'body3'}>
        {label}
      </Typography>
    )
  }, [size, label])

  return (
    <label
      htmlFor={id}
      css={{ display: 'flex', alignItems: 'center', cursor: disabled ? 'not-allowed' : 'pointer' }}
    >
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => {
          onChange && onChange(e.target.checked)
        }}
        hidden={true}
        disabled={disabled}
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
          checked && { backgroundColor: theme.colors.green.main },
          disabled && { backgroundColor: theme.colors.white.lighter, cursor: 'not-allowed' },
        ]}
      >
        {iconElement}
      </Box>

      {labelElement}
    </label>
  )
}
