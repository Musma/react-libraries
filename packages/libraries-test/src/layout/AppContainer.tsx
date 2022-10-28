import {
  AppShell,
  NavBarList,
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
      header={<Header>askdo</Header>}
      navBar={
        <NavBar>
          <NavBarList icon={FillDashboardIcon} active={true} to="/">
            ASKDAK
          </NavBarList>

          <NavBarListItem active={false} to="/123123">
            ASKDAK
          </NavBarListItem>

          <NavBarListItem active={false} to="123123">
            ASKDAK
          </NavBarListItem>

          <NavBarListItem active={false} to="99898">
            ASKDAK
          </NavBarListItem>

          <NavBarList icon={FillDashboardIcon} active={true} to="/2222">
            222222222
          </NavBarList>

          <NavBarList
            icon={FillDashboardIcon}
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
      <Button variant="outlined">apsodikspoak</Button>
    </AppShell>
  )
}
