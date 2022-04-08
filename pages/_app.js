import AppLayout from 'HOC/AppLayout'
import 'styles/global.css'

function MyApp ({ Component, pageProps }) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  )
}

export default MyApp
