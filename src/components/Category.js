import React from "react";

const Category = (props) => {
  return (
    <div className="category">
      <img className="category-img"src={props.img} alt=""/>
      <h3 className="category-quant">+{props.quantity} experiences</h3>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
};

export default Category;
