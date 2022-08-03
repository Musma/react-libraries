import { useCallback, useMemo, useState } from 'react'
import { Typography } from 'src/components'
import { Sizes } from 'src/types'

import { ReactComponent as OpenEyeIcon } from './images/eye_closed.svg'
import { ReactComponent as ClosedEyeIcon } from './images/eye_opened.svg'
import { ReactComponent as InvalidIcon } from './images/invalid.svg'
import { ReactComponent as SearchIcon } from './images/search.svg'
import { ReactComponent as ValidIcon } from './images/valid.svg'

interface TextInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  size?: Sizes
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
    const commonStyle = 'rounded border bg-white pl-2 font-normal outline-none'
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
    <div className="inline-flex flex-col items-start">
      <Typography type="subTitle" variant="subTitle2" className="mb-[2px]">
        {label}
      </Typography>
      <Input className={inputStyle} type={type} {...rest} />
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
  type: 'text' | 'password' | 'search'
}
const Input = ({ type, ...rest }: InputProps) => {
  switch (type) {
    case 'text':
      return <input type="text" {...rest} />
    case 'password':
      return <Password type="password" {...rest} />
    case 'search':
      return <Search type="text" {...rest} />
  }
}

const Password = ({ type, ...rest }: InputProps) => {
  const [inputType, setInputType] = useState(type)

  const toggleInputType = useCallback(() => {
    const newType = inputType === 'text' ? 'password' : 'text'
    setInputType(newType)
  }, [inputType])

  return (
    <div className="relative">
      <input type={inputType} {...rest} />
      <span className="absolute right-2 top-2 cursor-pointer" onClick={toggleInputType}>
        {inputType === 'password' ? <OpenEyeIcon /> : <ClosedEyeIcon />}
      </span>
    </div>
  )
}

const Search = ({ handleSearchClick, ...rest }: InputProps) => {
  return (
    <div className="relative">
      <input {...rest} />
      <SearchIcon className="absolute right-2 top-2 cursor-pointer" onClick={handleSearchClick} />
    </div>
  )
}
