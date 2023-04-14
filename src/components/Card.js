import React from "react";

const Card = (props) => {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      <div className="card">
        {badgeText && <div className="card-badge">{badgeText}</div>}
        <img className="card-img" src={props.coverImg} alt="" />
        <div className="card-description">
          <img
            src="https://res.cloudinary.com/dtkdsolsz/image/upload/v1643585632/airbnb%20experiences/star_zfnptw.png"
            className="star-icon"
            alt=""
          />
          <span className="rating-number">{props.stats.rating}</span>
          <span className="light-text">({props.stats.reviewCount}) • </span>
          <span className="light-text">{props.location}</span>
        </div>
        <p className="card-title">{props.title}</p>
        <p className="card-price">
          <b>From ${props.price}</b> / person
        </p>
      </div>
    </div>
  );
};

export default Card;
