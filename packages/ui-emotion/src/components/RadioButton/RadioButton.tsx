import { css, cx } from '@emotion/css'
import { PropsWithChildren } from 'react'

import { Typography } from 'src/components'
import { Size } from 'src/styles/theme'
import { ReactComponent as LgCheckedIcon } from 'src/components/RadioButton/images/checked_lg.svg'
import { ReactComponent as MdCheckedIcon } from 'src/components/RadioButton/images/checked_md.svg'
import { ReactComponent as SmCheckedIcon } from 'src/components/RadioButton/images/checked_sm.svg'
import { ReactComponent as LgDefaultIcon } from 'src/components/RadioButton/images/default_lg.svg'
import { ReactComponent as MdDefaultIcon } from 'src/components/RadioButton/images/default_md.svg'
import { ReactComponent as SmDefaultIcon } from 'src/components/RadioButton/images/default_sm.svg'
import { ReactComponent as LgDisabledIcon } from 'src/components/RadioButton/images/disabled_lg.svg'
import { ReactComponent as MdDisabledIcon } from 'src/components/RadioButton/images/disabled_md.svg'
import { ReactComponent as SmDisabledIcon } from 'src/components/RadioButton/images/disabled_sm.svg'

interface RadioButtonProps {
  label?: string
  size?: Size
  selected: string
  value: string
  onChange: (value: string) => void
  labelClassName?: string
  disabled?: boolean
}

export const RadioButton = ({
  label,
  size = 'lg',
  selected,
  value,
  onChange,
  labelClassName,
  disabled = false,
}: RadioButtonProps) => {
  return (
    <div
      onClick={() => onChange(value)}
      className={css({ display: 'inline-flex', alignItems: 'center' })}
    >
      <CircleFactory size={size} selected={selected} value={value} disabled={disabled} />
      <LabelFactory size={size} className={cx(css({ marginLeft: '4px' }, labelClassName))}>
        {label}
      </LabelFactory>
    </div>
  )
}

const CircleFactory = ({
  size = 'lg',
  selected,
  value,
  disabled,
}: Omit<RadioButtonProps, 'label' | 'onChange' | 'labelClassName'>) => {
  if (disabled) {
    return <DisabledCircle size={size} className={css({ cursor: 'not-allowed' })} />
  }
  if (value && value === selected) {
    return <CheckedCircle size={size} className={css({ cursor: 'pointer' })} />
  }
  return <DefaultCircle size={size} className={css({ cursor: 'pointer' })} />
}

interface CircleProps {
  size: Size
  className: string
}

const CheckedCircle = ({ size, className }: CircleProps) => {
  switch (size) {
    case 'lg':
      return <LgCheckedIcon className={className} />
    case 'md':
      return <MdCheckedIcon className={className} />
    case 'sm':
      return <SmCheckedIcon className={className} />
  }
}

const DefaultCircle = ({ size, className }: CircleProps) => {
  switch (size) {
    case 'lg':
      return <LgDefaultIcon className={className} />
    case 'md':
      return <MdDefaultIcon className={className} />
    case 'sm':
      return <SmDefaultIcon className={className} />
  }
}

const DisabledCircle = ({ size, className }: CircleProps) => {
  switch (size) {
    case 'lg':
      return <LgDisabledIcon className={className} />
    case 'md':
      return <MdDisabledIcon className={className} />
    case 'sm':
      return <SmDisabledIcon className={className} />
  }
}

interface LabelProps {
  size: Size
  className: string
}
const LabelFactory = ({ size, className, children }: PropsWithChildren<LabelProps>) => {
  if (size === 'sm') {
    return (
      <Typography type="caption" className={className}>
        {children}
      </Typography>
    )
  }
  return (
    <Typography type="body" variant={size === 'lg' ? 'body2' : 'body3'} className={className}>
      {children}
    </Typography>
  )
}
