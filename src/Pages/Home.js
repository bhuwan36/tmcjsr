import React from "react";
import NavBar from "../Components/NavBar";
import Hero from "../Components/Hero";
import Info from "../Components/Info";
import About from "../Components/About";
import BookAppointment from "../Components/BookAppointment";
import Reviews from "../Components/Reviews";
import Doctors from "../Components/Doctors";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div className="home-section">
      <NavBar />
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
