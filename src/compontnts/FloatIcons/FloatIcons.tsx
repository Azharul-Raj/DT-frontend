import React from 'react'
import {MdQuestionMark} from 'react-icons/md'
import {FaRegCalendarAlt,FaPeopleCarry} from 'react-icons/fa'
import "./FloatIcons.css"

export default function FloatIcons() {
  return (
    <div className='main-float'>
      <div className="float-icons-container">
      <div className="float-icon-container">
      <MdQuestionMark className='float-icon'/>
      </div>
      <div className="float-icon-container">
      <FaPeopleCarry className='float-icon'/>
      </div>
      <div className="float-icon-container">
      <FaRegCalendarAlt className='float-icon'/>
      </div>
      </div>
    </div>
  )
}
