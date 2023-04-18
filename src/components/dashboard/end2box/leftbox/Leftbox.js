import React from "react";
import "./leftbox.css";
import { Chart } from "react-google-charts";
import { GiCircle } from "react-icons/gi";
import {RiArrowDropDownLine} from 'react-icons/ri'
import {pie} from 'react-chartjs-2'
const Leftbox = () => {
  const data = [
    ["Task", "Hours per Day"],
    ["Basic Tees", 55],
    ["Custom Short Pants", 31],
    ["Super Hoodies", 14],
  ];

  const options = {
    legend: "none",
    // backgroundColor:"#f2f2f2",
  };

  return (
    <div className="leftbox">
      <div className="leftbox__box">
        <div className="leftbox__box-heading">
          <p id="heading">Top products</p>
          <div className="calender">
          <p id="calender">May - June 2021</p>
         <RiArrowDropDownLine id='dropdown'/>
          </div>
        </div>
        <div className="leftbox__box-chart">
          <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={"145px"}
            height={"145px"}
          />
          <div className="leftbox__box-chart_option">
            <div className="leftbox__box-chart_option-box">
              <div className="heading">
                 <GiCircle id="top_circle" />
                <p className="heading__title">Basic Tees</p>
              </div>
              <p className="percentage">55%</p>
            </div>
            <div className="leftbox__box-chart_option-box">
              <div className="heading">
                <GiCircle id="middle_circle" />
                <p className="heading__title">Custom Short Pants</p>
              </div>
              <p className="percentage">31%</p>
            </div>
            <div className="leftbox__box-chart_option-box">
              <div className="heading">
                <GiCircle id="bottom_circle" />
                <p className="heading__title">Super Hoodies</p>
              </div>
              <p className="percentage">14%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leftbox;
