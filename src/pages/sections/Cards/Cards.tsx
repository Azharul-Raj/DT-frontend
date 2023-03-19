import React from 'react'
import BottomLeftCard from '../../../compontnts/BottomLeftCard'
import TopLeftCard from '../../../compontnts/TopLeftCard'
import TopRightCard from '../../../compontnts/TopRightCard'
import "./Cards.css"

export default function Cards() {
  return (
    <>
    <div style={{padding:"2% 10%"}}>
      <div className="top-cards">
        <TopLeftCard/>
        <TopRightCard/>
      </div>
        <div className="bottom-cards">
          <BottomLeftCard/>
        </div>
        </div>
        </>
  )
}
