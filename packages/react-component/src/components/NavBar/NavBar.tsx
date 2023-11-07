import { HTMLAttributes, useEffect } from 'react'

import { useTheme } from '@emotion/react'

import { NavBarItemsData } from '.'
import { NavBarItems } from './NavBarItems'
import { useFolderNavBarContext } from '../FolderNavBar'

interface NavBarProps extends HTMLAttributes<HTMLDivElement> {
  zIndex?: number
  /**
   * @optional
   * 메뉴 스키마에 맞춰서 데이터를 전달하면 NavList와 NavLink를 자동으로 생성합니다.
   * isFoldingMode = true 이면 필수 값
   */
  items?: NavBarItemsData[]
  /**
   * @optional
   * @default false
   * 폴딩 기능을 사용할건지에 대한 여부
   */
  isFoldingMode?: boolean
}

export const NavBar = ({
  zIndex,
  items,
  isFoldingMode = false,
  children,
  ...rest
}: NavBarProps) => {
  const theme = useTheme()
  const { isNavFold, setNavMenuItem } = useFolderNavBarContext()

  useEffect(() => {
    if (!items || !isNavFold) return

    const navItems: Record<string, boolean> = {}
    items.forEach((item) => item?.children && (navItems[item.label] = false))
    setNavMenuItem(navItems)
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
        isNavFold && {
          width: 100,
        },
      ]}
      {...rest}
    >
      {items ? <NavBarItems items={items} isFoldingMode={isFoldingMode} /> : children}
    </nav>
  )
}
