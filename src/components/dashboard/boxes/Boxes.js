import React from 'react'
import Box_component from './Box_component'
import './Boxes.css'
const Boxes = () => {
  return (
    <div className='boxes'>
     <div className="card__boxes">
       <div className="card__boxes-box card__boxes-box1">
           <div className="card__boxes-box-info">
            <p className='title'>Total Revenues</p>
            <p className='number'>$2,129,430</p>
           </div>
           <div className="icon" id='icon_1'></div>
       </div>
       <div className="card__boxes-box card__boxes-box2">
       <div className="card__boxes-box-info">
            <p className='title'>Total Transactions</p>
            <p className='number'>1,520</p>
           </div>
           <div className="icon" id='icon_2'></div>
        </div>
        <div className="card__boxes-box card__boxes-box3">
        <div className="card__boxes-box-info">
            <p className='title'>Total Likes</p>
            <p className='number'>9,721</p>
           </div>
           <div className="icon" id='icon_3'></div>
        </div>
        <div className="card__boxes-box card__boxes-box4">
        <div className="card__boxes-box-info">
            <p className='title'>Total Users</p>
            <p className='number'>892</p>
           </div>
           <div className="icon" id='icon_4'></div>
        </div>
     </div>
    </div>
  )
}

export default Boxes
