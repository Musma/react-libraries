import { css } from '@emotion/css'
import { Badge } from './components'
import { Button } from './components/Button'
import { Typography } from './components/Typography'

function App() {
  return (
    <div className={css({ padding: 32 })}>
      <Typography type="heading" variant="h3">
        Typography
      </Typography>
      <Typography>body type typography</Typography>
      <Typography type="heading" variant="h3">
        Button
      </Typography>
      <Button className={css({ width: '100px' })} variant="danger" disabled={true} label="test" />
      <Typography type="heading" variant="h3">
        Badge
      </Typography>
      <Badge count={222}>badge</Badge>
    </div>
  )
}

export default App
