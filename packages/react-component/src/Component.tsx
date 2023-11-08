import { ReactNode, useState } from 'react'

import { useTheme } from '@emotion/react'
import {
  FillAlarmIcon,
  FillBookmarkIcon,
  FillWifiOffIcon,
  FillWritingIcon,
  OutlineAddBoxIcon,
} from '@musma/react-icons'
import { useFormSearch } from '@musma/react-utils'
import { DateTime } from 'luxon'

import { Box } from 'src/elements'

import {
  AppShell,
  Button,
  DatePicker,
  Header,
  HeaderLeftSection,
  HeaderRightSection,
  NavBar,
  NavBarLink,
  RadioGroup,
  Table,
  TextInput,
  Typography,
} from './components'

const options = [
  {
    label: '전체',
    value: undefined,
  },
  {
    label: '1',
    value: '1',
  },
  {
    label: '2',
    value: '2',
  },
  {
    label: '3',
    value: '3',
  },
  {
    label: '4',
    value: '4',
  },
  {
    label: '5',
    value: '5',
  },
  {
    label: '6',
    value: '6',
  },
  {
    label: '7',
    value: '7',
  },
  {
    label: '8',
    value: '8',
  },
]

const columns = [
  {
    columnName: 'a',
    columnLabel: 'A',
  },
  {
    columnName: 'b',
    columnLabel: 'B',
    columnChild: [
      { columnName: 'b-1', columnLabel: 'B-1' },
      { columnName: 'b-2', columnLabel: 'B-2' },
      { columnName: 'b-3', columnLabel: 'B-3' },
    ],
  },
  {
    columnName: 'c',
    columnLabel: 'C',
    columnChild: [
      { columnName: 'c-1', columnLabel: 'C-1' },
      { columnName: 'c-2', columnLabel: 'C-2' },
    ],
  },
  {
    columnName: 'd',
    columnLabel: 'D',
  },
]

const columns2 = [
  {
    columnName: 'id',
    columnLabel: 'ID',
  },
  {
    columnName: 'a',
    columnLabel: 'A',
  },
  {
    columnName: 'b',
    columnLabel: 'B',
  },
]

const sampleData = [
  {
    id: 'id',
    a: 'A',
    'b-1': 'B-1',
    'b-2': 'B-2',
    'b-3': 'B-3',
    'c-1': 'C-1',
    'c-2': 'C-2',
    d: 'd',
  },
]

const sampleData2: SampleDataType[] = [
  {
    id: 'id',
    a: 123,
    b: <Button>메롱</Button>,
  },
]

const data = Array.from({ length: 20 }).map((_, index) => ({
  id: index + 1,
  customerType: index < 10 ? '법인사업자' : '일반 고객',
  customerName: '김대동',
  store: '영등포 대리점',
  salesDate: '2021-10-01',
  registNo: 'XA00-000' + (index + 1),
  fleetSerialNo: 'XA00-0001' + index,
}))

interface SampleDataType {
  id: string
  a: number
  b: ReactNode
}

const Component = () => {
  const theme = useTheme()
  const [value, setValue] = useState(['1', '2'])
  const [testValue, setTestValue] = useState<string>('')

  const [radio, setRadio] = useState<boolean>(false)

  const [time, setTime] = useState(DateTime.now().toISO())

  const AAA = useFormSearch({
    useFormProps: {},
    fetchAPI() {
      //
    },
  })

  const [currentData, setCurrentData] = useState<SampleDataType>()
  const [checkedItems, setCheckedItems] = useState<string[]>([])

  const menus = [
    {
      label: 'Sample1',
      icon: () => <FillBookmarkIcon color="white" />,
      to: '/',
    },
    {
      label: 'Sample2',
      icon: () => <FillAlarmIcon color="white" />,
      children: [
        {
          label: 'Sample2-1',
          to: '/',
        },
        {
          label: 'Sample2-2',
          to: '/2',
        },
      ],
    },
    {
      label: 'Sample3',
      icon: () => <FillWifiOffIcon color="white" />,
      to: '/3',
    },
    {
      label: 'Sample4',
      icon: () => <FillWritingIcon color="white" />,
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

  return (
    <AppShell
      header={
        <Header>
          <HeaderLeftSection
            css={{
              backgroundColor: theme.colors.blue.main,
            }}
            logo={<Typography color="white">Musma</Typography>}
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
      <Box>
        <DatePicker
          value={time}
          onChange={setTime}
          minDate={DateTime.utc()}
          maxDate={DateTime.utc().plus({ day: 5 })}
        />

        <TextInput
          type="password"
          value={testValue}
          onChange={(e) => {
            console.log(e)
            setTestValue(e.target.value)
          }}
        />

        <Box
          css={{
            padding: theme.spacingUtil(100),
            display: 'flex',
            flexDirection: 'column',
            gap: theme.spacing.md,
          }}
        >
          {/* <MultiSelect options={options} value={value} disabled={false} onChange={setValue} /> */}

          <Table
            columns={columns2}
            data={sampleData2}
            withCheckbox={true}
            checkedItems={checkedItems}
            onCheckItemChange={setCheckedItems}
            onRowClick={(rowData) => rowData && setCurrentData(rowData)}
            toolbar={{
              title: '123',
              totalItems: 0,
              children: <Button startIcon={OutlineAddBoxIcon}>asd</Button>,
            }}
            pagination={{
              currentPage: 1,
              onItemsPerPageChange: () => console.log('페이지네이션 최대 갯수 변경'),
              onPageChange: () => console.log('페이지네이션 변경'),
              totalPages: 10,
            }}
            // css={{ '& div:last-child': { overflow: 'auto' }, '& table': { width: '110%' } }}
          />
        </Box>

        <RadioGroup
          value={radio}
          onChange={(b) => {
            setRadio(b)
          }}
          options={[
            {
              label: 'true',
              value: true,
            },
          ]}
        />
      </Box>
    </AppShell>
  )
}

export default Component
