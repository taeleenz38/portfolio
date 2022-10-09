import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export default function Navbar() {
  return (
    <div className='navbar'>
      <Image
        src="./images/profilepic.jpg"
        alt="profilepic"
      />
      <h3>Tae Lee</h3>
      <Link href="/projects">Projects</Link>
      <Link href="/aboutme">About Me</Link>
      <Link href="/contact">Contact</Link>
    </div>
  )
}
