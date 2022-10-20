import { HTMLAttributes } from 'react'

import { useTheme } from '@emotion/react'

interface NavBarProps extends HTMLAttributes<HTMLDivElement> {
  zIndex?: number
}

export const NavBar = ({ zIndex, children, ...rest }: NavBarProps) => {
  const theme = useTheme()
  return (
    <nav
      css={{
        width: theme.layoutSize.navBarWidth,
        padding: theme.spacing.md,
        backgroundColor: theme.colors.white.main,
        zIndex: zIndex || theme.zIndex.navBar,
        position: 'fixed',
        top: theme.layoutSize.headerHeight,
        height: `calc(100% - ${theme.layoutSize.headerHeight}px)`,
        left: 0,
        bottom: 0,
        boxShadow: theme.shadow.md,
        overflow: 'auto',
        boxSizing: 'border-box',
        borderTopWidth: 1,
        borderTopStyle: 'solid',
        borderTopColor: theme.colors.gray.lighter,
      }}
      {...rest}
    >
      {children}
    </nav>
  )
}
