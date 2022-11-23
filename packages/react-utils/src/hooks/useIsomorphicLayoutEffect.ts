import { useEffect, useLayoutEffect } from 'react'

// SSR에서는 useLayoutEffect 사용해야함

/**
 *
 * @returns
 */
export const useIsomorphicLayoutEffect = () => {
  return window !== undefined ? useLayoutEffect : useEffect
}
