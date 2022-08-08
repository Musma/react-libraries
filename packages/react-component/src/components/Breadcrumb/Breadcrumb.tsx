import { useCallback } from 'react'

import { Typography } from '../Typography'
import { ReactComponent as HomeIcon } from './images/home.svg'
import { ReactComponent as SeperatorIcon } from './images/seperator.svg'

interface BreadCrumbProps {
  crumbs: string[]
  onClick: (crumb: string) => void
}

export const Breadcrumb = ({ crumbs, onClick }: BreadCrumbProps) => {
  const isLast = useCallback(
    (index: number) => {
      return index === crumbs.length - 1
    },
    [crumbs],
  )

  return (
    <nav>
      <ol className="flex items-center">
        {crumbs.map((crumb, index) => {
          if (index === 0) {
            return (
              <HomeIcon
                key={crumb}
                className="cursor-pointer"
                fill="#036DB7"
                onClick={() => onClick(crumb)}
              />
            )
          }
          return (
            <li key={crumb} className="flex">
              <SeperatorIcon />
              <button onClick={() => onClick(crumb)}>
                <Typography
                  type="body"
                  variant="body2"
                  className={isLast(index) ? 'text-[#242E40]' : 'text-[#D0D5DD]'}
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
