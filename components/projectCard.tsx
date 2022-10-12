import React from 'react'
import Image from 'next/image'
import Head from 'next/head'

export default function Projectcard({ title, url, path, description, skills }: { title:string, url:string, path:string, description:string, skills:string}) {
  return (
    <div className='projects'>
      <a href={`${url}`} target="_blank" rel="noreferrer">
        <div className="projectCard">
          <h3>{title}</h3>
          <Image
            src={`/images/${path}`}
            alt="profilepic"
            width={500}
            height={500}
          />
          <p>{description}</p>
          <p>{skills}</p>
        </div >
      </a>
    </div>
  )
}
