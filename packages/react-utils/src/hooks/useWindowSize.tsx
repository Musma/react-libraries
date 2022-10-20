import { useEffect, useState } from 'react'

import { debounce } from 'lodash-es'

/**
 *
 * @description: 브라우저의 width, height를 가져올 수 있습니다.
 */
export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  /**
   * debounce
   * 이벤트를 그룹화해 특정 시간이 지난 후, 하나의 이벤트만 발생하도록 하는 기술, 즉, 연이어 호출되는 함수들 중 마지막 혹은 제일 처음만 호출하도록 하는 것이다.
   */
  useEffect(() => {
    const handleResize = debounce(() => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }, 1000)

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return { windowSize }
}
