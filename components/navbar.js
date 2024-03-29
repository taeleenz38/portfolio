import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar-me'>
        <Image
          src="/images/profilepic.jpg"
          alt="profilepic"
          width={80}
          height={80}
        />
        <h3>Tae Lee</h3>
      </div>
      <div>
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/aboutme">About Me</Link>
      </div>
    </div>
  )
}
