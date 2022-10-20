import { useCallback, useMemo, useRef, useState, useEffect } from 'react'

import { css, useTheme } from '@emotion/react'
import { DateTime } from 'luxon'

import { TextInput } from 'src/components'
import { ClockBody, ClockHeader, ClockType, getMeridiem } from 'src/components/TimePicker'
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
    <div css={containerCss} ref={ref}>
      <div css={{ position: 'relative', cursor: 'pointer' }} onClick={toggleShowClock}>
        <TextInput
          label={label}
          size={size}
          value={date.toFormat('HH:mm')}
          readOnly={true}
          placeholder="00:00"
          css={{ cursor: 'pointer' }}
        />
        <span css={[iconContainerCss.base, iconContainerCss.position[size]]}>
          {size === 'lg' ? <LgClockIcon /> : <MdClockIcon />}
        </span>
      </div>

      {showClock && (
        <div
          css={[
            clockContainer.base,
            clockContainer.width[size],
            {
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

const containerCss = css({ position: 'relative', display: 'flex', alignItems: 'center' })
const iconContainerCss = {
  base: css({ position: 'absolute', right: '8px' }),
  position: {
    lg: css({ bottom: '8px', height: '16px' }),
    md: css({ bottom: '7px', height: '14px' }),
    sm: css({ bottom: '5px', height: '14px' }),
  },
}
const clockContainer = {
  base: css({
    position: 'absolute',
    top: '100%',
    zIndex: 10,
    marginTop: '4px',
    borderRadius: '6px',
    padding: '16px 8px',
  }),
  width: {
    lg: css({ width: '200px' }),
    md: css({ width: '180px' }),
    sm: css({ width: '148px' }),
  },
}
