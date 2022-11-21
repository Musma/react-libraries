import {
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
  MouseEvent,
  useCallback,
  useMemo,
  useState,
} from 'react'

import { useTheme } from '@emotion/react'
import { OutlineArrowBottomSmallIcon } from '@musma/react-icons'
import { useOutsideListener, useSetRef, uniqueId } from '@musma/react-utils'

import { InputLabel, Typography } from 'src/components'
import { Box, InputBase } from 'src/elements'
import { Size } from 'src/types'

import { Option, OptionContainer } from './components'

export interface SelectOption<T> {
  label: string
  value: T
}

/**
 * ForwardRef + Generic Type
 * https://fettblog.eu/typescript-react-generic-forward-refs/
 *
 */

interface SelectProps<T>
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'value' | 'onChange'> {
  /**
   * @default md
   */
  size?: Size
  /**
   * @optional
   */
  label?: string
  /**
   * @required
   *
   */
  value: T
  /**
   *
   */
  options: SelectOption<T>[]
  /**
   *
   */
  onChange: (value: T) => void
}

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
const _Select = <T extends unknown>(
  { id: _id, size = 'md', label, value, options, className, onChange, ...rest }: SelectProps<T>,
  inputRef: ForwardedRef<HTMLInputElement>,
) => {
  const theme = useTheme()

  const [ref, setRef] = useSetRef()

  const [open, setOpen] = useState(false)

  useOutsideListener(ref, () => {
    // Select 영역 말고 다른 영역 클릭 시 닫힘
    setOpen(false)
  })

  const id = useMemo(() => {
    return _id || uniqueId()
  }, [_id])

  const selectedOption = useMemo(() => {
    return options.find((option) => option.value === value)
  }, [value, options])

  const handleSelectClick = useCallback((event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation()
    setOpen((value) => !value)
  }, [])

  const handleOptionClick = useCallback(
    (value: T) => {
      onChange(value)
      setOpen(false)
    },
    [onChange],
  )

  return (
    <Box
      ref={setRef}
      css={{
        display: 'inline-flex',
        flexDirection: 'column',
        width: '100%',
        minWidth: 64,
      }}
      className={className}
    >
      {/* 라벨 */}
      {label && <InputLabel size={size}>{label}</InputLabel>}

      <Box
        tabIndex={-1}
        css={{ position: 'relative', display: 'flex', alignItems: 'center' }}
        onClick={handleSelectClick}
      >
        <InputBase
          ref={inputRef}
          id={id}
          value={selectedOption?.label}
          readOnly={true}
          css={[
            {
              width: '100%',
              height: theme.inputSize.height[size],
              fontSize: theme.inputSize.fontSize[size],
              cursor: 'pointer',
              borderRadius: theme.rounded.md,
              paddingLeft: theme.spacing.sm,
              border: `1px solid ${theme.colors.gray.darker}`,
              color: theme.colors.black.dark,
              '&:focus': {
                border: `1px solid ${theme.colors.blue.main}`,
              },
              '&::placeholder': {
                color: theme.colors.black.main,
              },
            },
          ]}
          {...rest}
        />

        <OutlineArrowBottomSmallIcon
          css={[
            { position: 'absolute', right: '4px', cursor: 'pointer' },
            open && { rotate: '180deg' },
          ]}
        />

        {open && (
          <OptionContainer>
            {options.map((option) => (
              <Option
                key={`key-${option.value}`}
                option={option}
                selectedOption={selectedOption}
                onClick={() => {
                  handleOptionClick(option.value)
                }}
              />
            ))}

            {options.length === 0 && (
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

export const Select = forwardRef(_Select) as <T>(
  props: SelectProps<T> & { ref?: ForwardedRef<HTMLInputElement> },
) => ReturnType<typeof _Select>
