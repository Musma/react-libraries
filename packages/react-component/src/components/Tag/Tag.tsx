import { CSSProperties, useMemo } from 'react'

import { css, useTheme } from '@emotion/react'

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
  labelStyle?: CSSProperties
}

export const Tag = ({
  onClose,
  size = 'md',
  color = 'white',
  variant = 'stadium',
  label,
  className = '',
  labelStyle,
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
      css={[tagBase, sizeCss[size], colorCss.container[color], variantCss[variant]]}
      className={className}
    >
      {
        //label을 Typography컴포넌트의 caption타입(p태그)으로 감쌌으나 label에 ReactNode가 올 경우(특히 div), warnning이 떠서 div 태그로 바꿨습니다.
      }
      <div
        css={[
          size === 'lg' ? labelCss.caption1 : labelCss.caption2,
          colorCss.text[color],
          css({ ...labelStyle }),
        ]}
      >
        {label}
      </div>
      {onClose && (
        <CloseIcon
          onClick={() => onClose(label)}
          css={css({ marginLeft: '4px', cursor: 'pointer' })}
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

const labelCss = {
  caption1: css({
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '16px',
    margin: 0,
  }),
  caption2: css({
    fontSize: '10px',
    fontWeight: 400,
    lineHeight: '14px',
    margin: 0,
  }),
}
