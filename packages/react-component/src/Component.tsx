import { Fragment } from 'react'
import { Controller } from 'react-hook-form'

import { useTheme } from '@emotion/react'
import { useFormSearch } from '@musma/react-utils'
import { DateTime } from 'luxon'

import { Card, DatePicker, Grid, SearchForm } from './components'

const Component = () => {
  const theme = useTheme()
  const { control, onSubmit, handleSubmit, getValues } = useFormSearch({
    useFormProps: {
      defaultValues: {
        date: DateTime.now().setZone('Asia/Seoul').toISO(),
        defaultRangeDate: [
          DateTime.now().setZone('Asia/Seoul').toISO(),
          DateTime.now().setZone('Asia/Seoul').toISO(),
        ],
        nullRangeDate: [null, null],
      },
    },

    fetchAPI() {
      const { date, defaultRangeDate, nullRangeDate } = getValues()
      if (date) {
        console.log('date', date)
      }
      if (defaultRangeDate) {
        console.log('defaultRangeDate', defaultRangeDate)
      }
      if (nullRangeDate.length > 0) {
        console.log('nullRangeDate', nullRangeDate)
      }
    },
  })

  return (
    <Fragment>
      <Card css={{ padding: 120 }}>
        <SearchForm onSubmit={handleSubmit(onSubmit)}>
          <Grid
            itemWidth={200}
            cols={3}
            css={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              columnGap: theme.spacing.sm,
            }}
          >
            {/* DatePicker 기본 타입 */}
            <Controller
              name="date"
              control={control}
              render={({ field: { ...rest } }) => {
                return <DatePicker label="기본 타입" {...rest} />
              }}
            />

            {/* DatePicker 레인지 타입 (defaultValue O) */}
            <Controller
              name="defaultRangeDate"
              control={control}
              render={({ field: { value, ...rest } }) => {
                const [startDate, endDate] = value
                return (
                  <DatePicker
                    label="레인지 타입(디폴트 o)"
                    startDate={startDate}
                    endDate={endDate}
                    selectRange={true}
                    {...rest}
                  />
                )
              }}
            />

            {/* DatePicker 레인지 타입 (defaultValue X) */}
            <Controller
              name="nullRangeDate"
              control={control}
              render={({ field: { value, ...rest } }) => {
                const [startDate, endDate] = value ?? [null, null]

                return (
                  <DatePicker
                    label="레인지 타입(디폴트 x)"
                    startDate={startDate}
                    endDate={endDate}
                    selectRange={true}
                    {...rest}
                  />
                )
              }}
            />
          </Grid>
        </SearchForm>
      </Card>
    </Fragment>
  )
}

export default Component
