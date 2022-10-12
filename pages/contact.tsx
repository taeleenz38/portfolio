import React from 'react'
import Navbar from 'components/navbar'
import Head from 'next/head'
import Link from 'next/link'
import ContactForm from "../components/contactForm";


export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact</title>
      </Head>
      <Navbar />
      <div className="contactCard">
        <h3>Contact Me</h3>
        <p>📫:  taekyu.lee3@gmail.com</p>
        <ContactForm />
      </div>
    </div>
  )
}
