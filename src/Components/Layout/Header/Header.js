/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-expressions */
import React from "react";
import { Container, Menu, Logo, Label, MenuOptions } from "./styles";
import { Dropdown } from '../../Dropdown/Dropdown'

export const Header = props => {
  return (
    <Container>
      <Menu> <Logo> </Logo> <MenuOptions > <Label>User Name</Label>  <Dropdown /></MenuOptions>   </Menu>
    </Container>
  )
}
