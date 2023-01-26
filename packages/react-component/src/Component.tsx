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

  const { addToast, setLimit } = useToastContext()
  const popupSample1: IToastPopupData = {
    title: 'Error',
    description: 'This is a warning notice about copywriting.',
    mode: 'dark',
    type: 'error',
  }
  const popupSample2: IToastPopupData = {
    title: '잘했다임마',
    description: '굿 잘 됨',
    type: 'success',
  }
  const popupSample3: IToastPopupData = {
    title: '정보 팝업인데 정보 음슴 ㅋ',
    mode: 'dark',
  }
  const popupSample4: IToastPopupData = {
    title: '위험위허멍위험위험위험위험',
    type: 'warning',
  }

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
            const [startDate, endDate] = value ?? [null, null]

            return (
              <DateRangePicker
                startDate={startDate}
                endDate={endDate}
                onChange={(date) => onChange(date)}
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
