import React from 'react'
import TopLeftCard from '../../../compontnts/TopLeftCard'
import TopRightCard from '../../../compontnts/TopRightCard'

export default function Cards() {
  return (
    <div style={{padding:"2% 10%",display:"flex",justifyContent:"space-between"}}>
        <TopLeftCard/>
        <TopRightCard/>
        </div>
  )
}
