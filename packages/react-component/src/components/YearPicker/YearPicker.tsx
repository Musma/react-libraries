import { forwardRef, InputHTMLAttributes, useMemo } from 'react'

import { useTheme } from '@emotion/react'
import { FillDateRangeIcon } from '@musma/react-icons'
import { DateFormat, uniqueId, useSetRef, useToggle } from '@musma/react-utils'
import { DateTime } from 'luxon'

import { Box, InputBase } from 'src/elements'
import { InputLabel, InputHelper } from 'src/index'
import { Size } from 'src/types'

import { YearCalendar } from './components'

export type AnchorOriginVerticalTypes = 'top' | 'bottom'

interface YearPickerProps
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
   * @type DateTime
   * 날짜 정보입니다
   */
  value?: string | null
  /**
   * TODO: 방향은 추후에 더 추가하겠습니다.
   */
  anchorOrigin?: {
    vertical: AnchorOriginVerticalTypes
  }
  /**
   * @required
   *
   * 날짜 변경 이벤트
   */
  onChange: (dateTime: string) => void
}

export const YearPicker = forwardRef<HTMLInputElement, YearPickerProps>(
  (
    {
      id = uniqueId(),
      label,
      required,
      size = 'md',
      error,
      helperText,
      value,
      anchorOrigin = {
        vertical: 'bottom',
      },
      disabled,
      onChange,
      ...rest
    },
    ref,
  ) => {
    const theme = useTheme()
    const [inputRef, setInputRef] = useSetRef()
    const [showCalendar, toggleCalendar] = useToggle()

    const inputValue = useMemo(() => {
      if (value) {
        const dateTime = DateTime.fromISO(value).toFormat(DateFormat.Year)
        return dateTime
      }
      return ''
    }, [value])

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

        {/* 인풋 */}
        <Box
          css={[
            // Base CSS
            {
              display: 'flex',
              alignItems: 'center',
              position: 'relative',
              height: theme.inputSize.height[size],
              backgroundColor: theme.colors.white.main,
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: error ? theme.colors.red.main : theme.colors.gray.darker,
              borderRadius: theme.rounded.md,
              paddingLeft: theme.spacing.sm,
              paddingRight: theme.spacing.sm,
              color: theme.colors.black.dark,
              fontSize: theme.inputSize.fontSize[size],
              overflow: 'hidden',
              cursor: 'pointer',
              '&:focus-within': {
                borderColor: error ? theme.colors.red.main : theme.colors.blue.main,
              },
            },
            // Disabled CSS
            disabled && {
              borderColor: theme.colors.gray.main,
              backgroundColor: theme.colors.white.light,
              color: theme.colors.gray.main,
              cursor: 'not-allowed',
            },
          ]}
          onClick={() => {
            if (!disabled) {
              toggleCalendar(true)
            }
          }}
        >
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

        {/* 헬퍼텍스트 */}
        {helperText && <InputHelper error={error}>{helperText}</InputHelper>}

        {/* 년도 캘린더 */}
        {showCalendar && (
          <YearCalendar
            inputRef={inputRef}
            value={value}
            anchorOrigin={anchorOrigin}
            onChange={onChange}
            onClose={() => toggleCalendar(false)}
          />
        )}
      </Box>
    )
  },
)

YearPicker.displayName = 'YearPicker'
