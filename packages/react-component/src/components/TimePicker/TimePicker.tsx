import {
  useCallback,
  useMemo,
  useRef,
  useState,
  useEffect,
  InputHTMLAttributes,
  forwardRef,
} from 'react'

import { useTheme } from '@emotion/react'
import { FillTimeIcon } from '@musma/react-icons'
import { DateTime } from 'luxon'

import {
  Box,
  ClockBody,
  ClockHeader,
  ClockType,
  getMeridiem,
  IconAdornment,
  InputBase,
  Typography,
} from 'src/components'
import { Size } from 'src/types'

interface TimePickerProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label: string
  size?: Size
  date: DateTime
  error?: boolean
  onDateChange: (date: DateTime) => void
}

export const TimePicker = forwardRef<HTMLInputElement, TimePickerProps>(
  ({ label, size = 'md', date, disabled, error, onDateChange, ...rest }, ref) => {
    const theme = useTheme()
    const [show, setShow] = useState(false)
    const [clockType, setClockType] = useState<ClockType>('hour')
    const containerRef = useRef<HTMLDivElement>(null)

    const value = useMemo(() => {
      if (clockType === 'hour') {
        const ampm = getMeridiem(date) === 'pm' ? 12 : 0
        const hour = Number(date.toFormat('HH')) - ampm
        return hour
      }

      // 시계 타입이 시계 -> 분으로 변경
      if (clockType === 'min') {
        const minute = Number(date.toFormat('mm')) / 5
        return minute
      }

      return 0
    }, [date, clockType])

    const toggleShowClock = useCallback(() => {
      setShow((prev) => !prev)
    }, [])

    useEffect(() => {
      const handleClickOutside = (event: globalThis.MouseEvent) => {
        const target = event.target as HTMLDivElement
        if (containerRef && containerRef.current && !containerRef.current.contains(target)) {
          setShow(false)
        }
      }

      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside)
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref])

    return (
      <Box
        css={{ display: 'flex', flexDirection: 'column', width: '100%', minWidth: 64 }}
        ref={containerRef}
      >
        {/* 라벨 */}
        {label && <Typography type={size === 'lg' ? 'subTitle2' : 'subTitle3'}>{label}</Typography>}

        <Box
          css={[
            // Base CSS
            {
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              backgroundColor: theme.colors.white.main,
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: error ? theme.colors.red.main : theme.colors.gray.darker,
              borderRadius: theme.rounded.md,
              paddingLeft: theme.spacing.sm,
              paddingRight: theme.spacing.sm,
              overflow: 'hidden',
              boxSizing: 'border-box',
              '&:focus-within': {
                borderColor: error ? theme.colors.red.main : theme.colors.blue.main,
                boxShadow: theme.shadow.md,
              },
            },
            size === 'sm' && {
              fontSize: 12,
              height: theme.inputSize.sm,
            },
            size === 'md' && {
              fontSize: 12,
              height: theme.inputSize.md,
            },
            size === 'lg' && {
              fontSize: 14,
              height: theme.inputSize.lg,
            },
            // Disabled CSS
            disabled && {
              cursor: 'not-allowed',
              borderColor: theme.colors.white.darker,
            },
          ]}
        >
          {/* Input */}
          {/* Readonly로 값을 읽어서 보여주기만 합니다. */}
          <InputBase
            ref={ref}
            css={{
              flex: 1,
              height: '100%',
              paddingLeft: 0,
              paddingRight: 0,
              '&:disabled': {
                backgroundColor: theme.colors.transparent,
                cursor: 'inherit',
              },
              '&::placeholder': {
                color: theme.colors.gray.light,
              },
            }}
            readOnly={true}
            disabled={disabled}
            {...rest}
          />

          <IconAdornment css={[]}>
            <FillTimeIcon width={16} height={16} />
          </IconAdornment>

          {show && (
            <Box
              css={[
                {
                  position: 'absolute',
                  top: '100%',
                  zIndex: theme.zIndex.navBar + 1,
                  marginTop: 4,
                  borderRadius: 6,
                  padding: '16px 8px',
                  backgroundColor: theme.colors.white.main,
                  border: `1px solid ${theme.colors.gray.darker}`,
                },
              ]}
            >
              <ClockHeader
                size={size}
                date={date}
                clockType={clockType}
                onDateChange={(dateTime) => {
                  onDateChange(dateTime)
                }}
                onClockTypeChange={(newClockType) => {
                  setClockType(newClockType)
                }}
              />

              <ClockBody
                date={date}
                value={value}
                clockType={clockType}
                onDateChange={(dateTime) => {
                  onDateChange(dateTime)
                }}
              />
            </Box>
          )}
        </Box>
      </Box>
    )
  },
)

TimePicker.displayName = 'TimePicker'
