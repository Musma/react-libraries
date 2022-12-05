import { useEffect, useRef } from 'react'

import { useIsomorphicLayoutEffect } from 'src/hooks'

export const useInterval = (callback: () => void, delay: number) => {
  const savedCallback = useRef(callback)

  // Remember the latest callback if it changes.
  useIsomorphicLayoutEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // 타이머 실행
  useEffect(() => {
    const timer = setInterval(() => savedCallback.current(), delay)

    return () => {
      clearInterval(timer)
    }
  }, [])
}
