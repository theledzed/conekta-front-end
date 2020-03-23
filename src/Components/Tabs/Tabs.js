import React, { useState } from "react";
import './Tabs.css'
import classNames from "classnames"

export const Tabs = props => {
  return (
    <div className="tabsContainer">
      <div className={classNames("tabsHeader", props.className)}>
        {props.sectionsTabs.map(item => {
          return (
            <button  className={classNames({"activeTab": props.active === item.id}, "tabs")} onClick={()=>{
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
