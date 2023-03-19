import React from 'react'
import { FaInfoCircle,FaExpandArrowsAlt,FaEllipsisH } from 'react-icons/fa';
import { FiCornerUpLeft,FiCornerUpRight } from 'react-icons/fi';
import "./BottomLeftCard.css";

export default function BottomLeftCard() {
    return (
        <div className="card-container">
            <div className="card-top">
                <h5 className="top-heading">Structure your Pointers</h5>
                <FaInfoCircle className="info-icon" />
            </div>
            <p className="description-part">
                <span className="d-title">Description: </span>
                Description : Write a 300 - 400 word article from your thread . Publish your understanding and showcase your understanding to the entire world
            </p>
            <hr />
            {/*  */}
            <div className="structure-card-bottom">
                {/* title input part */}
                <div className="">
                    <h2 className='structure-card-title'>Title</h2>
                    <div className="structure-card-input-div">
                    <input className='structure-card-input' type="text" name="" id="" />
                    </div>
                    {/* big text box part */}
                    <div className="">
                    <h2 className='structure-card-title'>Content</h2>
                    {/* info instruction div */}
                        <div className="content-container">
                            {/* text div */}
                            <div className="content-text-container">
                                <span className='content-text'>File</span>
                                <span className='content-text'>Edit</span>
                                <span className='content-text'>View</span>
                                <span className='content-text'>Insert</span>
                                <span className='content-text'>Format</span>
                                <span className='content-text'>Tools</span>
                                <span className='content-text'>Table</span>
                                <span className='content-text'>Help</span>
                            </div>
                                {/* content icon div */}
                                <div className="content-icon-container">
                                    <FiCornerUpLeft className='content-left-icon'/>
                                    <FiCornerUpRight className='content-left-icon'/>
                                    <FaExpandArrowsAlt className='content-left-icon'/>
                                    <div className="p-div">
                                        <p>Paragraph</p>
                                    </div>
                                    <FaEllipsisH className='dot-icon'/>
                                </div>
                                    <div className="content-inp-div">
                                        <input className='content-input' type="text" name="" id="" />
                                    </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
