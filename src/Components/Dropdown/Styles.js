import styled from 'styled-components'

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;

`

export const ListUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  top: 45px;
  right: 0px;
  width: 200px;
  background-color: white;
  font-weight: bold;
  position: absolute;

  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`

export const ListLi = styled.li`
  padding: 8px 16px;
  border-bottom: 1px solid #e5e5e5;
`

export const ButtonDropdown = styled.div`
  height: 18px;
  cursor: pointer;
  font-weight: bold;
  color:#5b5a5d;
  font-size: .87rem;
  position: relative;
`
