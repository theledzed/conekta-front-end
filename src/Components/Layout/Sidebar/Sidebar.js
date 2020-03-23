/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-expressions */
import React, { useState } from 'react'
import { MENU_LAYOUT } from './Constants'
import classNames from 'classnames'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  ExperimentOutlined,
  AppstoreOutlined,
  SwapOutlined,
  CreditCardOutlined,
  CodeOutlined
} from '@ant-design/icons'
import { Link } from '@reach/router'
import './Sidebar.css'

export const Sidebar = props => {
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('Transactions')
  const [activeSubScetiion, setActiveSubSection] = useState('Payments')

  return (
    <div className={classNames('sidebarContainer', { open: open })}>
      <Link to='/'>
        <div className='logoContainer'>
          <ExperimentOutlined className='logo' />
          {!open && (
            <button
              type='button'
              onClick={() => {
                setOpen(true)
              }}
            >
              <MenuUnfoldOutlined />
            </button>
          )}

          {open && (
            <button
              type='button'
              onClick={() => {
                setOpen(false)
              }}
              className='closeButton'
            >
              <MenuFoldOutlined />
            </button>
          )}
        </div>
      </Link>

      <div className={classNames('sidebarContent')}>
        <ol className={classNames('menuSections')}>
          {MENU_LAYOUT.map((menuItem, index) => {
            let iconRender
            if (menuItem.Name === 'General') {
              iconRender = <AppstoreOutlined className='iconSideBar' />
            } else if (menuItem.Name === 'Transactions') {
              iconRender = <SwapOutlined className='iconSideBar' />
            } else if (menuItem.Name === 'Accounting') {
              iconRender = <CreditCardOutlined className='iconSideBar' />
            } else if (menuItem.Name === 'Developers') {
              iconRender = <CodeOutlined className='iconSideBar' />
            }

            return (
              <div key={index}>
                <li
                  onClick={() => {
                    menuItem.Name
                  }}
                  className={classNames({
                    sectionActive: activeSection === menuItem.Name
                  })}
                >
                  <p>
                    {iconRender} {menuItem.Name}{' '}
                  </p>
                </li>
                {menuItem.Children
                  ? menuItem.Children.map((subMenuItem, key) => {
                    return (
                      <ol key={key} className='subMenuSections'>
                        <li
                          className={classNames({
                            subSectionActive:
                            activeSubScetiion === subMenuItem.Name
                          })}
                        >
                          {subMenuItem.Name}
                        </li>
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
}
