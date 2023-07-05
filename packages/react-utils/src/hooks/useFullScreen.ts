import { useEffect, useState } from 'react'

/**
 * @description
 * 브라우저 풀스크린을 제어할 수 있는 Hook 입니다.
 */
export const useFullScreen = () => {
  const [isFullScreen, setFullScreen] = useState(Boolean(document.fullscreenElement))

  // onClick 이벤트에 넣으세요
  const toggleFullScreen = () => {
    if (document.fullscreenElement) {
      // 전체모드 해제
      document.exitFullscreen()
      setFullScreen(false)
      return
    }

    // 전체모드 실행
    document.documentElement.requestFullscreen()
    setFullScreen(true)
  }

  // 전체모드 실행될 때 + 사용자가 전체모드 이벤트를 사용할 때,
  useEffect(() => {
    const fullscreenchangeHandler = () => {
      setFullScreen(Boolean(document.fullscreenElement))
    }

    window.addEventListener('fullscreenchange', fullscreenchangeHandler)
    return () => window.removeEventListener('fullscreenchange', fullscreenchangeHandler)
  }, [])

  return [isFullScreen, toggleFullScreen] as const
}
