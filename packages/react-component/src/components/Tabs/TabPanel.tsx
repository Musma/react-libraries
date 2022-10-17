import { Fragment, PropsWithChildren } from 'react'

import { useTabContext } from './TabContext'

interface PanelProps extends PropsWithChildren {
  value: string | number
}

export const TabPanel = ({ value, children }: PanelProps) => {
  const { currentTab } = useTabContext({ name: 'TabPanel' })
  return value === currentTab ? <Fragment>{children}</Fragment> : <Fragment />
}
