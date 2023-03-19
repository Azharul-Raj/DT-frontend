import React from 'react'
import FloatIcons from '../compontnts/FloatIcons/FloatIcons'
import LeftFloat from '../compontnts/LeftFloat/LeftFloat'
import RightFloat from '../compontnts/RightFloat/RightFloat'
import Cards from './sections/Cards/Cards'
import Hero from './sections/Hero/Hero'
import Nav from './sections/Nav/Nav'

export default function Home() {
  return (
    <>
    <Nav></Nav>
        <RightFloat/>
        <LeftFloat/>
    <div className="">
        <Hero/>
        <Cards/>
        <FloatIcons/>
    </div>
    </>
  )
}
