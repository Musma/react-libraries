import {
  ChangeEvent,
  CSSProperties,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

import { css, useTheme } from '@emotion/react'
import { OutlineArrowBottomSmallIcon } from '@musma/react-icons'
import { uniqueId } from 'lodash-es'

import { Typography } from 'src/components'
import { Size } from 'src/types'

interface SelectProps {
  id?: string
  size?: Size
  label: string
  value: string
  options: { label: string; value: string }[]
  onChange: (value: string) => void
  inputStyle?: CSSProperties
  className?: string
}

export const Select = ({
  id = uniqueId(),
  size = 'lg',
  label,
  value,
  options,
  onChange,
  inputStyle = {},
  className,
}: SelectProps) => {
  const theme = useTheme()
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
    if (!text) {
      return options
    }
    return options.filter((option) => option.label.toLowerCase().includes(text.toLowerCase()))
  }, [options, text])

  const isValid = useCallback(
    (text: string) => {
      if (!text) {
        return
      }
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
    if (!inputRef.current) {
      return
    }
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
      if (!divRef.current) {
        return
      }
      if (divRef.current.contains(e.target as Node)) {
        return
      }
      if (isValid(text)) {
        handleOptionSelect(text)
        return
      }
      setText('')
      setIsOpen(false)
    }
    document.addEventListener('click', selectOption)
    return () => {
      document.removeEventListener('click', selectOption)
    }
  }, [])

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
  const inputColorCss = useMemo(() => {
    return css({
      color: theme.colors.black.dark,
      border: `1px solid ${theme.colors.gray.darker}`,
      '&::placeholder': {
        color: theme.colors.black.main,
      },
      '&:focus': {
        border: `1px solid ${theme.colors.blue.main}`,
      },
      outline: 'none',
    })
  }, [theme])

  return (
    <div css={containerCss} className={className}>
      <label htmlFor={id}>
        <TitleFactory size={size} label={label} />
      </label>

      <div css={inputContainerCss} ref={divRef} onClick={handleDropdownClick}>
        <input
          id={id}
          ref={inputRef}
          value={text}
          placeholder={getLabel(value)}
          onChange={handleTextChange}
          css={[inputCss.base, inputCss.size[size], inputColorCss, css({ ...inputStyle })]}
        />

        {size === 'lg' ? (
          <OutlineArrowBottomSmallIcon css={[iconCss.base, isOpen && { rotate: '180deg' }]} />
        ) : (
          <OutlineArrowBottomSmallIcon
            css={[iconCss.base, iconCss.size[size], isOpen && { rotate: '180deg' }]}
          />
        )}

        {isOpen && (
          <ul
            css={[
              ulCss.base,
              ulCss.size[size],
              {
                border: `1px solid ${theme.colors.gray.darker}`,
                backgroundColor: theme.colors.white.main,
                margin: 0,
              },
            ]}
          >
            {filteredOptions.map(({ label, value }) => (
              <li
                key={label}
                onClick={() => handleOptionSelect(value)}
                css={[
                  liCss.base,
                  liCss.size[size],
                  {
                    '&:hover': {
                      backgroundColor: isSelected(value) ? undefined : theme.colors.blue.lighter,
                      color: theme.colors.blue.main,
                    },
                  },
                  isSelected(value) && { backgroundColor: theme.colors.blue.main },
                ]}
              >
                <LabelFactory
                  size={size}
                  label={label}
                  css={isSelected(value) && { color: theme.colors.white.main }}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

const containerCss = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
})

const inputContainerCss = css({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  border: 0,
})

const inputCss = {
  base: css({
    cursor: 'pointer',
    borderRadius: '4px',
    paddingLeft: '8px',
  }),
  size: {
    lg: css({ width: '200px', fontSize: '14px', height: '32px' }),
    md: css({ width: '180px', fontSize: '12px', height: '28px' }),
    sm: css({ width: '148px', fontSize: '12px', height: '24px' }),
  },
}

const iconCss = {
  base: css({ position: 'absolute', right: '4px', cursor: 'pointer' }),
  size: {
    sm: css({ bottom: '6.5px' }),
    md: css({ bottom: '7px' }),
  },
}

const ulCss = {
  base: css({
    width: '100%',
    position: 'absolute',
    display: 'grid',
    maxHeight: '300px',
    gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
    overflowY: 'auto',
    borderRadius: '4px',
    padding: '4px 0',
    boxSize: 'border-box',
  }),
  size: {
    lg: css({ top: '34px' }),
    md: css({ top: '30px' }),
    sm: css({ top: '26px' }),
  },
}

const liCss = {
  base: css({
    display: 'flex',
    cursor: 'pointer',
    alignItems: 'center',
    padding: '4px 0 4px 8px',
  }),
  size: {
    lg: css({ height: '32px' }),
    md: css({ height: '28px' }),
    sm: css({ height: '24px' }),
  },
}

interface TypographyFactoryProps {
  className?: string
  size: Size
  label: string
}

const LabelFactory = ({ size, label, className }: TypographyFactoryProps) => {
  if (size === 'lg') {
    return (
      <Typography type="body3" className={className}>
        {label}
      </Typography>
    )
  }

  return (
    <Typography type="caption1" className={className}>
      {label}
    </Typography>
  )
}

const TitleFactory = ({ size, label, className }: TypographyFactoryProps) => {
  if (size === 'lg') {
    return (
      <Typography type="subTitle2" className={className}>
        {label}
      </Typography>
    )
  }

  return (
    <Typography type="subTitle3" className={className}>
      {label}
    </Typography>
  )
}
