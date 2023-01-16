import { useEffect, useState } from 'react'

interface UseKeyPressProps {
  targetKey: string
}

export const useKeyPress = ({ targetKey }: UseKeyPressProps) => {
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
    window.addEventListener('keydown', downHandler)
    window.addEventListener('keyup', upHandler)
    // 언트마운트 시 이벤트 제거
    return () => {
      window.removeEventListener('keydown', downHandler)
      window.removeEventListener('keyup', upHandler)
    }
  }, [])

  return keyPressed
}
