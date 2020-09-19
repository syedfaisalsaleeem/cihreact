import React, { useContext, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
// import { Multiselect } from 'multiselect-react-dropdown';
import MultiSelect from "react-multi-select-component";

import { FetchDataContext } from "../../../context/FetchDataContext";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 200,

    background: "white",
    marginTop: "20px",
    marginLeft: "50px",

    "& fieldset": {
      border: "0.3px solid #000000",
    },
  },
}));

export default function Linechart() {
  const lineChartData = useContext(FetchDataContext);
  const {
    lineChartAlerts,
    lineChartRisks,
    barChartSensitiveInfo,
    barChartDiscussionInfo,
    barChartBMtInfo,
    barChartFinancialInfo,
    barChartECInfo,
    barChartPIInfo,
    barChartHGInfo,
    barChartACInfo,
  } = lineChartData;

  const [selected, setSelected] = React.useState([]);

  const [allow, setAllow] = useState(false);
  const [sensitive, setSensitive] = useState([]);
  const [discussion, setDiscussion] = useState([]);
  const [bm, setBm] = useState([]);
  const [financial, setFinancial] = useState([]);
  const [ec, setEc] = useState([]);
  const [pi, setPi] = useState([]);
  const [hg, setHg] = useState([]);
  const [ac, setAc] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [risks, setRisks] = useState([]);

  const options = [
    { label: "Sensitive Information", value: "Sensitive Information" },
    { label: "Discussions", value: "Discussions" },
    { label: "Black Markets", value: "Black Markets" },
    { label: "Financial", value: "Financial" },
    { label: "Exposed Credential", value: "Exposed Credential" },
    { label: "Personal Information", value: "Personal Information" },
    { label: "Hacker Group Targeting", value: "Hacker Group Targeting" },
    { label: "Attacks and Compromises", value: "Attacks and Compromises" },
  ];

  useEffect(() => {
    const fetchedData = [
      { label: "Sensitive Information", arrayFetch: barChartSensitiveInfo },
      { label: "Discussions", arrayFetch: barChartDiscussionInfo },
      { label: "Black Markets", arrayFetch: barChartBMtInfo },
      { label: "Financial", arrayFetch: barChartFinancialInfo },
      { label: "Exposed Credential", arrayFetch: barChartECInfo },
      { label: "Personal Information", arrayFetch: barChartPIInfo },
      { label: "Hacker Group Targeting", arrayFetch: barChartHGInfo },
      { label: "Attacks and Compromises", arrayFetch: barChartACInfo },
      { label: "Alerts", arrayFetch: lineChartAlerts },
      { label: "Risks", arrayFetch: lineChartRisks },
    ];

    const allLabels = [];
    for (const key in selected) {
      allLabels.push(selected[key].label);
    }
    const labelObj = Object.assign({}, allLabels);

    for (const key in labelObj) {
      if (labelObj[key]) {
        switch (labelObj[key]) {
          case "Sensitive Information":
            setSensitive([...barChartSensitiveInfo]);
            break;
          case "Discussions":
            setDiscussion([...barChartDiscussionInfo]);
            break;
          case "Black Markets":
            setBm([...barChartBMtInfo]);
            break;
          case "Financial":
            setFinancial([...barChartFinancialInfo]);
            break;
          case "Exposed Credential":
            setEc([...barChartECInfo]);
            break;
          case "Personal Information":
            setPi([...barChartPIInfo]);
            break;
          case "Hacker Group Targeting":
            setHg([...barChartHGInfo]);
            break;
          case "Attacks and Compromises":
            setAc([...barChartACInfo]);
            break;
          default:
            setAlerts([...lineChartAlerts]);
            break;
        }
      } else {
        console.log('no');
      }
    }
  }, [
    allow,
    lineChartRisks,
    lineChartAlerts,
    barChartSensitiveInfo,
    barChartDiscussionInfo,
    barChartBMtInfo,
    barChartFinancialInfo,
    barChartECInfo,
    barChartPIInfo,
    barChartHGInfo,
    barChartACInfo,
    selected,
  ]);

  useEffect(() => {
    console.log(selected);
  });

  const statelinechart = {
    labels: [
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
    ],
    datasets: [
      {
        label: "Alerts",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "grey",
        borderColor: "grey",
        borderWidth: 2,
        data: alerts,
      },
      {
        label: "Risks",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "red",
        color: "red",
        borderColor: "red",
        borderWidth: 2,
        data: risks,
      },
      {
        label: "Sensitive Information",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "black",
        color: "black",
        borderColor: "#d2e603",
        borderWidth: 3,
        data: sensitive,
      },
      {
        label: "Discussion",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "#dbcbbd",
        color: "#dbcbbd",
        borderColor: "#c87941",
        borderWidth: 3,
        data: discussion,
      },
      {
        label: "Black Markets",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "#a2d5f2",
        color: "#a2d5f2",
        borderColor: "#07689f",
        borderWidth: 3,
        data: bm,
      },
      {
        label: "Financial",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "#1a1a2e",
        color: "#1a1a2e",
        borderColor: "#e94560",
        borderWidth: 3,
        data: financial,
      },
      {
        label: "Exposed Credential",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "#1a1a2e",
        color: "#1a1a2e",
        borderColor: "#fddb3a",
        borderWidth: 3,
        data: ec,
      },
      {
        label: "Personal Information",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "#2a3d66",
        color: "#2a3d66",
        borderColor: "#d789d7",
        borderWidth: 3,
        data: pi,
      },
      {
        label: "Personal Information",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "#f5efef",
        color: "#f5efef",
        borderColor: "#810000",
        borderWidth: 3,
        data: hg,
      },
      {
        label: "Personal Information",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "#222831",
        color: "#222831",
        borderColor: "#32e0c4",
        borderWidth: 3,
        data: ac,
      },
    ],
  };

  const classes = useStyles();
  const [age1, setAge1] = React.useState("");
  const [open, handleopen] = React.useState(false);
  const funcopen = () => {
    handleopen(true);
  };
  const funcclose = () => {
    handleopen(false);
  };
  const handleChange = (event) => {
    setAge1(event.target.value);
  };

  return (
    <div>
      <div style={{ width: "40%", marginTop: "20px", marginLeft: "20px" }}>
        <MultiSelect
          options={options}
          value={selected}
          onChange={(e) => {
            setSelected(e);
            setAllow(true);
          }}
          labelledBy={"Select"}
        />
        {/* <Multiselect
          style={{
            multiselectContainer: { // To change css for multiselect (Width,height,etc..)
              width:"300px",
              minWidth:"300px",
              marginTop:"20px",
              marginLeft:"20px"
            },
          inputField: { // To change input field position or margin
            margin: "1px",
            
        },
        searchBox: { // To change search box element look
          
          fontSize:"10px",
          
        }
        }}
          
          options={options} // Options to display in the dropdown
           // Preselected value to persist in dropdown
 // Function will trigger on remove event
          displayValue="name" // Property name to display in the dropdown options
          /> */}
        {/* <FormControl className={classes.formControl} size="small" >
                
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age1}
                onChange={handleChange}
                style={{height:30}}
                variant="outlined"
                displayEmpty
                >
               <MenuItem value="" >
              <em style={{fontSize:"12px",fontWeight:"bold",fontStyle:'normal'}}>Select Category</em>
              </MenuItem>  
              <MenuItem value={10} style={{fontSize:"12px",fontWeight:"bold",fontStyle:'normal'}}>All Categories</MenuItem>
              <MenuItem value={20} style={{fontSize:"12px",fontWeight:"bold",fontStyle:'normal'}}>Sensitive Information</MenuItem>
              <MenuItem value={30} style={{fontSize:"12px",fontWeight:"bold",fontStyle:'normal'}}>Discussions</MenuItem>
              <MenuItem value={30} style={{fontSize:"12px",fontWeight:"bold",fontStyle:'normal'}}>Black Markets</MenuItem>
              <MenuItem value={30} style={{fontSize:"12px",fontWeight:"bold",fontStyle:'normal'}}>Discussions</MenuItem>
              <MenuItem value={30} style={{fontSize:"12px",fontWeight:"bold",fontStyle:'normal'}}>Discussions</MenuItem>
                </Select>
            </FormControl> */}
      </div>
      <div
        style={{
          marginTop: "-5px",
          height: "48%",
          maxHeight: "350px",
          minHeight: "300px",
          marginLeft: "20px",
          width: "88%",
        }}
      >
        <Line
          data={statelinechart}
          options={{
            maintainAspectRatio: false,
            title: {
              display: true,
            },
            legend: {
              display: false,
              position: "top",
              align: "end",

              labels: {
                padding: 25,
                usePointStyle: true,
                fontFamily: "Roboto",
                fontStyle: "bold",
              },
            },
            scales: {
              ticks: {
                min: 0,
                max: 100,
              },
              xAxes: [
                {
                  stacked: true,
                  gridLines: {
                    display: false,
                  },
                },
              ],
              yAxes: [
                {
                  stacked: true,
                  gridLines: {
                    display: true,
                    borderDash: [8, 4],
                  },
                },
              ],
            },
            plugins: {
              datalabels: {
                color: "transparent",
              },
            },
          }}
        />
      </div>
    </div>
  );
}
