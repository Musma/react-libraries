import { useEffect, useState } from 'react'

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
    } else {
      setCapsLock(false)
    }
  }

  useEffect(() => {
    if (isBrowser) {
      window.addEventListener('keydown', checkCapsLock)
    }
    return () => {
      window.removeEventListener('keydown', checkCapsLock)
    }
  }, [])

  return {
    activeCapsLock,
  }
}
