import { useState } from 'react'

import { ImageUploader } from '@musma/react-component'
export const ImageUploaderExample = () => {
  const [file, setFile] = useState<File | undefined>(undefined)
  return (
    <ImageUploader
      imgUrl={file ? URL.createObjectURL(file) : undefined}
      onChange={(file) => setFile(file)}
    />
  )
}
