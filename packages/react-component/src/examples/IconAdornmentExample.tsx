import { IconAdornment } from 'src/components'

import { ReactComponent as CameraIcon } from './images/camera.svg'

export const IconAdornmentExample = () => {
  return (
    <div>
      <IconAdornment>
        <CameraIcon />
      </IconAdornment>
      <IconAdornment>
        <CameraIcon />
      </IconAdornment>
      <IconAdornment>
        <CameraIcon />
      </IconAdornment>
    </div>
  )
}
