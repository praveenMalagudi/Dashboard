import React from "react";
import "./rightbox.css";
import { Chart } from "react-google-charts";
import { GiCircle } from "react-icons/gi";
import {RiArrowDropRightLine} from 'react-icons/ri'
const Rightbox = () => {
  const data = [
    ["Task", "Hours per Day"],
    ["Work", 55],
    ["Eat", 31],
    ["Commute", 14],
  ];

  const options = {
    legend: "none",
    // backgroundColor:"#f2f2f2",
  };
  return (
    <section className="rightbox">
      <section className="rightbox__box">
        <header className="rightbox__box-heading">
          <p id="heading">Today’s schedule</p>
          <div className="calender">
          <p id="calender">See All</p>
           <RiArrowDropRightLine id='dropdown'/>
          </div>
        </header>
        <section className="rightbox__box-info">
          <article className="rightbox__box-info-article1">
            <div id="col1"></div>
            <div className="information">
              <div className="heading">
                Meeting with suppliers from Kuta Bali  {" "}
              </div>
              <div className="timing">
              14.00-15.00
              </div>
              <div className="address">
              at Sunset
                Road, Kuta, Bali
              </div>
            </div>
          </article>
          <article className="rightbox__box-info-article2">
            <div id="col2"></div>
            <div className="information">
            <div className="heading">
            Check operation at Giga Factory 1 {" "}
              </div>
              <div className="timing">
              18.00-20.00
              </div>
              <div className="address">
              at Central Jakarta 
              </div>
            </div>
          </article>
        </section>
      </section>
    </section>
  );
};

export default Rightbox;
