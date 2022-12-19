import { useTheme } from '@emotion/react'
import { AddIcon, FillAddBoxIcon } from '@musma/react-icons'
import { useDetectCapsLock, usePagination } from '@musma/react-utils'
import { DateTime } from 'luxon'

import { Box } from 'src/elements'

import { Button, DatePicker, Select, Table, Textarea, TextInput, Typography } from './components'

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
]

export const Component = () => {
  const theme = useTheme()
  const { activeCapsLock } = useDetectCapsLock()

  const pagination = usePagination({ fetch: () => {} })

  return (
    <Box css={{ padding: theme.spacingUtil(100) }}>
      <Textarea rows={10} disabled={false} css={{ marginBottom: 16 }} />
      <TextInput
        type="text"
        autoComplete="email"
        css={{ marginBottom: 16 }}
        startAdornment={<Typography>K12312312g</Typography>}
        endAdornment={FillAddBoxIcon}
        placeholder="1230812309218309128309 입력하세요"
      />
      <TextInput
        value="12309128309128"
        size="sm"
        type="password"
        disabled={true}
        css={{ marginBottom: 16 }}
      />
      {activeCapsLock ? '활성' : '비활성'}
      <Select
        options={options}
        value={'1'}
        onChange={() => {
          return null
        }}
        css={{ marginBottom: 16 }}
      />
      <Select
        disabled={true}
        options={options}
        value={'1'}
        onChange={() => {
          return null
        }}
        css={{ marginBottom: 16 }}
      />

      <Button size="sm" variant="outlined" startIcon={AddIcon}>
        paoskdpoaskdopaskdpoasdk
      </Button>

      <Button size="sm" variant="contained" startIcon={AddIcon}>
        paoskdpoaskdopaskdpoasdk
      </Button>

      <DatePicker
        // disabled={true}
        value={DateTime.now()}
        anchorOrigin={{ vertical: 'bottom' }}
        onChange={() => {
          return null
        }}
      />

      <Table data={DATA} columns={COLUMNS} withCheckbox={true} pagination={pagination.pagination} />
    </Box>
  )
}
