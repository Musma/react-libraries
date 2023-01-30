import { Fragment } from 'react'
import { Controller } from 'react-hook-form'

import { useFormSearch } from '@musma/react-utils'

import { DateRangePicker, Grid } from './components'

const Component = () => {
  const { control } = useFormSearch({
    useFormProps: {
      defaultValues: {
        date: [null, null],
      },
    },

    fetchAPI() {
      //api
    },
  })

  return (
    <Fragment>
      <Grid
        itemWidth={200}
        cols={2}
        css={{
          position: 'absolute',
          left: '50%',
          top: '50%',
        }}
      >
        <Controller
          name="date"
          control={control}
          render={({ field }) => {
            return <DateRangePicker {...field} />
          }}
        />
      </Grid>
    </Fragment>
  )
}

export default Component
