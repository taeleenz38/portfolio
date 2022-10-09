import Document, { Html, Head, Main, NextScript } from 'next/document'

export default function MyDocument() {
  return (
    <Html>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v6.1.2/css/all.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
