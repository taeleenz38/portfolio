import React from 'react'
import Navbar from 'components/navbar'
import Head from 'next/head'
import Link from 'next/link'

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact</title>
      </Head>
      <Navbar />
      <div className='contactCard'>
        <Link href="/">Home</Link>
      </div>
    </div>
  )
}
