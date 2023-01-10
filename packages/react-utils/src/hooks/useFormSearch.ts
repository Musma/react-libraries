import { DeepPartial, useForm, UseFormProps } from 'react-hook-form'

import { useLocationState } from './useLocationState'
import { Pageable, usePagination } from './usePagination'

type FormState<T> = {
  formValues?: T
  pageable?: Pageable
}

interface UseFormSearchProps<T extends object> {
  useFormProps: UseFormProps<T>
  fetchAPI: () => void
}

export const useFormSearch = <T extends object>({
  useFormProps,
  fetchAPI,
}: UseFormSearchProps<T>) => {
  const [formState, setFormState] = useLocationState<FormState<T>>({
    key: 'formState',
    initialState: {},
  })

  const form = useForm<T>({
    ...useFormProps,
    defaultValues: {
      ...useFormProps.defaultValues,
      ...formState.formValues,
    } as DeepPartial<T>,
  })

  const { setPageable, pagination, pageable } = usePagination({
    fetchAPI,
  })

  const onSubmit = () => {
    setFormState(() => ({ ...formState, formValues: form.getValues() }))
    setPageable((_pageable) => ({ ..._pageable, page: 1 }))
  }

  const onReset = () => {
    setFormState(() => ({}))
    form.reset({ ...useFormProps.defaultValues } as DeepPartial<T>)
  }

  return {
    pagination,
    pageable,
    onSubmit,
    onReset,
    ...form,
  }
}
