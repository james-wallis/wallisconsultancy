import '../styles/index.css'
import { DefaultSeo } from 'next-seo'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        titleTemplate={'%s | Wallis Consultancy'}
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: 'https://wallisconsultancy.co.uk/',
          site_name: 'Wallis Consultancy',
        }}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
