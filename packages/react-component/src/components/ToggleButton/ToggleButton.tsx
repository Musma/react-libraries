import { useMemo } from 'react'

import { css, useTheme } from '@emotion/react'

import { Size } from 'src/types'

interface ToggleButtonProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: Size
}

export const ToggleButton = ({ size = 'lg', disabled, ...rest }: ToggleButtonProps) => {
  const theme = useTheme()

  const colorCss = useMemo(() => {
    return {
      active: css({
        backgroundColor: theme.color.gray.main,
        '&:checked': {
          backgroundColor: theme.color.green.main,
        },
        '&::before': {
          backgroundColor: theme.color.white.main,
        },
      }),
      disabled: css({
        backgroundColor: theme.color.white.light,
        '&::before': {
          backgroundColor: theme.color.gray.main,
        },
      }),
    }
  }, [theme])

  return (
    <label css={containerCss}>
      <input
        type="checkbox"
        css={[
          inputCss.base,
          inputCss.size[size],
          disabled
            ? colorCss.disabled
            : [inputCss.animation.base, inputCss.animation.position[size], colorCss.active],
        ]}
        disabled={disabled}
        {...rest}
      />
    </label>
  )
}

const containerCss = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '24px',
  width: '24px',
})
const inputCss = {
  base: css({
    appearance: 'none',
    borderRadius: '10px',
    '&::before': { display: 'block', borderRadius: '9999px', content: '""' },
  }),
  size: {
    lg: css({
      width: '24px',
      height: '13.2px',
      '&::before': { marginLeft: '1.8px', marginTop: '1.8px', height: '9.6px', width: '9.6px' },
    }),
    md: css({
      width: '16px',
      height: '8px',
      '&::before': { marginLeft: '1px', marginTop: '1px', height: '6px', width: '6px' },
    }),
    sm: css({
      width: '14px',
      height: '7.7px',
      '&::before': { marginLeft: '1.05px', marginTop: '1px', height: '5.6px', width: '5.6px' },
    }),
  },
  animation: {
    base: css({
      '&::before': {
        transitionProperty: 'transform',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        transitionDuration: '150ms',
      },
    }),
    position: {
      lg: css({ '&:checked::before': { transform: 'translate(10.79px)' } }),
      md: css({ '&:checked::before': { transform: 'translate(8px)' } }),
      sm: css({ '&:checked::before': { transform: 'translate(6px)' } }),
    },
  },
}
