import {
  ChangeEvent,
  CSSProperties,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

import { useTheme } from '@emotion/react'
import { OutlineArrowBottomSmallIcon } from '@musma/react-icons'
import { uniqueId } from 'lodash-es'

import { Box, Typography } from 'src/components'
import { Size } from 'src/types'

interface SelectProps {
  id?: string
  size?: Size
  label?: string
  value: string
  options: { label: string; value: string }[]
  onChange: (value: string) => void
  inputStyle?: CSSProperties
  className?: string
}

export const Select = ({
  id = uniqueId(),
  size = 'md',
  label,
  value,
  options,
  onChange,
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

  return (
    <Box
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        minWidth: 64,
      }}
      className={className}
    >
      {label && <Typography type={size === 'lg' ? 'subTitle2' : 'subTitle3'}>{label}</Typography>}

      <div
        css={{ position: 'relative', display: 'flex', alignItems: 'center', border: 0 }}
        ref={divRef}
        onClick={handleDropdownClick}
      >
        <input
          id={id}
          ref={inputRef}
          value={text}
          placeholder={getLabel(value)}
          onChange={handleTextChange}
          css={[
            {
              height: theme.inputSize[size],
              cursor: 'pointer',
              borderRadius: '4px',
              paddingLeft: '8px',
              outline: 'none',
              border: `1px solid ${theme.colors.gray.darker}`,
              color: theme.colors.black.dark,
              fontSize: size === 'lg' ? 14 : 12,
              '&:focus': {
                border: `1px solid ${theme.colors.blue.main}`,
              },
              '&::placeholder': {
                color: theme.colors.black.main,
              },
            },
          ]}
        />

        <OutlineArrowBottomSmallIcon
          css={[
            { position: 'absolute', right: '4px', cursor: 'pointer' },
            size === 'sm' && { bottom: '4px' },
            size === 'md' && { bottom: '6px' },
            isOpen && { rotate: '180deg' },
          ]}
        />

        {isOpen && (
          <ul
            css={[
              {
                display: 'grid',
                width: '100%',
                position: 'absolute',
                maxHeight: '300px',
                gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
                overflowY: 'auto',
                borderRadius: '4px',
                padding: '4px 0',
                boxSizing: 'border-box',
                border: `1px solid ${theme.colors.gray.darker}`,
                backgroundColor: theme.colors.white.main,
                margin: 0,
                zIndex: theme.zIndex.navBar + 1,
                top: `calc(100% + 4px)`,
              },
            ]}
          >
            {filteredOptions.map(({ label, value }) => (
              <li
                key={`key-${value}`}
                onClick={() => handleOptionSelect(value)}
                css={[
                  {
                    display: 'flex',
                    alignItems: 'center',
                    padding: '4px 0 4px 8px',
                    height: 24,
                    cursor: 'pointer',
                    '&:hover': {
                      backgroundColor: isSelected(value) ? undefined : theme.colors.blue.lighter,
                      color: theme.colors.blue.main,
                    },
                  },
                  isSelected(value) && { backgroundColor: theme.colors.blue.main },
                ]}
              >
                <Typography
                  type={size === 'lg' ? 'body3' : 'caption1'}
                  css={isSelected(value) && { color: theme.colors.white.main }}
                >
                  {label}
                </Typography>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Box>
  )
}
