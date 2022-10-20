import { Fragment, useCallback, useMemo, useState } from 'react'

import { css, useTheme } from '@emotion/react'
import { uniqueId } from 'lodash-es'

import { Typography } from 'src/components'
import { Size } from 'src/types'

import { ReactComponent as DefaultLgIcon } from './images/image_default_lg.svg'
import { ReactComponent as DefaultMdIcon } from './images/image_default_md.svg'
import { ReactComponent as DefaultSmIcon } from './images/image_default_sm.svg'
import { ReactComponent as UploadLgIcon } from './images/upload_lg.svg'
import { ReactComponent as UploadSmIcon } from './images/upload_sm.svg'

interface ImageUploaderProps {
  id?: string
  size?: Size
  imgUrl?: string
  onChange: (file: File) => void
}

export const ImageUploader = ({
  id = uniqueId(),
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
      lg: <DefaultLgIcon css={{ position: 'absolute', top: '20px', left: '10px' }} />,
      md: <DefaultMdIcon css={{ position: 'absolute', top: '14.29px', left: '7.14px' }} />,
      sm: <DefaultSmIcon css={{ position: 'absolute', top: '4px', left: '1px' }} />,
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
            type="subTitle2"
            css={{ marginBottom: '4px', color: theme.colors.white.main }}
          >
            Upload Picture
          </Typography>
        ),
        md: (
          <Typography type="caption2" css={{ marginBottom: '4px', color: theme.colors.white.main }}>
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
    <label htmlFor={id} css={css({ display: 'inline-block', cursor: 'pointer' })}>
      <div
        css={[
          css({
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '9999px',
            backgroundColor: theme.colors.white.main,
            border: `1px solid ${theme.colors.gray.dark}`,
            '&:hover .child': {
              visibility: 'visible',
            },
            textAlign: 'center',
            overflow: 'hidden',
          }),
          divSize,
        ]}
      >
        {thumbnail ? (
          <img
            src={thumbnail}
            css={{
              height: '100%',
              width: '100%',
              borderRadius: '9999px',
              objectFit: 'cover',
            }}
          />
        ) : (
          getDefaultImage()
        )}
        <div
          css={[
            'child',
            divSize,
            css({
              visibility: 'hidden',
              position: 'absolute',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: `${theme.colors.black.main}99`,
            }),
          ]}
        >
          {getHelperIcon(size)}
          {getHelperText(size)}
        </div>
        <input
          id={id}
          css={{ display: 'none' }}
          type="file"
          multiple={false}
          accept="image/*"
          onChange={handleImageSelect}
        />
      </div>
    </label>
  )
}
