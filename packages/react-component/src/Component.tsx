import { useState } from 'react'

import { useTheme } from '@emotion/react'

import { Box } from 'src/elements'

import { Button, DateRangePicker, Select } from './components'

const options = [
  {
    label: '1114',
    value: '1',
  },
  {
    label: '2224',
    value: '2',
  },
  {
    label: '3335',
    value: '3',
  },
  {
    label: '4445',
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

const Component = () => {
  const theme = useTheme()
  const [value, setValue] = useState('1')

  return (
    <Box
      css={{
        padding: theme.spacingUtil(100),
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing.md,
      }}
    >
      <Select options={options} value={value} onChange={setValue} />

      <Select options={options} value={value} disabled={true} onChange={setValue} />

      <Button
        onClick={() => {
          setValue('3')
        }}
      >
        dkdkd
      </Button>

      <DateRangePicker
        disabled={true}
        onChange={() => {
          console.log('123')
        }}
      />
    </Box>
  )
}

export default Component
