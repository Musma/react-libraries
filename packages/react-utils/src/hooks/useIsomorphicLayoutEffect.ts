import { useEffect, useLayoutEffect } from 'react'

import { isBrowser } from 'src/utils'

// SSR에서는 useLayoutEffect 사용해야함

/**
 *
 * @returns
 */
export const useIsomorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect
