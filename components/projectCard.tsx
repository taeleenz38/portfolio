import React from 'react'
import Image from 'next/image'

export default function Projectcard({ title, url, path, description, skills }) {
  return (
    <div className="projectCard">
      <h3>{title}</h3>
      <a href={`${url}`} target="_blank">
        <Image
          src={`/images/${path}`}
          alt="profilepic"
          width={500}
          height={500}
        />
      </a>
      <p>{description}</p>
      <p>{skills}</p>
    </div>
  )
}
