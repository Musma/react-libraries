import { ReactNode } from 'react'

import { css } from '@emotion/css'
import { useTheme } from '@emotion/react'

import { BreadCrumb, Tooltip, Button, Typography, Tag, Spinner, ToggleButton } from 'src/components'
import {
  ModalExample,
  TextInputExample,
  SelectExample,
  TimePickerExample,
  DatePickerExample,
  DividerExample,
  ImageUploaderExample,
  RadioButtonExample,
  TableExample,
  IconButtonExample,
  BadgeExample,
  CheckboxExample,
  IconAdornmentExample,
} from 'src/examples'

import { TabsExample } from './TabsExample'

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
        <Box title="Typography">
          <Typography type="h1">h1</Typography>
          <Typography type="h2">h2</Typography>
          <Typography type="h3">h3</Typography>
          <Typography type="h4">h4</Typography>
          <Typography type="h5">h5</Typography>
          <Typography type="h6">h6</Typography>
          <Typography type="subTitle1">subTitle1</Typography>
          <Typography type="subTitle2">subTitle2</Typography>
        </Box>

        <Box title="Button">
          <Button fullWidth={true} size="lg">
            test
          </Button>
          <Button fullWidth={true} size="lg" variant="outlined">
            test
          </Button>
          <Button fullWidth={true} size="lg" disabled={true}>
            test
          </Button>
        </Box>

        <Box title="Badge">{<BadgeExample />}</Box>

        <Box title="Breadcrumb">
          <BreadCrumb crumbs={['a', 'b', 'c']} onClick={(c) => console.log(c)} />
        </Box>

        <Box title="Tooltip">
          <Tooltip message="I'm Tooltip!" width={100}>
            hover me
          </Tooltip>
        </Box>
        <Box title="Tag">
          <Tag label="sampleTag" />
          <Tag label="sampleTag" variant="rectangle" />
          <Tag label="sampleTag" color="blue" />
          <Tag label="sampleTag" variant="rectangle" color="blue" />
          <Tag label="sampleTag" onClose={() => undefined} />
          <Tag label="sampleTag" variant="rectangle" onClose={() => undefined} />
          <Tag label="sampleTag" color="blue" onClose={() => undefined} />
          <Tag label="sampleTag" variant="rectangle" color="blue" onClose={() => undefined} />
        </Box>
        <Box title="Modal">
          <ModalExample />
        </Box>
        <Box title="TextInput">
          <TextInputExample />
        </Box>
        <Box title="Select">
          <SelectExample />
        </Box>
        <Box title="Checkbox">
          <CheckboxExample />
        </Box>
        <Box title="TimePicker">
          <TimePickerExample />
        </Box>
        <Box title="DatePicker">
          <DatePickerExample />
        </Box>
        <Box title="Divider">
          <DividerExample />
        </Box>
        <Box title="IconButton">
          <IconButtonExample />
        </Box>
        <Box title="ImageUploader">
          <ImageUploaderExample />
        </Box>
        <Box title="RadioButton">
          <RadioButtonExample />
        </Box>
        <Box title="Spinner">
          <Spinner />
        </Box>
        <Box title="Table">
          <TableExample />
        </Box>
        <Box title="Tabs">
          <TabsExample />
        </Box>
        <Box title="ToggleButton">
          <ToggleButton />
          <ToggleButton size="md" />
          <ToggleButton size="sm" />
          <ToggleButton disabled={true} />
          <ToggleButton size="md" disabled={true} />
          <ToggleButton size="sm" disabled={true} />
        </Box>
        <Box title="IconAdornment">
          <IconAdornmentExample />
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
        type="h3"
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
