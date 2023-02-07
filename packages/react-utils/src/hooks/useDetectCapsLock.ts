import { useEffect, useState } from 'react'

import { KeyboardEvents } from 'src/constants'
import { isBrowser } from 'src/utils'

/**
 * @description
 * Caps Lock 이 활성화 여부를 알 수 있는 Hook
 *
 */
export const useDetectCapsLock = () => {
  const [activeCapsLock, setCapsLock] = useState(false)

  const checkCapsLock = (event: KeyboardEvent) => {
    if (event.getModifierState(KeyboardEvents.CAPS_LOCK)) {
      setCapsLock(true)
      return
    }
    setCapsLock(false)
  }

  useEffect(() => {
    if (isBrowser) {
      window.addEventListener(KeyboardEvents.KEY_UP, checkCapsLock)
      window.addEventListener(KeyboardEvents.KEY_DOWN, checkCapsLock)
    }
    return () => {
      window.removeEventListener(KeyboardEvents.KEY_UP, checkCapsLock)
      window.removeEventListener(KeyboardEvents.KEY_DOWN, checkCapsLock)
    }
  }, [])

  return {
    activeCapsLock,
  }
}
