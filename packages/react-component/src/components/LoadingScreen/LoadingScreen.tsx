import { Backdrop } from 'src/components'
import { Box } from 'src/elements'

import { ThreeDots } from './components'

interface LoadingScreenProps {
  /**
   * @value fallback
   * Route Suspense Fallback에 넣어서 사용합니다.
   *
   * @value fetching
   * API 요청 대기 시 사용합니다.
   */
  type?: 'fallback' | 'fetching'
}

export const LoadingScreen = ({ type = 'fetching' }: LoadingScreenProps) => {
  if (type === 'fallback') {
    return (
      <Box
        css={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <ThreeDots />
      </Box>
    )
  }

  return (
    <Backdrop>
      <ThreeDots />
    </Backdrop>
  )
}
