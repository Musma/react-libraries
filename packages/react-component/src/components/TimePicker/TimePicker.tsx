import { useCallback, useMemo, useRef, useState, useEffect } from 'react'

import { useTheme } from '@emotion/react'
import { DateTime } from 'luxon'

import { ClockBody, ClockHeader, ClockType, getMeridiem, TextInput } from 'src/components'
import { Size } from 'src/types'

import { ReactComponent as LgClockIcon } from './images/clock_large.svg'
import { ReactComponent as MdClockIcon } from './images/clock_md,sm.svg'

interface TimePickerProps {
  label: string
  size?: Size
  date: DateTime
  onDateChange: (date: DateTime) => void
}

export const TimePicker = ({ label, size = 'lg', date, onDateChange }: TimePickerProps) => {
  const theme = useTheme()
  const [showClock, setShowClock] = useState(false)
  const [clockType, setClockType] = useState<ClockType>('hour')
  const ref = useRef<HTMLDivElement>(null)

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
    setShowClock((prev) => !prev)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: globalThis.MouseEvent) => {
      const target = event.target as HTMLDivElement
      if (ref && ref.current && !ref.current.contains(target)) {
        setShowClock(false)
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
    <div css={{ position: 'relative', display: 'flex', alignItems: 'center' }} ref={ref}>
      <div css={{ position: 'relative', cursor: 'pointer' }} onClick={toggleShowClock}>
        <TextInput
          label={label}
          size={size}
          value={date.toFormat('HH:mm')}
          readOnly={true}
          placeholder="00:00"
          css={{ cursor: 'pointer' }}
        />

        <span
          css={[
            { position: 'absolute', right: '8px' },
            size === 'sm' && { bottom: 8, height: 14 },
            size === 'md' && { bottom: 10, height: 14 },
            size === 'lg' && { bottom: 20, height: 10 },
          ]}
        >
          {size === 'lg' ? <LgClockIcon /> : <MdClockIcon />}
        </span>
      </div>

      {showClock && (
        <div
          css={[
            {
              position: 'absolute',
              top: '100%',
              zIndex: 10,
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
        </div>
      )}
    </div>
  )
}
