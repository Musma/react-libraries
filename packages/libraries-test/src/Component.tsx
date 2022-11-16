import { useState } from 'react'
import { useForm } from 'react-hook-form'

import {
  Tooltip,
  Typography,
  Tag,
  Spinner,
  ToggleButton,
  Skeleton,
  Drawer,
  Button,
  Card,
  Stepper,
  Box,
} from '@musma/react-component'

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
  TabsExample,
} from 'src/examples'
import { ReactComponent as XlsIcon } from 'src/examples/images/xls.svg'

type CCC = {
  aaa: number
}

const AAA = [
  {
    label: '000',
    value: 1,
  },
  {
    label: '222',
    value: 2,
  },
]

export const Component = () => {
  const [showSpinner, setSpinner] = useState(false)
  const [showDrawer, setDrawer] = useState(false)
  const { control } = useForm<CCC>({
    defaultValues: {
      aaa: 1,
    },
  })

  return (
    <Box>
      <Box
        css={{
          display: 'grid',
          padding: 24,
          gridTemplateRows: 'auto',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 24,
        }}
      >
        <Card title="Typography" css={{ padding: 24 }}>
          <Typography type="h1">h1</Typography>
          <Typography type="h2">h2</Typography>
          <Typography type="h3">h3</Typography>
          <Typography type="h4">h4</Typography>
          <Typography type="h5">h5</Typography>
          <Typography type="h6">h6</Typography>
          <Typography type="subTitle1">subTitle1</Typography>
          <Typography type="subTitle2">subTitle2</Typography>
          <Typography type="body1">body1</Typography>
          <Typography type="body2">body2</Typography>
          <Typography type="body3">body3</Typography>
        </Card>

        <Card title="Button" css={{ padding: 24 }}>
          <Button fullWidth={true} size="lg">
            test
          </Button>
          <Button fullWidth={true} size="lg" variant="outlined">
            test
          </Button>
          <Button fullWidth={true} size="lg" disabled={true}>
            test
          </Button>
          <Button fullWidth={true} size="lg" startIcon={XlsIcon as any}>
            icon label button
          </Button>
          <Button fullWidth={true} variant="danger">
            danger
          </Button>
        </Card>

        <Card title="Badge" css={{ padding: 24 }}>
          {<BadgeExample />}
        </Card>

        <Card title="Tooltip" css={{ padding: 24 }}>
          <Tooltip message="I'm Tooltip!" width={100}>
            hover me
          </Tooltip>
        </Card>

        <Card title="Tag" css={{ padding: 24 }}>
          <Tag label="sampleTag" />
          <Tag label="sampleTag" variant="rectangle" />
          <Tag label="sampleTag" color="blue" />
          <Tag label="sampleTag" variant="rectangle" color="blue" />
          <Tag label="sampleTag" onClose={() => undefined} />
          <Tag label="sampleTag" variant="rectangle" onClose={() => undefined} />
          <Tag label="sampleTag" color="blue" onClose={() => undefined} />
          <Tag label="sampleTag" variant="rectangle" color="blue" onClose={() => undefined} />
        </Card>

        <Card title="Modal" css={{ padding: 24 }}>
          <ModalExample />
        </Card>

        <Card title="TextInput" css={{ padding: 24 }}>
          <TextInputExample />
        </Card>

        <Card title="Select" css={{ padding: 24 }}>
          <SelectExample />
        </Card>

        <Card title="Checkbox" css={{ padding: 24 }}>
          <CheckboxExample />
        </Card>

        <Card title="TimePicker" css={{ padding: 24 }}>
          <TimePickerExample />
        </Card>

        <Card title="DatePicker" css={{ padding: 24 }}>
          <DatePickerExample />
        </Card>

        <Card title="Divider" css={{ padding: 24 }}>
          <DividerExample />
        </Card>

        <Card title="IconButton" css={{ padding: 24 }}>
          <IconButtonExample />
        </Card>

        <Card title="ImageUploader" css={{ padding: 24 }}>
          <ImageUploaderExample />
        </Card>

        <Card title="RadioButton" css={{ padding: 24 }}>
          <RadioButtonExample />
        </Card>

        <Card title="Spinner" css={{ padding: 24 }}>
          <Spinner size="lg" />
        </Card>

        <Card title="Table" css={{ padding: 24 }}>
          <TableExample />
        </Card>

        <Card title="Tabs" css={{ padding: 24 }}>
          <TabsExample />
        </Card>

        <Card title="ToggleButton" css={{ padding: 24 }}>
          <ToggleButton />
          <ToggleButton size="md" />
          <ToggleButton size="sm" />
          <ToggleButton disabled={true} />
          <ToggleButton size="md" disabled={true} />
          <ToggleButton size="sm" disabled={true} />
        </Card>

        <Card title="IconAdornment" css={{ padding: 24 }}>
          <IconAdornmentExample />
        </Card>

        <Card title="Skeleton" css={{ padding: 24 }}>
          <div css={{ height: 300, width: '100%' }}>
            <Skeleton css={{ height: '100px' }} />
            <Skeleton variant="circle" css={{ height: 40, width: 40, backgroundColor: 'red' }} />
          </div>
        </Card>

        <Card title="Drawer" css={{ padding: 24 }}>
          <Button
            onClick={() => {
              setDrawer(!showDrawer)
            }}
          >
            Drawer Open
          </Button>
          <Drawer open={showDrawer}>
            <Button
              onClick={() => {
                setDrawer(!showDrawer)
              }}
            >
              Close
            </Button>
          </Drawer>
        </Card>

        <Card title="Steppr" css={{ padding: 24 }}>
          <Stepper activeStep={1} totalStep={2} />
        </Card>
      </Box>
    </Box>
  )
}
