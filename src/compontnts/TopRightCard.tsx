
import { FaInfoCircle, FaAngleUp } from "react-icons/fa";
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
        <div className="">
          {/* heading */}
          <div className="small-input-container">
            <p className="small-input-heading">Sub thread 1</p>
          <input className="small-input" type="text" name="" placeholder="Enter Text here" id="" />
          </div>
        </div>
      </div>
      {/* input blog container */}
    </div>
  );
}
// box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;