import { useTheme } from '@emotion/react'

interface ClockPointerProps {
  value: number
}

export const ClockPointer = ({ value }: ClockPointerProps) => {
  const theme = useTheme()
  const getAngleStyle = (value: number) => {
    const max = 12
    const angle = (360 / max) * value

    return `rotateZ(${angle}deg)`
  }

  return (
    <div
      css={{
        width: 1,
        position: 'absolute',
        left: 'calc(50% - 0.5px)',
        transform: getAngleStyle(value),
        bottom: '50%',
        height: '45%',
        // https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin
        transformOrigin: 'center bottom 0px', // Transform 원점, 아래쪽 센터, 0px,
        pointerEvents: 'none',
        backgroundColor: theme.colors.blue.main,
      }}
    >
      <div
        css={{
          position: 'absolute',
          top: '-8px',
          left: '-9.5px',
          boxSizing: 'content-box',
          height: '4px',
          width: '4px',
          borderRadius: '9999px',
          border: `8px solid ${theme.colors.blue.main}`,
          backgroundColor: theme.colors.blue.main,
        }}
      />
    </div>
  )
}
