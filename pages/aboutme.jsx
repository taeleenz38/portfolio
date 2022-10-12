import React from 'react'
import Navbar from 'components/navbar'
import Head from 'next/head'

export default function Aboutme() {
  return (
    <div>
      <Head>
        <title>About Me</title>
      </Head>
      <Navbar />
      <div className="infocard-2">
        <h3>About Me!</h3>
        <p>After receiving my Bsc in Psychology from the University of Melbourne, I decided to move to South Korea for 2 years. Having spent my youth abroad in New Zealand, China and Australia, I wanted to experience life in South Korea and ended up in various positions from working in retail or working as a story producer in an indie gaming company.</p>
        <p>During my last two gigs I was also actively pursuing a career in music as an audio engineer/producer. I came across the idea of web development for the first time when looking through different marketplaces to upload beats and instrumentals.</p>
        <p>Started playing around with HTML and CSS for a bit using youtube tutorials until I decided to take the leap and join the Web Development Course at Le Wagon to become a full stack developer - Batch #966.</p>
        <p>I{`'`}m always looking to learn and upskill as a developer, keeping up with new technologies and ways of solving problems through coding. Currently learning Tailwind CSS, Vue.js and Node.js</p>
      </div>
    </div>
  )
}
