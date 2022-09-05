import { useTheme } from '@emotion/react'
import { css } from '@emotion/css'

export const ClockPin = () => {
  const theme = useTheme()
  return (
    <div
      className={css({
        position: 'absolute',
        top: '50%',
        left: '50%',
        height: '8px',
        width: '8px',
        transform: 'translate(-50%, -50%)',
        borderRadius: '9999px',
        backgroundColor: theme.color.blue.main,
      })}
    />
  )
}
