import React from "react";
import NavBar from "../Components/NavBar";
import Hero from "../Components/Hero";
import Info from "../Components/Info";
import About from "../Components/About";
import BookAppointment from "../Components/BookAppointment";
import Carousel from "../Components/Carousel";
import Team from "../Components/Team";
import Footer from "../Components/Footer";
import Gallery from "../Components/Gallery";

function Home() {

  return (
    <div className="home-section">
      <NavBar />
      <Hero />
      <Info />
      <About />
      <BookAppointment />
      <Carousel />
      <Gallery />
      <Team />
      <Footer />
    </div>
  );
}

export default Home;
