import { Fragment } from 'react'
import { useLocation } from 'react-router-dom'

import { NavBarItemsData, NavBarLink, NavBarList, useFolderNavBarContext } from '..'

interface NavBarItemsProps {
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

export const NavBarItems = ({ items, isFoldingMode = false }: NavBarItemsProps) => {
  const { pathname } = useLocation()

  const { isNavFold, isMenuState, toggleNavMenuItem } = useFolderNavBarContext()

  return items?.map((item) => {
    if (item?.children) {
      const isChildrenVisible = isMenuState[item.label] && !(isFoldingMode && isNavFold)
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
            onClick={() => toggleNavMenuItem(item.label)}
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
