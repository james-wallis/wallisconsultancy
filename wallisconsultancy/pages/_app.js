import '../styles/index.css'
import { DefaultSeo } from 'next-seo'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        titleTemplate={'%s | Wallis Consultancy'}
        description="Mike Wallis is an experienced personable professional who specialises in Mediation and Business Support."
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: 'https://wallisconsultancy.co.uk/',
          site_name: 'Wallis Consultancy',
          images: [
            {
              url: 'https://wallisconsultancy.co.uk/images/mike-wallis2.png',
              width: 296,
              height: 330,
              alt: 'Mike Wallis',
            },
          ]
        }}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
