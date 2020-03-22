/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from "react"
import { Container, HeaderSideBar } from "./styles"
import { MENU_LAYOUT } from "./Constants";
import "./Sidebar.css";
import classNames from "classnames";

export const Sidebar = props => {

  const [open, setOpen] = useState(true)
  const [activeSection, setActiveSection] = useState("Transactions")
  const [activeSubScetiion, setActiveSubSection] =useState("Payments")
  return (
    <div className={classNames("sidebarContainer", {"open": open})}>
      <div className="logoContainer">
        <div>Logaso</div>
        <div className="buttonsContainer">
        <button type="button" onClick={()=>{setOpen(true)}}>Hamburguesa</button>
        {open &&
          <button type="button" onClick={()=>{setOpen(false)}} className="closeButton">
            close
          </button>
        }
        </div>
      </div>
      <div className={classNames("sidebarContent")}>
        <ol className={classNames("menuSections")}>
          {MENU_LAYOUT.map((menuItem, index) => {
            return (
              <div key={index}>
                <li onClick={()=>{menuItem.Name}} className={classNames({"sectionActive" : activeSection === menuItem.Name})}>{menuItem.Name}</li>
                {menuItem.Children
                  ? menuItem.Children.map((subMenuItem, key) => {
                    return (
                      <ol key={key}  className="subMenuSections">
                        <li
                          className={classNames({"subSectionActive" : activeSubScetiion === subMenuItem.Name})}
                        >{subMenuItem.Name}</li>
                      </ol>
                    )
                  })
                  : null}
              </div>
            )
          })}
        </ol>
      </div>
    </div>
  )
};
