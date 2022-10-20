import { CSSProperties, Fragment, useMemo } from 'react'

import { css, useTheme } from '@emotion/react'
import { uniqueId } from 'lodash-es'

import { Typography } from 'src/components'
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
  labelStyle?: CSSProperties
  size?: Size
}

export const Checkbox = ({
  id = uniqueId(),
  label,
  labelStyle = {},
  size = 'lg',
  checked = false,
  onChange,
  disabled = false,
  ...rest
}: CheckboxProps) => {
  const theme = useTheme()

  const containerColorCss = useMemo(() => {
    if (disabled) {
      return css({ backgroundColor: theme.colors.white.lighter })
    }
    if (checked) {
      return css({ backgroundColor: theme.colors.green.main })
    }
    return css({
      backgroundColor: theme.colors.white.main,
      border: `1px solid ${theme.colors.gray.darker}`,
    })
  }, [theme, checked, disabled])

  return (
    <label htmlFor={id} css={labelCss}>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => {
          if (!onChange) {
            return
          }
          onChange(e.target.checked)
        }}
        css={css({ visibility: 'hidden', appearance: 'none' })}
        disabled={disabled}
        {...rest}
      />

      <div css={[containerCss.base, containerCss.size[size], containerColorCss]}>
        <IconFactory checked={checked} disabled={disabled} size={size} />
      </div>

      {label && <LabelFactory label={label} size={size} labelStyle={labelStyle} />}
    </label>
  )
}

const labelCss = css({ display: 'flex', alignItems: 'center', cursor: 'pointer' })
const containerCss = {
  base: css({
    cursor: 'pointer',
    borderRadius: '2px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  size: {
    lg: css({ width: '24px', height: '24px' }),
    md: css({ width: '16px', height: '16px' }),
    sm: css({ width: '14px', height: '14px' }),
  },
}
interface IconFactoryProps {
  checked: boolean
  disabled: boolean
  size: Size
}

const IconFactory = ({ checked, disabled, size }: IconFactoryProps) => {
  if (disabled) {
    return disabledIcon[size]
  }
  if (checked) {
    return activeIcon[size]
  }
  return <Fragment />
}
const activeIcon = {
  lg: <DoneLgIcon />,
  md: <DoneMdIcon />,
  sm: <DoneSmIcon />,
}
const disabledIcon = {
  lg: <DoneDisabledLgIcon />,
  md: <DoneDisabledMdIcon />,
  sm: <DoneDisabledSmIcon />,
}

interface LabelFactoryProps {
  size: Size
  label: string
  labelStyle: CSSProperties
}
const LabelFactory = ({ label, size }: LabelFactoryProps) => {
  if (size !== 'sm') {
    return (
      <Typography css={css({ marginLeft: '8px' })} type={size === 'lg' ? 'body2' : 'body3'}>
        {label}
      </Typography>
    )
  }
  return (
    <Typography css={css({ marginLeft: '4px' })} type="caption1">
      {label}
    </Typography>
  )
}
