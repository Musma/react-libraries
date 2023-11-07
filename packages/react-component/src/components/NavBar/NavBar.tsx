import { Fragment, HTMLAttributes, SVGProps, useEffect } from 'react'

import { useTheme } from '@emotion/react'
import { FillBatteryIcon } from '@musma/react-icons'

import { Box } from 'src/elements'

import { NavBarLink, NavBarList } from '.'
import { Button } from '../Button'
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
          '& svg:nth-of-type(1)': {
            minWidth: 'fit-content',
          },
        },
        isNavFold && {
          width: 100,
        },
      ]}
      {...rest}
    >
      {items?.map((item) => {
        if (isFolder && isNavFold) {
          return (
            <Box
              key={item.label}
              css={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                margin: '8px 0px',
              }}
            >
              <Button
                startIcon={() => <FillBatteryIcon />}
                onClick={() => toggleNavMenuItem(item.label)}
                css={{
                  height: 40,
                  backgroundColor: 'white',
                  ':hover': {
                    backgroundColor: 'lightgray',
                  },
                }}
              />
            </Box>
          )
        }

        if (item?.children) {
          return (
            <Fragment key={item.label}>
              <NavBarList
                icon={item.icon}
                label={isFolder && isNavFold ? '' : item.label}
                active={isMenuState[item.label]}
                onClick={() => toggleNavMenuItem(item.label)}
              />
              {item?.children &&
                isMenuState[item.label] &&
                item.children.map((child) => {
                  return <NavBarLink key={child.label} label={child.label} to={child.to ?? ''} />
                })}
            </Fragment>
          )
        }

        return (
          <NavBarLink
            key={item.label}
            icon={item.icon}
            label={isFolder && isNavFold ? '' : item.label}
            to={item.to ?? ''}
          />
        )
      })}
    </nav>
  )
}
