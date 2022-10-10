import Link from 'next/link'
import React from 'react'

export default function Navbar0() {
  return (
    <div className='navbar-index'>
      <h3>Tae Lee</h3>
      <div>
        <Link href="/projects">Projects</Link>
        <Link href="/aboutme">About Me</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  )
}
