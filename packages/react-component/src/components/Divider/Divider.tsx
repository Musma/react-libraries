import { HTMLAttributes } from 'react'

import { useTheme } from '@emotion/react'

import { Size } from 'src/types'

interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  /**
   * Divider 방향
   */
  orientation?: 'horizontal' | 'vertical'
  /**
   * @optional
   * sm: 8
   * md: 16
   * lg: 24
   */
  margin?: Size
}

/**
 * 구분선
 */
export const Divider = ({ orientation = 'horizontal', margin, ...rest }: DividerProps) => {
  const theme = useTheme()
  return (
    <hr
      css={[
        { border: 0 },
        orientation === 'horizontal' && {
          width: '100%',
          borderTop: `1px solid ${theme.colors.gray.lighter}`,
          marginTop: margin ? theme.spacing[margin] : 0,
          marginBottom: margin ? theme.spacing[margin] : 0,
        },
        orientation === 'vertical' && {
          width: 1,
          height: 'auto',
          alignSelf: 'stretch',
          borderRight: `1px solid ${theme.colors.gray.lighter}`,
          marginLeft: margin ? theme.spacing[margin] : 0,
          marginRight: margin ? theme.spacing[margin] : 0,
          marginTop: 0,
          marginBottom: 0,
        },
      ]}
      {...rest}
    />
  )
}
