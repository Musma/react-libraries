import { Fragment } from 'react'

import { useTheme } from '@emotion/react'

import { Typography } from 'src/components'
import { ButtonBase } from 'src/elements'

import { ReactComponent as CurveLeftIcon } from './images/curve_left.svg'
import { ReactComponent as CurveRightIcon } from './images/curve_right.svg'
import { useTabContext } from './TabContext'

export interface TabProps {
  value: string | number
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
  currentTab: string | number
  handleTabClick: (value: string | number) => void
}

const HatTab = ({ value, label, currentTab, handleTabClick }: HatOrRectTabProps) => {
  const theme = useTheme()
  return (
    <ButtonBase css={{ height: 40 }} onClick={() => handleTabClick(value)}>
      {value === currentTab ? (
        <Fragment>
          <CurveLeftIcon />
          <Typography
            type="subTitle2"
            css={{
              backgroundColor: theme.colors.white.main,
              borderTop: `1px solid ${theme.colors.gray.darker}`,
              padding: '10px 24px',
            }}
          >
            {label}
          </Typography>
          <CurveRightIcon />
        </Fragment>
      ) : (
        <Typography
          type="subTitle2"
          css={{ padding: '10px 34px', color: theme.colors.gray.darker }}
        >
          {label}
        </Typography>
      )}
    </ButtonBase>
  )
}

const RectTab = ({ value, label, currentTab, handleTabClick }: HatOrRectTabProps) => {
  const theme = useTheme()
  return (
    <ButtonBase
      css={{
        cursor: 'pointer',
        borderBottom: '1px solid',
        padding: '10px 24px',
        backgroundColor: theme.colors.white.main,
        borderBottomColor: value === currentTab ? theme.colors.blue.main : theme.colors.gray.darker,
      }}
      onClick={() => handleTabClick(value)}
    >
      <Typography
        type="subTitle2"
        css={{ color: value === currentTab ? theme.colors.blue.main : theme.colors.gray.darker }}
      >
        {label}
      </Typography>
    </ButtonBase>
  )
}
