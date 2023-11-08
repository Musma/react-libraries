import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import { LoadingScreen } from '@musma/react-component'

import { AppLayout } from 'src/layout'

import { RoutePaths } from './RoutePaths'

const P_홈 = lazy(() => import('src/Component'))
const P_샘플1 = lazy(() => import('src/pages/Sample1'))
const P_샘플2 = lazy(() => import('src/pages/Sample2'))
const P_샘플3 = lazy(() => import('src/pages/Sample3'))

export const router = createBrowserRouter([
  {
    path: RoutePaths.홈,
    element: <AppLayout />,
    errorElement: <LoadingScreen type="fallback" />,
    children: [
      {
        path: RoutePaths.홈,
        element: <P_홈 />,
        handle: {
          breadcrumb: {
            label: '홈',
            to: RoutePaths.홈,
          },
        },
      },
      {
        path: RoutePaths.샘플1,
        element: <P_샘플1 />,
        handle: {
          breadcrumb: {
            label: '샘플1',
            to: RoutePaths.샘플1,
          },
        },
      },
      {
        path: RoutePaths.샘플2,
        element: <P_샘플2 />,
        handle: {
          breadcrumb: {
            label: '샘플2',
            to: RoutePaths.샘플2,
          },
        },
      },
      {
        path: RoutePaths.샘플3,
        element: <P_샘플3 />,
        handle: {
          breadcrumb: {
            label: '샘플3',
            to: RoutePaths.샘플3,
          },
        },
      },
    ],
  },
])
