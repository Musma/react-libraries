import { createRef } from 'react'

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
  ToastContainer,
} from './components'
import { Chip } from './components/Chip'
import { useToastContext } from './components/ToastPopup/ToastPopupContext'
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
  const { handleOpen } = useToastContext()
  const popupSample1: IToastPopupData = {
    id: uniqueId(),
    title: '에러났다 어쩔래',
    description: '어쩔어쩔어쩔어쩔어쩔',
    mode: 'dark',
    state: 'error',
    ref: createRef<HTMLDivElement>(),
  }
  const popupSample2: IToastPopupData = {
    id: uniqueId(),
    title: '잘했다임마',
    description: '굿 잘 됨',
    mode: 'light',
    state: 'success',
    ref: createRef<HTMLDivElement>(),
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
        <ToastContainer height="50px" />
        <Chip
          color={theme.colors.red.main}
          shape="rounded"
          onClick={() => {
            handleOpen(popupSample1)
          }}
        >
          토스트 팝업 1
        </Chip>
        <Chip
          color={theme.colors.green.main}
          shape="rounded"
          onClick={() => {
            handleOpen(popupSample2)
          }}
        >
          토스트 팝업 2
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
