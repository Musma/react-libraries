import {
  AppShell,
  NavBarList,
  Box,
  Header,
  NavBar,
  NavBarListItem,
  Test,
  Button,
} from '@musma/react-component'
import { FillDashboardIcon } from '@musma/react-icons'

const DATA = [{ name: '김영수', company: <div>dkdkdk</div> }]

const COLUMNS = [
  {
    columnName: 'name',
    columnLabel: 'Name',
  },
  {
    columnName: 'company',
    columnLabel: 'Company',
  },
]

export const AppContainer = () => {
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

          <NavBarListItem activeColor={'#dd9c4f'} active={false}>
            ASKDAK
          </NavBarListItem>

          <NavBarListItem activeColor={'#dd9c4f'} active={false}>
            ASKDAK
          </NavBarListItem>

          <NavBarListItem activeColor={'#dd9c4f'} active={false}>
            ASKDAK
          </NavBarListItem>
        </NavBar>
      }
    >
      <Test data={DATA} columns={COLUMNS} />

      <Button>apsodikspoak</Button>
    </AppShell>
  )
}
