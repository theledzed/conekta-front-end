import React from 'react'
import { Sidebar } from './Sidebar/Sidebar'
import { Content } from './Content/Content'
import { Container } from './Styles'

export const Layout = (props) => {
  return (

    <div className="container">
      <Sidebar />
     <Content />
    </div>)
}
