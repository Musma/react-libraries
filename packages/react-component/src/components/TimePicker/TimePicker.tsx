import classNames from 'classnames'
import { DateTime } from 'luxon'
import { useEffect, useMemo, useRef, useState } from 'react'
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

  const toggleClock = (show: boolean) => {
    if (show) {
      setShowClock(true)
      return
    }
    setShowClock(false)
    setClockType('hour')
  }

  useEffect(() => {
    const handleClickOutside = (event: globalThis.MouseEvent) => {
      const target = event.target as HTMLDivElement
      if (ref && ref.current && !ref.current.contains(target)) {
        toggleClock(false)
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
    <div className="relative flex items-center" ref={ref}>
      {/* TODO: TextInput 완성되면 교체 필요 */}
      <div className={classNames('relative')}>
        <TextInput
          label={label}
          size={size}
          value={date.toFormat('HH:mm ')}
          readOnly={true}
          onClick={() => {
            toggleClock(true)
          }}
          placeholder="00:00"
        />
        <span
          className={classNames(
            'absolute right-2',
            { 'bottom-2': size === 'lg' },
            { 'bottom-[7px]': size === 'md' },
            { 'bottom-[5px]': size === 'sm' },
          )}
        >
          {size === 'lg' ? <LgClockIcon /> : <MdClockIcon />}
        </span>
      </div>

      {showClock && (
        <div
          className={classNames(
            'absolute top-[100%] z-10 mt-[4px] w-full rounded-md border border-[#BAC7D5] bg-white py-4 px-2',
          )}
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
