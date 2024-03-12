import React from "react";
import Doctor from "../Assets/image1.avif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

import "../Styles/BookAppointment.css";

function BookAppointment() {


  return (
    <div className="ba-section">
      <div className="ba-image-content">
        <img src={Doctor} alt="Doctor Group" className="ba-image1" />
      </div>

      <div className="ba-text-content">
        <h3 className="ba-title">
          <span>Why Choose US</span>
        </h3>
        <p className="ba-description">
          Choosing a talent management center ensures a focus on recruiting skilled individuals, aligning talent goals with business objectives, and fostering a culture of excellence. It prioritizes continuous learning opportunities, data-driven decision-making, and strategic HR involvement to outperform competitors and achieve higher business success.
        </p>

        <p className="ba-checks ba-check-first">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Recruitment and Development
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} />Creating a Culture of Excellence
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Alignment with Business Objectives
        </p>
        <p className="ba-checks ba-check-last">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Strategic Focus
        </p>

      </div>
    </div>
  );
}

export default BookAppointment;
