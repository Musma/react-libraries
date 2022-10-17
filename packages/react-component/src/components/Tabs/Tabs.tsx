import { PropsWithChildren } from 'react'

import { useTabContext } from './TabContext'

export const Tabs = ({ children }: PropsWithChildren) => {
  const { variant } = useTabContext({ name: 'Tabs' })
  return (
    <ul
      css={[
        { display: 'flex', alignItems: 'center', margin: 0, padding: 0 },
        variant === 'hat'
          ? (theme) => ({ borderBottom: `1px solid ${theme.color.gray.darker}` })
          : {},
      ]}
    >
      {children}
    </ul>
  )
}
