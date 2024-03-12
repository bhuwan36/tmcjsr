import React, { useState } from "react";
import Modal from "react-modal";
import RegisterForm from "../Pages/RegisterForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../Assets/logo.png";
import {
  faCommentDots,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";


function Navbar() {
  const [nav, setNav] = useState(false);


  const openNav = () => {
    setNav(!nav);
  };



  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const openRegisterModal = () => {
    setShowRegisterModal(true);
  };

  const closeRegisterModal = () => {
    setShowRegisterModal(false);
  };
  return (
    <div className="navbar-section">
      <Modal
        isOpen={showRegisterModal}
        onRequestClose={closeRegisterModal}
        contentLabel="Register Form"
        className="register-modal"
        overlayClassName="register-overlay"
      >
        <RegisterForm onClose={closeRegisterModal} />
      </Modal>
      <h1 className="navbar-title">
        <Link to="/">
          <img style={{ width: "300px", marginTop: "5px" }} src={Logo} alt="Logo" />
        </Link>
      </h1>

      {/* Desktop */}
      <ul className="navbar-items">
        <li>
          <Link to="/" className="navbar-links">
            Home
          </Link>
        </li>
        <li>
          <a href="#services" className="navbar-links">
            Services
          </a>
        </li>
        <li>
          <a href="#about" className="navbar-links">
            About
          </a>
        </li>
        <li>
          <a href="#reviews" className="navbar-links">
            Reviews
          </a>
        </li>
        <li>
          <a href="#team" className="navbar-links">
            Team
          </a>
        </li>
      </ul>

      <button
        className="navbar-btn"
        type="button"
        onClick={openRegisterModal}
      >
        <FontAwesomeIcon icon={faCommentDots} /> Register Now
      </button>

      {/* Mobile */}
      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div onClick={openNav} className="mobile-navbar-close">
          <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
        </div>

        <ul className="mobile-navbar-links">
          <li>
            <Link onClick={openNav} to="/">
              Home
            </Link>
          </li>
          <li>
            <a onClick={openNav} href="#services">
              Services
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#about">
              About
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#reviews">
              Reviews
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#team">
              Team
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div className="mobile-nav">
        <FontAwesomeIcon
          icon={faBars}
          onClick={openNav}
          className="hamb-icon"
        />
      </div>
    </div>
  );
}

export default Navbar;
