import React from "react";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import {FiMenu} from 'react-icons/fi'
import Boxes from '../boxes/Boxes'
import Charts from "../Graph/Chart";
import End2box from "../end2box/End2box";
import "./card.css";
const Card = () => {
  const[showmenu, Setshowmenu]=useState(false);
  return (
    <div className="card">
      <div className="card__right">
        <div className="card__right-navbar">
          <div id="menu_icon" onClick={()=>{
            Setshowmenu(!false)
          }}><FiMenu id="menu"/></div>
          <h5>Dashboard</h5>
          <div className="card__right-navbar_right">
            <div className="card__right-navbar_right-search_box">
              <input type="text" placeholder="Search" id ='search_box'/>
              <p >
                <IoSearchOutline id='search-icon'/>
              </p>
            </div>
            <div >
              <IoIosNotificationsOutline id="notification"/>
            </div>
            <div >
              <CgProfile id="profile"  />
            </div>
          </div>
        </div>
        <Boxes/>
         <Charts className='card_chart'/>
         <End2box/>
      </div>
    </div>
  );
};

export default Card;
