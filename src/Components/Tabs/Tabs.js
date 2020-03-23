import React, { useState } from "react";
import './Card.css'

export const Tabs = props => {
  return (
    <div className="tabsContainer">
      <div className="cardHeader">
        {props.sectionsTabs.map(item => {
          return (
            <button onClick={()=>{
                props.onClickSection(item.id)
            }}> {item.name} </button>
          );
        })}
      </div>
      <div>
          {props.children}
      </div>
    </div>
  );
};
