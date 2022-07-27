import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Layout } from '../components'

import '../styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute="class">
      <ToastContainer />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <article className="prose" />
    </ThemeProvider>
  )
}

export default MyApp