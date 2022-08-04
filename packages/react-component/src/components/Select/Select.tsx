import classNames from 'classnames'
import { ChangeEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { Typography } from 'src/components'
import { Sizes } from 'src/types'

import { ReactComponent as ArrowTopIcon } from './images/arrow_top.svg'

interface SelectProps {
  size?: Sizes
  label: string
  value: string
  options: { label: string; value: string }[]
  onChange: (value: string) => void
}

export const Select = ({ size = 'lg', label, value, options, onChange }: SelectProps) => {
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

  const arrowPosition = useMemo(() => {
    return {
      lg: 'top-1 right-2',
      md: 'top-[2px] right-1',
      sm: 'top-0 right-0',
    }[size]
  }, [size])

  return (
    <div className="inline-flex flex-col items-start">
      <label htmlFor="input">
        <TitleFactory size={size} label={label} className="mb-[2px]" />
      </label>
      <div ref={divRef} className={classNames('relative', height)} onClick={handleDropdownClick}>
        <input
          id={'input'}
          ref={inputRef}
          value={text}
          onChange={handleTextChange}
          // onKeyDown={handleKeyPress}
          className={classNames(
            'cursor-pointer rounded border border-[#BAC7D5] pl-2 leading-5 outline-none focus:border-[#036DB7]',
            inputSize,
            height,
          )}
        />
        {/* <LabelFactory
          size={size}
          label={getLabel(value)}
          className={classNames(
            'absolute',
            { 'left-[10px] top-[6px]': size !== 'sm' },
            { 'left-[9px] top-[5px]': size === 'sm' },
            { invisible: text },
          )}
        /> */}
        <ArrowTopIcon
          className={classNames('absolute cursor-pointer', arrowPosition, {
            'rotate-180 ': isOpen,
          })}
        />
        {isOpen && (
          <ul className="absolute mt-1 grid max-h-[158px] w-full grid-cols-1 gap-y-[2px] overflow-y-scroll rounded border border-[#BAC7D5] py-1">
            {filteredOptions.map(({ label, value }, index) => (
              <li
                key={label}
                onClick={() => handleOptionSelect(value)}
                className={classNames(
                  'flex cursor-pointer items-center py-1 pl-4',
                  { 'bg-[#036DB7] text-white': isSelected(value) },
                  { 'hover:bg-[#F2F8FB] hover:text-[#036DB7]': !isSelected(value) },
                  height,
                  // FIXME: 키보드로 옵션 선택할 수 있는 기능 구현중 선택된 항목을 따라 스크롤이 움직이는 부분에서 막혔음... 추후 구현
                  // { 'active bg-[#F2F8FB] text-[#036DB7]': !isSelected(value) && index === pointer },
                )}
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
  size: Sizes
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
