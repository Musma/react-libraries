import { useCallback, useState } from 'react'

import {
  AppShell,
  NavBarList,
  Header,
  NavBar,
  NavBarLink,
  Button,
  Collapse,
  HeaderLeftSection,
  HeaderRightSection,
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
      header={
        <Header>
          <HeaderLeftSection logo={FillDashboardIcon} to="/" />
          <HeaderRightSection>aspoldksapodksapo</HeaderRightSection>
        </Header>
      }
      navBar={
        <NavBar>
          <NavBarLink to="/" label="123123" icon={FillDashboardIcon} />

          <NavBarList
            icon={FillDashboardIcon}
            label="123123"
            onClick={() => {
              console.log('123123')
            }}
            active={test}
          />

          <Collapse show={test}>
            <NavBarLink to="/" label="123123" />
            <NavBarLink to="/1" label="123123" />
            <NavBarLink to="/2" label="123123" />
            <NavBarLink to="/3" label="123123" />
            <NavBarLink to="/4" label="123123" />
            <NavBarLink to="/5" label="123123" />
            <NavBarLink to="/6" label="123123" />
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
      {/* <Table data={DATA} columns={COLUMNS} /> */}

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
