import { useState } from 'react'

import { useTheme } from '@emotion/react'
import {
  FillAlarmIcon,
  FillBookmarkIcon,
  FillWifiOffIcon,
  FillWritingIcon,
} from '@musma/react-icons'
import { useTab } from '@musma/react-utils'

import {
  AppShell,
  Button,
  DatePicker,
  Header,
  HeaderLeftSection,
  HeaderRightSection,
  NavBar,
  Tab,
  TabContainer,
  TabPanel,
  Tabs,
  TextInput,
  Typography,
  useToastContext,
} from './components'

const options = [
  {
    label: '셀렉트지롱 길지롱 맞지롱 매콤한 셀렉트맛 아이조아 무지개 총 공격이다!',
    value: '셀렉트지롱 길지롱 맞지롱 매콤한 셀렉트맛 아이조아 무지개 총 공격이다!',
  },
]

const menus = [
  {
    label: 'Sample1',
    icon: () => <FillBookmarkIcon />,
    to: '/',
  },
  {
    label: 'Sample2',
    icon: () => <FillAlarmIcon />,
    children: [
      {
        label: 'Sample2-1',
        to: '/1',
      },
      {
        label: 'Sample2-2',
        to: '/2',
      },
    ],
  },
  {
    label: 'Sample3',
    icon: () => <FillWifiOffIcon />,
    to: '/3',
  },
  {
    label: 'Sample4',
    icon: () => <FillWritingIcon />,
    children: [
      {
        label: 'Sample4-1',
        to: '/4',
      },
      {
        label: 'Sample4-2',
        to: '/5',
      },
    ],
  },
]

const Component = () => {
  const theme = useTheme()
  const { addToast } = useToastContext()

  const [tab, setTab] = useTab<'셀렉트맛' | '무지개' | '공격'>({ initTabValue: '셀렉트맛' })
  const [date, setDate] = useState<string | null>(null)

  const showToastPopup = () => {
    addToast({
      title: '테스트중입니다.',
      mode: 'dark',
      type: 'success',
    })
  }

  return (
    <AppShell
      header={
        <Header>
          <HeaderLeftSection logo={<Typography>Musma</Typography>} />
          <HeaderRightSection isFoldingMode>메뉴지롱 메롱메롱</HeaderRightSection>
        </Header>
      }
      navBar={<NavBar items={menus} />}
    >
      <TabContainer value={tab} onTabValueChange={setTab} variant={'hat'}>
        <Tabs css={{ marginBottom: 17 }}>
          <Tab value={'셀렉트맛'} label={'셀렉트'} />
          <Tab value={'무지개'} label={'무지개'} />
          <Tab value={'총공격'} label={'총공격'} />
        </Tabs>

        <TabPanel value={'셀렉트맛'}>
          <DatePicker value={date} onChange={(value) => setDate(value)} />
        </TabPanel>
        <TabPanel value={'무지개'}>1</TabPanel>
        <TabPanel value={'총공격'}>1</TabPanel>
      </TabContainer>
      <TextInput type="password" />
      <Button onClick={showToastPopup}>토스트 팝업 불러왓</Button>
    </AppShell>
  )
}

export default Component
