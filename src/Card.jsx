import React from "react";

function Card(props) {
  return (
    <div className="container">
      <div className="grid-item">
        <div className="card-body">
          <h2>{props.name}</h2>
          <img src={props.img}></img>
          <p>{props.tel}</p>
          <p>{props.email}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
