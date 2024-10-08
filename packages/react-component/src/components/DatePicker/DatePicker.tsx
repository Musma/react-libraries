import { forwardRef, InputHTMLAttributes, useMemo } from 'react'

import { useTheme } from '@emotion/react'
import { FillDateRangeIcon } from '@musma/react-icons'
import { uniqueId, useSetRef, useToggle } from '@musma/react-utils'
import { DateTime } from 'luxon'

import { InputLabel, InputHelper } from 'src/components'
import { Box, InputBase } from 'src/elements'
import { Size } from 'src/types'

import { Calendar, DATE_FORMAT } from './components'

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
  withAsterisk?: boolean
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
   * @optional
   *
   * Input 밑에 나타나는 도움 글
   */
  helperText?: string
  /**
   * @optional
   *
   * @default
   * ko
   *
   * 달력 언어 변경
   */
  locale?: string
  /**
   * @optional
   *
   * RangePicker 사용 옵션
   */
  selectRange?: boolean
  /**
   * @optional
   *
   * @type DateTime
   * 날짜 정보입니다
   */
  value?: string | null
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
   * TODO: 방향은 추후에 더 추가하겠습니다.
   */
  anchorOrigin?: {
    vertical: 'bottom' | 'top'
  }
  /**
   * @required
   *
   * 날짜 변경 이벤트
   */
  onChange: (dateTime: string) => void
}

export const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  (
    {
      id = uniqueId(),
      disabled,
      label,
      withAsterisk,
      size = 'md',
      error,
      helperText,
      locale,
      value,
      minDate,
      maxDate,
      anchorOrigin = {
        vertical: 'bottom',
      },
      onChange,
      ...rest
    },
    ref,
  ) => {
    const theme = useTheme()

    const inputValue = useMemo(() => {
      if (value) {
        const dateTime = DateTime.fromISO(value).toFormat(DATE_FORMAT)
        return dateTime
      }
      return ''
    }, [value])

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
          <InputLabel size={size} withAsterisk={withAsterisk}>
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
              color: theme.colors.black.dark,
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
              backgroundColor: theme.colors.white.light,
              borderColor: theme.colors.gray.darker,
              color: theme.colors.gray.main,
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
            value={inputValue}
            css={{
              userSelect: 'none',
            }}
            {...rest}
          />

          <FillDateRangeIcon {...theme.inputSize.iconSize[size]} color="currentColor" />
        </Box>

        {helperText && <InputHelper error={error}>{helperText}</InputHelper>}

        {showCalendar && (
          <Calendar
            inputRef={inputRef}
            locale={locale}
            value={value}
            minDate={minDate}
            maxDate={maxDate}
            anchorOrigin={anchorOrigin}
            onChange={onChange}
            onClose={() => toggleCalendar(false)}
          />
        )}
      </Box>
    )
  },
)

DatePicker.displayName = 'DatePicker'
