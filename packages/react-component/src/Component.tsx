import { Fragment, useState } from 'react'

import { useTheme } from '@emotion/react'
import {
  FillAlarmIcon,
  FillBookmarkIcon,
  FillWifiOffIcon,
  FillWritingIcon,
} from '@musma/react-icons'
import { useTab, useToggle } from '@musma/react-utils'

import {
  AppShell,
  Button,
  DatePicker,
  Header,
  HeaderLeftSection,
  HeaderRightSection,
  Modal,
  ModalActions,
  ModalButton,
  ModalContent,
  NavBar,
  Select,
  Tab,
  TabContainer,
  TabPanel,
  Tabs,
  TextInput,
  Typography,
  useToastContext,
} from './components'
import { Form } from './elements'

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
  const [showModal, toggleModal] = useToggle()
  const [selected, setSelected] = useState<string>()

  const showToastPopup = () => {
    addToast({
      title: '테스트중입니다.',
      mode: 'dark',
      type: 'success',
    })
  }

  return (
    <Fragment>
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
            <DatePicker disabled value={date} onChange={(value) => setDate(value)} />
          </TabPanel>
          <TabPanel value={'무지개'}>1</TabPanel>
          <TabPanel value={'총공격'}>1</TabPanel>
        </TabContainer>
        <TextInput disabled type="password" />
        <Button disabled onClick={showToastPopup}>
          토스트 팝업 불러왓
        </Button>
        <Button onClick={() => toggleModal()}>모달 띄웟</Button>

        <Select
          disabled
          options={[
            { label: '선택없음', value: undefined },
            { label: 'example1', value: 'example1' },
            { label: 'example2', value: 'example2' },
          ]}
          value={selected}
          onChange={setSelected}
        />
        <TextInput disabled />
      </AppShell>

      {showModal && (
        <Modal show title="example" onClose={toggleModal}>
          <Form>
            <ModalContent
              css={{
                display: 'flex',
                flexDirection: 'column',
                gap: theme.spacing.lg,
                width: 456,
                maxHeight: '50vh',
                overflowY: 'auto',
                paddingBottom: 0,
              }}
            >
              <TextInput label="example1" disabled />
              <TextInput label="example2" disabled />
              <TextInput label="example3" disabled />
              <TextInput label="example4" disabled />
              <TextInput label="example5" disabled />
              <TextInput label="example6" disabled />
              <TextInput label="example7" disabled />
              <TextInput label="example8" disabled />
              <TextInput label="example9" disabled />
            </ModalContent>
            <ModalActions>
              <ModalButton>취소</ModalButton>
              <ModalButton>확인</ModalButton>
            </ModalActions>
          </Form>
        </Modal>
      )}
    </Fragment>
  )
}

export default Component
