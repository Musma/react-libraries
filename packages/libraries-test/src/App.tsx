import { useState } from 'react'

import {
  BreadCrumb,
  Tooltip,
  Typography,
  Tag,
  Spinner,
  ToggleButton,
  Backdrop,
  Skeleton,
  Drawer,
  Button,
  MusmaProvider,
  Card,
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
import icon from 'src/examples/images/bell.svg'
import { ReactComponent as XlsIcon } from 'src/examples/images/xls.svg'

export const App = () => {
  const [showSpinner, setSpinner] = useState(false)
  const [showDrawer, setDrawer] = useState(false)

  return (
    <MusmaProvider>
      <div>
        <div
          css={{
            padding: 24,
            display: 'grid',
            gridTemplateRows: 'auto',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 24,
          }}
        >
          <Card title="Typography">
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

          <Card title="Button">
            <Button fullWidth={true} size="lg">
              test
            </Button>
            <Button fullWidth={true} size="lg" variant="outlined">
              test
            </Button>
            <Button fullWidth={true} size="lg" disabled={true}>
              test
            </Button>
            <Button fullWidth={true} size="lg" icon={<XlsIcon />}>
              icon label button
            </Button>
            <Button fullWidth={true} variant="danger">
              danger
            </Button>
            <Button
              fullWidth={true}
              size="lg"
              disabled={true}
              icon={<img src={icon} alt="아이콘 버튼" />}
            >
              icon label button
            </Button>
          </Card>

          <Card title="Badge">{<BadgeExample />}</Card>

          <Card title="Breadcrumb">
            <BreadCrumb crumbs={['a', 'b', 'c']} onClick={(c) => console.log(c)} />
          </Card>

          <Card title="Tooltip">
            <Tooltip message="I'm Tooltip!" width={100}>
              hover me
            </Tooltip>
          </Card>
          <Card title="Tag">
            <Tag label="sampleTag" />
            <Tag label="sampleTag" variant="rectangle" />
            <Tag label="sampleTag" color="blue" />
            <Tag label="sampleTag" variant="rectangle" color="blue" />
            <Tag label="sampleTag" onClose={() => undefined} />
            <Tag label="sampleTag" variant="rectangle" onClose={() => undefined} />
            <Tag label="sampleTag" color="blue" onClose={() => undefined} />
            <Tag label="sampleTag" variant="rectangle" color="blue" onClose={() => undefined} />
          </Card>
          <Card title="Modal">
            <ModalExample />
          </Card>
          <Card title="TextInput">
            <TextInputExample />
          </Card>
          <Card title="Select">
            <SelectExample />
          </Card>
          <Card title="Checkbox">
            <CheckboxExample />
          </Card>
          <Card title="TimePicker">
            <TimePickerExample />
          </Card>
          <Card title="DatePicker">
            <DatePickerExample />
          </Card>
          <Card title="Divider">
            <DividerExample />
          </Card>
          <Card title="IconButton">
            <IconButtonExample />
          </Card>
          <Card title="ImageUploader">
            <ImageUploaderExample />
          </Card>
          <Card title="RadioButton">
            <RadioButtonExample />
          </Card>
          <Card title="Spinner">
            <Button
              onClick={() => {
                setSpinner(!showSpinner)
              }}
            >
              Click me
            </Button>
            <Backdrop open={showSpinner}>
              <div>
                <Button
                  onClick={() => {
                    setSpinner(!showSpinner)
                  }}
                >
                  Close
                </Button>
                <Spinner />
              </div>
            </Backdrop>
          </Card>
          <Card title="Table">
            <TableExample />
          </Card>
          <Card title="Tabs">
            <TabsExample />
          </Card>
          <Card title="ToggleButton">
            <ToggleButton />
            <ToggleButton size="md" />
            <ToggleButton size="sm" />
            <ToggleButton disabled={true} />
            <ToggleButton size="md" disabled={true} />
            <ToggleButton size="sm" disabled={true} />
          </Card>
          <Card title="IconAdornment">
            <IconAdornmentExample />
          </Card>

          <Card title="Skeleton">
            <div css={{ height: 300, width: '100%' }}>
              <Skeleton css={{ height: '100px' }} />
              <Skeleton variant="circle" css={{ height: 40, width: 40, backgroundColor: 'red' }} />
            </div>
          </Card>

          <Card title="Drawer">
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
        </div>
      </div>
    </MusmaProvider>
  )
}
