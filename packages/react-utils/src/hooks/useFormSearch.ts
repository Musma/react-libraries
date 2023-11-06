import { useEffect } from 'react'
import { DefaultValues, useForm, UseFormProps } from 'react-hook-form'

import { useLocationState } from './useLocationState'
import { INIT_PAGEABLE, Pageable, usePagination } from './usePagination'

type FormState<T> = {
  formValues?: T
  pageable?: Pageable
}

interface UseFormSearchProps<T extends object> {
  shouldRefetchOnReset?: boolean
  replace?: boolean
  initPageable?: Pageable
  formStateKey?: string
  useFormProps: UseFormProps<T>
  fetchAPI: () => void
}

export const useFormSearch = <T extends object>({
  shouldRefetchOnReset = true,
  replace,
  initPageable = INIT_PAGEABLE,
  formStateKey = 'formState',
  useFormProps,
  fetchAPI,
}: UseFormSearchProps<T>) => {
  const [formState, setFormState] = useLocationState<FormState<T>>({
    key: formStateKey,
    initialState: {},
  })

  const form = useForm<T>({
    ...useFormProps,
  })

  const { setPageable, pagination, pageable } = usePagination({
    fetchAPI,
    initPageable,
  })

  const onSubmit = () => {
    setPageable((pageable) => ({ ...pageable, page: 1 }))
    setFormState((formState) => ({ ...formState, formValues: form.getValues() }), replace)
  }

  const onReset = () => {
    setFormState(() => ({}), replace)
    form.reset({ ...useFormProps.defaultValues } as DefaultValues<T>)

    if (shouldRefetchOnReset) {
      setPageable((_pageable) => ({ ..._pageable, page: 1 }))
    }
  }

  useEffect(() => {
    form.reset({
      ...useFormProps.defaultValues,
      ...formState.formValues,
    } as DefaultValues<T>)
  }, [])

  useEffect(() => {
    const pageable = formState.pageable
    if (pageable) {
      setPageable(() => pageable)
    }
  }, [])

  useEffect(() => {
    if (pageable !== initPageable) {
      setFormState(
        (formState) => ({
          ...formState,
          pageable,
        }),
        replace,
      )
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
