import React from 'react'

const option = ({icon,title}) => {
  return (
    <div className='sidebar__left-option'>
        <div className="sidebar__left-option_icon">{icon}</div>
        <p className='sidebar__left-option_title'>{title}</p>
        </div>
  )
}

export default option