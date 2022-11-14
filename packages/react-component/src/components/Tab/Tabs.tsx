import {
  ReactNode,
  useRef,
  useState,
  Children,
  useEffect,
  useCallback,
  ReactElement,
  useMemo,
  HTMLAttributes,
} from 'react'

import { useTheme } from '@emotion/react'

import { Box } from 'src/elements'

import { Indicator } from './components'
import { TabProps } from './Tab'
import { useTabContext } from './TabContext'

interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
}

export const Tabs = ({ children, ...rest }: TabsProps) => {
  const theme = useTheme()
  const { value, variant } = useTabContext({ name: 'Tabs' })

  const [indicatorWidth, setIndicatorWidth] = useState(0)
  const [indicatorLeft, setIndicatorLeft] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  // 활성화된 Tab의 Index 알아내는 코드
  const activeTabIndex = useMemo(() => {
    const items = Children.map(children, (children) => {
      const item = children as ReactElement<TabProps>
      return item.props.value
    })

    if (items) {
      return items.indexOf(value)
    }
    return 0
  }, [children, value])

  // Indicator `width` 값 업데이트
  const updateIndicatorWidth = useCallback(() => {
    if (ref.current?.clientWidth) {
      setIndicatorWidth(ref.current?.clientWidth / Children.count(children))
    }
  }, [children])

  // Indicator `left` 값 업데이트
  const updateIndicatorLeft = useCallback(() => {
    if (ref.current?.clientWidth) {
      setIndicatorLeft((ref.current.clientWidth / Children.count(children)) * activeTabIndex)
    }
  }, [activeTabIndex, children])

  // 브라우저 크기가 바뀔때마다 Indicator의 width, left 값 업데이트
  useEffect(() => {
    window.addEventListener('resize', () => {
      updateIndicatorWidth()
      updateIndicatorLeft()
    })
    return () => {
      window.removeEventListener('resize', () => {
        updateIndicatorWidth()
        updateIndicatorLeft()
      })
    }
  })

  // ref -> current -> clientWidth 값 바뀔때 마다 Indicator의 width, left 값 업데이트
  useEffect(() => {
    updateIndicatorWidth()
    updateIndicatorLeft()
  }, [ref.current?.clientWidth, updateIndicatorLeft, updateIndicatorWidth])

  return (
    <Box
      role="tablist"
      css={{
        display: 'flex',
        backgroundColor: variant === 'rect' ? theme.colors.white.main : theme.colors.transparent,
        borderBottom: `1px solid ${theme.colors.gray.darker}`,
      }}
      {...rest}
    >
      <Box css={{ display: 'flex', position: 'relative' }} ref={ref}>
        {children}

        {variant === 'rect' && <Indicator width={indicatorWidth} left={indicatorLeft} />}
      </Box>
    </Box>
  )
}
