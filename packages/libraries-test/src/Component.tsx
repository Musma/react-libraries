import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { useTheme } from '@emotion/react'
import { Box, Form, TextInput } from '@musma/react-component'

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
    </Box>
  )
}
