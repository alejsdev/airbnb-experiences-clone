import React from 'react';

const City = (props) => {
  return <div className="city">
      <img className="city-img" src={props.img} alt="" />
      <p className="city-name">{props.name}</p>
  </div>;
};

export default City;
