// import { useOutsideListener } from '@musma/react-utils'
import { DateTime } from 'luxon'
import { useEffect, useRef, useState } from 'react'

import useOutsideListener from './lib/useOutsideListener'

import { ClockBody, ClockHeader, ClockType, getMeridiem } from 'src/components'

interface TimePickerProps {
  date: DateTime
  onDateChange: (date: DateTime) => void
}

export const TimePicker = ({ date, onDateChange }: TimePickerProps) => {
  const [showClock, setShowClock] = useState(false)
  const [value, setValue] = useState(0)
  const [clockType, setClockType] = useState<ClockType>('hour')
  const ref = useRef<HTMLDivElement>(null)

  // FIXME: 버그 수정필요 다른데 눌러도 잘 안꺼짐
  useOutsideListener(ref, () => {
    if (showClock) {
      toggleClock(false)
    }
  })

  const toggleClock = (show: boolean) => {
    if (show) {
      setShowClock(true)
      return
    }
    setShowClock(false)
    setClockType('hour')
  }

  useEffect(() => {
    if (showClock) {
      const ampm = getMeridiem(date) === 'pm' ? 12 : 0
      const hour = Number(date.toFormat('HH')) - ampm
      setValue(hour)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showClock])

  return (
    <div className="relative inline-flex" ref={ref}>
      {/* TODO: TextInput 완성되면 교체 필요 */}
      <input
        readOnly={true}
        value={date.toFormat('HH:mm')}
        className="border"
        onClick={() => {
          setShowClock(!showClock)
        }}
      />

      {showClock && (
        <div className="absolute top-[100%] mt-[4px] w-[200px] rounded-md border border-[#BAC7D5] bg-white py-4 px-2">
          <ClockHeader
            date={date}
            clockType={clockType}
            onDateChange={(dateTime) => {
              onDateChange(dateTime)
            }}
            onClockTypeChange={(newClockType) => {
              setClockType(newClockType)
              // clockType 값이 바꾸면 그에따라 value의 값도 변경해줌
              // 시계 타입이 분 -> 시계로 변경
              if (newClockType === 'hour') {
                const ampm = getMeridiem(date) === 'pm' ? 12 : 0
                const hour = Number(date.toFormat('HH')) - ampm
                setValue(hour)
              }

              // 시계 타입이 시계 -> 분으로 변경
              if (newClockType === 'min') {
                const minute = Number(date.toFormat('mm')) / 5
                setValue(minute)
              }
            }}
          />

          <ClockBody
            date={date}
            value={value}
            clockType={clockType}
            onValueChange={(newValue) => {
              setValue(newValue)
              // value 값이 바뀌면 그에따라 date의 값도 변경해줌
              if (clockType === 'hour') {
                const ampm = getMeridiem(date) === 'pm' ? 12 : 0
                const dateTime = date.set({ hour: value + ampm })
                onDateChange(dateTime)
              }

              if (clockType === 'min') {
                const dateTime = date.set({ minute: value * 5 })
                onDateChange(dateTime)
              }
            }}
            onDateChange={(dateTime) => {
              onDateChange(dateTime)
            }}
          />
        </div>
      )}
    </div>
  )
}
