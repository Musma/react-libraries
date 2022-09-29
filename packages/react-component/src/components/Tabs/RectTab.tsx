import { useTheme } from '@emotion/react'

import { Typography } from 'src/components'

import { TabProps } from './types'

export const RectTab = ({ title, selectedTab, setSelectedTab }: TabProps) => {
  const theme = useTheme()

  return (
    <li
      css={{
        cursor: 'pointer',
        borderBottom: '1px solid',
        padding: '10px 24px',
        borderBottomColor: title === selectedTab ? theme.color.blue.main : theme.color.gray.darker,
      }}
      onClick={() => setSelectedTab(title)}
    >
      <Typography
        type="subTitle2"
        css={{
          color: title === selectedTab ? theme.color.blue.main : theme.color.gray.darker,
        }}
      >
        {title}
      </Typography>
    </li>
  )
}
