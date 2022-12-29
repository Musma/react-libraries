import { DeepPartial, useForm, UseFormProps } from 'react-hook-form'

import { usePagination, useQueryParams } from 'src/hooks'

interface UseFormSearchProps<T extends object> {
  useFormProps: UseFormProps<T>
  fetchAPI: () => void
}

export const useFormSearch = <T extends object>({
  useFormProps,
  fetchAPI,
}: UseFormSearchProps<T>) => {
  const {
    queryFormValues,
    queryPageable,
    setFormDataQueryParams,
    clearQueryParams,
    setPageableQueryParams,
  } = useQueryParams()

  const form = useForm<T>({
    ...useFormProps,
    defaultValues: {
      ...useFormProps.defaultValues,
      ...queryFormValues,
    } as DeepPartial<T>,
  })

  const { pagination, pageable, setPageable } = usePagination({
    initPageable: queryPageable,
    fetch: () => {
      fetchAPI()
      setPageableQueryParams(pageable)
    },
  })

  const onSubmit = () => {
    setPageable((_pageable) => ({ ..._pageable, page: 1 }))
    fetchAPI()
    setFormDataQueryParams(form.getValues() as Record<string, string>)
  }

  const onReset = () => {
    form.reset({ ...useFormProps.defaultValues } as DeepPartial<T>)
    clearQueryParams()
  }

  return {
    onSubmit,
    onReset,
    pagination,
    pageable,
    ...form,
  }
}
