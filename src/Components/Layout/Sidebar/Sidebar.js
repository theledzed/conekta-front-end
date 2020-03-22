/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from "react"
import { Container, HeaderSideBar } from "./styles"
import { MENU_LAYOUT } from "./Constants"

export const Sidebar = props => {
  return (
    <Container>
      <HeaderSideBar>
        <div>Logaso</div>
        <div>Hamburguesa</div>
      </HeaderSideBar>
      <div>
        <ol>
          {MENU_LAYOUT.map((menuItem, index) => {
            return (
              <div key={index}>
                <li>{menuItem.Name}</li>
                {menuItem.Children
                  ? menuItem.Children.map((subMenuItem, key) => {
                    return (
                      <ol key={key}>
                        <li>{subMenuItem.Name}</li>
                      </ol>
                    )
                  })
                  : null}
              </div>
            )
          })}
        </ol>
      </div>
    </Container>
  )
};
