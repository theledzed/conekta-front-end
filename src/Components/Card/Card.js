import React from 'react'
import './Card.css'
import classNames from 'classnames'

export const Card = props => {
  return (
    <div className={classNames('cardContainer', props.className)}>
      <div className='cardHeader'>{props.Title.toUpperCase()}</div>
      <div className='cardBody'> {props.children}</div>
    </div>
  )
}
