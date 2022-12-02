import { useTheme } from '@emotion/react'
import { useFormSearch, useToggle } from '@musma/react-utils'
import { DateTime } from 'luxon'

import { Box } from 'src/elements'

import { Grid, RadioButton, SearchForm, Table, TextInput } from './components'
import { Chip } from './components/Chip'
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

  return (
    <Box>
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
          spokdopk
        </Chip>

        <TextInput value="123" css={{ marginBottom: 24 }} />

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
