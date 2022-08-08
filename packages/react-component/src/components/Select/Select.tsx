import { Typography } from 'src/components'
import { ChangeEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { ReactComponent as LgArrowICon } from './images/arrow_lg.svg'
import { ReactComponent as MdArrowICon } from './images/arrow_md,sm.svg'
import { Size } from 'src/types'

interface SelectProps {
  size?: Size
  label: string
  value: string
  options: { label: string; value: string }[]
  onChange: (value: string) => void
  inputClassName?: string
}

export const Select = ({
  size = 'lg',
  label,
  value,
  options,
  onChange,
  inputClassName = '',
}: SelectProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const divRef = useRef<HTMLDivElement>(null)
  const getLabel = useCallback(
    (value: string) => {
      const selected = options.find((option) => option.value === value)
      if (!selected) {
        return ''
      }
      return selected.label
    },
    [options],
  )

  const [text, setText] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  // FIXME: 키보드로 옵션 선택할 수 있는 기능 구현중 선택된 항목을 따라 스크롤이 움직이는 부분에서 막혔음... 추후 구현
  // const [pointer, setPointer] = useState(0)

  const filteredOptions = useMemo(() => {
    if (!text) return options
    return options.filter((option) => option.label.toLowerCase().includes(text.toLowerCase()))
  }, [options, text])

  const isValid = useCallback(
    (text: string) => {
      if (!text) return
      return options.find((option) => option.label === text)
    },
    [options],
  )

  // FIXME: 키보드로 옵션 선택할 수 있는 기능 구현중 선택된 항목을 따라 스크롤이 움직이는 부분에서 막혔음... 추후 구현
  // const upPointer = useCallback(() => {
  //   if (pointer === 0) {
  //     setPointer(filteredOptions.length - 1)
  //     return
  //   }
  //   setPointer((prev) => prev - 1)
  // }, [filteredOptions.length, pointer])

  // const downPointer = useCallback(() => {
  //   if (pointer === filteredOptions.length - 1) {
  //     setPointer(0)
  //     return
  //   }
  //   setPointer((prev) => prev + 1)
  // }, [filteredOptions.length, pointer])

  const handleTextChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }, [])

  const handleOptionSelect = useCallback(
    (value: string) => {
      onChange(value)
      setIsOpen(false)
    },
    [onChange],
  )
  // FIXME: 키보드로 옵션 선택할 수 있는 기능 구현중 선택된 항목을 따라 스크롤이 움직이는 부분에서 막혔음... 추후 구현
  // const handleKeyPress = useCallback(
  //   (e: React.KeyboardEvent<HTMLInputElement>) => {
  //     if (!isOpen && e.key === 'ArrowDown') {
  //       setIsOpen(true)
  //     }
  //     if (e.key === 'Enter' && pointer >= 0) {
  //       handleOptionSelect(filteredOptions[pointer].value)
  //       return
  //     }
  //     if (e.key === 'Enter' && isValid(e.target.value)) {
  //       handleOptionSelect(e.target.value)
  //     }
  //   },
  //   [filteredOptions, handleOptionSelect, isOpen, isValid, pointer],
  // )

  const handleDropdownClick = useCallback(() => {
    if (!inputRef.current) return
    if (!isOpen) {
      setIsOpen(true)
      inputRef.current.focus()
      return
    }
    setIsOpen(false)
  }, [isOpen])

  const isSelected = useCallback(
    (v: string) => {
      return value === v
    },
    [value],
  )

  useEffect(() => {
    const selectOption = (e: MouseEvent) => {
      if (!divRef.current) return
      if (divRef.current.contains(e.target as Node)) return
      if (isValid(text)) {
        handleOptionSelect(text)
        return
      }
      setText('')
      setIsOpen(false)
    }
    document.addEventListener('click', selectOption)
    return function cleanup() {
      document.removeEventListener('click', selectOption)
    }
  }, [getLabel, handleOptionSelect, isValid, onChange, text, value])

  // FIXME: 키보드로 옵션 선택할 수 있는 기능 구현중 선택된 항목을 따라 스크롤이 움직이는 부분에서 막혔음... 추후 구현
  // useEffect(() => {
  //   if (!isOpen) return
  //   const handleUpDown = (e: KeyboardEvent) => {
  //     if (e.key === 'ArrowDown') {
  //       downPointer()
  //       return
  //     }
  //     if (e.key === 'ArrowUp') {
  //       upPointer()
  //       return
  //     }
  //   }
  //   document.addEventListener('keydown', handleUpDown)
  //   return function cleanup() {
  //     document.removeEventListener('keydown', handleUpDown)
  //   }
  // }, [downPointer, filteredOptions, isOpen, options.length, pointer, upPointer])

  const inputSize = useMemo(() => {
    return {
      lg: 'w-[200px] text-[14px]',
      md: 'w-[180px] text-[12px]',
      sm: 'w-[148px] text-[12px]',
    }[size]
  }, [size])

  const height = useMemo(() => {
    return {
      lg: 'h-8',
      md: 'h-7',
      sm: 'h-6',
    }[size]
  }, [size])

  return (
    <div className="flex flex-col items-start">
      <label htmlFor="input">
        <TitleFactory size={size} label={label} className="mb-[2px]" />
      </label>
      <div ref={divRef} className={`relative`} onClick={handleDropdownClick}>
        <input
          id={'input'}
          ref={inputRef}
          value={text}
          placeholder={getLabel(value)}
          onChange={handleTextChange}
          // onKeyDown={handleKeyPress}
          className={`cursor-pointer rounded border border-[#BAC7D5] pl-2 outline-none placeholder:text-[#242E40] focus:border-[#036DB7] ${inputSize} ${height} ${inputClassName}`}
        />
        {size === 'lg' ? (
          <LgArrowICon
            className={`absolute right-1 bottom-1 cursor-pointer ${isOpen ? 'rotate-180' : ''}`}
          />
        ) : (
          <MdArrowICon
            className={`absolute right-1 cursor-pointer ${size === 'md' ? 'bottom-[7px]' : ''} ${
              size === 'sm' ? 'bottom-[6.5px]' : ''
            } ${isOpen ? 'rotate-180' : ''}`}
          />
        )}
        {isOpen && (
          <ul className="absolute mt-1 grid max-h-[158px] w-full grid-cols-1 gap-y-[2px] overflow-y-scroll rounded border border-[#BAC7D5] py-1">
            {filteredOptions.map(({ label, value }, index) => (
              <li
                key={label}
                onClick={() => handleOptionSelect(value)}
                className={`flex cursor-pointer items-center py-1 pl-4 ${
                  isSelected(value)
                    ? 'bg-[#036DB7] text-white'
                    : 'hover:bg-[#F2F8FB] hover:text-[#036DB7]'
                } ${height}`}
                // FIXME: 키보드로 옵션 선택할 수 있는 기능 구현중 선택된 항목을 따라 스크롤이 움직이는 부분에서 막혔음... 추후 구현
                // { 'active bg-[#F2F8FB] text-[#036DB7]': !isSelected(value) && index === pointer },
              >
                <LabelFactory size={size} label={label} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

interface TypographyFactoryProps {
  size: Size
  label: string
  className?: string
}
const LabelFactory = ({ size, label, className = '' }: TypographyFactoryProps) => {
  if (size === 'lg') {
    return (
      <Typography type="body" variant="body3" className={className}>
        {label}
      </Typography>
    )
  }
  return (
    <Typography type="caption" className={className}>
      {label}
    </Typography>
  )
}

const TitleFactory = ({ size, label, className }: TypographyFactoryProps) => {
  if (size === 'lg') {
    return (
      <Typography type="subTitle" variant="subTitle2" className={className}>
        {label}
      </Typography>
    )
  }
  return (
    <Typography type="subTitle" variant="subTitle3" className={className}>
      {label}
    </Typography>
  )
}
