import React from 'react'
import "./RightFloat.css"

import {BsXLg} from "react-icons/bs"

export default function RightFloat() {
  return (
    <div className='right-float'>
        <div className="right-float-container">
            {/* card */}
            <div className="right-float-card">
                <div className="right-float-content">
                    <BsXLg className='cross-icon'/>
                    <div className="top-float-text">
                        <p className='right-float-text'>N</p>
                        <p className='right-float-text'>o</p>
                        <p className='right-float-text'>t</p>
                        <p className='right-float-text'>i</p>
                        <p className='right-float-text'>e</p>
                    </div>
                    <div className="bottom-float-text">
                        <p className='right-float-text'>B</p>
                        <p className='right-float-text'>o</p>
                        <p className='right-float-text'>a</p>
                        <p className='right-float-text'>r</p>
                        <p className='right-float-text'>d</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
