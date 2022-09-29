import { Badge } from 'src/components'

import { ReactComponent as BellIcon } from './images/bell.svg'

export const BadgeExample = () => {
  return (
    <div css={{ width: '100%', display: 'flex', justifyContent: 'space-around' }}>
      <Badge count={0}>
        <BellIcon />
      </Badge>
      <Badge count={1}>
        <BellIcon />
      </Badge>
      <Badge count={10}>
        <BellIcon />
      </Badge>
      <Badge count={100}>
        <BellIcon />
      </Badge>
    </div>
  )
}
