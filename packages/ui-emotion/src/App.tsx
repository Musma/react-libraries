import { css } from '@emotion/css'
import { Badge, BreadCrumb, Tooltip, Button, Typography } from './components'

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
      <Typography type="heading" variant="h3">
        BreadCrumb
      </Typography>
      <BreadCrumb crumbs={['a', 'b', 'c']} onClick={(c) => console.log(c)} />
      <Typography type="heading" variant="h3">
        Tooltip
      </Typography>
      <Tooltip message="world">hello</Tooltip>
    </div>
  )
}

export default App
