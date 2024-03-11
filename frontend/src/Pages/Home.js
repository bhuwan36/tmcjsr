
import React, { useState } from "react";
import Modal from "react-modal";
import RegisterForm from "./RegisterForm";
import Hero from "../Components/Hero";
import Info from "../Components/Info";
import About from "../Components/About";
import BookAppointment from "../Components/BookAppointment";
import Reviews from "../Components/Reviews";
import Doctors from "../Components/Doctors";
import Footer from "../Components/Footer";
import Navbar from "../Components/NavBar";

function Home() {
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const openRegisterModal = () => {
    setShowRegisterModal(true);
  };

  const closeRegisterModal = () => {
    setShowRegisterModal(false);
  };
  return (
    <div className="home-section">
      <button onClick={openRegisterModal}>Register</button>
      <Modal
        isOpen={showRegisterModal}
        onRequestClose={closeRegisterModal}
        contentLabel="Register Form"
        className="register-modal"
        overlayClassName="register-overlay"
      >
        <RegisterForm onClose={closeRegisterModal} />
      </Modal>
      <Navbar />
      <Hero />
      <Info />
      <About />
      <BookAppointment />
      <Reviews />
      <Doctors />
      <Footer />
    </div>
  );
}

export default Home;
