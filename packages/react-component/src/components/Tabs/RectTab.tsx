import { css, cx } from '@emotion/css'
import { useTheme } from '@emotion/react'

import { Typography } from 'src/components'

import { TabProps } from './types'

export const RectTab = ({ title, selectedTab, setSelectedTab }: TabProps) => {
  const theme = useTheme()

  return (
    <li
      className={cx(
        css({ cursor: 'pointer', borderBottom: '1px solid', padding: '10px 24px' }),

        {
          [css({ borderBottomColor: theme.color.gray.darker })]: title !== selectedTab,
        },
        {
          [css({ borderBottomColor: theme.color.blue.main })]: title === selectedTab,
        },
      )}
      onClick={() => setSelectedTab(title)}
    >
      <Typography
        type="subTitle2"
        className={css({
          color: title === selectedTab ? theme.color.blue.main : theme.color.gray.darker,
        })}
      >
        {title}
      </Typography>
    </li>
  )
}
