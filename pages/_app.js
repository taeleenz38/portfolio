import 'styles/index.css'
import 'styles/contact.css'
import 'styles/projects.css'
import 'styles/navbar.css'
import 'styles/global.css'
import 'styles/aboutme.css'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/images/favicon.ico" />

      </Head>
      <Component {...pageProps} />

    </>
  )
}
