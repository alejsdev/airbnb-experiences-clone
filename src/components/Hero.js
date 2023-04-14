import React from "react";

const Hero = () => {
  return (
    <div className="container">
      <img
        className="hero-img"
        src="https://res.cloudinary.com/dtkdsolsz/image/upload/v1643585638/airbnb%20experiences/photo-grid_dnbk3j.png"
        alt=""
      />
      <div className="hero-description">
        <h2 className="title">Online Experiences</h2>
        <p className="paragraph">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
};

export default Hero;
