import React from "react";
import TeamCard from "./TeamCard";
import profile1 from "../Assets/ranjan.jpg";
import profile2 from "../Assets/ts.jpg";
import profile3 from "../Assets/bb.jpg";
import "../Styles/Team.css";

function Team() {
  return (
    <div className="doctor-section" id="team">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Meet Our Team</span>
        </h3>

        <p className="dt-description">
          At the heart of our organization's success lies a dedicated team of professionals committed to cultivating and nurturing talent, driving innovation, and achieving sustainable growth.
        </p>
      </div>

      <div className="dt-cards-content">
        <TeamCard
          img={profile1}
          name="Ranjan Pradhan"
          title="Founder"
          stars=""
          reviews=""
        />
        <TeamCard
          img={profile2}
          name="Tanya Sharma"
          title="Human resources (HR)"
          stars=""
          reviews=""
        />
        <TeamCard
          img={profile3}
          name="Biotima Bose"
          title="Office Executive"
          stars=""
          reviews=""
        />
      </div>
    </div>
  );
}

export default Team;
