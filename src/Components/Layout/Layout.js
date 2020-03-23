import React from 'react'
import { Sidebar } from './Sidebar/Sidebar'
import { Content } from './Content/Content'

export const Layout = (props) => {
  return (

    <div className='container'>
      <Sidebar />
      <Content />
    </div>)
}
