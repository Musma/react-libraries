import { HTMLAttributes, ReactNode } from 'react'

import { Box } from 'src/elements'

import { useTabContext } from './TabContext'

interface TabPanelProps<T> extends HTMLAttributes<HTMLDivElement> {
  value: T
  children?: ReactNode
}

export const TabPanel = <T extends string | number>({
  value,
  children,
  ...rest
}: TabPanelProps<T>) => {
  const { value: tabValue } = useTabContext({ name: 'TabPanel' })
  return (
    <Box role="tabpanel" {...rest}>
      {tabValue === value && children}
    </Box>
  )
}
