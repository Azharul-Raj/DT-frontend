
import "./Nav.css";

import { FaHome,FaTools,FaBell } from "react-icons/fa";
import { FiMoreVertical } from "react-icons/fi";
import logo from "../../../assets/site-logo.svg";
import avatar from "../../../assets/Ellipse 53.png"

export default function Nav() {
  return (
    <div className="container">
      {/* logo part */}
      <div className="">
          <img height={40} src={logo} alt="logo" />
      </div>
      {/* icon btn part */}
      <div className="nav-container">
          <div className="icon-container">
            <FaHome className="icon"/>
          </div>
          <div className="icon-container">
            <FaTools className="icon"/>
          </div>
          <div className="icon-container">
            <FaBell className="icon"/>
          </div>
          {/* <div className=""> */}
            <img src={avatar} alt="avatar" />
          {/* </div> */}
          <FiMoreVertical className="more-icon"/>
      </div>
    </div>
  )
}
