import { Fragment } from 'react'
import { useLocation } from 'react-router-dom'

import { NavBarItemsData, NavBarLink, NavBarList, useFoldingNavBarContext } from '..'

interface NavBarItemsProps {
  /**
   * 메뉴 스키마에 맞춰서 데이터를 전달하면 NavList와 NavLink를 자동으로 생성합니다. (폴딩 기능을 사용하면 필수 값)
   * @optional
   */
  items?: NavBarItemsData[]
}

export const NavBarItems = ({ items }: NavBarItemsProps) => {
  const { pathname } = useLocation()

  const { isNavBarFolded, isMenuState, toggleMenuState } = useFoldingNavBarContext()

  return items?.map((item) => {
    if (item?.children) {
      const isChildrenVisible = isMenuState[item.label] && !isNavBarFolded
      const isChildrenActive = item.children.some((child) => {
        if (!child.to) return false
        return pathname.includes(child.to)
      })

      return (
        <Fragment key={item.label}>
          <NavBarList
            isChildrenActive={isChildrenActive}
            icon={item.icon}
            label={item.label}
            active={isMenuState[item.label]}
            onClick={() => toggleMenuState(item.label)}
          />
          {isChildrenVisible &&
            item.children.map((child) => {
              return <NavBarLink key={child.label} label={child.label} to={child.to ?? ''} />
            })}
        </Fragment>
      )
    }

    return <NavBarLink key={item.label} icon={item.icon} label={item.label} to={item.to ?? ''} />
  })
}
