import React from 'react'
import Image from 'next/image'

export default function Projectcard({ title, url, path, description, skills }) {

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
            unoptimized={true}
            priority
          />
          <p>{description}</p>
          <p>{skills}</p>
        </div >
      </a>
    </div>
  )

}
