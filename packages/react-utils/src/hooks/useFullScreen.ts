import { useCallback, useState } from 'react'

/**
 * @description
 * 브라우저 풀스크린을 제어할 수 있는 Hook 입니다.
 */
export const useFullScreen = () => {
  const [isFullScreen, setFullScreen] = useState(Boolean(document.fullscreenElement))

  const toggleFullScreen = useCallback(() => {
    if (isFullScreen) {
      document.exitFullscreen()
    } else {
      document.documentElement.requestFullscreen()
    }

    setFullScreen((value) => !value)
  }, [isFullScreen])

  return [isFullScreen, toggleFullScreen] as const
}
