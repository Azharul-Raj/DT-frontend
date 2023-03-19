
import { FaInfoCircle, FaAngleUp,FaSpa,FaPlus } from "react-icons/fa";
import { AiFillBulb } from "react-icons/ai";
import { MdComment,MdLiveHelp,MdKeyboardArrowDown } from "react-icons/md";
import './TopRightCard.css';
export default function TopRightCard() {
  return (
    <div className="card-container">
      <div className="card-top">
        <h5 className="top-heading">Threadbuild</h5>
        <FaInfoCircle className="info-icon" />
      </div>
      <p className="description-part">
        <span className="d-title">Description: </span>
        Story of Alignment Scope of Agility Specific Accountable Staggering
        Approach
      </p>
      <div className="thread-a">
        <FaAngleUp style={{ marginLeft: "20px", height: "30px" }} />
        <h3 style={{ marginLeft: "80px" }}>Thread A</h3>
      </div>
      {/* input blog container */}
      <div className="threadbuild-bottom-container">
        <div className="small-input-main">
          {/* heading */}
          <div className="small-input-container">
            <p className="small-input-heading">Sub thread 1</p>
          <input className="small-input" type="text" name="" placeholder="Enter Text here" id="" />
          </div>
          <div className="small-input-container">
            <p className="small-input-heading">Sub Interpretation 1</p>
          <input className="small-input" type="text" name="" placeholder="Enter Text here" id="" />
          </div>
          </div>
          {/* bottom */}
          <div style={{display:"flex",justifyContent:"end",margin:"20px 0"}}>
            <div style={{marginRight:"26px"}}>
              <AiFillBulb className="threadbuild-icon"/>
              <MdComment className="threadbuild-icon"/>
              <MdLiveHelp className="threadbuild-icon"/>
              <FaSpa className="threadbuild-icon"/>
              </div>
              <button style={{marginRight:"20px"}} className="category-btn">select category <span className="category-btn-icon"><MdKeyboardArrowDown/></span></button>
              <button className="category-btn">select process <span className="category-btn-icon"><MdKeyboardArrowDown/></span></button>
          </div>
          {/* plus btn */}
          <div className="">
            <button className="sub-thread-btn"><FaPlus/> Sub-thread</button>
          </div>
          {/* large input container */}
          <div className="large-div">
          <div className="large-input-container">
            <p className="small-input-heading">Summary for Thread A</p>
          <input className="large-input" type="text" name="" placeholder="Enter Text here" id="" />
          </div>
          </div>
      </div>
      {/* input blog container */}
    </div>
  );
}
// box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;