import { useCallback, useEffect, useState } from 'react'

/**
 * @description
 * 브라우저 풀스크린을 제어할 수 있는 Hook 입니다.
 */
export const useFullScreen = () => {
  const [isFullScreen, setFullScreen] = useState(Boolean(document.fullscreenElement))

  const toggleFullScreen = useCallback(() => {
    if (isFullScreen) {
      if (document.fullscreenElement) {
        document.exitFullscreen()
      }
    } else {
      document.documentElement.requestFullscreen()
    }

    setFullScreen((cur) => !cur)
  }, [isFullScreen])

  useEffect(() => {
    const fullscreenchangeHandler = () => {
      if (document.fullscreenElement) {
        setFullScreen(true)
      } else {
        setFullScreen(false)
      }
    }
    window.addEventListener('fullscreenchange', fullscreenchangeHandler)
    return () => window.removeEventListener('fullscreenchange', fullscreenchangeHandler)
  }, [])

  return [isFullScreen, toggleFullScreen] as const
}
