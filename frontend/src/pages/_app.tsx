import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProivder } from '../contexts/AuthContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProivder>
      <Component {...pageProps} />
    </AuthProivder>
  )
}

export default MyApp
