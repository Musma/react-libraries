import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { useTheme } from '@emotion/react'
import { Box, Form, Table, TableColumn, TableData, TextInput } from '@musma/react-component'

type CCC = {
  aaa: string
}

const AAA = [
  {
    label: '000',
    value: 1,
  },
  {
    label: '222',
    value: 2,
  },
]

const TABLE_COLUMNS: TableColumn[] = [
  {
    columnLabel: 'No',
    columnName: 'no',
  },
  {
    columnLabel: '이름',
    columnName: 'name',
  },
]

interface TableRowData extends TableData {
  no: number
  name: string
}

export const Component = () => {
  const theme = useTheme()

  const [showSpinner, setSpinner] = useState(false)
  const [showDrawer, setDrawer] = useState(false)
  const [test, setTest] = useState('')

  const { control } = useForm<CCC>({
    defaultValues: {
      aaa: '111',
    },
  })

  const handleRowClick = (rowData: TableRowData) => {
    console.log('테이블 row 클릭!')
  }

  return (
    <Box>
      <Box
        css={{
          display: 'grid',
          padding: 24,
          gridTemplateRows: 'auto',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 24,
        }}
      >
        <Form>
          <Controller
            name={'aaa'}
            control={control}
            rules={{ required: true }}
            render={({ field }) => <TextInput placeholder="NN" {...field} />}
          />
        </Form>

        <TextInput
          value={test}
          onChange={(e) => {
            setTest(e.target.value)
          }}
        />
      </Box>

      <Table
        data={[
          {
            id: '1',
            no: 1,
            name: '아무개',
          },
          {
            id: '2',
            no: 2,
            name: '길동',
          },
        ]}
        onRowClick={handleRowClick}
        columns={TABLE_COLUMNS}
      />
    </Box>
  )
}

export default Component
