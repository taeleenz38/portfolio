import Link from 'next/link'
import React from 'react'

export default function NavbarIndex() {
  return (
    <div className='navbar-index'>
      <Link href="/projects">Projects</Link>
      <Link href="/aboutme">About Me</Link>
      <Link href="/contact">Contact</Link>
    </div>
  )
}
