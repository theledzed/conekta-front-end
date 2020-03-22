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
        Robert Downer Jr.
        {displayMenu ? (
          <ListUl>
            <ListLi>Perfil</ListLi>
            <ListLi>Cerrar Sesión </ListLi>
          </ListUl>
        ) : null}
      </ButtonDropdown>
    </DropdownContainer>
  )
}
