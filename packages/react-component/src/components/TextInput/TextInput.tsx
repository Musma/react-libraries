import classNames from 'classnames'
import { useCallback, useMemo, useState } from 'react'
import { Typography } from 'src/components'
import { Size } from 'src/types'

import { ReactComponent as OpenEyeIcon } from './images/eye_closed.svg'
import { ReactComponent as ClosedEyeIcon } from './images/eye_opened.svg'
import { ReactComponent as InvalidIcon } from './images/invalid.svg'
import { ReactComponent as LgSearchIcon } from './images/search.svg'
import { ReactComponent as MdSearchIcon } from './images/search_md,sm.svg'
import { ReactComponent as ValidIcon } from './images/valid.svg'

interface TextInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  size?: Size
  label: string
  type?: 'text' | 'password' | 'search'
  helperText?: { type: 'invalid' | 'valid'; message: string }
  handleSearchClick?: () => void
}
export const TextInput = ({
  size = 'lg',
  label,
  type = 'text',
  helperText,
  ...rest
}: TextInputProps) => {
  const inputStyle = useMemo(() => {
    const commonStyle = 'text-black-dark rounded border bg-white pl-2 font-normal outline-none'
    const paddingRight = {
      text: 'pr-2',
      password: 'pr-7',
      search: 'pr-7',
    }
    const sizeOption = {
      sm: 'h-6 w-[148px]',
      md: 'h-7 w-[180px]',
      lg: 'h-8 w-[200px]',
    }
    const font = {
      sm: 'text-[12px] leading-4',
      md: 'text-[12px] leading-4',
      lg: 'text-[14px] leading-5',
    }
    const border = {
      valid: ' border-[#107C41]',
      invalid: 'border-[#CA3C3D]',
    }
    return `${commonStyle} ${paddingRight[type]} ${sizeOption[size]} ${font[size]} ${
      helperText ? border[helperText.type] : 'border-[#BAC7D5] focus:border-[#036DB7]'
    }`
  }, [type, helperText, size])

  return (
    <div className="flex flex-col items-start justify-center">
      <Typography
        type="subTitle"
        variant={size === 'lg' ? 'subTitle2' : 'subTitle3'}
        className="mb-[2px]"
      >
        {label}
      </Typography>
      <Input className={inputStyle} size={size} type={type} {...rest} />
      {helperText && (
        <Typography
          type="caption"
          variant="caption2"
          className={`flex items-center ${
            helperText.type === 'invalid' ? 'text-[#CA3C3D]' : 'text-[#107C41]'
          }`}
        >
          {helperText.type === 'invalid' ? <InvalidIcon /> : <ValidIcon />}
          {helperText.message}
        </Typography>
      )}
    </div>
  )
}

interface InputProps extends Omit<TextInputProps, 'label' | 'helperText' | 'size'> {
  size: Size
  type: 'text' | 'password' | 'search'
}
const Input = ({ type, size, ...rest }: InputProps) => {
  switch (type) {
    case 'text':
      return <input type="text" {...rest} />
    case 'password':
      return <Password size={size} type="password" {...rest} />
    case 'search':
      return <Search size={size} type="text" {...rest} />
  }
}

const Password = ({ type, size, ...rest }: InputProps) => {
  const [inputType, setInputType] = useState(type)

  const toggleInputType = useCallback(() => {
    const newType = inputType === 'text' ? 'password' : 'text'
    setInputType(newType)
  }, [inputType])

  return (
    <div className="relative flex items-center">
      <input type={inputType} {...rest} />
      <span
        className={classNames(
          'absolute right-2 cursor-pointer',
          { 'bottom-2': size === 'lg' },
          { 'bottom-[7px]': size === 'md' },
          { 'bottom-[5px]': size === 'sm' },
        )}
        onClick={toggleInputType}
      >
        {inputType === 'password' ? <OpenEyeIcon /> : <ClosedEyeIcon />}
      </span>
    </div>
  )
}

const Search = ({ handleSearchClick, size, ...rest }: InputProps) => {
  return (
    <div className="relative flex items-center">
      <input {...rest} />
      <span
        className={classNames(
          'absolute right-2 cursor-pointer',
          { 'bottom-2': size === 'lg' },
          { 'bottom-[7px]': size === 'md' },
          { 'bottom-[5px]': size === 'sm' },
        )}
        onClick={handleSearchClick}
      >
        {size === 'lg' ? <LgSearchIcon /> : <MdSearchIcon />}
      </span>
    </div>
  )
}
