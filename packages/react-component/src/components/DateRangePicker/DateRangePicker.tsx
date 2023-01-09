import DatePicker, { ReactDatePickerProps } from 'react-datepicker'

import { useTheme } from '@emotion/react'
import { ko } from 'date-fns/locale'

import { InputHelper, InputLabel } from 'src/components'
import { Box } from 'src/elements'
import { Size } from 'src/types'

interface DateRangePickerProps extends Omit<ReactDatePickerProps, 'onChange'> {
  /**
   *
   */
  size?: Size
  /**
   *
   */
  label?: string
  /**
   *
   */
  required?: boolean
  /**
   *
   */
  error?: boolean
  /**
   *
   */
  disabled?: boolean
  /**
   *
   */
  helperText?: string
  /**
   *
   * @param date
   * @returns
   */
  onChange: (date: [Date | null, Date | null]) => void
}

const DATE_FORMAT = 'yyyy/MM/dd'

/**
 *
 */
export const DateRangePicker = ({
  size = 'md',
  label,
  required,
  error,
  disabled,
  helperText,
  onChange,
  ...rest
}: DateRangePickerProps) => {
  const theme = useTheme()
  return (
    <Box
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

      <DatePicker
        selectsRange={true}
        withPortal={true}
        disabled={disabled}
        dateFormat={DATE_FORMAT}
        locale={ko}
        css={[
          {
            boxSizing: 'border-box',
            width: '100%',
            height: theme.inputSize.height[size],
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: error ? theme.colors.red.main : theme.colors.gray.darker,
            borderRadius: theme.rounded.md,
            cursor: 'pointer',
            color: theme.colors.black.dark,
            fontSize: theme.inputSize.fontSize[size],
            padding: theme.spacingUtil(0, 'sm'),
            '&:focus-within': {
              borderColor: error ? theme.colors.red.main : theme.colors.blue.main,
              boxShadow: theme.shadow.md,
            },
            '&::placeholder': {
              color: theme.colors.gray.light,
            },
          },
          disabled && {
            backgroundColor: theme.colors.white.light,
            color: theme.colors.gray.main,
            cursor: 'not-allowed',
            borderColor: theme.colors.gray.main,
          },
        ]}
        onChange={onChange}
        {...rest}
      />

      {helperText && <InputHelper error={error}>{helperText}</InputHelper>}
    </Box>
  )
}