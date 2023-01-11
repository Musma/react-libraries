import { useState } from 'react'

import { useTheme } from '@emotion/react'
import { AddIcon, FillAddBoxIcon } from '@musma/react-icons'
import { useDetectCapsLock, usePagination, useTab } from '@musma/react-utils'
import { DateTime } from 'luxon'

import { Box } from 'src/elements'

import {
  Button,
  DatePicker,
  DateRangePicker,
  Select,
  Tab,
  TabContainer,
  TabPanel,
  Tabs,
  Table,
  Textarea,
  TextInput,
  Typography,
  RadioGroup,
} from './components'

const options = [
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
]

const columns = [
  {
    columnName: 'id',
    columnLabel: '테이블_게시글_순번',
  },
  {
    columnName: 'deviceID',
    columnLabel: '단말기_ID',
  },
  {
    columnName: 'eol',
    columnLabel: '단말기_EoL',
  },
  {
    columnName: 'releaseDate',
    columnLabel: '단말기_출고일자',
  },
  {
    columnName: 'matchDate',
    columnLabel: '단말기_매칭일자',
  },
  {
    columnName: 'firmwareVersion',
    columnLabel: '펌웨어 버전',
  },
  {
    columnName: 'currentCommDate',
    columnLabel: '단말기_통신일시',
  },
  {
    columnName: 'deviceStatus',
    columnLabel: '단말기_상태',
  },
]

const tableData = Array.from({ length: 20 }).map((_, index) => ({
  id: `${index + 1}`,
  deviceID: '1a4e-6135-1abe-fc10-41c7',
  eol: 'U22B25003089',
  releaseDate: '2023-10-01',
  matchDate: '2023-10-01',
  firmwareVersion: <button>dkdkdkdk</button>,
  currentCommDate: '2023-09-30 08:00',
  deviceStatus: index < 10 ? '사용가능' : '사용불가',
}))

export const Component = () => {
  const theme = useTheme()
  const { activeCapsLock } = useDetectCapsLock()
  const [tab, setTab] = useTab<string>({ initTabValue: '1' })

  const [radio, setRadio] = useState('1')

  const { pagination } = usePagination({
    fetchAPI() {
      alert('12321312')
    },
  })

  return (
    <Box
      css={{
        padding: theme.spacingUtil(100),
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing.md,
      }}
    >
      <Textarea rows={10} disabled={false} />

      <TextInput
        type="text"
        autoComplete="email"
        startAdornment={<Typography>K12312312g</Typography>}
        endAdornment={FillAddBoxIcon}
        placeholder="1230812309218309128309 입력하세요"
      />

      <TextInput value="12309128309128" size="sm" type="password" disabled={true} />

      {activeCapsLock ? '활성' : '비활성'}

      <Select
        options={options}
        value={'1'}
        onChange={() => {
          return null
        }}
      />

      <Select
        disabled={true}
        options={options}
        value={'1'}
        onChange={() => {
          return null
        }}
      />

      <Button size="sm" variant="outlined" startIcon={AddIcon}>
        Outlined Button with startIcon
      </Button>

      <Button size="sm" variant="contained" startIcon={AddIcon}>
        Contained Button with startIcon
      </Button>

      <DatePicker
        // disabled={true}
        value={DateTime.now()}
        anchorOrigin={{ vertical: 'bottom' }}
        onChange={() => {
          return null
        }}
      />

      <DateRangePicker
        onChange={() => {
          return null
        }}
      />

      <TabContainer value={tab} onTabValueChange={setTab}>
        <Tabs>
          <Tab value="1" label="22" />
          <Tab value="2" label="33" />
          <Tab value="3" label="1123123szadasxcvxcvxcv" />
          <Tab value="4" label="1cvbcvncn" />
        </Tabs>

        <TabPanel value="1"></TabPanel>
      </TabContainer>
      <Table
        data={tableData}
        columns={columns}
        withCheckbox={true}
        pagination={{ ...pagination, totalPages: 4 }}
        onRowClick={() => {
          alert('123123')
        }}
      />

      <Box css={{ display: 'flex', gap: 24 }}>
        <DatePicker
          // disabled={true}
          value={DateTime.now()}
          anchorOrigin={{ vertical: 'bottom' }}
          onChange={() => {
            return null
          }}
        />

        <RadioGroup
          value={radio}
          items={[
            {
              label: 'test1',
              value: '1',
            },
            {
              label: 'test2',
              value: '2',
            },
          ]}
          onChange={(value) => {
            setRadio(value)
          }}
        />
      </Box>
    </Box>
  )
}
