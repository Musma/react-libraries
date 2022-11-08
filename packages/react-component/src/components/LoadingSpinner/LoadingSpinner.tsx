import { Backdrop, Spinner } from 'src/components'

export const LoadingSpinner = () => {
  return (
    <Backdrop>
      <Spinner size="lg" />
    </Backdrop>
  )
}
