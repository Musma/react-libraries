import { DateTime } from 'luxon'

import {
  HourClock,
  MinuteClock,
  ClockPin,
  ClockPointer,
  ClockType,
  getValue,
  getMeridiem,
} from 'src/components'

interface ClockProps {
  clockType: ClockType
  date: DateTime
  value: number
  onDateChange: (dateTime: DateTime) => void
}

export const ClockBody = ({ clockType, date, value, onDateChange }: ClockProps) => {
  const setTime = (e: MouseEvent) => {
    const { offsetX, offsetY } = e
    const value = getValue(offsetX, offsetY)

    if (clockType === 'hour') {
      const ampm = getMeridiem(date) === 'pm' ? 12 : 0
      const dateTime = date.set({ hour: value + ampm })
      onDateChange(dateTime)
    }

    if (clockType === 'min') {
      const dateTime = date.set({ minute: value * 5 })
      onDateChange(dateTime)
    }
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // 마우스 왼쪽 버튼을 누르고 있을 경우 체크
    const isButtonPressed = e.buttons === 1

    if (isButtonPressed) {
      setTime(e.nativeEvent)
    }
  }

  // 마우스 왼쪽 버튼을 누르고 있다가 뗐을 경우
  const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
    setTime(e.nativeEvent)
  }

  return (
    <div className="relative flex items-center justify-center">
      <div className="pointer-events-none relative h-[144px] w-[144px] bg-[#F9FAFB] rounded-full ">
        {/* 시계 div 하위에 있는 엘리먼트들의 pointer-events 속성을 none으로 하지 않으면 offset 값을 정상적으로 받지 못함 */}
        <div
          role="menu"
          tabIndex={-1}
          className="pointer-events-auto absolute h-full w-full touch-none select-none outline-none active:cursor-move"
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          {/* 시계 중심의 작은 핀 */}
          <ClockPin />

          {/* 시계 중심을 기준으로 돌아가는 포인터 */}
          <ClockPointer value={value} />

          {/* ClockType 값에 따라 시간 시계, 분 시계를 렌더링합니다. */}
          {clockType === 'hour' ? <HourClock date={date} /> : <MinuteClock date={date} />}
        </div>
      </div>
    </div>
  )
}
