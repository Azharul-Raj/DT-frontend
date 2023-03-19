import React, { useState } from 'react'
import "./LeftFloat.css"

export default function LeftFloat() {
    const [open, setOpen] = useState(false);
    return (
        <div className='left-float'>
            <div onClick={() => setOpen(!open)} className={"left-float-container"}>
                <div className={`${open ? "active-card" : "left-float-card"}`}>
                    <div className={`${open ? "active-top" : "left-float-top"}`}>
                        {open && <h4 className='left-float-title'>Journey Board</h4>}
                        {/* black top div */}
                    </div>
                    {
                        !open ? <div className="number-container">
                            <div className="number-div">
                                <p className='number'>1</p>
                            </div>

                        </div>
                            :
                            <div className="active-text-container">
                                <li className='list-title'>Explore the world of management</li>
                                <div className="">
                                    <li>    Technical Project Management
                                    </li>
                                    <li>Threadbuild</li>
                                    <li>Structure your pointers</li>
                                    <li>4SA Method</li>
                                </div>
                            </div>
                    }

                </div>
            </div>
        </div>
    )
}
