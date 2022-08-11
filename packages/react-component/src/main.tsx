import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import Layout from './layout/Layout'
import { TableDemo, TagDemo, TimePickerDemo } from './routes'
import AppRoutes from './routes/AppRoutes'

export const pages = {
  timePicker: <TimePickerDemo />,
  table: <TableDemo />,
  tag: <TagDemo />,
}
export type PagesType = typeof pages
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  </React.StrictMode>,
)
