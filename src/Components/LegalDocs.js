import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/LegalDocs.css";

function LegalDocs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <div className="legal-section-title">
      <h1 className="legal-siteTitle">
        <Link to="/">
          Talent Management Center <span className="legal-siteSign">🎓</span>
        </Link>
      </h1>

      <div className="legal-text-content">
        <p className="legal-title">General Info</p>
        <p className="legal-description">
        Welcome to Talent Connect, your premier destination for talent management solutions. Our mission is to empower organizations with effective strategies for recruiting, developing, and retaining a skilled workforce. By utilizing our platform, you acknowledge and agree to the terms outlined in our Privacy Policy and Terms of Service.
        </p>

        <p className="legal-title">Privacy Policy</p>
        <p className="legal-description">
        Respecting your privacy is our top priority. Our Privacy Policy details how we gather, utilize, and safeguard your personal and professional information. We uphold strict data security measures, ensuring that your data is handled with the utmost confidentiality and integrity.
        </p>

        <p className="legal-title">Terms of Service</p>
        <p className="legal-description">
        By engaging with Talent Connect, you consent to abide by our Terms of Service. These terms encompass guidelines for platform usage, interaction with talent management professionals, and the respective responsibilities of all parties involved. Familiarizing yourself with these terms is crucial for ensuring a seamless experience for all users.
        </p>

        <p className="legal-title">Consultations</p>
        <p className="legal-description">
        Talent Connect facilitates connections with seasoned talent management experts who offer comprehensive consultations. While these consultations complement traditional HR practices, they do not replace them. It's imperative to provide accurate and thorough information to receive tailored guidance and strategies.
        </p>

        <p className="legal-title">How it Works</p>
        <p className="legal-description">
        Navigating Talent Connect is straightforward. Simply select a specialist, schedule a consultation, and engage in a personalized session. Our specialists deliver customized advice and solutions aligned with your organization's needs and goals. However, urgent matters necessitate immediate attention and should be directed to your local HR department or relevant professionals.
        </p>
      </div>

      <div className="legal-footer">
        <p>© 2021-2024 TMC+. All rights reserved.</p>
      </div>
    </div>
  );
}

export default LegalDocs;
