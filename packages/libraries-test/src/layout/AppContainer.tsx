import { useCallback, useState } from 'react'

import {
  AppShell,
  NavBarList,
  Header,
  NavBar,
  NavBarListItem,
  Table,
  Button,
  Collapse,
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
  const [test, setTest] = useState(false)

  const toggle = useCallback(() => {
    setTest((value) => !value)
  }, [])
  return (
    <AppShell
      header={<Header>askdo</Header>}
      navBar={
        <NavBar>
          <NavBarList
            icon={FillDashboardIcon}
            label="123123"
            onClick={() => {
              console.log('123123')
            }}
          />

          <Collapse show={test}>
            <NavBarListItem to="/123123" label="123123" />
          </Collapse>

          <NavBarList
            icon={FillDashboardIcon}
            label="123123"
            onClick={() => {
              console.log('123123')
            }}
          />
        </NavBar>
      }
    >
      <Table data={DATA} columns={COLUMNS} />

      <Button
        onClick={() => {
          toggle()
        }}
      >
        Nav Open
      </Button>
      <Button variant="outlined">apsodikspoak</Button>
    </AppShell>
  )
}
