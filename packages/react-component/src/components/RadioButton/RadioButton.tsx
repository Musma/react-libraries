import { CSSProperties, PropsWithChildren } from 'react'

import { Box, Typography } from 'src/components'
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

interface RadioButtonProps {
  label?: string
  size?: Size
  selected: string
  value: string
  labelStyle?: CSSProperties
  disabled?: boolean
  onChange: (value: string) => void
}

export const RadioButton = ({
  label,
  size = 'lg',
  selected,
  value,
  onChange,
  labelStyle = {},
  disabled = false,
}: RadioButtonProps) => {
  return (
    <Box
      onClick={() => onChange(value)}
      css={{ display: 'inline-flex', alignItems: 'center', cursor: 'pointer' }}
    >
      <CircleFactory size={size} selected={selected} value={value} disabled={disabled} />
      <LabelFactory size={size} css={{ marginLeft: '4px', ...labelStyle }}>
        {label}
      </LabelFactory>
    </Box>
  )
}

const CircleFactory = ({
  size = 'lg',
  selected,
  value,
  disabled,
}: Omit<RadioButtonProps, 'label' | 'onChange' | 'labelStyle'>) => {
  if (disabled) {
    return <DisabledCircle size={size} css={{ cursor: 'not-allowed' }} />
  }
  if (value && value === selected) {
    return <CheckedCircle size={size} css={{ cursor: 'pointer' }} />
  }
  return <DefaultCircle size={size} css={{ cursor: 'pointer' }} />
}

interface CircleProps {
  size: Size
  className?: string
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
  className?: string
}

const LabelFactory = ({ size, className, children }: PropsWithChildren<LabelProps>) => {
  if (size === 'sm') {
    return (
      <Typography type="caption1" className={className}>
        {children}
      </Typography>
    )
  }
  return (
    <Typography type={size === 'lg' ? 'body2' : 'body3'} className={className}>
      {children}
    </Typography>
  )
}
