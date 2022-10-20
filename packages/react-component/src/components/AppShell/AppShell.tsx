import { ReactNode } from 'react'

import { useTheme } from '@emotion/react'

import { Box } from 'src/components'

interface AppShellProps {
  header: ReactNode
  navBar: ReactNode
  children: ReactNode
}

export const AppShell = ({ header, navBar, children }: AppShellProps) => {
  const theme = useTheme()
  return (
    <Box
      css={{
        height: '100vh',
        display: 'flex',
        minWidth: theme.layoutSize.minBodyWidth,
        backgroundColor: theme.colors.white.main,
      }}
    >
      {header}
      {navBar}
      <main
        css={{
          flexGrow: 1,
          paddingTop: theme.layoutSize.headerHeight,
          paddingLeft: theme.layoutSize.navBarWidth,
          backgroundColor: theme.colors.white.light,
        }}
      >
        {children}
      </main>
    </Box>
  )
}
