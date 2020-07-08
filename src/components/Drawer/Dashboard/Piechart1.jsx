import React,{Component} from 'react';
import {Bar,Line,Pie} from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
class Piechart extends Component{
    constructor(props){
        super(props);
        this.state={
            chartData:{
                labels:['Label A',"Label B","Label C","Label D"

                ],
                datasets: [
                    {
                        label: "A",
                        backgroundColor:  ['#D0021B','#50E3C2','#F5A623',"#03BD5B"],
                        borderColor: 'white',
                        
                        data: [26, 14, 27, 33]
                    },
        
                  ],
                  options: {
                    title: {
                        display: true,
                        text: 'Recommended Daily Diet',
                        position: 'top',
                        fontSize: 16,
                        fontColor: '#111',
                        padding: 20
                    },
                    legend: {
                        display: true,
                        position: 'bottom',
                        labels: {
                            boxWidth: 20,
                            fontColor: '#111',
                            padding: 15
                        }
                    },
                    tooltips: {
                        enabled: false
                    },
                    plugins: {
                        datalabels: {
                            color: 'black',
                            textAlign: 'center',
                            font: {
                                lineHeight: 1.6
                            },
                            formatter: function(value, ctx) {
                                return ctx.chart.data.labels[ctx.dataIndex] + '\n' + value + '%';
                            }
                        }
                    }
                  }
            }
        }

    }
render(){
    return(
        <div className="chart">
            <Pie
            data= {{
        labels: ['Dairy', 'Fruits', 'Lean meats', 'Vegetables', 'Whole grains'],
        datasets: [{
            data: [27.92, 17.53, 14.94, 26.62, 12.99],
            backgroundColor: ['#e91e63', '#00e676', '#ff5722', '#1e88e5', '#ffd600'],
            borderWidth: 0.5 ,
            borderColor: '#ddd'
        }]
    }}
    options= {{
        title: {
            display: true,
            text: 'Recommended Daily Diet',
            position: 'top',
            fontSize: 16,
            fontColor: '#111',
            padding: 20
        },
        legend: {
            display: true,
            position: 'bottom',
            labels: {
                boxWidth: 20,
                fontColor: '#111',
                padding: 15
            }
        },
        tooltips: {
            enabled: true
        },
        plugins: {
            datalabels: {
                enabled: true,
                color: '#111',
                textAlign: 'center',
                font: {
                    lineHeight: 0,
                    fontSize:"25px"
                },
                formatter: function(value) {
                    return value + '%';
              }
            }
        }
    }}
            
            />
            
        </div>
    )
}
}
export default Piechart