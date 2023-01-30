import { Fragment } from 'react'
import { Controller } from 'react-hook-form'

import { useFormSearch } from '@musma/react-utils'
import { DateTime } from 'luxon'

import { DatePicker, Grid } from './components'

const Component = () => {
  const { control } = useFormSearch({
    useFormProps: {
      defaultValues: {
        date: DateTime.now(),
        range: [null, null],
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
          render={({ field: { value, onChange, ...rest } }) => {
            return <DatePicker label="일반" value={value} onChange={onChange} {...rest} />
          }}
        />

        <Controller
          name="range"
          control={control}
          render={({ field: { value, onChange, ...rest } }) => {
            const [startDate, endDate] = value ?? [null, null]
            return (
              <DatePicker
                label="레인지"
                startDate={startDate}
                endDate={endDate}
                onChange={onChange}
                selectRange={true}
                {...rest}
              />
            )
          }}
        />
      </Grid>
    </Fragment>
  )
}

export default Component
