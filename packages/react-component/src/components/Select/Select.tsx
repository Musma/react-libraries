import { ChangeEvent, InputHTMLAttributes, useCallback, useMemo, useRef, useState } from 'react'

import { useTheme } from '@emotion/react'
import { OutlineArrowBottomSmallIcon } from '@musma/react-icons'
import { uniqueId } from 'lodash-es'

import { Box, InputBase, SelectOption, Typography } from 'src/components'
import { Size } from 'src/types'

import { Option, OptionContainer } from './components'

interface SelectProps<T> extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'value'> {
  size?: Size
  label?: string
  value: T
  options: SelectOption<T>[]
}

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
export const Select = <T extends unknown>({
  id = uniqueId(),
  size = 'md',
  label,
  value,
  options,
  ...rest
}: SelectProps<T>) => {
  const theme = useTheme()
  const divRef = useRef<HTMLDivElement>(null)

  const [text, setText] = useState('')
  const [open, setOpen] = useState(false)

  // Input에 검색했을 때 나타나는 옵션 목록
  const filteredOptions = useMemo(() => {
    if (!text) {
      return options
    }

    return options.filter((option) => option.label.toLowerCase().includes(text.toLowerCase()))
  }, [text, options])

  const selectedOption = useMemo(() => {
    return options.find((option) => option.value === value)
  }, [value, options])

  const handleTextChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }, [])

  const handleSelectClick = useCallback(() => {
    setOpen((value) => !value)
  }, [open])

  return (
    <Box
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        minWidth: 64,
      }}
    >
      {label && <Typography type={size === 'lg' ? 'subTitle2' : 'subTitle3'}>{label}</Typography>}

      <Box
        css={{ position: 'relative', display: 'flex', alignItems: 'center' }}
        ref={divRef}
        onClick={handleSelectClick}
      >
        <InputBase
          id={id}
          value={text}
          onChange={handleTextChange}
          css={[
            {
              height: theme.inputSize[size],
              cursor: 'pointer',
              borderRadius: '4px',
              paddingLeft: theme.spacing.sm,
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
            open && { rotate: '180deg' },
          ]}
        />

        {open && (
          <OptionContainer>
            {filteredOptions.map((option) => (
              <Option key={`key-${value}`} option={option} selectedOption={selectedOption} />
            ))}

            {filteredOptions.length === 0 && (
              <Typography
                type="caption1"
                css={{
                  textAlign: 'center',
                  paddingLeft: theme.spacing.sm,
                  paddingTop: 4,
                  paddingBottom: 4,
                }}
              >
                No Items
              </Typography>
            )}
          </OptionContainer>
        )}
      </Box>
    </Box>
  )
}
