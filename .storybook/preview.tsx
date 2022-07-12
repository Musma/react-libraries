import { Fragment } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import '../src/index.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen', // iframe 내부에 패딩 없애려면 layout: 'fullscreen'
}

export const decorators = [
  (Story) => (
    <Fragment>
      <ToastContainer />
      <Story />
    </Fragment>
  ),
]
