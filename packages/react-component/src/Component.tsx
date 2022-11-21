import { useState } from 'react'

import { useTheme } from '@emotion/react'
import { useFormSearch } from '@musma/react-utils'
import { DateTime } from 'luxon'

import { Box } from 'src/elements'

import { Modal, ModalActions, ModalButton, SearchForm, Table } from './components'

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
  const theme = useTheme()
  const [test, setTest] = useState(false)
  const [date, setDate] = useState<DateTime>(DateTime.local())
  const [tab, setTab] = useState('1')

  const { handleSubmit, onSubmit, onReset, control } = useFormSearch<DDD>({
    useFormProps: {
      defaultValues: {
        date: DateTime.local().toISO(),
      },
    },
    fetchAPI() {
      console.log(';fetchposdkdspokpo')
    },
  })

  return (
    <Box>
      <SearchForm onSubmit={handleSubmit(onSubmit)} onReset={onReset}>
        <Modal
          size="lg"
          show={test}
          onClose={() => {
            setTest(!test)
          }}
          title="1231"
        >
          <ModalActions>
            <ModalButton>aspo[dkasopk]</ModalButton>
            <ModalButton>aspo[dkasopk]</ModalButton>
          </ModalActions>
        </Modal>
      </SearchForm>

      <Table
        data={DATA}
        columns={COLUMNS}
        onRowClick={(row) => {
          console.log(row)
        }}
      />
    </Box>
  )
}
