import { ReactNode, useState } from 'react'

import { useTheme } from '@emotion/react'
import { FillAddBoxIcon } from '@musma/react-icons'

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
} from 'src/components'
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

import icon from './images/bell.svg'
import { ReactComponent as XlsIcon } from './images/xls.svg'

export const Examples = () => {
  const [showSpinner, setSpinner] = useState(false)
  const [showDrawer, setDrawer] = useState(false)
  return (
    <div>
      <div
        css={{
          padding: 32,
          display: 'grid',
          gridTemplateRows: 'auto',
          gridTemplateColumns: 'repeat(4, 400px)',
        }}
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
          <Typography type="body1">body1</Typography>
          <Typography type="body2">body2</Typography>
          <Typography type="body3">body3</Typography>
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

        <Box title="Skeleton">
          <div css={{ height: 300, width: '100%' }}>
            <Skeleton css={{ height: '100px' }} />
            <Skeleton variant="circle" css={{ height: 40, width: 40 }} />
          </div>
        </Box>

        <Box title="Drawer">
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
        </Box>

        <Box title="React Icons">
          <FillAddBoxIcon />
        </Box>
      </div>
    </div>
  )
}

const Box = ({ children, title }: { children: ReactNode; title: string }) => {
  const theme = useTheme()
  return (
    <div
      css={{
        margin: 8,
        border: '1px solid gray',
        borderRadius: '6px',
        padding: 16,
      }}
    >
      <Typography type="h3" css={{ borderBottom: `1px solid ${theme.color.gray.light}` }}>
        {title}
      </Typography>
      <div
        css={{
          marginTop: 16,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '4px',
        }}
      >
        {children}
      </div>
    </div>
  )
}
