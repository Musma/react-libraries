import { useTheme } from '@emotion/react'
import { AddIcon, FillAddBoxIcon } from '@musma/react-icons'
import { useDetectCapsLock, useTab } from '@musma/react-utils'
import { DateTime } from 'luxon'

import { Box } from 'src/elements'

import {
  Button,
  DatePicker,
  DateRangePicker,
  Select,
  Tab,
  TabContainer,
  TabPanel,
  Tabs,
  Textarea,
  TextInput,
  Typography,
} from './components'

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
  const [tab, setTab] = useTab<string>({ initTabValue: '1' })

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

      <DateRangePicker
        onChange={() => {
          return null
        }}
      />

      <TabContainer value={tab} onTabValueChange={setTab}>
        <Tabs>
          <Tab value="1" label="22" />
          <Tab value="2" label="33" />
          <Tab value="3" label="1123123szadasxcvxcvxcv" />
          <Tab value="4" label="1cvbcvncn" />
        </Tabs>

        <TabPanel value="1"></TabPanel>
      </TabContainer>
    </Box>
  )
}
