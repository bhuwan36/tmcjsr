import React from "react";
import Doctor from "../Assets/image2.png";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Doctor} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">

          Welcome to the world of talent management! Here, we believe in the power of recruiting, developing, and retaining a productive workforce to drive business success and maintain a competitive edge. Our focus is on investing in our employees through skilled recruitment, continuous learning opportunities, and internal growth pathways.
        </p>

        <h4 className="about-text-title">Your Solutions</h4>

        <SolutionStep
          title="Key components"
          description="Key components of our talent management approach include aligning talent goals with business objectives, fulfilling employee expectations, and utilizing data-driven decision-making. We prioritize workforce planning, recruitment, onboarding, training, performance management, compensation, benefits, and succession planning to ensure a thriving organizational culture.."
        />

        <SolutionStep
          title="Our goal"
          description="Our goal is to cultivate an environment that empowers employees to excel, fostering innovation and profitability within our organization. By implementing experience-driven development at our core, we provide intentional learning experiences that align with our business strategies and nurture leadership growth."
        />

        <SolutionStep
          title="focus on practices"
          description="With a focus on practices like rapid talent allocation, creating positive employee experiences, and involving HR strategically, we aim to outperform competitors and achieve higher levels of success. Welcome to a journey of growth, development, and excellence in talent management."
        />
      </div>
    </div>
  );
}

export default About;
