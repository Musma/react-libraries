import { ReactNode } from 'react'

import { useTheme } from '@emotion/react'

import { Box } from 'src/elements'

interface AppShellProps {
  /**
   * Header
   */
  header: ReactNode
  /**
   * Navbar
   */
  navBar: ReactNode
  /**
   * 컨텐츠 영역에 패딩 여부
   * @default false
   */
  disablePadding?: boolean
  /**
   * 컨텐츠 영역 children
   */
  children: ReactNode
}

/**
 *
 * @param header 헤더
 * @param navBar 헤더
 * @param disabledPadding 컨텐츠 영역에 패딩 여부
 * @param children ReactNode
 * @description
 * 로그인 성공 후의 나타나는 앱의 메인 화면 레이아웃입니다.
 */
export const AppShell = ({ header, navBar, disablePadding = false, children }: AppShellProps) => {
  const theme = useTheme()
  return (
    // AppShell Wrapper
    <Box
      css={{
        display: 'flex',
        minWidth: theme.layoutSize.minBodyWidth,
        minHeight: '100vh',
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
          minWidth: 0,
          backgroundColor: theme.colors.white.light,
          paddingTop: theme.layoutSize.headerHeight,
          paddingLeft: theme.layoutSize.navBarWidth,
        }}
      >
        <Box css={[!disablePadding && { padding: theme.spacing.lg }]}>{children}</Box>
      </main>
    </Box>
  )
}
