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
  const { formValues, setFormDataQueryParams, setPageableQueryParams } = useQueryParams()

  const form = useForm<T>({
    ...useFormProps,
    defaultValues: {
      ...useFormProps.defaultValues,
      formValues,
    } as DeepPartial<T>,
  })

  const { pageable, pagination } = usePagination({
    fetch: () => {
      fetchAPI()
      setPageableQueryParams({ ...pageable })
    },
  })

  const onSubmit: SubmitHandler<T> = (data: T) => {
    fetchAPI()
    setFormDataQueryParams(data as Record<string, string>)
  }

  return {
    onSubmit,
    pagination,
    ...form,
  }
}
