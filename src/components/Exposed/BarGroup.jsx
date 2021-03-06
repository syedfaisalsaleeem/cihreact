import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { Bar } from "react-chartjs-2";

import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { FetchDataContext } from "../../context/FetchDataContext";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,

    background: "white",
    marginTop: "0px",
    marginLeft: "20px",

    "& fieldset": {
      border: "0.3px solid #000000",
    },
  },
}));
export default function BarGroup() {
  const barChartAlertsInfoData = useContext(FetchDataContext);
  const { barChartAlertsInfo } = barChartAlertsInfoData;
  const databar = {
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
        label: "My First dataset",
        backgroundColor: "#50E3C2",
        borderColor: "#50E3C2",
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        //stack: 1,

        data: [...barChartAlertsInfo],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    cornerRadius: 0,
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
          barPercentage: 0.5,
          categoryPercentage: 0.5,
          barPercentage: 0.7,
          gridLines: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Alerts",
          },
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

    type: "bar",
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
      <main>
        <div
          style={{
            maxHeight: "320px",
            minHeight: "320px",
            marginTop: "20px",
            width: "95%",
            marginLeft: "20px",
          }}
        >
          <Bar data={databar} options={options} />
        </div>
      </main>
    </div>
  );
}
