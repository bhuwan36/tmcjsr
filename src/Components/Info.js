import React from "react";
import InformationCard from "./InformationCard";
import { faHeartPulse, faTruckMedical, faTooth } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">

          Talent management drives business success by recruiting, developing, and retaining skilled employees. It aligns talent goals with business objectives, fosters a culture of empowerment, and utilizes data-driven decision-making. By prioritizing practices like rapid talent allocation and positive employee experiences, companies can outperform competitors and achieve higher success.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Fundamentals of Talent Management"
          description="Acquiring skilled individuals through effective recruitment strategies and streamlining the onboarding process for smooth integration. Providing ongoing learning opportunities and implementing training programs to support professional growth. Facilitating career progression within the organization and encouraging employees to take on new challenges."
          icon={faTruckMedical}
        />

        <InformationCard
          title="Key Components of Talent Management Strategy"
          description="Ensuring talent goals are closely tied to the overall business strategy and aligning employee development initiatives with organizational objectives. Utilizing data analytics to make informed decisions about talent management and leveraging metrics to assess the effectiveness of practices. Focusing on creating positive experiences for employees within the organization and promoting engagement through meaningful work and a supportive environment."
          icon={faHeartPulse}
        />

        <InformationCard
          title="Strategic Implementation and Organizational Benefits"
          description="Quickly deploying talent as per organizational needs and reacting to market changes swiftly. Strategic HR Involvement: Engaging HR strategically and collaborating across departments. Competitive Advantage: Leveraging talent management for business performance and profitability."
          icon={faTooth}
        />
      </div>
    </div>
  );
}

export default Info;
