import classNames from 'classnames'

interface ClockPointerProps {
  value: number
}

export const ClockPointer = ({ value }: ClockPointerProps) => {
  const getAngleStyle = (value: number) => {
    const max = 12
    const angle = (360 / max) * value

    return `rotateZ(${angle}deg)`
  }

  return (
    <div
      style={{
        width: 1,
        position: 'absolute',
        left: 'calc(50% - 0.5px)',
        transform: getAngleStyle(value),
        bottom: '50%',
        height: '45%',
        // https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin
        transformOrigin: 'center bottom 0px', // Transform 원점, 아래쪽 센터, 0px
      }}
      className="pointer-events-none bg-[#036DB7]"
    >
      <div
        className={classNames(
          `absolute top-[-8px] left-[-9.5px] box-content h-[4px] w-[4px] rounded-full border-[8px] border-[#036DB7] !bg-[#036DB7]`,
        )}
      />
    </div>
  )
}
