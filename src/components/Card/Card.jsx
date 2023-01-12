import React from "react";

function Card({ name, status, image }) {
  return (
    <div>
      <div>{name}</div>
      <div>{status}</div>
      <div>
        <img src={image} alt="" />
      </div>
    </div>
  );
}

export default Card;
