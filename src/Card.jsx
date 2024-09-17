import React from "react";
import "./Card.css";
import Avatar from "./Avatar";

function Card(props) {
  return (
    <div className="card">
      <div className="card-content">
        <h2>{props.name}</h2>
        
        <Avatar img={props.img}/>
        <img src={props.img}></img>
        <p>Phone: {props.phone}</p>
        <p>Email: {props.email}</p>
      </div>
    </div>
  );
}

export default Card;
