import '../assets/styles/globals.scss'
import Seo from '../components/Seo';

function MyApp({ Component, pageProps }) {
  return (
      <>
        <Component {...pageProps} />
        <Seo seo={pageProps.seo} />
      </>
  )
}

export default MyApp
