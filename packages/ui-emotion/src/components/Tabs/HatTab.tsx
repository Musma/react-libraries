import { css } from '@emotion/css'
import { useTheme } from '@emotion/react'
import { Fragment } from 'react'

import { Typography } from 'src/components'
import { ReactComponent as TabLeftIcon } from './images/tab_left.svg'
import { TabProps } from './types'
import { ReactComponent as TabRightIcon } from './images/tab_right.svg'

export const HatTab = ({ title, selectedTab, setSelectedTab }: TabProps) => {
  const theme = useTheme()
  const inActive = (
    <Typography type="subTitle" variant="subTitle2" className={css({padding: '10px 34px', color: theme.color.gray.darker})}>
      {title}
    </Typography>
  )
  const active = (
    <Fragment>
      <TabLeftIcon />
      <Typography
        type="subTitle"
        variant="subTitle2"
        className={css({backgroundColor:theme.color.white.main, borderTop: `1px solid ${theme.color.gray.darker}`, padding: '10px 24px'})}
      >
        {title}
      </Typography>
      <TabRightIcon />
    </Fragment>
  )

  return (
    <li className={css({display:'flex', height: '40px', cursor: 'pointer'})} onClick={() => setSelectedTab(title)}>
      {title === selectedTab ? active : inActive}
    </li>
  )
}
