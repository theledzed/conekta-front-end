import React from "react";
import './Card.css'

export const Card = props => {
  return (
    <div className="cardContainer" >
      <div className="cardHeader">{props.Title.toUpperCase()}</div>
      <div className="cardBody"> {props.children}</div>
    </div>
  );
};
