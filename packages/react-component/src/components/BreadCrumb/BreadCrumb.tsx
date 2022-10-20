import { useCallback } from 'react'

import { useTheme } from '@emotion/react'

import { Typography } from 'src/components'

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
      <ol css={{ display: 'flex', alignItems: 'center' }}>
        {crumbs.map((crumb, index) => {
          if (index === 0) {
            return (
              <HomeIcon key={crumb} css={{ cursor: 'pointer' }} fill={theme.colors.blue.main} />
            )
          }
          return (
            <li key={crumb} css={{ display: 'flex', alignItems: 'center' }}>
              <SeperatorIcon />
              <button
                onClick={() => onClick(crumb)}
                css={{
                  border: 'solid 1px transparent',
                  backgroundColor: 'transparent',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '22px',
                  cursor: 'pointer',
                }}
              >
                <Typography
                  type="body2"
                  css={{
                    color: isLast(index) ? theme.colors.black.dark : theme.colors.gray.main,
                  }}
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
