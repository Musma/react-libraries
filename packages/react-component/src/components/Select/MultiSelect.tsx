import {
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'

import { useTheme } from '@emotion/react'
import { ArrowBottomSmallIcon, CloseIcon } from '@musma/react-icons'
import {
  useOutsideListener,
  useSetRef,
  uniqueId,
  useKeyPress,
  KeyboardEvents,
} from '@musma/react-utils'

import {
  InputLabel,
  Typography,
  Option,
  OptionContainer,
  Chip,
  IconAdornment,
  MultiSelectOption,
} from 'src/components'
import { Box, InputBase } from 'src/elements'
import { Size } from 'src/types'

/**
 * ForwardRef + Generic Type
 * https://fettblog.eu/typescript-react-generic-forward-refs/
 *
 */

interface MultiSelectProps<T>
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
  value: T[]
  /**
   * @required
   *
   */
  options: MultiSelectOption<T>[]
  /**
   * @optional
   */
  withAsterisk?: boolean
  /**
   * @required
   */
  /** */
  onChange: (value: T[]) => void
}

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
const _MultiSelect = <T extends string>(
  {
    id: _id,
    size = 'md',
    label,
    value,
    options,
    className,
    withAsterisk,
    disabled,
    onChange,
    ...rest
  }: MultiSelectProps<T>,
  propRef: ForwardedRef<HTMLInputElement>,
) => {
  const theme = useTheme()
  const [ref, setRef] = useSetRef()

  const [inputRef, setInputRef] = useSetRef()
  const [open, setOpen] = useState(false)
  const [inputValue, setInputValue] = useState<string>('')

  const [activeIndex, setActiveIndex] = useState<number>(0)

  const upPress = useKeyPress(KeyboardEvents.ARROW_UP)
  const downPress = useKeyPress(KeyboardEvents.ARROW_DOWN)
  const enterPress = useKeyPress(KeyboardEvents.ENTER)
  const escPress = useKeyPress(KeyboardEvents.ESCAPE)

  const id = useMemo(() => {
    return _id || uniqueId()
  }, [_id])

  const handleSelectClick = useCallback(() => {
    if (!disabled) {
      inputRef?.focus()
      setOpen((value) => !value)
      setActiveIndex(0)
    }
  }, [disabled, inputRef])

  const handleOptionClick = useCallback(
    (optionValue: T) => {
      onChange([...value, optionValue])
      setOpen(false)
    },
    [value],
  )

  // Options 목록중에서 이미 선택한 Option을 제외한 나머지 옵션들 반환
  const remainOptions = useMemo(() => {
    return options.filter((option) => {
      return !value.includes(option.value)
    })
  }, [options, value])

  // remainOptions 중 Input에 검색한 텍스트와 일치하는 옵션들 반환
  const searchedOptions = useMemo(() => {
    if (remainOptions && inputValue) {
      return remainOptions.filter((option) =>
        option.label.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase()),
      )
    }
    return remainOptions
  }, [inputValue, remainOptions])

  useOutsideListener(ref, () => {
    // Select 영역 말고 다른 영역 클릭 시 닫힘
    setOpen(false)
  })

  useEffect(() => {
    if (options.length && downPress) {
      setActiveIndex((prevState) => (prevState < options.length - 1 ? prevState + 1 : prevState))
    }
  }, [downPress])

  useEffect(() => {
    if (options.length && upPress) {
      setActiveIndex((prevState) => (prevState > 0 ? prevState - 1 : prevState))
    }
  }, [upPress])

  useEffect(() => {
    if (open && escPress) {
      setOpen(false)
    }
  }, [escPress])

  useEffect(() => {
    if (open && enterPress && searchedOptions[activeIndex]) {
      onChange([...value, searchedOptions[activeIndex].value])
      setOpen(false)
    }
  }, [enterPress])

  useEffect(() => {
    if (open) {
      setInputValue('')
      return
    }
  }, [open])

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
        <InputLabel size={size} withAsterisk={withAsterisk}>
          {label}
        </InputLabel>
      )}

      <Box
        tabIndex={-1}
        css={[
          {
            minHeight: theme.inputSize.height[size],
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            color: theme.colors.black.dark,
            cursor: 'pointer',
            borderRadius: theme.rounded.md,
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: theme.colors.gray.darker,
            padding: theme.spacingUtil(4, 0),
            '&:focus-within': {
              border: `1px solid ${theme.colors.blue.main}`,
            },
          },
          disabled && {
            cursor: 'not-allowed',
            backgroundColor: theme.colors.white.light,
            borderColor: theme.colors.gray.darker,
            color: theme.colors.gray.main,
          },
        ]}
        onClick={handleSelectClick}
      >
        <Box
          css={{
            display: 'flex',
            flex: 1,
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: 4,
            paddingLeft: theme.spacing.sm,
          }}
        >
          {value.map((item) => (
            <Chip
              key={item}
              onDelete={() => {
                onChange([...value.filter((_) => _ !== item)])
              }}
            >
              {options.find((option) => option.value === item)?.label}
            </Chip>
          ))}

          <InputBase
            ref={setInputRef}
            id={id}
            value={inputValue}
            readOnly={!open}
            disabled={disabled}
            onChange={(e) => {
              setInputValue(e.target.value)
            }}
            {...rest}
          />

          <InputBase
            ref={propRef}
            value={inputValue}
            hidden={true}
            readOnly={true}
            disabled={disabled}
            {...rest}
          />
        </Box>

        <Box css={{ width: 48, flexBasis: 48, display: 'flex', alignItems: 'center' }}>
          <IconAdornment
            onClick={(e) => {
              e.stopPropagation()
              onChange([])
            }}
          >
            <CloseIcon width={16} height={16} />
          </IconAdornment>

          <ArrowBottomSmallIcon color="currentColor" />
        </Box>

        {open && (
          <OptionContainer>
            {searchedOptions.map((option, index) => (
              <Option
                key={`key-${option.value}`}
                option={option}
                onMouseEnter={() => {
                  setActiveIndex(index)
                }}
                onMouseLeave={() => {
                  setActiveIndex(0)
                }}
                active={activeIndex === index}
                onClick={() => {
                  handleOptionClick(option.value)
                }}
              />
            ))}

            {searchedOptions.length === 0 && (
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

export const MultiSelect = forwardRef(_MultiSelect) as <T>(
  props: MultiSelectProps<T> & { ref?: ForwardedRef<HTMLInputElement> },
) => ReturnType<typeof _MultiSelect>
