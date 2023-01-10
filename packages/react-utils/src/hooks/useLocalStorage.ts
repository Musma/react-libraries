import { useState } from 'react'

import { isBrowser } from 'src/utils'

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    // SSR 환경이면 initialValue 값 리턴
    if (!isBrowser) {
      return initialValue
    }

    try {
      /**
       * 로컬스토리지에서 key 값으로 값을 받아와 객체로 만들어 리턴
       */
      const item = window.localStorage.getItem(key)
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      /**
       * 에러발생 시 initalValue 리턴
       */
      console.error(error)
      return initialValue
    }
  })

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value
      // Save state
      setStoredValue(() => valueToStore)
      // Window 객체가 있을 때
      if (isBrowser) {
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      }
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.error(error)
    }
  }

  return [storedValue, setValue] as const
}
