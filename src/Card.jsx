import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <div className="card-content">
        <h2>{props.name}</h2>
        <img src={props.img}></img>
        <p>Phone: {props.phone}</p>
        <p>Email: {props.email}</p>
      </div>
    </div>
  );
}

export default Card;
