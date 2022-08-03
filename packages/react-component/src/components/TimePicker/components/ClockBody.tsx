import classNames from 'classnames'
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
import { Sizes } from 'src/types'

interface ClockProps {
  size: Sizes
  clockType: ClockType
  date: DateTime
  value: number
  onDateChange: (dateTime: DateTime) => void
}

export const ClockBody = ({ size, clockType, date, value, onDateChange }: ClockProps) => {
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
      console.log('여기1: ', e.nativeEvent)
      setTime(e.nativeEvent)
    }
  }

  // 마우스 왼쪽 버튼을 누르고 있다가 뗐을 경우
  const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log('여기2:', e.nativeEvent)
    setTime(e.nativeEvent)
  }

  return (
    <div className="relative flex items-center justify-center">
      <div
        className={classNames(
          'pointer-events-none relative rounded-full bg-[#F9FAFB]',
          { 'h-[144px] w-[144px]': size !== 'sm' },
          { 'h-[100px] w-[100px]': size === 'sm' },
        )}
      >
        {/* 시계 div 하위에 있는 엘리먼트들의 pointer-events 속성을 none으로 하지 않으면 offset 값을 정상적으로 받지 못함 */}
        <div
          role="menu"
          tabIndex={-1}
          className="pointer-events-auto absolute h-full w-full touch-none select-none bg-orange-400 outline-none  active:cursor-move"
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          {/* 시계 중심의 작은 핀 */}
          <ClockPin />

          {/* 시계 중심을 기준으로 돌아가는 포인터 */}
          <ClockPointer value={value} />

          {/* ClockType 값에 따라 시간 시계, 분 시계를 렌더링합니다. */}
          {clockType === 'hour' ? (
            <HourClock size={size} date={date} />
          ) : (
            <MinuteClock size={size} date={date} />
          )}
        </div>
      </div>
    </div>
  )
}
