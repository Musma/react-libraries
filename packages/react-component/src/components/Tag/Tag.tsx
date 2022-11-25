import { useMemo } from 'react'

import { css, useTheme } from '@emotion/react'
import { FillCloseCircleIcon } from '@musma/react-icons'

import { Typography } from 'src/components'
import { Size } from 'src/types'

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
          backgroundColor: theme.colors.white.light,
          borderColor: theme.colors.gray.darker,
        }),
        blue: css({
          backgroundColor: `${theme.colors.blue.main}33`,
          borderColor: theme.colors.blue.main,
        }),
      },
      text: {
        white: css({ color: theme.colors.black.main }),
        blue: css({ color: theme.colors.blue.main }),
      },
    }
  }, [theme])

  return (
    <div
      css={[tagBase, sizeCss[size], colorCss.container[color], variantCss[variant]]}
      className={className}
    >
      <Typography type={size === 'lg' ? 'caption1' : 'caption2'} css={colorCss.text[color]}>
        {label}
      </Typography>

      {onClose && (
        <FillCloseCircleIcon
          width={12}
          height={12}
          onClick={() => onClose(label)}
          css={{ marginLeft: 4, cursor: 'pointer' }}
          color={color === 'white' ? theme.colors.black.main : theme.colors.blue.main}
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
