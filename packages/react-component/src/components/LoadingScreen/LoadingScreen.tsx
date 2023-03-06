import { Fragment } from 'react'

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
  loading?: boolean
}

/**
 * @description
 * API Fetching 시나 페이지 전환 시 나타나는 로딩 스크린입니다.
 */
export const LoadingScreen = ({ loading = false, type = 'fetching' }: LoadingScreenProps) => {
  if (type === 'fallback') {
    return (
      <Box
        css={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <ThreeDots />
      </Box>
    )
  }

  if (!loading) {
    return <Fragment />
  }

  return (
    <Backdrop>
      <ThreeDots />
    </Backdrop>
  )
}
