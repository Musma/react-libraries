import { useEffect, useState } from 'react'

import { KEY_DOPWN, KEY_UP } from 'src/constants'
import { isBrowser } from 'src/utils'

/**
 * @description
 * Caps Lock 이 활성화 여부를 알 수 있는 Hook
 *
 */
export const useDetectCapsLock = () => {
  const [activeCapsLock, setCapsLock] = useState(false)

  const checkCapsLock = (event: KeyboardEvent) => {
    if (event.getModifierState('CapsLock')) {
      setCapsLock(true)
      return
    }
    setCapsLock(false)
  }

  useEffect(() => {
    if (isBrowser) {
      window.addEventListener(KEY_UP, checkCapsLock)
      window.addEventListener(KEY_DOPWN, checkCapsLock)
    }
    return () => {
      window.removeEventListener(KEY_UP, checkCapsLock)
      window.removeEventListener(KEY_DOPWN, checkCapsLock)
    }
  }, [])

  return {
    activeCapsLock,
  }
}
