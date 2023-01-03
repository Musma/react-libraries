import { useTheme } from '@emotion/react'
import {
  AddIcon,
  FillAddBoxIcon,
  FillInformationIcon,
  OutlineCloudyIcon,
  OutlineTextIcon,
  OutlineEarthIcon,
} from '@musma/react-icons'
import { useDetectCapsLock, usePagination } from '@musma/react-utils'
import { DateTime } from 'luxon'

import { Box } from 'src/elements'

import {
  Button,
  Card,
  DatePicker,
  Grid,
  Select,
  Table,
  Textarea,
  TextInput,
  Tooltip,
  Typography,
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
    <Box
      css={{
        padding: theme.spacingUtil(100),
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing.md,
      }}
    >
      <Textarea rows={10} disabled={false} />

      <TextInput
        type="text"
        autoComplete="email"
        startAdornment={<Typography>K12312312g</Typography>}
        endAdornment={FillAddBoxIcon}
        placeholder="1230812309218309128309 입력하세요"
      />

      <TextInput value="12309128309128" size="sm" type="password" disabled={true} />

      {activeCapsLock ? '활성' : '비활성'}

      <Select
        options={options}
        value={'1'}
        onChange={() => {
          return null
        }}
      />

      <Select
        disabled={true}
        options={options}
        value={'1'}
        onChange={() => {
          return null
        }}
      />

      <Button size="sm" variant="outlined" startIcon={AddIcon}>
        Outlined Button with startIcon
      </Button>

      <Button size="sm" variant="contained" startIcon={AddIcon}>
        Contained Button with startIcon
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

      <Grid cols={2} spacing="md">
        <Card
          css={{
            display: 'flex',
            gap: theme.spacing.sm,
            padding: theme.spacing.md,
            alignItems: 'center',
          }}
        >
          <Typography type="body2">Tooltip(React Node)</Typography>

          <Tooltip
            position="top"
            width={200}
            message={
              <Box
                css={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: theme.spacing.sm,
                  textAlign: 'left',
                  paddingLeft: theme.spacing.sm,
                  paddingRight: theme.spacing.sm,
                  paddingTop: 4,
                  paddingBottom: 4,
                }}
              >
                <Typography type="subTitle2" css={{ color: theme.colors.white.main }}>
                  Tooltip title
                </Typography>

                <Box css={{ display: 'flex', gap: theme.spacing.sm, alignItems: 'center' }}>
                  <OutlineCloudyIcon color={theme.colors.white.main} />

                  <Typography
                    type="body3"
                    css={{ display: 'flex', color: theme.colors.white.main }}
                  >
                    OutlineCloudyIcon
                  </Typography>
                </Box>

                <Box css={{ display: 'flex', gap: theme.spacing.sm, alignItems: 'center' }}>
                  <OutlineTextIcon color={theme.colors.white.main} />

                  <Typography
                    type="body3"
                    css={{ display: 'flex', color: theme.colors.white.main }}
                  >
                    OutlineTextIcon
                  </Typography>
                </Box>

                <Box css={{ display: 'flex', gap: theme.spacing.sm, alignItems: 'center' }}>
                  <OutlineEarthIcon color={theme.colors.white.main} />

                  <Typography
                    type="body3"
                    css={{ display: 'flex', color: theme.colors.white.main }}
                  >
                    OutlineEarthIcon
                  </Typography>
                </Box>
              </Box>
            }
          >
            <FillInformationIcon color={theme.colors.green.main} css={{ width: 16, height: 16 }} />
          </Tooltip>
        </Card>

        <Card
          css={{
            display: 'flex',
            gap: theme.spacing.sm,
            padding: theme.spacing.md,
            alignItems: 'center',
          }}
        >
          <Typography type="body2">Tooltip(String)</Typography>

          <Tooltip position="top" width={80} message="Tooltip">
            <FillInformationIcon color={theme.colors.green.main} css={{ width: 16, height: 16 }} />
          </Tooltip>
        </Card>
      </Grid>
    </Box>
  )
}
