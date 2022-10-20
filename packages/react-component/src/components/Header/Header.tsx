import { HTMLAttributes } from 'react'

import { useTheme } from '@emotion/react'

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
  zIndex?: number
  backgroundColor?: string
}

export const Header = ({ zIndex, backgroundColor, ...rest }: HeaderProps) => {
  const theme = useTheme()
  return (
    <header
      css={{
        zIndex: zIndex,
        backgroundColor: backgroundColor || theme.colors.white.main,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: theme.layoutSize.headerHeight,
        display: 'flex',
        boxShadow: theme.shadow.md,
      }}
      {...rest}
    />
  )
}
