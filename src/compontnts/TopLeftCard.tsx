import React from "react";
import "./TopLeftCard.css";
import { FaInfoCircle } from "react-icons/fa";
import image from "../assets/youtube.png";

export default function TopLeftCard() {
  return (
    <div className="card-container">
      <div className="card-top">
        <h5 className="top-heading">Technical Project Management</h5>
        <FaInfoCircle className="info-icon" />
      </div>
        <p className="description-part">
          <span className="d-title">Description: </span>
            Story of Alignment Scope of Agility Specific Accountable Staggering
            Approach
        </p>
        <div className="">
            <img src={image} alt="image" />
        </div>
    </div>
  );
}
