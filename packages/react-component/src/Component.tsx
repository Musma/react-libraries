import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useTheme } from '@emotion/react'

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
    description: '굿 잘 됨',
    type: 'success',
  }
  const popupSample3: IToastPopupData = {
    title: '정보 팝업인데 정보 음슴 ㅋ',
    mode: 'dark',
  }
  const popupSample4: IToastPopupData = {
    title: '위험위허멍위험위험위험위험',
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
      </Box>
    </Box>
  )
}

export default Component
