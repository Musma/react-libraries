import { HTMLAttributes } from 'react'

import { useTheme } from '@emotion/react'

interface NavBarProps extends HTMLAttributes<HTMLDivElement> {
  zIndex?: number
}

export const NavBar = ({ zIndex, ...rest }: NavBarProps) => {
  const theme = useTheme()

  return (
    <nav
      css={{
        width: theme.layoutSize.navBarWidth,
        height: `calc(100% - ${theme.layoutSize.headerHeight}px)`,
        position: 'fixed',
        top: theme.layoutSize.headerHeight,
        left: 0,
        bottom: 0,
        padding: theme.spacing.md,
        overflow: 'auto',
        boxSizing: 'border-box',
        backgroundColor: theme.colors.white.main,
        borderTopWidth: 1,
        borderTopStyle: 'solid',
        borderTopColor: theme.colors.gray.lighter,
        boxShadow: theme.shadow.md,
        zIndex: zIndex || theme.zIndex.navBar,
      }}
      {...rest}
    />
  )
}
