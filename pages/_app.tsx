import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core'
import { NotificationsProvider } from '@mantine/notifications'
import { ModalsProvider } from '@mantine/modals'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider>
      <ModalsProvider>
        <NotificationsProvider>
          <Component {...pageProps} />
        </NotificationsProvider>
      </ModalsProvider>
    </MantineProvider>
  )
}

export default MyApp
