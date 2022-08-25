import { css, cx } from '@emotion/css'
import { useTheme } from '@emotion/react'
import { useCallback } from 'react'
import { Typography } from '../Typography'
import { ReactComponent as HomeIcon } from './images/home.svg'
import { ReactComponent as SeperatorIcon } from './images/seperator.svg'

interface BreadCrumbProps {
  crumbs: string[]
  onClick: (crumb: string) => void
}

export const BreadCrumb = ({ crumbs, onClick }: BreadCrumbProps) => {
  const theme = useTheme()
  const isLast = useCallback(
    (index: number) => {
      return index === crumbs.length - 1
    },
    [crumbs],
  )
  return (
    <nav>
      <ol className={css({ display: 'flex', alignItems: 'center' })}>
        {crumbs.map((crumb, index) => {
          if (index === 0) {
            return (
              <HomeIcon
                key={crumb}
                className={css({ cursor: 'pointer' })}
                fill={theme.color.blue.main}
              />
            )
          }
          return (
            <li key={crumb} className={css({ display: 'flex', alignItems: 'center' })}>
              <SeperatorIcon />
              <button
                onClick={() => onClick(crumb)}
                className={css({
                  border: 'solid 1px transparent',
                  backgroundColor: 'transparent',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '22px',
                  cursor: 'pointer',
                })}
              >
                <Typography
                  type="body"
                  variant="body2"
                  className={cx(
                    css({ color: isLast(index) ? theme.color.black.dark : theme.color.gray.main }),
                  )}
                >
                  {crumb}
                </Typography>
              </button>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
