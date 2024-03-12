import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import RegisterForm from "../Pages/RegisterForm";
import Doctor from "../Assets/ranjan.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Hero.css";

function Hero() {

  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };



  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const openRegisterModal = () => {
    setShowRegisterModal(true);
  };

  const closeRegisterModal = () => {
    setShowRegisterModal(false);
  };
  return (
    <div className="section-container">
      <Modal
        isOpen={showRegisterModal}
        onRequestClose={closeRegisterModal}
        contentLabel="Register Form"
        className="register-modal"
        overlayClassName="register-overlay"
      >
        <RegisterForm onClose={closeRegisterModal} />
      </Modal>
      <div className="hero-section">
        <div className="text-section">
          <p className="text-headline">🎓 Talent Management Center</p>
          <h2 className="text-title">
            Join, Learn, and Hired
          </h2>
          <p className="text-descritpion">
            We build your talent for jobs. To give opportunity at big Multi National Companies. Here, we connect students to employers by scheduling interviews, matching students with their relevant fields, providing Internships and connecting them to companies.
          </p>
          <button
            className="text-appointment-btn"
            type="button"
            onClick={openRegisterModal}
          >
            <FontAwesomeIcon icon={faCalendarCheck} /> Register Now
          </button>
          <div className="text-stats">
            <div className="text-stats-container">
              <p>500+</p>
              <p>Students Got Job</p>
            </div>

            <div className="text-stats-container">
              <p>20+</p>
              <p>Expert Teachers</p>
            </div>

            <div className="text-stats-container">
              <p>5+</p>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>

        <div className="hero-image-section">
          <img className="hero-image1" style={{ borderRadius: "20px" }} src={Doctor} alt="Doctor" />
        </div>
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;
