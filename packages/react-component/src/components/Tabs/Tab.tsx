import { Fragment } from 'react'

import { Typography } from '../Typography'
import { ReactComponent as CurveLeftIcon } from './images/curve_left.svg'
import { ReactComponent as CurveRightIcon } from './images/curve_right.svg'
import { useTabContext } from './TabContext'
import { HandleTabClick, TabValue } from './types'

export interface TabProps {
  value: TabValue
  label: string
}

export const Tab = ({ label, value }: TabProps) => {
  const { variant, currentTab, handleTabClick } = useTabContext({ name: 'Tab' })
  if (variant === 'hat') {
    return (
      <HatTab currentTab={currentTab} handleTabClick={handleTabClick} label={label} value={value} />
    )
  }
  return (
    <RectTab currentTab={currentTab} handleTabClick={handleTabClick} label={label} value={value} />
  )
}

interface HatOrRectTabProps extends TabProps {
  currentTab: TabValue
  handleTabClick: HandleTabClick
}

const HatTab = ({ value, label, currentTab, handleTabClick }: HatOrRectTabProps) => {
  return (
    <li
      css={{ display: 'flex', height: 40, cursor: 'pointer' }}
      onClick={() => handleTabClick(value)}
    >
      {value === currentTab ? (
        <Fragment>
          <CurveLeftIcon />
          <Typography
            type="subTitle2"
            css={(theme) => ({
              backgroundColor: theme.color.white.main,
              borderTop: `1px solid ${theme.color.gray.darker}`,
              padding: '10px 24px',
            })}
          >
            {label}
          </Typography>
          <CurveRightIcon />
        </Fragment>
      ) : (
        <Typography
          type="subTitle2"
          css={(theme) => ({ padding: '10px 34px', color: theme.color.gray.darker })}
        >
          {label}
        </Typography>
      )}
    </li>
  )
}

const RectTab = ({ value, label, currentTab, handleTabClick }: HatOrRectTabProps) => {
  return (
    <li
      css={(theme) => ({
        cursor: 'pointer',
        borderBottom: '1px solid',
        padding: '10px 24px',
        backgroundColor: theme.color.white.main,
        borderBottomColor: value === currentTab ? theme.color.blue.main : theme.color.gray.darker,
      })}
      onClick={() => handleTabClick(value)}
    >
      <Typography
        type="subTitle2"
        css={(theme) => ({
          color: value === currentTab ? theme.color.blue.main : theme.color.gray.darker,
        })}
      >
        {label}
      </Typography>
    </li>
  )
}
