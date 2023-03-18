import React from 'react'
import Hero from './sections/Hero/Hero'
import Nav from './sections/Nav/Nav'

export default function Home() {
  return (
    <>
    <Nav></Nav>
    <div className="">
        <Hero/>
    </div>
    </>
  )
}
