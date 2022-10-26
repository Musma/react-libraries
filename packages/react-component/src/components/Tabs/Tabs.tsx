import { PropsWithChildren } from 'react'

import { useTheme } from '@emotion/react'

import { useTabContext } from './TabContext'

export const Tabs = ({ children }: PropsWithChildren) => {
  const theme = useTheme()
  const { variant } = useTabContext({ name: 'Tabs' })

  return (
    <ul
      css={[
        { display: 'flex', alignItems: 'center', margin: 0, padding: 0 },
        variant === 'hat' && { borderBottom: `1px solid ${theme.colors.gray.darker}` },
      ]}
    >
      {children}
    </ul>
  )
}
