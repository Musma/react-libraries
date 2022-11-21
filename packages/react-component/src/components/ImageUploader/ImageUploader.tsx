import { Fragment, useCallback, useMemo, useState } from 'react'

import { useTheme } from '@emotion/react'
import { uniqueId } from '@musma/react-utils'

import { Typography } from 'src/components'
import { Box, Image, InputBase, Label } from 'src/elements'
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
  size = 'md',
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

  const defaultImage = useMemo(() => {
    return {
      lg: <DefaultLgIcon css={{ position: 'absolute', top: '20px', left: '10px' }} />,
      md: <DefaultMdIcon css={{ position: 'absolute', top: '14.29px', left: '7.14px' }} />,
      sm: <DefaultSmIcon css={{ position: 'absolute', top: '4px', left: '1px' }} />,
    }[size]
  }, [size])

  const getHelperIcon = useMemo(() => {
    return {
      lg: <UploadLgIcon />,
      md: <UploadLgIcon />,
      sm: <UploadSmIcon />,
    }[size]
  }, [size])

  const getHelperText = useMemo(() => {
    return {
      lg: (
        <Typography type="subTitle2" css={{ marginBottom: '4px', color: theme.colors.white.main }}>
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
  }, [size, theme.colors.white.main])

  return (
    <Label htmlFor={id} css={{ display: 'inline-block', cursor: 'pointer' }}>
      <Box
        css={[
          {
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '9999px',
            backgroundColor: theme.colors.white.main,
            border: `1px solid ${theme.colors.gray.dark}`,
            textAlign: 'center',
            overflow: 'hidden',
            '&:hover .child': {
              visibility: 'visible',
            },
          },
          {
            lg: { height: 140, width: 140 },
            md: { height: 100, width: 100 },
            sm: { height: 32, width: 32 },
          }[size],
        ]}
      >
        {thumbnail ? (
          <Image
            src={thumbnail}
            css={{
              height: '100%',
              width: '100%',
              borderRadius: '9999px',
              objectFit: 'cover',
            }}
          />
        ) : (
          defaultImage
        )}

        <Box
          css={[
            {
              visibility: 'hidden',
              position: 'absolute',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: `${theme.colors.black.main}99`,
            },
            {
              lg: { height: '140px', width: '140px' },
              md: { height: '100px', width: '100px' },
              sm: { height: '32px', width: '32px' },
            }[size],
          ]}
        >
          {getHelperIcon}
          {getHelperText}
        </Box>

        <InputBase
          id={id}
          hidden={true}
          type="file"
          multiple={false}
          accept="image/*"
          onChange={handleImageSelect}
        />
      </Box>
    </Label>
  )
}
