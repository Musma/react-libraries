import { useCallback } from 'react'
import { Size } from 'src/types'

import { Typography } from '../Typography'
import {
  ReactComponent as LgCheckedIcon,
  ReactComponent as MdCheckedIcon,
  ReactComponent as SmCheckedIcon,
} from './images/checked_lg.svg'
import { ReactComponent as LgDefaultIcon } from './images/default_lg.svg'
import { ReactComponent as MdDefaultIcon } from './images/default_md.svg'
import { ReactComponent as SmDefaultIcon } from './images/default_sm.svg'
import { ReactComponent as LgDisabledIcon } from './images/disabled_lg.svg'
import { ReactComponent as MdDisabledIcon } from './images/disabled_md.svg'
import { ReactComponent as SmDisabledIcon } from './images/disabled_sm.svg'

interface RadioButtonProps {
  label?: string
  size?: Size
  value: boolean
  onChange: () => void
  labelClassName?: string
  disabled?: boolean
}

export const RadioButton = ({
  label,
  value,
  size = 'lg',
  onChange,
  labelClassName,
  disabled = false,
}: RadioButtonProps) => {
  const getCircle = useCallback(() => {
    if (disabled) return <Disabled size={size} />
    if (value) return <Checked size={size} />
    return <Default size={size} />
  }, [disabled, size, value])
  return (
    <div onClick={onChange} className="flex items-center">
      {getCircle()}
      <Typography className={labelClassName}>{label}</Typography>
    </div>
  )
}

interface CircleProps {
  size: Size
}
const Checked = ({ size }: CircleProps) => {
  switch (size) {
    case 'lg':
      return <LgCheckedIcon className="cursor-pointer" />
    case 'md':
      return <MdCheckedIcon className="cursor-pointer" />
    case 'sm':
      return <SmCheckedIcon className="cursor-pointer" />
  }
}

const Default = ({ size }: CircleProps) => {
  switch (size) {
    case 'lg':
      return <LgDefaultIcon className="cursor-pointer" />
    case 'md':
      return <MdDefaultIcon className="cursor-pointer" />
    case 'sm':
      return <SmDefaultIcon className="cursor-pointer" />
  }
}

const Disabled = ({ size }: CircleProps) => {
  switch (size) {
    case 'lg':
      return <LgDisabledIcon className="cursor-not-allowed" />
    case 'md':
      return <MdDisabledIcon className="cursor-not-allowed" />
    case 'sm':
      return <SmDisabledIcon className="cursor-not-allowed" />
  }
}
