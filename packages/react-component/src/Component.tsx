import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useTheme } from '@emotion/react'
import { uniqueId } from '@musma/react-utils'

import { Box } from 'src/elements'

import {
  Button,
  Chip,
  DateRangePicker,
  IToastPopupData,
  Select,
  useToastContext,
} from './components'

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
  type DDD = {
    date: string
  }

  const navigate = useNavigate()
  const theme = useTheme()
  const [value, setValue] = useState('1')

  const { addToast, setLimit } = useToastContext()
  const popupSample1: IToastPopupData = {
    id: uniqueId(),
    title: 'Error',
    description: 'This is a warning notice about copywriting.',
    mode: 'dark',
    type: 'error',
  }
  const popupSample2: IToastPopupData = {
    id: uniqueId(),
    title: 'Success Tips',
    description: 'Detailed desctiption and advice about successful copywriting.',
    type: 'success',
  }
  const popupSample3: IToastPopupData = {
    id: uniqueId(),
    title: 'Extra Information',
    mode: 'dark',
  }
  const popupSample4: IToastPopupData = {
    id: uniqueId(),
    title: 'This is warning message.',
    type: 'warning',
  }

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
