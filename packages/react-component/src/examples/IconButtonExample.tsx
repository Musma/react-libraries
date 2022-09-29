import { IconButton } from 'src/components'

import { ReactComponent as XlsIcon } from './images/xls.svg'
import { ReactComponent as XlsDisabled } from './images/xls_disabled.svg'
import { ReactComponent as XlsOutlinedIcon } from './images/xls_outlined.svg'

export const IconButtonExample = () => {
  return (
    <div css={{ display: 'flex', columnGap: '8px' }}>
      <IconButton>
        <XlsIcon />
      </IconButton>
      <IconButton variant="outlined">
        <XlsOutlinedIcon />
      </IconButton>
      <IconButton disabled={true}>
        <XlsDisabled />
      </IconButton>
    </div>
  )
}
