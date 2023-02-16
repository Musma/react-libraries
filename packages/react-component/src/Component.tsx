import { useState } from 'react'

import { useTheme } from '@emotion/react'
import { OutlineAddBoxIcon } from '@musma/react-icons'

import { Box } from 'src/elements'

import { Button, MultiSelect, Table } from './components'

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

const sampleData = [
  {
    a: 'A',
    'b-1': 'B-1',
    'b-2': 'B-2',
    'b-3': 'B-3',
    'c-1': 'C-1',
    'c-2': 'C-2',
    d: 'd',
  },
]

const Component = () => {
  const theme = useTheme()
  const [value, setValue] = useState(['1', '2'])

  const [checkedItems, setCheckedItems] = useState<string[]>([])

  return (
    <Box>
      <Box
        css={{
          padding: theme.spacingUtil(100),
          display: 'flex',
          flexDirection: 'column',
          gap: theme.spacing.md,
        }}
      >
        <MultiSelect
          options={options}
          value={value}
          onChange={setValue}
          disabled={false}
          placeholder="123123"
          css={{ width: 400 }}
        />

        {/* <MultiSelect options={options} value={value} disabled={false} onChange={setValue} /> */}

        <Table
          columns={columns}
          data={sampleData}
          withCheckbox={true}
          checkedItems={checkedItems}
          onCheckItemChange={setCheckedItems}
          onRowClick={() => alert('Table의 Row를 클릭하셨습니다!')}
          toolbar={{
            title: '123',
            totalItems: 0,
            children: <Button startIcon={OutlineAddBoxIcon}>asd</Button>,
          }}
          // css={{ '& div:last-child': { overflow: 'auto' }, '& table': { width: '110%' } }}
        />
      </Box>
    </Box>
  )
}

export default Component
