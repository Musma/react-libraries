import classNames from 'classnames'
import { Fragment, useCallback, useMemo, useState } from 'react'
import { Size } from 'src/types'

import { Caption } from '../Caption'
import { SubTitle } from '../SubTitle'
import { ReactComponent as DefaultLgIcon } from './images/image_default_lg.svg'
import { ReactComponent as DefaultMdIcon } from './images/image_default_md.svg'
import { ReactComponent as DefaultSmIcon } from './images/image_default_sm.svg'
import { ReactComponent as DefaultXsIcon } from './images/image_default_xs.svg'
import { ReactComponent as UploadLgIcon } from './images/upload_lg.svg'
import { ReactComponent as UploadSmIcon } from './images/upload_sm.svg'
import { ReactComponent as UploadXsIcon } from './images/upload_xs.svg'

interface ImageUploadProps {
  size?: Size
  imgUrl?: string
  onChange: (file: File) => void
}

export const ImageUploader = ({ size = 'lg', imgUrl, onChange }: ImageUploadProps) => {
  const [thumbnail, setThumbnail] = useState<string | undefined>(imgUrl)
  const handleImageSelect = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!event.target.files) return
      const file = event.target.files[0]
      onChange(file)
      setThumbnail(URL.createObjectURL(file))
    },
    [onChange],
  )
  const getDefaultImage = useCallback(() => {
    const large = <DefaultLgIcon className="absolute top-[20px] left-[10px]" />
    return {
      full: large,
      lg: large,
      md: <DefaultMdIcon className="absolute top-[14.29px] left-[7.14px]" />,
      sm: <DefaultSmIcon className="absolute top-[8.57px] left-[4.29px]" />,
      xs: <DefaultXsIcon className="absolute top-[4.57px] left-[2.29px]" />,
    }[size]
  }, [size])

  const getHelperIcon = useCallback((size: Size) => {
    return {
      full: <UploadLgIcon />,
      lg: <UploadLgIcon />,
      md: <UploadLgIcon />,
      sm: <UploadSmIcon />,
      xs: <UploadXsIcon />,
    }[size]
  }, [])

  const getHelperText = useCallback((size: Size) => {
    const large = (
      <SubTitle element={2} className={classNames('mb-1 text-white')}>
        Upload Picture
      </SubTitle>
    )
    return {
      full: large,
      lg: large,
      md: (
        <Caption element="c2" className={classNames('mb-1', 'text-white')}>
          Upload Picture
        </Caption>
      ),
      sm: (
        <Caption element="c2" className={classNames('mb-[2px]', 'text-white')}>
          Upload
        </Caption>
      ),
      xs: <Fragment />,
    }[size]
  }, [])

  const divSize = useMemo(() => {
    return {
      full: 'h-[140px] w-[140px]',
      lg: 'h-[140px] w-[140px]',
      md: 'h-[100px] w-[100px]',
      sm: 'h-[60px] w-[60px]',
      xs: 'h-[32px] w-[32px]',
    }[size]
  }, [size])

  return (
    <label htmlFor="uploader" className="inline-block cursor-pointer">
      <div
        className={classNames(
          'group relative flex items-center justify-center overflow-hidden rounded-full border border-[#D9D9D9]',
          divSize,
        )}
      >
        {thumbnail ? <img src={thumbnail} /> : getDefaultImage()}
        <div
          className={classNames(
            divSize,
            'invisible absolute flex flex-col items-center justify-center bg-[rgba(36,46,64,0.6)] text-white group-hover:visible',
          )}
        >
          {getHelperIcon(size)}
          {getHelperText(size)}
        </div>
        <input
          id={'uploader'}
          className="hidden"
          type="file"
          multiple={false}
          accept="image/*"
          onChange={handleImageSelect}
        />
      </div>
    </label>
  )
}
