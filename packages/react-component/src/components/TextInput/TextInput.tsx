import { useCallback, useMemo, useState } from 'react'

import { ReactComponent as OpenEyeIcon } from './images/eye_closed.svg'
import { ReactComponent as ClosedEyeIcon } from './images/eye_opened.svg'
import { ReactComponent as InvalidIcon } from './images/invalid.svg'
import { ReactComponent as SearchIcon } from './images/search.svg'
import { ReactComponent as ValidIcon } from './images/valid.svg'

import { SubTitle, Caption } from 'src/components'

interface TextInpuProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string
  type?: 'text' | 'password' | 'search'
  helperText?: { type: 'invalid' | 'valid'; message: string }
  onSearhClick?: () => void
}
export const TextInput = ({ label, type = 'text', helperText, ...rest }: TextInpuProps) => {
  const inputStyle = useMemo(() => {
    const commonStyle =
      'h-[32px] w-[200px] rounded border bg-white pl-2 text-[14px] font-normal leading-5 outline-none'
    const paddingRight = {
      text: 'pr-2',
      password: 'pr-7',
      search: 'pr-7',
    }
    const border = {
      valid: ' border-[#107C41]',
      invalid: 'border-[#CA3C3D]',
    }
    return `${commonStyle} ${paddingRight[type]} ${
      helperText ? border[helperText.type] : 'border-[#BAC7D5] focus:border-[#036DB7]'
    }`
  }, [type, helperText])

  return (
    <div className="inline-flex flex-col items-start">
      <SubTitle className="mb-[2px]" element={2}>
        {label}
      </SubTitle>
      <Input className={inputStyle} type={type} {...rest} />
      {helperText && (
        <Caption
          element="c2"
          className={`flex items-center ${
            helperText.type === 'invalid' ? 'text-[#CA3C3D]' : 'text-[#107C41]'
          }`}
        >
          {helperText.type === 'invalid' ? <InvalidIcon /> : <ValidIcon />}
          {helperText.message}
        </Caption>
      )}
    </div>
  )
}

interface InputProps extends Omit<TextInpuProps, 'label' | 'helperText'> {
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

const Search = ({ onSearhClick, ...rest }: InputProps) => {
  return (
    <div className="relative">
      <input {...rest} />
      <SearchIcon className="absolute right-2 top-2 cursor-pointer" onClick={onSearhClick} />
    </div>
  )
}