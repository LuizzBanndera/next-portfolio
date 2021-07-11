import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'animate.css'
import { AppWrapper } from '../context/state'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  )
}
export default MyApp
