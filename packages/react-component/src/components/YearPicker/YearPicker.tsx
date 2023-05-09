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
   * @description
   * Input 위에 표시될 라벨입니다
   */
  label?: string
  /**
   * @optional
   * @type {boolean}
   * false이면, 사용하지 않습니다
   * || true이면, label 옆에 *가 표시됩니다
   *
   * @description
   * Input의 label에 표시될 *의 사용여부입니다
   */
  withAsterisk?: boolean
  /**
   * @optional
   * @type {string}
   *
   * @default md
   *
   * Input 높이
   * sm: 28
   * md: 32
   * lg: 36
   *
   * Input 폰트 사이즈
   * sm: 12,
   * md: 12,
   * lg: 14,
   *
   * @description
   * Input의 높이, Input의 폰트 사이즈입니다
   */
  size?: Size
  /**
   * @optional
   * @type {boolean}
   *
   * false이면, borderColor에 'red'가 적용됩니다
   * || true이면, borderColor에 'gray'가 적용됩니다
   *
   * @description
   * 에러 발생시 borderColor를 불린 값에 따라 변경합니다
   */
  error?: boolean
  /**
   * @optional
   *
   * @description
   * Input 밑에 나타나는 도움 글입니다
   * @description
   * default color는 'green'이며, error props의 값이 true이면, 'red'가 적용됩니다
   */
  helperText?: string
  /**
   * @optional
   * @type {string}
   *
   * @description
   * ISO 8601로된 날짜 정보입니다
   */
  value?: string | null
  /**
   * @optional
   * @type {{vertical: string}}
   *
   * @default { vertical: 'bottom' }
   *
   * { vertical: 'bottom' } | { vertical: 'top' }
   *
   * @description
   * Input을 클릭했을 때, 캘린더가 열릴 방향입니다
   *
   * TODO: 방향은 추후에 더 추가하겠습니다.
   */
  anchorOrigin?: {
    vertical: AnchorOriginVerticalTypes
  }
  /**
   * @required
   *
   * @description
   * 날짜 변경 이벤트입니다
   */
  onChange: (dateTime: string) => void
}

/**
 * @param InputHTMLAttributes(optional)
 * @param label(optional) Input 위에 표시될 라벨입니다
 * @param required(optional) Input의 label에 표시될 *의 사용여부입니다
 * @param size(optional) Input의 높이, Input의 폰트 사이즈입니다
 * @param error(optional) 에러 발생시 borderColor를 불린 값에 따라 변경합니다
 * @param helperText(optional) default color는 'green'이며, error props의 값이 true이면, 'red'가 적용됩니다
 * @param anchorOrigin(optional) Input을 클릭했을 때, 캘린더가 열릴 방향입니다
 * @param onChange(required) 날짜 변경 이벤트입니다
 * @example
 * <YearPicker
 *    anchorOrigin={{ vertical: 'top' }}
 *    value={value}
 *    onChange={onChange}
 * />
 *
 * @description
 * 년도를 선택하는 Picker입니다
 */
export const YearPicker = forwardRef<HTMLInputElement, YearPickerProps>(
  (
    {
      id = uniqueId(),
      label,
      withAsterisk,
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

    /**
     * @return string
     */
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
          <InputLabel size={size} withAsterisk={withAsterisk}>
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
