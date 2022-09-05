import { Fragment, useCallback, useMemo, useState } from 'react'
import { css, cx } from '@emotion/css'
import { useTheme } from '@emotion/react'
import _ from 'lodash-es'

import { Typography } from 'src/components'
import { Size } from 'src/styles/theme'
import { ReactComponent as DefaultLgIcon } from 'src/components/ImageUploader/images/image_default_lg.svg'
import { ReactComponent as DefaultMdIcon } from 'src/components/ImageUploader/images/image_default_md.svg'
import { ReactComponent as DefaultSmIcon } from 'src/components/ImageUploader/images/image_default_sm.svg'
import { ReactComponent as UploadLgIcon } from 'src/components/ImageUploader/images/upload_lg.svg'
import { ReactComponent as UploadSmIcon } from 'src/components/ImageUploader/images/upload_sm.svg'

interface ImageUploaderProps {
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
}: ImageUploaderProps) => {
  const theme = useTheme()
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
      lg: <DefaultLgIcon className={css({ position: 'absolute', top: '20px', left: '10px' })} />,
      md: (
        <DefaultMdIcon className={css({ position: 'absolute', top: '14.29px', left: '7.14px' })} />
      ),
      sm: <DefaultSmIcon className={css({ position: 'absolute', top: '4px', left: '1px' })} />,
    }[size]
  }, [size])

  const getHelperIcon = useCallback((size: Size) => {
    return {
      lg: <UploadLgIcon />,
      md: <UploadLgIcon />,
      sm: <UploadSmIcon />,
    }[size]
  }, [])

  const getHelperText = useCallback(
    (size: Size) => {
      return {
        lg: (
          <Typography
            type="subTitle"
            variant="subTitle2"
            className={css({ marginBottom: '4px', color: theme.color.white.main })}
          >
            Upload Picture
          </Typography>
        ),
        md: (
          <Typography
            type="caption"
            variant="caption2"
            className={css({ marginBottom: '4px', color: theme.color.white.main })}
          >
            Upload Picture
          </Typography>
        ),
        sm: <Fragment />,
      }[size]
    },
    [theme],
  )

  const divSize = useMemo(() => {
    return {
      lg: css({ height: '140px', width: '140px' }),
      md: css({ height: '100px', width: '100px' }),
      sm: css({ height: '32px', width: '32px' }),
    }[size]
  }, [size])

  return (
    <label htmlFor={id} className={css({ display: 'inline-block', cursor: 'pointer' })}>
      <div
        className={cx(
          css({
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '9999px',
            border: `1px solid ${theme.color.gray.dark}`,
            '&:hover .child': {
              visibility: 'visible',
            },
            textAlign: 'center',
            overflow: 'hidden',
          }),
          divSize,
        )}
      >
        {thumbnail ? (
          <img
            src={thumbnail}
            className={css({
              height: '100%',
              width: '100%',
              borderRadius: '9999px',
              objectFit: 'cover',
            })}
          />
        ) : (
          getDefaultImage()
        )}
        <div
          className={cx(
            'child',
            divSize,
            css({
              visibility: 'hidden',
              position: 'absolute',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: `${theme.color.black.main}99`,
            }),
          )}
        >
          {getHelperIcon(size)}
          {getHelperText(size)}
        </div>
        <input
          id={id}
          className={css({ display: 'none' })}
          type="file"
          multiple={false}
          accept="image/*"
          onChange={handleImageSelect}
        />
      </div>
    </label>
  )
}
