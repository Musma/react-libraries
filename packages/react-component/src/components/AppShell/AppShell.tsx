import { ReactNode } from 'react'

import { useTheme } from '@emotion/react'

import { Box } from 'src/elements'

interface AppShellProps {
  header: ReactNode
  navBar: ReactNode
  children: ReactNode
}

export const AppShell = ({ header, navBar, children }: AppShellProps) => {
  const theme = useTheme()
  return (
    // AppShell Wrapper
    <Box
      css={{
        display: 'flex',
        minWidth: theme.layoutSize.minBodyWidth,
        height: '100vh',
        backgroundColor: theme.colors.white.main,
      }}
    >
      {/* Header */}
      {header}

      {/* NavBar */}
      {navBar}

      {/* Contents Area */}
      <main
        css={{
          flexGrow: 1,
          backgroundColor: theme.colors.white.light,
          paddingTop: theme.layoutSize.headerHeight,
          paddingLeft: theme.layoutSize.navBarWidth,
        }}
      >
        {children}
      </main>
    </Box>
  )
}
