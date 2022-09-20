import { HTMLAttributes } from 'react'

import { css, cx } from '@emotion/css'
import { useTheme } from '@emotion/react'

interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  orientation?: 'horizontal' | 'vertical'
}

export const Divider = ({ orientation = 'horizontal', className, ...rest }: DividerProps) => {
  const theme = useTheme()
  return (
    <hr
      className={cx(
        css({ border: 0 }),
        {
          [css({ width: '100%', borderTop: `1px solid ${theme.color.gray.lighter}` })]:
            orientation === 'horizontal',
        },
        {
          [css({
            height: '100%',
            width: '1px',
            borderRight: `1px solid ${theme.color.gray.lighter}`,
          })]: orientation === 'vertical',
        },
        className,
      )}
      {...rest}
    />
  )
}
