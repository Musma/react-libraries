import { css, useTheme } from '@emotion/react'

import { Typography } from 'src/components/Typography'

interface ClockNumberProps {
  label: string
  position: {
    x: number
    y: number
  }
  isSelected: boolean
}

export const ClockNumber = ({ label, position, isSelected }: ClockNumberProps) => {
  const theme = useTheme()
  return (
    <div css={[containerCss, css({ transform: `translate(${position.x}px, ${position.y}px)` })]}>
      <Typography type="caption2" css={isSelected ? css({ color: theme.color.white.main }) : ''}>
        {label}
      </Typography>
    </div>
  )
}

const containerCss = css({
  pointerEvents: 'none',
  position: 'absolute',
  left: 'calc((100% - 16px) / 2)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '16px',
  width: '16px',
  userSelect: 'none',
  borderRadius: '9999px',
})
