import React from 'react'
import Navbar from 'components/navbar'
import Head from 'next/head'
import Projectcard from 'components/projectCard'
import data from 'components/data'

export default function Contact() {

  const cards = data.map(item => {
    return (
      <Projectcard
        key={item.id}
        {...item}

      />
    )
  })

  return (
    <div>
      <Head>
        <title>Projects</title>
      </Head>
      <Navbar />
      <section className="card-list" >
        {cards}
      </section>
    </div>
  )
}
