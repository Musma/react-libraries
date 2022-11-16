import { DeepPartial, SubmitHandler, useForm, UseFormProps } from 'react-hook-form'

import { usePagination } from './usePagination'
import { useQueryParams } from './useQueryParams'

interface UseFormSearchProps<T extends object> {
  useFormProps: UseFormProps<T>
  fetchAPI: () => void
}

export const useFormSearch = <T extends object>({
  useFormProps,
  fetchAPI,
}: UseFormSearchProps<T>) => {
  const { queryFormValues, queryPageable, setFormDataQueryParams, setPageableQueryParams } =
    useQueryParams()

  const form = useForm<T>({
    ...useFormProps,
    defaultValues: {
      ...useFormProps.defaultValues,
      ...queryFormValues,
    } as DeepPartial<T>,
  })

  const { pagination, pageable } = usePagination({
    initPageable: queryPageable,
    fetch: () => {
      fetchAPI()
      setPageableQueryParams(pageable)
    },
  })

  const onSubmit: SubmitHandler<T> = (data: T) => {
    fetchAPI()
    setFormDataQueryParams(data as Record<string, string>)
  }

  const onReset = () => {
    form.reset({ ...useFormProps.defaultValues } as DeepPartial<T>)
    setFormDataQueryParams({})
  }

  return {
    onSubmit,
    onReset,
    pagination,
    ...form,
  }
}
