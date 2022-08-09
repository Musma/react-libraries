import classNames from 'classnames'
import _ from 'lodash-es'
import { Fragment, useCallback, useMemo, useState } from 'react'
import { Size } from 'src/types'

import { Typography } from '../Typography'
import { ReactComponent as DefaultLgIcon } from './images/image_default_lg.svg'
import { ReactComponent as DefaultMdIcon } from './images/image_default_md.svg'
import { ReactComponent as DefaultSmIcon } from './images/image_default_sm.svg'
import { ReactComponent as UploadLgIcon } from './images/upload_lg.svg'
import { ReactComponent as UploadSmIcon } from './images/upload_sm.svg'

interface ImageUploadProps {
  id?: string
  size?: Size
  imgUrl?: string
  onChange: (file: File) => void
}

export const ImageUploader = ({
  id = _.uniqueId(),
  size = 'lg',
  imgUrl,
  onChange,
}: ImageUploadProps) => {
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
    return {
      lg: <DefaultLgIcon className="absolute top-[20px] left-[10px]" />,
      md: <DefaultMdIcon className="absolute top-[14.29px] left-[7.14px]" />,
      sm: <DefaultSmIcon className="absolute top-[4px] left-[1px]" />,
    }[size]
  }, [size])

  const getHelperIcon = useCallback((size: Size) => {
    return {
      lg: <UploadLgIcon />,
      md: <UploadLgIcon />,
      sm: <UploadSmIcon />,
    }[size]
  }, [])

  const getHelperText = useCallback((size: Size) => {
    return {
      lg: (
        <Typography type="subTitle" variant="subTitle2" className={classNames('mb-1 text-white')}>
          Upload Picture
        </Typography>
      ),
      md: (
        <Typography type="caption" variant="caption2" className={classNames('mb-1', 'text-white')}>
          Upload Picture
        </Typography>
      ),
      sm: <Fragment />,
    }[size]
  }, [])

  const divSize = useMemo(() => {
    return {
      lg: 'h-[140px] w-[140px]',
      md: 'h-[100px] w-[100px]',
      sm: 'h-8 w-8',
    }[size]
  }, [size])

  return (
    <label htmlFor={id} className="inline-block cursor-pointer">
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
          id={id}
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
