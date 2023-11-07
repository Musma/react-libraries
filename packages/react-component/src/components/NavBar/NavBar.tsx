import { HTMLAttributes, useEffect } from 'react'

import { useTheme } from '@emotion/react'

import { NavBarItemsData } from '.'
import { NavBarItems } from './NavBarItems'
import { useFoldingNavBarContext } from '../FoldingNavBarProvider'

interface NavBarProps extends HTMLAttributes<HTMLDivElement> {
  zIndex?: number
  /**
   * 메뉴 스키마에 맞춰서 데이터를 전달하면 NavList와 NavLink를 자동으로 생성합니다. (폴딩 기능을 사용하면 필수 값)
   * @optional
   */
  items?: NavBarItemsData[]
}

export const NavBar = ({ zIndex, items, children, ...rest }: NavBarProps) => {
  const theme = useTheme()
  const { isNavBarFolded, setMenuState } = useFoldingNavBarContext()

  useEffect(() => {
    if (!items || !isNavBarFolded) return

    const navItems: Record<string, boolean> = {}
    items.forEach((item) => item?.children && (navItems[item.label] = false))
    setMenuState(navItems)
  }, [items])

  return (
    <nav
      css={[
        {
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
          transition: 'width 0.5s ease-in-out',
        },
        isNavBarFolded && {
          width: 100,
        },
      ]}
      {...rest}
    >
      {items ? <NavBarItems items={items} /> : children}
    </nav>
  )
}
