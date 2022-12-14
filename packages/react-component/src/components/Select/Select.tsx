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

/**
 * ForwardRef + Generic Type
 * https://fettblog.eu/typescript-react-generic-forward-refs/
 *
 */
export interface SelectOption<T> {
  /**
   * 라벨
   */
  label: string
  /**
   * 밸류
   */
  value: T
}

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
   * Select의 Value 값입니다.
   */
  value: T
  /**
   * @required
   *
   */
  options: SelectOption<T>[]
  /**
   * @optional
   */
  required?: boolean
  /**
   * @required
   */
  onChange: (value: T) => void
}

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
const _Select = <T extends unknown>(
  {
    id: _id,
    size = 'md',
    label,
    value,
    options,
    className,
    required,
    disabled,
    onChange,
    ...rest
  }: SelectProps<T>,
  inputRef: ForwardedRef<HTMLInputElement>,
) => {
  const theme = useTheme()
  const [ref, setRef] = useSetRef()
  const [open, setOpen] = useState(false)

  const id = useMemo(() => {
    return _id || uniqueId()
  }, [_id])

  const selectedOption = useMemo(() => {
    return options.find((option) => option.value === value)
  }, [value, options])

  const handleSelectClick = useCallback((event: MouseEvent<HTMLDivElement>) => {
    if (!disabled) {
      event.stopPropagation()
      setOpen((value) => !value)
    }
  }, [])

  const handleOptionClick = useCallback(
    (value: T) => {
      onChange(value)
      setOpen(false)
    },
    [onChange],
  )

  useOutsideListener(ref, () => {
    // Select 영역 말고 다른 영역 클릭 시 닫힘
    setOpen(false)
  })

  return (
    <Box
      ref={setRef}
      css={{
        display: 'inline-flex',
        flexDirection: 'column',
        width: '100%',
        minWidth: theme.inputSize.minWidth,
      }}
      className={className}
    >
      {/* 라벨 */}
      {label && (
        <InputLabel size={size} required={required}>
          {label}
        </InputLabel>
      )}

      <Box
        tabIndex={-1}
        css={[
          { position: 'relative', display: 'flex', alignItems: 'center', cursor: 'pointer' },
          disabled && {
            cursor: 'not-allowed',
          },
        ]}
        onClick={handleSelectClick}
      >
        <InputBase
          ref={inputRef}
          id={id}
          value={selectedOption?.label}
          readOnly={true}
          disabled={disabled}
          css={[
            {
              width: '100%',
              height: theme.inputSize.height[size],
              fontSize: theme.inputSize.fontSize[size],
              borderRadius: theme.rounded.md,
              paddingLeft: theme.spacing.sm,
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: theme.colors.gray.darker,
              color: theme.colors.black.dark,
              cursor: 'inherit',
              '&:focus': {
                border: `1px solid ${theme.colors.blue.main}`,
              },
              '&::placeholder': {
                color: theme.colors.black.main,
              },
              '&:disabled': {
                color: theme.colors.gray.main,
                backgroundColor: theme.colors.white.light,
                borderColor: theme.colors.gray.main,
              },
            },
          ]}
          {...rest}
        />

        <OutlineArrowBottomSmallIcon
          color={disabled ? theme.colors.gray.main : theme.colors.black.main}
          css={[{ position: 'absolute', right: 4 }, open && { rotate: '180deg' }]}
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
                  padding: theme.spacing.sm,
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
