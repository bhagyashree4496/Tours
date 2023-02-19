import React, { useState } from "react";
import "./tour.css";

function Tour({ id, image, info, name, price, removeTour }) {
  return (
    <div className="cardwraper">
      <img src={image} className="image"></img>
      <div className="nampri">
        <div className="name">{name}</div>
        <div className="price">${price}</div>
      </div>
      <div className="info">{info}</div>
      <button
        onClick={() => {
          removeTour(id);
        }}
        className="button"
      >
        Not Interested
      </button>
    </div>
  );
}

export default Tour;
