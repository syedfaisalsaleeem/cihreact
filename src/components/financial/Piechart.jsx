import React, { Component } from "react";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Grid } from "@material-ui/core";
import { FetchDataContext } from "../../context/FetchDataContext";

class Piechart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ["Label A", "Label B", "Label C", "Label D"],
        datasets: [
          {
            label: "A",
            backgroundColor: ["#D0021B", "#50E3C2", "#F5A623", "#03BD5B"],
            borderColor: "white",

            data: [26, 14, 27, 33],
          },
        ],
        options: {
          legend: {
            display: true,
            position: "right",
            labels: {
              boxWidth: 20,
              fontColor: "#111",
              padding: 15,
            },
          },
          tooltips: {
            enabled: false,
          },
          plugins: {
            datalabels: {
              color: "black",
              textAlign: "center",
              font: {
                lineHeight: 1.6,
              },
              formatter: function (value, ctx) {
                return (
                  ctx.chart.data.labels[ctx.dataIndex] + "\n" + value + "%"
                );
              },
            },
          },
        },
      },
    };
  }

  static contextType = FetchDataContext;

  render() {
    return (
      <div
        className="chart"
        style={{
          maxHeight: "270px",
          minHeight: "270px",
          margin: "20px",
          marginTop: "50px",
          width: "90%",
        }}
      >
        <Doughnut
          data={{
            labels: ["Dark Web", "Data Breach", "Deep Web"],
            datasets: [
              {
                data: [...this.context.pieChartFinancialInfo],
                backgroundColor: ["#D0021B", "#50E3C2", "#F5A623"],
                borderColor: "white",
              },
            ],
          }}
          options={{
            maintainAspectRatio: false,
            cutoutPercentage: 60,
            legend: {
              display: true,
              position: "bottom",
              labels: {
                boxWidth: 25,
                fontColor: "#8D9AA9",
                padding: 16,
                fontSize: 14,
                usePointStyle: false,
              },
            },
            tooltips: {
              enabled: true,
            },
            plugins: {
              datalabels: {
                enabled: true,
                color: "white",
                textAlign: "center",
                render: "percentage",

                font: {
                  family: "Roboto",
                  lineHeight: 0,
                  weight: "bold",
                  size: 15,
                },

                formatter: function (value) {
                  return value + "%";
                },
              },
            },
          }}
        />
      </div>
    );
  }
}
export default Piechart;
