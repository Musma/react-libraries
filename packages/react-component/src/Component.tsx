import { useNavigate } from 'react-router-dom'
// import { toast, ToastContainer } from 'react-toastify'

import { useTheme } from '@emotion/react'
import { uniqueId, useFormSearch, useToggle } from '@musma/react-utils'
import { DateTime } from 'luxon'

import { Box } from 'src/elements'

import {
  DatePicker,
  Grid,
  IToastPopupData,
  RadioButton,
  SearchForm,
  Select,
  Table,
  TextInput,
} from './components'
import { Chip } from './components/Chip'
import { useToastContext } from './components/ToastPopup'
import { Modal1 } from './Modal1'

const DATA = [
  {
    id: '0',
    modelName: 'GS100',
  },
]

const COLUMNS = [
  {
    columnLabel: 'id',
    columnName: 'id',
  },
  {
    columnLabel: 'modelName',
    columnName: 'modelName',
  },
]

type DDD = {
  date: string
}

export const Component = () => {
  const navigate = useNavigate()
  const { handleSubmit, onSubmit, onReset } = useFormSearch<DDD>({
    useFormProps: {
      defaultValues: {
        date: DateTime.local().toISO(),
      },
    },
    fetchAPI() {
      console.log(';fetchposdkdspokpo')
    },
  })
  const theme = useTheme()
  const [isOpen1, setIsOpen1] = useToggle(false)
  const { addToast, setLimit } = useToastContext()
  // const notify = () => toast('Wow so easy!', { containerId: 'main' })
  const popupSample1: IToastPopupData = {
    id: uniqueId(),
    title: '에러났다 어쩔래',
    description: '어쩔어쩔어쩔어쩔어쩔',
    mode: 'dark',
    type: 'error',
  }
  const popupSample2: IToastPopupData = {
    id: uniqueId(),
    title: '잘했다임마',
    description: '굿 잘 됨',
    type: 'success',
  }
  const popupSample3: IToastPopupData = {
    id: uniqueId(),
    title: '정보 팝업인데 정보 음슴 ㅋ',
    mode: 'dark',
  }
  const popupSample4: IToastPopupData = {
    id: uniqueId(),
    title: '위험위허멍위험위험위험위험',
    type: 'warning',
  }

  return (
    <Box>
      {/* <LoadingScreen type="fallback" /> */}
      <Box
        css={{
          height: 400,
          backgroundColor: theme.colors.blue.main,
        }}
      >
        <Box css={{ height: 400, backgroundColor: theme.colors.red.main }}></Box>
      </Box>

      <SearchForm onSubmit={handleSubmit(onSubmit)} onReset={onReset}>
        <Chip color="#dd9c4f">spokdopk</Chip>

        <Chip color="#dd9c4f" size="sm">
          spokdopk
        </Chip>

        <Chip color="#006CE8" size="lg" shape="rounded" variant="outlined">
          spokdopkasdsadas
        </Chip>

        <Chip
          color="#dd9c4f"
          onClick={() => {
            setIsOpen1(true)
          }}
        >
          첫번째 모달 열기
        </Chip>
        {/* <ToastContainer position="top-right" containerId={'main'} enableMultiContainer /> */}

        <Chip
          color={theme.colors.red.main}
          shape="rounded"
          onClick={() => {
            addToast(popupSample1)
            // notify()
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

        <TextInput value="123" css={{ marginBottom: 24 }} />

        <DatePicker
          value={DateTime.now()}
          onChange={() => {
            return null
          }}
          anchorOrigin={{ vertical: 'top' }}
        />

        <TextInput
          value="123"
          disabled={true}
          css={{ marginBottom: 24 }}
          helperText="!@312312321"
        />

        <RadioButton
          size="sm"
          checked={false}
          onChange={(value) => {
            console.log(value)
          }}
        />

        <RadioButton
          size="md"
          checked={true}
          onChange={(value) => {
            console.log(value)
          }}
        />

        <RadioButton
          size="lg"
          disabled={true}
          checked={false}
          onChange={(value) => {
            console.log(value)
          }}
        />

        <Select
          options={[]}
          value="1"
          onChange={() => {
            return null
          }}
        />

        <Grid cols={3} spacing="lg" itemWidth={200}></Grid>
      </SearchForm>

      {isOpen1 && (
        <Modal1 show={isOpen1} onClose={() => setIsOpen1(false)}>
          Modal1
        </Modal1>
      )}
      <Table
        data={DATA}
        columns={COLUMNS}
        withCheckbox={true}
        onRowClick={(row) => {
          alert('12312321')
        }}
      />

      <Table
        data={DATA}
        columns={COLUMNS}
        withCheckbox={true}
        onRowClick={(row) => {
          alert('12312321')
        }}
      />
      <Table
        data={DATA}
        columns={COLUMNS}
        withCheckbox={true}
        onRowClick={(row) => {
          alert('12312321')
        }}
      />
      <Table
        data={DATA}
        columns={COLUMNS}
        withCheckbox={true}
        onRowClick={(row) => {
          alert('12312321')
        }}
      />
      <Table
        data={DATA}
        columns={COLUMNS}
        withCheckbox={true}
        onRowClick={(row) => {
          alert('12312321')
        }}
      />
      <Table
        data={DATA}
        columns={COLUMNS}
        withCheckbox={true}
        onRowClick={(row) => {
          alert('12312321')
        }}
      />
      <Table
        data={DATA}
        columns={COLUMNS}
        withCheckbox={true}
        onRowClick={(row) => {
          alert('12312321')
        }}
      />
      <Table
        data={DATA}
        columns={COLUMNS}
        withCheckbox={true}
        onRowClick={(row) => {
          alert('12312321')
        }}
      />
      <Table
        data={DATA}
        columns={COLUMNS}
        withCheckbox={true}
        onRowClick={(row) => {
          alert('12312321')
        }}
      />
      <Table
        data={DATA}
        columns={COLUMNS}
        withCheckbox={true}
        onRowClick={(row) => {
          alert('12312321')
        }}
      />
    </Box>
  )
}
