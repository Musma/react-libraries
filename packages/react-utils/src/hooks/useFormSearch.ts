import { useEffect } from 'react'
import { DeepPartial, useForm, UseFormProps } from 'react-hook-form'

import { useLocationState } from './useLocationState'
import { INIT_PAGEABLE, Pageable, usePagination } from './usePagination'

type FormState<T> = {
  formValues?: T
  pageable?: Pageable
}

interface UseFormSearchProps<T extends object> {
  isResetOnSubmit?: boolean
  useFormProps: UseFormProps<T>
  fetchAPI: () => void
}

export const useFormSearch = <T extends object>({
  isResetOnSubmit = false,
  useFormProps,
  fetchAPI,
}: UseFormSearchProps<T>) => {
  const [formState, setFormState] = useLocationState<FormState<T>>({
    key: 'formState',
    initialState: {},
  })

  const form = useForm<T>({
    ...useFormProps,
  })

  const { setPageable, pagination, pageable } = usePagination({
    fetchAPI,
  })

  const onSubmit = () => {
    setPageable((_pageable) => ({ ..._pageable, page: 1 }))
    setFormState((formState) => ({ ...formState, formValues: form.getValues() }))
  }

  const onReset = () => {
    if (!isResetOnSubmit) {
      setPageable((_pageable) => ({ ..._pageable, page: 1 }))
      setFormState(() => ({}))
      form.reset({ ...useFormProps.defaultValues } as DeepPartial<T>)
      fetchAPI()
      return
    }

    form.reset({ ...useFormProps.defaultValues } as DeepPartial<T>)
    setFormState(() => ({}))
  }

  useEffect(() => {
    form.reset({
      ...useFormProps.defaultValues,
      ...formState.formValues,
    } as DeepPartial<T>)
  }, [])

  useEffect(() => {
    const pageable = formState.pageable
    if (pageable) {
      setPageable(() => pageable)
    }
  }, [])

  useEffect(() => {
    if (pageable !== INIT_PAGEABLE) {
      setFormState((formState) => ({
        ...formState,
        pageable,
      }))
    }
  }, [pageable])

  return {
    pagination,
    pageable,
    onSubmit,
    onReset,
    ...form,
  }
}
