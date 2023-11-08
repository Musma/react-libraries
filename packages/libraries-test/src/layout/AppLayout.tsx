import { Outlet } from 'react-router-dom'

import { useTheme } from '@emotion/react'
import {
  AppShell,
  Header,
  HeaderLeftSection,
  HeaderRightSection,
  NavBar,
  NavBarLink,
  Image,
} from '@musma/react-component'
import { FillBookmarkIcon, FillAlarmIcon } from '@musma/react-icons'

import musma_logo from './images/logo.svg'

export const AppLayout = () => {
  const theme = useTheme()

  const menus = [
    {
      label: '홈',
      icon: () => <FillBookmarkIcon color="white" />,
      to: '/',
    },
    {
      label: 'Sample',
      icon: () => <FillAlarmIcon color="white" />,
      children: [
        {
          label: 'Sample1',
          to: '/1',
        },
        {
          label: 'Sample2',
          to: '/2',
        },
        {
          label: 'Sample3',
          to: '/3',
        },
      ],
    },
  ]

  return (
    <AppShell
      header={
        <Header>
          <HeaderLeftSection
            css={{
              backgroundColor: theme.colors.blue.main,
            }}
            logo={<Image src={musma_logo} alt="무스마 로고...가 아니넹 ㅋ" width="100%" />}
          ></HeaderLeftSection>
          <HeaderRightSection isFoldingMode>메뉴지롱 메롱메롱</HeaderRightSection>
        </Header>
      }
      navBar={
        <NavBar
          items={menus}
          css={{
            backgroundColor: theme.colors.blue.main,
            '& p, svg': {
              color: 'white',
            },
            '& p': {
              paddingLeft: 8,
            },
            '& .active > div': {
              backgroundColor: 'hsla(0, 100%, 100%, 0.1)',
            },
            '& a div:hover': {
              backgroundColor: 'hsla(0, 100%, 100%, 0.1)',
            },
          }}
        >
          {/* NavBar에 items를 넘겼기때문에 아래 children 들은 무시됩니다 */}
          <NavBarLink to="/" label="meme" />
          <NavBarLink to="/" label="meme" />
        </NavBar>
      }
    >
      <Outlet />
    </AppShell>
  )
}
