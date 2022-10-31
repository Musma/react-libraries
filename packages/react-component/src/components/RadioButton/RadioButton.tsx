import { forwardRef, InputHTMLAttributes, useMemo } from 'react'

import { Box, InputBase, Typography } from 'src/components'
import { Size } from 'src/types'

import { ReactComponent as LgCheckedIcon } from './images/checked_lg.svg'
import { ReactComponent as MdCheckedIcon } from './images/checked_md.svg'
import { ReactComponent as SmCheckedIcon } from './images/checked_sm.svg'
import { ReactComponent as LgDefaultIcon } from './images/default_lg.svg'
import { ReactComponent as MdDefaultIcon } from './images/default_md.svg'
import { ReactComponent as SmDefaultIcon } from './images/default_sm.svg'
import { ReactComponent as LgDisabledIcon } from './images/disabled_lg.svg'
import { ReactComponent as MdDisabledIcon } from './images/disabled_md.svg'
import { ReactComponent as SmDisabledIcon } from './images/disabled_sm.svg'

interface RadioButtonProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string
  size?: Size
  selected: string
}

export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  ({ label, size = 'md', selected, value, disabled = false, ...rest }, ref) => {
    const radio = useMemo(() => {
      if (disabled) {
        if (size === 'sm') {
          return <SmDisabledIcon css={{ cursor: 'not-allowed' }} />
        }

        if (size === 'md') {
          return <MdDisabledIcon css={{ cursor: 'not-allowed' }} />
        }

        if (size === 'lg') {
          return <LgDisabledIcon css={{ cursor: 'not-allowed' }} />
        }
      }

      if (value && value === selected) {
        if (size === 'sm') {
          return <SmCheckedIcon />
        }

        if (size === 'md') {
          return <MdCheckedIcon />
        }

        if (size === 'lg') {
          return <LgCheckedIcon />
        }
      }

      if (size === 'sm') {
        return <SmDefaultIcon />
      }

      if (size === 'md') {
        return <MdDefaultIcon />
      }

      if (size === 'lg') {
        return <LgDefaultIcon />
      }
    }, [value, size, disabled, selected])

    return (
      <Box css={{ display: 'inline-flex', alignItems: 'center', cursor: 'pointer' }}>
        <InputBase ref={ref} value={value} hidden={true} {...rest} />

        {radio}

        <Typography
          type={size === 'sm' ? 'caption1' : size === 'lg' ? 'body2' : 'body3'}
          css={{ marginLeft: '4px' }}
        >
          {label}
        </Typography>
      </Box>
    )
  },
)

RadioButton.displayName = 'RadioButton'
