import { ListItem } from './components/ListItem'

export const Navigation = () => {
  return (
    <nav className="fixed h-[calc(100vh_-_56px)] w-60 overflow-y-auto border-r py-6">
      <ul>
        <li className="mb-6 last-of-type:mb-0">
          <h5 className="mb-3 text-lg font-semibold text-[#696969]">Components</h5>
          <ul>
            <ListItem href={'/components/button'} label="Button" />
            <ListItem href={'/components/tag'} label="Tag" />
            <ListItem href={'/components/select'} label="Select" />
            <ListItem href={'/components/textinput'} label="TextInput" />
            <ListItem href={'/components/tooltip'} label="Tooltip" />
            <ListItem href={'/components/typography'} label="Typography" />
            <ListItem href={'/components/modal'} label="Modal" />
            <ListItem href={'/components/color'} label="Color" />
            <ListItem href={'/components/tabs'} label="Tabs" />
            <ListItem href={'/components/image-upload'} label="Image Upload" />
            <ListItem href={'/components/table'} label="Table" />
            <ListItem href={'/components/map'} label="Map" />
            <ListItem href={'/components/divider'} label="Divider" />
            <ListItem href={'/components/breadcrumb'} label="Breadcrumb" />
            <ListItem href={'/components/toast'} label="Toast" />
            <ListItem href={'/components/spinner'} label="Spinner" />
            <ListItem href={'/components/badge'} label="Badge" />
            <ListItem href={'/components/timepicker'} label="TimePicker" />
          </ul>
        </li>
        <li className="mb-6 last-of-type:mb-0">
          <h5 className="mb-3 text-lg font-semibold text-[#696969]">Icons</h5>
          <ul>
            <ListItem href={'/icons/all'} label="All Icons" />
            <ListItem href={'/icons/filled'} label="Filled" />
            <ListItem href={'/icons/outlined'} label="Outlined" />
          </ul>
        </li>

        <li className="mb-6 last-of-type:mb-0">
          <h5 className="mb-3 text-lg font-semibold text-[#696969]">Utils</h5>
          <ul>
            <ListItem href={'/icons/all'} label="All Icons" />
            <ListItem href={'/icons/filled'} label="Filled" />
            <ListItem href={'/icons/outlined'} label="Outlined" />
          </ul>
        </li>
      </ul>
    </nav>
  )
}
