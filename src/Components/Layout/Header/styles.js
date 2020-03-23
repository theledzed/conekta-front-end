import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width:100%;
  justify-content: flex-end;
`

export const Menu = styled.div`
  margin: 1em 3rem;
  display: flex;
  flex-direction: row;
`
export const Logo = styled.div`
  border-radius: 5em;
  width: 2rem;
  height:2rem;
  background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRB9sBg8yjDmfdDdVA36KOScX5wqbTZgFzUOQ8VZejrsNtOaO5F');
  background-repite: no-repite;
  background-position: center;
  padding: 1em;
`
export const Dopdrwon = styled.div`
  width: 90%;
`

export const Label = styled.p`
  display: block;
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  color: #bdbdbd;
  font-size: .75rem;
`

export const MenuOptions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left:1rem;
`
