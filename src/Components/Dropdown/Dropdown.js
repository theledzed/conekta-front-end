import React, { useState } from "react";
import { ListUl, DropdownContainer, ListLi, ButtonDropdown } from "./Styles"

export const Dropdown = props => {
  const [displayMenu, setDisplayMenu] = useState(false)
  return (
    <DropdownContainer>
      <ButtonDropdown
        className="button"
        onClick={() => {
          setDisplayMenu(!displayMenu)
        }}
      >
        My Setting
        {displayMenu ? (
          <ListUl>
            <ListLi>Create Page</ListLi>
            <ListLi>Manage Pages </ListLi>
            <ListLi>Create Ads </ListLi>
            <ListLi>Manage Ads </ListLi>
            <ListLi>Activity Logs</ListLi>
            <ListLi>Setting</ListLi>
            <ListLi>Log Out</ListLi>
          </ListUl>
        ) : null}
      </ButtonDropdown>
    </DropdownContainer>
  )
}
