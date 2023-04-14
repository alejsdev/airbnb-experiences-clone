import React from "react";

const Quality = () => {
  return (
    <div className="banner">
      <div className="quality-title">
        <h2>Airbnb Experiences are vetted for quality</h2>
      </div>
      <div className="quality-item">
        <img
          className="quality-logo"
          src="https://res.cloudinary.com/dtkdsolsz/image/upload/v1643590362/airbnb%20experiences/logo1_aztx0l.png"
          alt=""
        />
        <h4>Local experts</h4>
        <p className="quality-desc">Led by locals who love where they’re from and what they do.</p>
      </div>
      <div className="quality-item">
        <img
          className="quality-logo"
          src="https://res.cloudinary.com/dtkdsolsz/image/upload/v1643590362/airbnb%20experiences/logo2_vgxsxw.png"
          alt=""
        />
        <h4>Small groups</h4>
        <p className="quality-desc">With intimate group sizes, you’ll never get lost in the crowd.</p>
      </div>
      <div className="quality-item">
        <img
          className="quality-logo"
          src="https://res.cloudinary.com/dtkdsolsz/image/upload/v1643590367/airbnb%20experiences/logo3_nh63kk.png"
          alt=""
        />
        <h4>High standards</h4>
        <p className="quality-desc">Every experience is reviewed for unique access.</p>
      </div>
    </div>
  );
};

export default Quality;
