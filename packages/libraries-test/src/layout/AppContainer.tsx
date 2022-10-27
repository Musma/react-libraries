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
          <NavBarList icon={FillDashboardIcon} activeColor={'#dd9c4f'} active={true} to="/">
            ASKDAK
          </NavBarList>

          <NavBarListItem activeColor={'#dd9c4f'} active={false} to="/123123">
            ASKDAK
          </NavBarListItem>

          <NavBarListItem activeColor={'#dd9c4f'} active={false} to="123123">
            ASKDAK
          </NavBarListItem>

          <NavBarListItem activeColor={'#dd9c4f'} active={false} to="99898">
            ASKDAK
          </NavBarListItem>

          <NavBarList icon={FillDashboardIcon} activeColor={'#dd9c4f'} active={true} to="/2222">
            222222222
          </NavBarList>

          <NavBarList
            icon={FillDashboardIcon}
            activeColor={'#dd9c4f'}
            active={false}
            onClick={() => {
              alert('1232131290830')
            }}
          >
            222222222
          </NavBarList>
        </NavBar>
      }
    >
      <Test data={DATA} columns={COLUMNS} />

      <Button>apsodikspoak</Button>
    </AppShell>
  )
}
