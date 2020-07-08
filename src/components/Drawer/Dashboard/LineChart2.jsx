import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { Pie } from "react-chartjs-2";
import { Legend, PieContainer } from "./LineChart2.module.js";


const chartColors = [
  "#485fba",
  "#e8d685",
  "#ad85c9",
  "#caf0e1",
  "#d48652",
  "#629b6d",
  "#719dc4",
  "#73bdff",
  "#9a5364",
  "#42ef79",
  "#10f9f4"
];

function generateData(props) {
    const { xaxis, data, keys } = props;
    
    const datasets = [];
  
    data.forEach((item, index) => {
      let obj = {
        data: null,
        backgroundColor: chartColors.slice(index * 5, index * 5 + 5),
        hoverBackgroundColor: chartColors.slice(index * 5, index * 5 + 5),
        label: "",
        labels: null
      };
  
      obj.data = item.data;
      obj.label = keys[index];
      obj.labels = item.labels;
  
      datasets.push(obj);
    });
  
    return {
      labels: xaxis,
      datasets
    };
  }
  
  const options = {
    maintainAspectRatio: false,
    // responsive: true,
    legend: {
      display: false,
      position: "right"
    },
    legendCallback: function(chart) {
      var ul = document.createElement("ul");
      chart.data.datasets.forEach(function(dataset, datasetIndex) {
        let backgroundColor = dataset.backgroundColor;
        dataset.labels.forEach(function(label, labelIndex) {
          ul.innerHTML += `
                  <li>
                     <span style="background-color: ${
                       backgroundColor[labelIndex]
                     }"></span>
                      ${label}
                   </li>
                `;
        });
      });
      return ul.outerHTML;
    },
    elements: {
      arc: {
        borderWidth: 0
      }
    },
    tooltips: {
      callbacks: {
        label: function(tooltipItem, data) {
          var dataset = data.datasets[tooltipItem.datasetIndex];
          var index = tooltipItem.index;
          return dataset.labels[index] + ": " + dataset.data[index];
        }
      }
    }
  };
  const pieChartData = [
    {
      data: [300, 50, 100, 500],
      labels: ["aa", "bb", "cc", "dd"]
    },
    {
      data: [120, 150, 100],
      labels: ["aa2", "bb2", "cc2"]
    }
  ];
  const PieChart = props => {
    const chartRef = useRef(null);
    const data = generateData(props);
  
    const handleClick = (e, index) => {
      const ctx = chartRef.current.chartInstance;
      const meta = [];
      ctx.data.datasets.forEach((dataset, index) => {
        meta.push(ctx.getDatasetMeta(index));
      });
  
      // See controller.isDatasetVisible comment
      const label1Length = ctx.data.datasets[0].labels.length;
      if (label1Length > index) {
        meta[0].data[index].hidden = !meta[0].data[index].hidden;
      } else {
        meta[1].data[index - label1Length].hidden = !meta[1].data[
          index - label1Length
        ].hidden;
      }
  
      // Toggle strikethrough class
      if (e.currentTarget.classList.contains("disable-legend")) {
        e.currentTarget.classList.remove("disable-legend");
      } else {
        e.currentTarget.classList.add("disable-legend");
      }
      ctx.update();
    };
  
    useEffect(() => {
      document.getElementById(
        "legend"
      ).innerHTML = chartRef.current.chartInstance.generateLegend();
  
      document.querySelectorAll("#legend li").forEach((item, index) => {
        item.addEventListener("click", e => handleClick(e, index));
      });
    }, []);
  
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <PieContainer>
          <Pie data={data} options={options} ref={chartRef} />
          <Legend id="legend"  />
        </PieContainer>
      </div>
    );
  };
export default function PieChart1(){
    return(
        <div>
      <PieChart
    data={pieChartData}
    xaxis={["Block", "File", "Object"]}
    keys={["Types", "Vendors"]}
  />
        </div>
  
    )
};