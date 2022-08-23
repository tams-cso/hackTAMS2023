import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>hackTAMS 2023</title>
        <meta name="description" content="hackTAMS is an annual hackathon organized by students at the Texas Academy of Mathematics and Science for students in the Dallas-Fort Worth area."/>
        <meta property="og:url" content="https://2023.hacktams.org"/>
        <meta property="og:title" content="hackTAMS 2023"/>
        <meta property="og:description" content="hackTAMS is an annual hackathon organized by students at the Texas Academy of Mathematics and Science for students in the Dallas-Fort Worth area."/>
        <meta property="og:image" content="https://2023.hacktams.org/titlePage.png"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"/>
        <meta name="theme-color" content="#7f8aad"/>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
