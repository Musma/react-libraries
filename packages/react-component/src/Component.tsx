import { ReactNode } from 'react'

import { useTheme } from '@emotion/react'
import {
  FillAlarmIcon,
  FillBookmarkIcon,
  FillWifiOffIcon,
  FillWritingIcon,
  OutlineAddBoxIcon,
} from '@musma/react-icons'
import { DateTime } from 'luxon'

import { Box } from 'src/elements'

import {
  AppShell,
  Button,
  DatePicker,
  Flex,
  Header,
  HeaderLeftSection,
  HeaderRightSection,
  NavBar,
  NavBarLink,
  RadioGroup,
  Select,
  Table,
  TextInput,
  Typography,
} from './components'
import { useMusmaTheme } from './theme'

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

const sampleData2: SampleDataType[] = [
  {
    id: 'id',
    a: 123,
    b: <Button>메롱</Button>,
  },
]

interface SampleDataType {
  id: string
  a: number
  b: ReactNode
}

const Component = () => {
  const theme = useTheme()
  const { themeOptions, currentTheme, onThemeChange } = useMusmaTheme()

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
      <Box css={{ padding: 48 }}>
        <Flex colSpacing={24}>
          <Box css={{ width: 200 }}>
            <Select
              label={'팔레트 선택'}
              value={currentTheme}
              options={themeOptions}
              onChange={onThemeChange}
            />
          </Box>
          <Box css={{ backgroundColor: theme.palette.primary.main, width: 100, height: 100 }} />
          <Box css={{ backgroundColor: theme.palette.secondary.main, width: 100, height: 100 }} />
          <Box css={{ backgroundColor: theme.palette.warning.main, width: 100, height: 100 }} />
        </Flex>
      </Box>
    </AppShell>
  )
}

export default Component
