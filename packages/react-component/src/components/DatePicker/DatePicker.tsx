import { forwardRef, InputHTMLAttributes } from 'react'

import { useTheme } from '@emotion/react'
import { FillCalendarIcon } from '@musma/react-icons'
import { uniqueId, useSetRef, useToggle } from '@musma/react-utils'
import { DateTime } from 'luxon'

import { InputLabel, InputHelper } from 'src/components'
import { Box, InputBase } from 'src/elements'
import { Size } from 'src/types'

import { Calendar } from './components'

export const DATE_FORMAT = 'yyyy/MM/dd'
interface DatePickerProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'size'> {
  /**
   * @optional
   *
   * 라벨
   */
  label?: string
  /**
   * @optional
   *
   * 라벨 옵션으로 필수인지
   */
  required?: boolean
  /**
   * @default md
   *
   * sm: 28
   * md: 32
   * lg; 36
   */
  size?: Size
  /**
   * @optional
   *
   * 에러 발생 여부
   */
  error?: boolean
  /**
   * @optinoal
   *
   * Input 밑에 나타나는 도움 글
   */
  helperText?: string
  /**
   * @required
   *
   * @type DateTime
   * 날짜 정보입니다
   */
  value: DateTime
  /**
   * @optional
   *
   * minDate 이전의 날짜 선택할 수 없게함
   */

  minDate?: DateTime
  /**
   * maxDate 이후의 날짜를 선택할 수 없게함
   */
  maxDate?: DateTime
  /**
   * @required
   *
   * 날짜 변경 이벤트
   */
  onChange: (dateTime: DateTime) => void
}

export const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  (
    {
      id = uniqueId(),
      label,
      required,
      size = 'md',
      error,
      helperText,
      disabled,
      minDate,
      maxDate,
      value,
      onChange,
      ...rest
    },
    ref,
  ) => {
    const theme = useTheme()

    const [inputRef, setInputRef] = useSetRef()
    const [showCalendar, toggleCalendar] = useToggle()

    return (
      <Box
        ref={setInputRef}
        css={{
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          width: '100%',
          minWidth: theme.inputSize.minWidth,
        }}
      >
        {/* 라벨 */}
        {label && (
          <InputLabel size={size} required={required}>
            {label}
          </InputLabel>
        )}

        {/* Input */}
        <Box
          css={[
            // Base CSS
            {
              display: 'flex',
              alignItems: 'center',
              position: 'relative',
              cursor: 'pointer',
              backgroundColor: theme.colors.white.main,
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: error ? theme.colors.red.main : theme.colors.gray.darker,
              borderRadius: theme.rounded.md,
              paddingLeft: theme.spacing.sm,
              paddingRight: theme.spacing.sm,
              overflow: 'hidden',
              fontSize: theme.inputSize.fontSize[size],
              height: theme.inputSize.height[size],
              '&:focus-within': {
                borderColor: error ? theme.colors.red.main : theme.colors.blue.main,
                boxShadow: theme.shadow.md,
              },
            },
            // Disabled CSS
            disabled && {
              cursor: 'not-allowed',
              borderColor: theme.colors.white.darker,
            },
          ]}
          onClick={() => {
            if (!disabled) {
              toggleCalendar(true)
            }
          }}
        >
          {/* Input */}
          <InputBase
            id={id}
            ref={ref}
            disabled={disabled}
            readOnly={true}
            value={value.toFormat(DATE_FORMAT)}
            css={{
              flex: 1,
              width: '100%',
              height: '100%',
              userSelect: 'none',
              paddingLeft: 0,
              paddingRight: 0,
              cursor: 'inherit',
              '&:disabled': {
                backgroundColor: theme.colors.transparent,
              },
            }}
            {...rest}
          />

          <FillCalendarIcon width={16} height={16} />
        </Box>

        {helperText && <InputHelper error={error}>{helperText}</InputHelper>}

        {showCalendar && (
          <Calendar
            value={value}
            inputRef={inputRef}
            minDate={minDate}
            maxDate={maxDate}
            onChange={onChange}
            onClose={() => {
              toggleCalendar(false)
            }}
          />
        )}
      </Box>
    )
  },
)

DatePicker.displayName = 'DatePicker'
