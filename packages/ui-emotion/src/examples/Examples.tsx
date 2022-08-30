import { ReactNode } from 'react'
import { css } from '@emotion/css'
import { useTheme } from '@emotion/react'

import { Badge, BreadCrumb, Tooltip, Button, Typography, Tag, Checkbox } from 'src/components'
import {
  ModalExample,
  TextInputExample,
  SelectExample,
  TimePickerExample,
  DatePickerExample,
  DividerExample,
} from 'src/examples'

export const Examples = () => {
  return (
    <div>
      <div
        className={css({
          padding: 32,
          display: 'grid',
          gridTemplateRows: 'auto',
          gridTemplateColumns: 'repeat(4, 400px)',
        })}
      >
        <Box title="typography">
          <Typography type="heading" variant="h1">
            h1
          </Typography>
          <Typography type="heading" variant="h2">
            h2
          </Typography>
          <Typography type="heading" variant="h3">
            h3
          </Typography>
          <Typography type="heading" variant="h4">
            h4
          </Typography>
          <Typography type="heading" variant="h5">
            h5
          </Typography>
          <Typography type="heading" variant="h6">
            h6
          </Typography>
          <Typography type="subTitle" variant="subTitle1">
            subTitle1
          </Typography>
          <Typography type="subTitle" variant="subTitle2">
            subTitle2
          </Typography>
        </Box>
        <Box title="button">
          <Button
            className={css({ width: '100px' })}
            variant="danger"
            disabled={true}
            label="test"
          />
        </Box>
        <Box title="badge">{<Badge count={222}>badge</Badge>}</Box>
        <Box title="breadcrumb">
          <BreadCrumb crumbs={['a', 'b', 'c']} onClick={(c) => console.log(c)} />
        </Box>
        <Box title="tooltip">
          <Tooltip message="I'm Tooltip!" width={100}>
            hover me
          </Tooltip>
        </Box>
        <Box title="tag">
          <Tag label="sampleTag" />
          <Tag label="sampleTag" variant="rectangle" />
          <Tag label="sampleTag" color="blue" />
          <Tag label="sampleTag" variant="rectangle" color="blue" />
          <Tag label="sampleTag" onClose={() => undefined} />
          <Tag label="sampleTag" variant="rectangle" onClose={() => undefined} />
          <Tag label="sampleTag" color="blue" onClose={() => undefined} />
          <Tag label="sampleTag" variant="rectangle" color="blue" onClose={() => undefined} />
        </Box>
        <Box title="modal">
          <ModalExample />
        </Box>
        <Box title="textInput">
          <TextInputExample />
        </Box>
        <Box title="select">
          <SelectExample />
        </Box>
        <Box title="checkbox">
          <Checkbox size="lg" />
          <Checkbox size="md" />
          <Checkbox size="sm" />
        </Box>
        <Box title="timePicker">
          <TimePickerExample />
        </Box>
        <Box title="datePicker">
          <DatePickerExample />
        </Box>
        <Box title="Divider">
          <DividerExample />
        </Box>
      </div>
    </div>
  )
}

const Box = ({ children, title }: { children: ReactNode; title: string }) => {
  const theme = useTheme()
  return (
    <div
      className={css({
        margin: 8,
        border: '1px solid gray',
        borderRadius: '6px',
        padding: 16,
      })}
    >
      <Typography
        type="heading"
        variant="h3"
        className={css({ borderBottom: `1px solid ${theme.color.gray.light}` })}
      >
        {title}
      </Typography>
      <div
        className={css({
          marginTop: 16,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '4px',
        })}
      >
        {children}
      </div>
    </div>
  )
}
