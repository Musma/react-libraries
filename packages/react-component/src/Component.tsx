import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useTheme } from '@emotion/react'
import { OutlineAddBoxIcon } from '@musma/react-icons'

import { Box } from 'src/elements'

import { Button, Chip, IToastPopupData, Select, Table, useToastContext } from './components'

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
  const navigate = useNavigate()
  const theme = useTheme()
  const [value, setValue] = useState('1')

  const { addToast, setLimit } = useToastContext()

  const popupSample1: IToastPopupData = {
    title: 'Error',
    description: 'This is a warning notice about copywriting.',
    mode: 'dark',
    type: 'error',
  }

  const popupSample2: IToastPopupData = {
    title: '잘했다임마',
    description: '굿 잘 됨\niwoe89ehckdnc\n39e8dhbcjkldshacpdkc',
    type: 'success',
  }

  const popupSample3: IToastPopupData = {
    title: 'Extra Information',
    mode: 'dark',
  }

  const popupSample4: IToastPopupData = {
    title: 'This is warning message.',
    type: 'warning',
  }

  const popupSample5: IToastPopupData = {
    description: 'This sentence is false\nLorem ipsum ziahquekc dt.',
    mode: 'dark',
    type: 'success',
  }

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
        <Select options={options} value={value} onChange={setValue} placeholder="123123" />

        <Select options={options} value={value} disabled={true} onChange={setValue} />

        <Button
          onClick={() => {
            setValue('3')
          }}
        >
          dkdkd
        </Button>

        <Table
          columns={columns}
          data={sampleData}
          withCheckbox={true}
          checkedItems={checkedItems}
          onCheckItemChange={setCheckedItems}
          onRowClick={() => alert('Table의 Row를 클릭하셨습니다!')}
          toolbar={{
            title: '123',
            // totalCount: 3,
            children: <Button startIcon={OutlineAddBoxIcon}>asd</Button>,
          }}
          // css={{ '& div:last-child': { overflow: 'auto' }, '& table': { width: '110%' } }}
        />
      </Box>

      <Box css={{ display: 'flex', gap: '10px' }}>
        <Chip
          color={theme.colors.red.main}
          shape="rounded"
          onClick={() => {
            addToast(popupSample1)
          }}
        >
          토스트 팝업 1
        </Chip>

        <Chip
          color={theme.colors.green.main}
          shape="rounded"
          onClick={() => {
            addToast(popupSample2)
          }}
        >
          토스트 팝업 2
        </Chip>

        <Chip
          color={theme.colors.blue.main}
          shape="rounded"
          onClick={() => {
            addToast(popupSample3)
          }}
        >
          토스트 팝업 3
        </Chip>

        <Chip
          color={theme.colors.orange.main}
          shape="rounded"
          onClick={() => {
            addToast(popupSample4)
          }}
        >
          토스트 팝업 4
        </Chip>

        <Chip
          color={theme.colors.gray.dark}
          shape="rounded"
          onClick={() => {
            addToast(popupSample5)
          }}
        >
          토스트 팝업 5
        </Chip>

        <Chip
          color={theme.colors.black.main}
          onClick={() => {
            const random = Math.floor(Math.random() * 10) + 1
            console.log('random', random)
            setLimit(random)
          }}
        >
          토스트 팝업 limit 수를 랜덤으로 변경 (1~10 사이)
        </Chip>

        <Chip color={theme.colors.black.darker} onClick={() => navigate('toast')}>
          토스트 팝업 페이지로 이동
        </Chip>
      </Box>
    </Box>
  )
}

export default Component
