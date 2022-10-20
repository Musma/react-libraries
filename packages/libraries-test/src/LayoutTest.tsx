import { AppShell, NavBarList, Box, Header, NavBar, NavBarListItem } from '@musma/react-component'
import { FillDashboardIcon } from '@musma/react-icons'

export const LayoutTest = () => {
  return (
    <AppShell
      header={
        <Header>
          <Box>헤더다 임마</Box>
        </Header>
      }
      navBar={
        <NavBar>
          <NavBarList icon={FillDashboardIcon} activeColor={'#dd9c4f'} active={true}>
            ASKDAK
          </NavBarList>

          <NavBarListItem icon={FillDashboardIcon} activeColor={'#dd9c4f'} active={false}>
            ASKDAK
          </NavBarListItem>

          <NavBarListItem icon={FillDashboardIcon} activeColor={'#dd9c4f'} active={false}>
            ASKDAK
          </NavBarListItem>

          <NavBarListItem icon={FillDashboardIcon} activeColor={'#dd9c4f'} active={false}>
            ASKDAK
          </NavBarListItem>
        </NavBar>
      }
    >
      <Box
        css={{
          marginLeft: 24,
          marginTop: 24,
          width: 1000,
          height: 1000,
          backgroundColor: '#dd9c4f',
        }}
      />
    </AppShell>
  )
}
