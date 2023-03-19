import { FaInfoCircle,FaAngleUp } from "react-icons/fa";
import { BsChevronUp } from "react-icons/bs";

import "./BottomRightCard.css"

export default function BottomRightCard() {
  return (
    <div className="card-container">
    <div className="card-top">
      <h5 className="top-heading">4SA Method</h5>
      <FaInfoCircle className="info-icon" />
    </div>
      <p className="method-div">
        <span className="d-title">Description: </span>
        To Explore more read more
      </p>
      <hr />
      <div className="method-card-bottom-part">
        <div className="introduction-container">  
        <FaAngleUp className="introduction-icon"/>        
          <h4 style={{fontWeight:"500"}}>  Introduction</h4>
        </div>
          <p className="introduction-desc">The 4SA Method , How to bring a idea into progress ?</p>
          <p className="see-more">See More</p>
        <div className="thread-container">  
        <FaAngleUp className="introduction-icon"/>        
          <h4 style={{fontWeight:"500"}}>  Thread A</h4>
        </div>
          <p className="introduction-desc">How are you going to develop your stratergy ? Which method are you going to use to develop a stratergy ? What if the project is lengthy?</p>
          <p className="see-more">See More</p>
          <div style={{marginLeft:"40px"}} className="thread-container">  
        <FaAngleUp className="introduction-icon"/>        
          <h4 style={{fontWeight:"500"}}>  Example 1</h4>
        </div>
          <p style={{marginLeft:"30px"}} className="introduction-desc">You have a concept , How will you put into progress?</p>
      </div>
  </div>
  )
}
