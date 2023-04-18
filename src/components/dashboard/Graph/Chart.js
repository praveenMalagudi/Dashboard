import React from 'react'
import { Chart } from "react-google-charts";
import './chart.css'
import { TbBorderRadius } from 'react-icons/tb';


const Charts = () => {
    const data = [
        ["Year","Guest", "Users"],
        ["Week 1", 100, 460],
        ["Week 2", 200, 400],
        ["Week 3", 350, 220],
        ["Week 4", 403, 500],
        
      ];
      
     const options = {
        title: "Activities",
        curveType: "function",
        legend: { position: "top" },
        backgroundColor:"#f2f2f2", 
      };
  return (
      <div id="chart">
        <Chart
        chartType="LineChart"
        width="100vw"
        height="359px"
        data={data}
        options={options}
   
      />
      </div>

  )
}

export default Charts