import React from "react";

const Header = () => {
  return (
    <div className="container">
      <h5>AIRBNB EXPERIENCES</h5>
      <h2 className="title">
        One-of-a-kind activities
        <br /> hosted by experts
      </h2>
      <small>
        Review COVID-19 travel restrictions before you book.
        <a
          href="https://www.airbnb.com/help/topic/1418"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Learn more
        </a>
      </small>
    </div>
  );
};

export default Header;
