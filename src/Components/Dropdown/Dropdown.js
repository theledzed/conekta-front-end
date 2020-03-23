import React, { useState } from 'react'
import { Link } from '@reach/router'
import { ListUl, DropdownContainer, ListLi, ButtonDropdown } from './Styles'
import {
  UserOutlined,
  ImportOutlined
} from '@ant-design/icons'

export const Dropdown = props => {
  const [displayMenu, setDisplayMenu] = useState(false)
  return (
    <DropdownContainer>
      <ButtonDropdown
        className='button'
        onClick={() => {
          setDisplayMenu(!displayMenu)
        }}
      >
        Robert Downer Jr.
        {displayMenu ? (
          <ListUl>
            <Link to='/'>
              <ListLi><UserOutlined className='iconSideBar' /> Perfil</ListLi>
            </Link>
            <Link to='/'>
              {' '}
              <ListLi> <ImportOutlined className='iconSideBar' /> Cerrar Sesión </ListLi>
            </Link>
          </ListUl>
        ) : null}
      </ButtonDropdown>
    </DropdownContainer>
  )
}
