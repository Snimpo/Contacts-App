import React from "react";
import "./Card.css";
import Avatar from "./Avatar";
import Details from "./Details";

function Card(props) {
  return (
    <div className="card">
      <div className="card-content">
        <h2>{props.name}</h2>
        
        <Avatar img={props.img}/>
        <img src={props.img}></img>
        <Details detailsInfo={props.phone} />
        <Details detailsInfo={props.email} />
        
        
      </div>
    </div>
  );
}

export default Card;
