import React, { Component, useEffect, useState, useContext } from "react";
import { Radar } from "react-chartjs-2";
import { Grid } from "@material-ui/core";
import { Router } from "react-router";
import {
  BrowserRouter,
  Link,
  Switch,
  Route,
  Redirect,
  useHistory,
  withRouter,
} from "react-router-dom";
import { Chart as ChartJS } from "react-chartjs-2";
import axios from "axios";
import { FetchDataContext } from "../../../context/FetchDataContext";

const calculate = () => {
  console.log("123");
};

const SpiderWeb = (props) => {
  const spiderWebData = useContext(FetchDataContext);
  const { spiderAlerts, spiderRisks } = spiderWebData;
  let tagsLabel = ["Axe1", "Axe2", "Axe3"];
  const radarData = {
    labels: tagsLabel,
    labels: [
      "Sensitive Information",
      "Discussions",
      "Black Markets",
      "Financial",
      "Exposed Credential",
      "Personal Information",
      "Hacker Group Targeting",
      " Attacks and Compromises",
    ],
    datasets: [
      {
        label: "Finding",
        fill: false,
        borderColor: "#AEC7E8",
        pointBackgrounColor: "#AEC7E8",
        pointRadius: 1,
        data: [...spiderAlerts],
      },
      {
        label: "Risk",

        fill: false,
        borderColor: "#C70039",
        pointBackgrounColor: "#C70039",
        pointRadius: 1,
        data: [...spiderRisks],
      },
    ],
  };

  const calculate1 = () => {
    console.log("dasas");
  };
  let history = useHistory();

  return (
    <div style={{ height: "380px" }}>
      <Radar
        data={radarData}
        options={{
          maintainAspectRatio: false,
          //   events: ['click'],
          //   onClick:function(event,LegendItem){

          //     var activePoints = event.target
          //     console.log(event.target)
          //     if(LegendItem.text==="Hacker Group Targeting"){
          //         history.push("/HackerGroupTargeting")
          //     }
          //   },

          //   scale: {
          // ticks: {
          //     backdropColor: 'red',
          //     // Include a dollar sign in the ticks
          //     callback: function(value, index, values) {
          //         return '$' + value;
          //     }
          // }
          // onClick:function(event,LegendItem){

          //     var activePoints = event.target
          //     console.log(event.target)
          //     if(LegendItem.text==="Hacker Group Targeting"){
          //         history.push("/HackerGroupTargeting")
          //     }
          //   },
          //     pointLabels: {
          //         // callback: function(value, index, values) {
          //         //     return '$' + value;
          //         // }
          //         onClick:function(event){

          //             var activePoints = event.target
          //             console.log(event.target)

          //           },
          //         fontColor: "red",
          //     },
          // },
          //   legend:{
          //         display:true,
          //         onHover:function(event,LegendItem){
          //             // console.log(LegendItem)
          //             // calculate1()
          //             if(LegendItem.text==="Hacker Group Targeting"){
          //                 calculate1()
          //             }
          //             else if(LegendItem.text==="Hacker Group Targeting"){
          //                 calculate1()
          //             }
          //             else if(LegendItem.text==="Hacker Group Targeting"){
          //                 calculate1()
          //             }
          //             else if(LegendItem.text==="Hacker Group Targeting"){
          //                 calculate1()
          //             }
          //             else if(LegendItem.text==="Hacker Group Targeting"){
          //                 calculate1()
          //             }

          //         },
          //         onClick:function(event,LegendItem){
          //             if(LegendItem.text==="Hacker Group Targeting"){
          //                 history.push("/HackerGroupTargeting")
          //             }
          //             else if(LegendItem.text==="Exposed Credential"){
          //                 history.push("/ExposedCredentials")
          //             }
          //             else if(LegendItem.text==="Attacks and Compromises"){
          //                 history.push("/AttackandCompromises")
          //             }
          //             else if(LegendItem.text==="Personal Information"){
          //                 history.push("/PersonalInformation")
          //             }
          //             else if(LegendItem.text==="Financial"){
          //                 history.push("/Financial")
          //             }
          //             else if(LegendItem.text==="Black Markets"){
          //                 history.push("/BlackMarket")
          //             }
          //             else if(LegendItem.text==="Discussions"){
          //                 history.push("/Discussion")
          //             }
          //             else if(LegendItem.text==='Sensitive Information'){
          //                 history.push("/SensitiveInformation")
          //             }
          //         }
          //   },
          tooltips: {
            enabled: false,
          },
          plugins: {
            datalabels: {
              color: "transparent",
            },
          },
        }}
      />
    </div>
  );
};

export default SpiderWeb;
