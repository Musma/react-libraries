import { HTMLAttributes, ReactNode } from 'react'

import { Box } from 'src/elements'

import { useTabContext } from './TabContext'

interface TabPanelProps extends HTMLAttributes<HTMLDivElement> {
  value: string | number
  children?: ReactNode
}

export const TabPanel = ({ value, children, ...rest }: TabPanelProps) => {
  const { value: tabValue } = useTabContext({ name: 'TabPanel' })
  return (
    <Box role="tabpanel" {...rest}>
      {tabValue === value && children}
    </Box>
  )
}
