import React from 'react'
import Navbar0 from 'components/navbarIndex'
import Dropdown0 from 'components/dropdown0'
import Image from 'next/image'
import Head from 'next/head'

export default function Index() {
  return (
    <div>
      <Head>
        <title>Portfolio - Tae Lee</title>
      </Head>
      <Navbar0 />
      <div className='infocard'>
        <div className='cardImg'>
          <Image
            src="/images/profilepic.jpg"
            alt="profilepic"
            width={400}
            height={400}
          />
        </div>
        <div className="info">
          <h4>Highly motivated junior developer with a love for front end design. Transitioned into coding after dabbling in the web 3.0 space and audio production,
            sparking my interest when I tried to build a marketplace (website) to upload my instrumentals/beats. Decided to take the leap and hopped on the Le Wagon
            Web Development Bootcamp in 2022 (#Batch 966). Looking to work in a team to produce quality, leading-edge websites that are user-focused and
            exceptional in design</h4>
          <p>- Next.js, React.js, HTML, CSS, Sass and Javascript</p>
          <p>- Ruby on Rails, SQL, Heroku and GitHub</p>
          <p>- Relational Databasing + Active Record</p>
          <div className="socialsContainer">
            <div className="socials">
              <a href="https://www.linkedin.com/in/taelee3/" target="_blank" rel="noreferrer">
                <Image src="/images/linkedin.png" alt="linkedin" width={50} height={50} /><span>Linkedin</span>
              </a>
            </div>
            <div className="socials">
              <a href="https://github.com/taeleenz38" target="_blank" rel="noreferrer">
                <Image src="/images/github.png" alt="github" width={50} height={50} /><span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
