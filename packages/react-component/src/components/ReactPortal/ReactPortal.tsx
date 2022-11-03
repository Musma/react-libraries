import { ReactNode, useLayoutEffect, useState } from 'react'
import { createPortal } from 'react-dom'

interface ReactPortalProps {
  wrapperId?: string
  children?: ReactNode
}

function createElementAndAppendToBody(wrapperId: string) {
  const wrapperElement = document.createElement('div')
  wrapperElement.setAttribute('id', wrapperId)
  document.body.appendChild(wrapperElement)
  return wrapperElement
}

export const ReactPortal = ({ wrapperId = 'react-portal', children }: ReactPortalProps) => {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(null)

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId)
    let systemCreated = false
    // if element is not found with wrapperId or wrapperId is not provided,
    // create and append to body
    if (!element) {
      systemCreated = true
      element = createElementAndAppendToBody(wrapperId)
    }

    document.body.style.overflow = 'hidden'

    setWrapperElement(element)

    return () => {
      // delete the programatically created element
      if (systemCreated && element?.parentNode) {
        element.parentNode.removeChild(element)
      }

      document.body.style.overflow = ''
    }
  }, [wrapperId])

  // wrapperElement state will be null on very first render.
  if (wrapperElement === null) {
    return null
  }

  return createPortal(children, wrapperElement)
}
