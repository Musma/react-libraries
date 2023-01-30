import { forwardRef, InputHTMLAttributes, useState } from 'react'

import { useTheme } from '@emotion/react'
import { FillDateRangeIcon } from '@musma/react-icons'
import { uniqueId, useSetRef, useToggle } from '@musma/react-utils'
import { DateTime } from 'luxon'

import { InputLabel, InputHelper, DATE_FORMAT } from 'src/components'
import { Box, InputBase } from 'src/elements'
import { Size } from 'src/types'

import { RangeCalendar } from './components'

interface DateRangePickerProps
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
  startDate: DateTime | null
  endDate: DateTime | null
}

export const DateRangePicker = forwardRef<HTMLInputElement, DateRangePickerProps>(
  (
    {
      id = uniqueId(),
      label,
      required,
      size = 'md',
      error,
      helperText,
      disabled,
      anchorOrigin = {
        vertical: 'bottom',
      },
      startDate,
      endDate,
      ...rest
    },
    ref,
  ) => {
    const theme = useTheme()

    const [inputRef, setInputRef] = useSetRef()
    const [showCalendar, toggleCalendar] = useToggle()

    const [calendarStartDate, setCalendarStartDate] = useState(startDate)
    const [calendarEndDate, setCalendarEndDate] = useState(endDate)

    const dateTimeValue = () => {
      if (!calendarStartDate && !calendarEndDate) {
        new Error('error')
      }

      if (!calendarStartDate && calendarEndDate) {
        return calendarEndDate.toFormat(DATE_FORMAT)
      }

      if (calendarStartDate && !calendarEndDate) {
        return calendarStartDate.toFormat(DATE_FORMAT)
      }

      return `${calendarStartDate && calendarStartDate.toFormat(DATE_FORMAT)} ~ ${
        calendarEndDate && calendarEndDate.toFormat(DATE_FORMAT)
      }`
    }

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
            value={dateTimeValue()}
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

        {showCalendar && (
          <RangeCalendar
            calendarStartDate={calendarStartDate}
            calendarEndDate={calendarEndDate}
            inputRef={inputRef}
            anchorOrigin={anchorOrigin}
            onClose={() => {
              toggleCalendar(false)
            }}
            setCalendarStartDate={setCalendarStartDate}
            setCalendarEndDate={setCalendarEndDate}
          />
        )}
      </Box>
    )
  },
)

DateRangePicker.displayName = 'DateRangePicker'
