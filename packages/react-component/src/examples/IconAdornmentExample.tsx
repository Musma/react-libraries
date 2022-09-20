import { IconAdornment } from 'src/components'

import { ReactComponent as CameraIcon } from './images/camera.svg'

export const IconAdornmentExample = () => {
  return (
    <div>
      <IconAdornment size="lg">
        <CameraIcon />
      </IconAdornment>
      <IconAdornment size="md">
        <CameraIcon />
      </IconAdornment>
      <IconAdornment size="sm">
        <CameraIcon />
      </IconAdornment>
    </div>
  )
}
