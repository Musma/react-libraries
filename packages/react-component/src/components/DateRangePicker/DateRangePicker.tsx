import { forwardRef } from 'react'
import DatePicker, { ReactDatePicker, ReactDatePickerProps } from 'react-datepicker'

import { useTheme } from '@emotion/react'
import { FillDateRangeIcon } from '@musma/react-icons'
import { ko } from 'date-fns/locale'

import 'react-datepicker/dist/react-datepicker.css'

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
export const DateRangePicker = forwardRef<ReactDatePicker, DateRangePickerProps>(
  (
    { size = 'md', label, required, error, disabled, helperText, className, onChange, ...rest },
    ref,
  ) => {
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
        className={className}
      >
        {/* 라벨 */}
        {label && (
          <InputLabel size={size} required={required}>
            {label}
          </InputLabel>
        )}

        <Box css={{ position: 'relative' }}>
          <DatePicker
            ref={ref}
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

          <FillDateRangeIcon
            css={{
              pointerEvents: 'none',
              position: 'absolute',
              right: theme.spacing.sm,
              top: 0,
              bottom: 0,
              marginTop: 'auto',
              marginBottom: 'auto',
            }}
            {...theme.inputSize.iconSize[size]}
          />
        </Box>

        {helperText && <InputHelper error={error}>{helperText}</InputHelper>}
      </Box>
    )
  },
)

DateRangePicker.displayName = 'DateRangePicker'
