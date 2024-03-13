import React from "react";
import InformationCard from "./InformationCard";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
The Talent Management Centre offers a range of services including soft skills training, professional development classes, and English communication skill enhancement. Additionally, they provide placement assistance to help students prepare for job opportunities. Various job openings related to talent management are available at institutions like PSG Talent Management Centre in Coimbatore, India. Furthermore, there are numerous job listings for Talent Management Institute positions in India on platforms like LinkedIn. Organizations like SCM Consultancy Services emphasize the importance of the placement process in talent management for positive publicity. For individuals seeking talent management roles, platforms like Naukri.com offer a wide array of job opportunities in this field.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Fundamentals of Talent Management"
          description="Acquiring skilled individuals through effective recruitment strategies and streamlining the onboarding process for smooth integration. Providing ongoing learning opportunities and implementing training programs to support professional growth. Facilitating career progression within the organization and encouraging employees to take on new challenges."
          icon={faGraduationCap}
        />

        <InformationCard
          title="Key Components of Talent Management Strategy"
          description="Ensuring talent goals are closely tied to the overall business strategy and aligning employee development initiatives with organizational objectives. Utilizing data analytics to make informed decisions about talent management and leveraging metrics to assess the effectiveness of practices. Focusing on creating positive experiences for employees within the organization and promoting engagement through meaningful work and a supportive environment."
          icon={faGraduationCap}
        />

        <InformationCard
          title="Strategic Implementation and Organizational Benefits"
          description="Quickly deploying talent as per organizational needs and reacting to market changes swiftly. Strategic HR Involvement: Engaging HR strategically and collaborating across departments. Competitive Advantage: Leveraging talent management for business performance and profitability."
          icon={faGraduationCap}
        />
      </div>
    </div>
  );
}

export default Info;
