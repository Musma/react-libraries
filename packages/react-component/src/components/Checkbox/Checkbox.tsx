import { InputHTMLAttributes, useMemo } from 'react'

import { css, cx } from '@emotion/css'
import { useTheme } from '@emotion/react'
import _ from 'lodash-es'

import { Typography } from 'src/components'
import DoneDisabledLgIcon from 'src/components/Checkbox/images/done_disabled_lg.svg'
import DoneDisabledMdIcon from 'src/components/Checkbox/images/done_disabled_md.svg'
import DoneDisabledSmIcon from 'src/components/Checkbox/images/done_disabled_sm.svg'
import DoneLgIcon from 'src/components/Checkbox/images/done_lg.svg'
import DoneMdIcon from 'src/components/Checkbox/images/done_md.svg'
import DoneSmIcon from 'src/components/Checkbox/images/done_sm.svg'
import { Size } from 'src/styles/theme'

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string
  labelClassName?: string
  size?: Size
}

export const Checkbox = ({
  id = _.uniqueId(),
  label,
  size = 'lg',
  disabled,
  ...rest
}: CheckboxProps) => {
  const theme = useTheme()
  const activeIcon = useMemo(() => {
    const options = {
      lg: DoneLgIcon,
      md: DoneMdIcon,
      sm: DoneSmIcon,
    }
    return options[size]
  }, [size])

  const disabledIcon = useMemo(() => {
    const options = {
      lg: DoneDisabledLgIcon,
      md: DoneDisabledMdIcon,
      sm: DoneDisabledSmIcon,
    }
    return options[size]
  }, [size])

  const inputColorCss = {
    active: css({
      border: `1px solid ${theme.color.gray.darker}`,
      '&:checked': {
        border: 0,
        backgroundColor: theme.color.green.main,
      },
    }),
    disabled: css({ backgroundColor: theme.color.white.light }),
  }
  return (
    <label htmlFor={id} className={labelCss}>
      <div className={cx(inputConatinerCss.base, inputConatinerCss.size[size])}>
        <input
          id={id}
          type="checkbox"
          className={cx(
            inputCss.base,
            inputCss.size[size],
            { [inputColorCss.active]: !disabled },
            { [inputColorCss.disabled]: disabled },
          )}
          disabled={disabled}
          {...rest}
        />
        <img
          src={disabled ? disabledIcon : activeIcon}
          className={cx(imgCss.base, imgCss.position[size])}
        />
      </div>
      {label && <LabelFactory label={label} size={size} />}
    </label>
  )
}

const labelCss = css({ display: 'flex', alignItems: 'center' })
const inputConatinerCss = {
  base: css({
    position: 'relative',
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
const inputCss = {
  base: css({
    cursor: 'pointer',
    appearance: 'none',
    borderRadius: '2px',
  }),
  size: {
    lg: css({ height: '24px', width: '24px' }),
    md: css({ height: '16px', width: '16px' }),
    sm: css({ height: '14px', width: '14px' }),
  },
}
const imgCss = {
  base: css({ position: 'absolute', cursor: 'pointer' }),
  position: {
    lg: css({ top: '4px', left: '4px' }),
    md: css({ top: '2px', left: '2px' }),
    sm: css({ top: '3px', left: '3px' }),
  },
}

interface LabelFactoryProps {
  size: Size
  label: string
}
const LabelFactory = ({ label, size }: LabelFactoryProps) => {
  if (size !== 'sm') {
    return (
      <Typography
        className={css({ marginLeft: '8px' })}
        type="body"
        variant={size === 'lg' ? 'body2' : 'body3'}
      >
        {label}
      </Typography>
    )
  }
  return (
    <Typography className={css({ marginLeft: '4px' })} type="caption">
      {label}
    </Typography>
  )
}
