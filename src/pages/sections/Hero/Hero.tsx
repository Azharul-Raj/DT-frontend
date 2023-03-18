import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="title">
        <h2 className="heading">Technical Project Management</h2>
        <button>Submit task</button>
      </div>
      {/* card part */}
      <div className="details-card">
        <h3 className="card-heading">Explore the world of management</h3>
        <p>
          As a project manager, you play an important reole in leading a project
          through initiation, planning, execution, monitoring, controlling and
          completion. How? Do you want to manage each and every step of your
          life?
        </p>
      </div>
    </div>
  );
}
