import { useMemo } from 'react'

import { css, cx } from '@emotion/css'
import { useTheme } from '@emotion/react'

import { Typography } from 'src/components'
import { Size } from 'src/types'

import { ReactComponent as CloseIcon } from './images/close.svg' // import 순서 및 정렬해주세요.

interface TagProps {
  /**
   * onClose를 사용할 경우, useTags 훅과 함께 사용하세요
   */
  onClose?: (label: string) => void
  size?: Size
  color?: 'white' | 'blue'
  variant?: 'rectangle' | 'stadium'
  label: string
  className?: string
}

export const Tag = ({
  onClose,
  size = 'md',
  color = 'white',
  variant = 'stadium',
  label,
  className = '',
}: TagProps) => {
  const theme = useTheme()

  const colorCss = useMemo(() => {
    return {
      container: {
        white: css({
          backgroundColor: theme.color.white.light,
          borderColor: theme.color.gray.darker,
        }),
        blue: css({
          backgroundColor: `${theme.color.blue.main}33`,
          borderColor: theme.color.blue.main,
        }),
      },
      text: {
        white: css({ color: theme.color.black.main }),
        blue: css({ color: theme.color.blue.main }),
      },
    }
  }, [theme])

  return (
    <div
      className={cx(
        tagBase,
        sizeCss[size],
        colorCss.container[color],
        variantCss[variant],
        className,
      )}
    >
      <Typography type={size === 'lg' ? 'caption1' : 'caption2'} className={colorCss.text[color]}>
        {label}
      </Typography>
      {onClose && (
        <CloseIcon
          onClick={() => onClose(label)}
          className={css({ marginLeft: '4px', cursor: 'pointer' })}
          fill={color === 'white' ? theme.color.black.main : theme.color.blue.main}
        />
      )}
    </div>
  )
}

const tagBase = css({
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
})

const sizeCss = {
  sm: css({
    padding: '0 2px',
    height: '14px',
  }),
  md: css({
    padding: '2px 4px',
    height: '18px',
  }),
  lg: css({
    padding: '4px 8px',
    height: '24px',
  }),
}

const variantCss = {
  stadium: css({ borderWidth: '1px', borderStyle: 'solid', borderRadius: '100px' }),
  rectangle: css({ border: '1px solid transparent', borderRadius: '2px' }),
}
