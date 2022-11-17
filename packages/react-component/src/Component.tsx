import { useCallback, useState } from 'react'

import { Box } from 'src/elements'

import {
  Button,
  Modal,
  ModalActions,
  ModalButton,
  SearchForm,
  Select,
  Table,
  TextInput,
} from './components'

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

export const Component = () => {
  const [test, setTest] = useState(false)
  const toggleTest = useCallback(() => {
    setTest((value) => !value)
  }, [])

  return (
    <Box>
      <SearchForm>
        <TextInput />
        <TextInput />

        <TextInput />
        <Box />
        <TextInput />
        <TextInput />

        <Select options={[]} value="" onChange={() => undefined} />

        <Button
          onClick={() => {
            toggleTest()
          }}
        >
          apsokdapo
        </Button>

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
