import React from 'react'
import './sidebar.css'
import Option from './Option'
import {FiPieChart} from  'react-icons/fi'
import {BsTags} from 'react-icons/bs'
import {CgProfile} from 'react-icons/cg'
import {AiOutlineSetting} from 'react-icons/ai'
import {TbCalendarTime} from 'react-icons/tb'
const sidebar = () => {
  return (
    <div className='sidebar'>
    <div className="sidebar__left">
        <div className="sidebar__left-heading">
            <p>Board.</p>
        </div>
        <div className="sidebar__left-nav">
            <Option icon={<FiPieChart/>} title={'Dashboard'} />
            <Option icon={<BsTags/>} title={'Transaction'} />
            <Option icon={<TbCalendarTime/>} title={'Schedules'} />
            <Option icon={<CgProfile/>} title={'Users'} />
            <Option icon={<AiOutlineSetting/>} title={'Settings'} />
        </div>
        <div className="sidebar__left-end">
          <p id='help'>Help</p>
          <p id='contact_us'>Contact us</p>
        </div>
    </div>
    </div>
  )
}

export default sidebar