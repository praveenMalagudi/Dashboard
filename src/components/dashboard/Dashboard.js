import React from 'react'
import Card from './cards/Card'
import Sidebar from './sidebar/sidebar'
import './dashboard.css'
const Dashboard = () => {
  return (
    <div className='Dashboard'>
        <Sidebar/>
        <Card/>

    </div>
  )
}

export default Dashboard