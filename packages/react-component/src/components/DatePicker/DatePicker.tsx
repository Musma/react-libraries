import { forwardRef, InputHTMLAttributes, useMemo } from 'react'

import { useTheme } from '@emotion/react'
import { FillDateRangeIcon } from '@musma/react-icons'
import { uniqueId, useSetRef, useToggle } from '@musma/react-utils'
import { DateTime } from 'luxon'

import { InputLabel, InputHelper } from 'src/components'
import { Box, InputBase } from 'src/elements'
import { Size } from 'src/types'

import { Calendar, DATE_FORMAT, RangeCalendar } from './components'

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
  i18n?: string
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
  value?: DateTime | null
  /**
   * @optional
   *
   * 시작일
   */
  startDate?: DateTime | null
  /**
   * @optional
   *
   * 종료일
   */
  endDate?: DateTime | null
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
  onChange: ((dateTime: DateTime) => void) &
    ((dateTime: [DateTime | null, DateTime | null]) => void)
}

export const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  (
    {
      id = uniqueId(),
      disabled,
      label,
      required,
      size = 'md',
      error,
      helperText,
      i18n,
      selectRange = false,
      value,
      startDate,
      endDate,
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

    const [inputRef, setInputRef] = useSetRef()
    const [showCalendar, toggleCalendar] = useToggle()

    /**
     * @description
     * Input에 표시될 value
     */
    const inputValue = useMemo(() => {
      /**
       * DatePicker 기본타입에 selectRange 값을 전달했을 때, 에러 코드
       */
      if (selectRange && value) {
        throw new Error('value의 데이터 타입이 틀립니다.')
      }

      if (selectRange) {
        if (startDate && !endDate) {
          return `${startDate.toFormat(DATE_FORMAT)} ~`
        }

        if (!startDate && endDate) {
          return `~ ${endDate.toFormat(DATE_FORMAT)}`
        }

        if (startDate && endDate) {
          return `${startDate.toFormat(DATE_FORMAT)} ~ ${endDate.toFormat(DATE_FORMAT)}`
        }
        return ''
      }

      if (value) {
        return value.toFormat(DATE_FORMAT)
      }

      return
    }, [selectRange, value, startDate, endDate])

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
              backgroundColor: theme.colors.white.light,
              color: theme.colors.gray.main,
              cursor: 'not-allowed',
              borderColor: theme.colors.gray.main,
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
              flex: 1,
              width: '100%',
              height: '100%',
              userSelect: 'none',
              paddingLeft: 0,
              paddingRight: 0,
              cursor: 'inherit',
              color: 'inherit',
              '&:disabled': {
                backgroundColor: theme.colors.white.light,
              },
              '&::placeholder': {
                color: theme.colors.gray.light,
              },
            }}
            {...rest}
          />

          <FillDateRangeIcon {...theme.inputSize.iconSize[size]} color="currentColor" />
        </Box>

        {helperText && <InputHelper error={error}>{helperText}</InputHelper>}

        {selectRange
          ? showCalendar && (
              <RangeCalendar
                inputRef={inputRef}
                i18n={i18n}
                startDate={startDate}
                endDate={endDate}
                minDate={minDate}
                maxDate={maxDate}
                anchorOrigin={anchorOrigin}
                onChange={onChange}
                onClose={() => toggleCalendar(false)}
              />
            )
          : showCalendar && (
              <Calendar
                inputRef={inputRef}
                i18n={i18n}
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
