import React from 'react'
import Cards from './sections/Cards/Cards'
import Hero from './sections/Hero/Hero'
import Nav from './sections/Nav/Nav'

export default function Home() {
  return (
    <>
    <Nav></Nav>
    <div className="">
        <Hero/>
        <Cards/>
    </div>
    </>
  )
}
