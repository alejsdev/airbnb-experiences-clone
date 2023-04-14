import React from "react";

const Host = (props) => {
  return (
    <div className="host">
      <img className="host-img" src={props.img} alt="" />
      <h2 className="host-desc">{props.description}</h2>
      <p className="host-location">{props.location}</p>
    </div>
  );
};

export default Host;
