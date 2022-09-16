import { Fragment } from 'react'

import { css } from '@emotion/css'
import { useTheme } from '@emotion/react'

import { Typography } from 'src/components'

import { ReactComponent as CurveLeftIcon } from './images/curve_left.svg'
import { ReactComponent as CurveRightIcon } from './images/curve_right.svg'
import { TabProps } from './types'

export const HatTab = ({ title, selectedTab, setSelectedTab }: TabProps) => {
  const theme = useTheme()
  const inActive = (
    <Typography
      type="subTitle"
      variant="subTitle2"
      className={css({ padding: '10px 34px', color: theme.color.gray.darker })}
    >
      {title}
    </Typography>
  )
  const active = (
    <Fragment>
      <CurveLeftIcon />
      <Typography
        type="subTitle"
        variant="subTitle2"
        className={css({
          backgroundColor: theme.color.white.main,
          borderTop: `1px solid ${theme.color.gray.darker}`,
          padding: '10px 24px',
        })}
      >
        {title}
      </Typography>
      <CurveRightIcon />
    </Fragment>
  )

  return (
    <li
      className={css({ display: 'flex', height: '40px', cursor: 'pointer' })}
      onClick={() => setSelectedTab(title)}
    >
      {title === selectedTab ? active : inActive}
    </li>
  )
}
