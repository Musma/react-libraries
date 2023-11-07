import { Fragment, HTMLAttributes, SVGProps, useEffect } from 'react'

import { useTheme } from '@emotion/react'

import { NavBarLink, NavBarList } from '.'
import { useFolderNavBarContext } from '../FolderNavBar'

interface NavBarLinkProps {
  label: string
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
  to?: string
}

interface NavBarItemsProps extends NavBarLinkProps {
  children?: Omit<NavBarLinkProps, 'icon'>[]
}

interface NavBarProps extends HTMLAttributes<HTMLDivElement> {
  zIndex?: number
  items?: NavBarItemsProps[]
  isFolder?: boolean
}

export const NavBar = ({ zIndex, items, isFolder = false, ...rest }: NavBarProps) => {
  const theme = useTheme()

  const { isNavFold, isMenuState, setNavMenuItem, toggleNavMenuItem } = useFolderNavBarContext()

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
      {items?.map((item) => {
        if (item?.children) {
          const isChildrenVisible = isMenuState[item.label] && !(isFolder && isNavFold)

          return (
            <Fragment key={item.label}>
              <NavBarList
                isFolding={isFolder && isNavFold}
                icon={item.icon}
                label={item.label}
                active={isMenuState[item.label]}
                onClick={() => toggleNavMenuItem(item.label)}
              />
              {isChildrenVisible &&
                item.children.map((child) => {
                  return (
                    <NavBarLink
                      key={child.label}
                      label={child.label}
                      to={child.to ?? ''}
                      isFolding={isFolder && isNavFold}
                    />
                  )
                })}
            </Fragment>
          )
        }

        return (
          <NavBarLink
            key={item.label}
            icon={item.icon}
            label={item.label}
            to={item.to ?? ''}
            isFolding={isFolder && isNavFold}
          />
        )
      })}
    </nav>
  )
}
