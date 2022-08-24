import { css } from '@emotion/css'
import { Button } from './components/Button'
import { Typography } from './components/Typography'

function App() {
  return (
    <div>
      <Typography>Typography</Typography>
      <Button className={css({ width: '100px' })} variant="outlined" label="test" />
    </div>
  )
}

export default App
