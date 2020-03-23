/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from "react"
import { Container, HeaderSideBar } from "./styles"
import { MENU_LAYOUT } from "./Constants";
import "./Sidebar.css";
import classNames from "classnames";
import { MenuUnfoldOutlined, MenuFoldOutlined,ExperimentOutlined  } from "@ant-design/icons";
export const Sidebar = props => {

  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("Transactions")
  const [activeSubScetiion, setActiveSubSection] =useState("Payments")
  return (
    <div className={classNames("sidebarContainer", {"open": open})}>
      <div className="logoContainer">
        <ExperimentOutlined className="logo"/>
          {!open &&         <button type="button" onClick={()=>{setOpen(true)}}>
            <MenuUnfoldOutlined/>
          </button>}

        {open &&
          <button type="button" onClick={()=>{setOpen(false)}} className="closeButton">
            <MenuFoldOutlined/>
          </button>
        }
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
