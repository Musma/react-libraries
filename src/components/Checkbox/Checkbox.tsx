import _ from 'lodash'
import { InputHTMLAttributes } from 'react'

import DoneIcon from './images/done.svg'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  labelClassName?: string
}

export const Checkbox = ({ label, labelClassName, ...rest }: Props) => {
  const id = _.uniqueId()
  return (
    <label htmlFor={id}>
      <input
        id={id}
        type="checkbox"
        className="peer relative h-5 w-5 appearance-none rounded-[3px] bg-[#107C41] hover:cursor-pointer"
        {...rest}
      />
      <img
        src={DoneIcon}
        className="invisible absolute top-[18px] left-[18px] cursor-pointer peer-checked:visible"
      />
      <span className={labelClassName}>{label}</span>
    </label>
  )
}
