import { useEffect, useState } from 'react'

import { KeyboardEvents } from 'src/constants'

export const useKeyPress = (targetKey: string) => {
  const [keyPressed, setKeyPressed] = useState<boolean>(false)
  // If pressed key is our target key then set to true
  const downHandler = ({ key }: { key: string }) => {
    if (key === targetKey) {
      setKeyPressed(true)
    }
  }
  // If released key is our target key then set to false
  const upHandler = ({ key }: { key: string }) => {
    if (key === targetKey) {
      setKeyPressed(false)
    }
  }

  // 마운트 시 이벤트 추가
  useEffect(() => {
    window.addEventListener(KeyboardEvents.KEY_UP, upHandler)
    window.addEventListener(KeyboardEvents.KEY_DOWN, downHandler)
    // 언트마운트 시 이벤트 제거
    return () => {
      window.removeEventListener(KeyboardEvents.KEY_UP, upHandler)
      window.removeEventListener(KeyboardEvents.KEY_DOWN, downHandler)
    }
  }, [])

  return keyPressed
}
