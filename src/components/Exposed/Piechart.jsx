import React,{Component} from 'react';
import {Bar,Line,Pie,Doughnut} from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {Grid} from "@material-ui/core"
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
                    legend: {
                        display: true,
                        position: 'right',
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
        <div className="chart" style={{height:"280px",margin:"20px",marginTop:"30px",width:"90%"}}>
            
                <Doughnut
            data= {{
                labels:['Label (8668)',"Label (8668)","Label (8668)","Label (8668)"],
        datasets: [{
            data: [26, 14, 27, 33],
            backgroundColor:  ['#D0021B','#50E3C2','#F5A623',"#03BD5B"],
            
            borderColor: 'white'
        }]
    }}
    options= {{
        maintainAspectRatio: false,
        cutoutPercentage: 30,
        legend: {
            display: true,
            position: 'right',
            labels: {
                boxWidth: 15,
                fontColor: '#8D9AA9',
                padding: 25,
                fontSize: 18,
                usePointStyle: true ,
                
            }
        },
        tooltips: {
            enabled: true
        },
        plugins: {
            datalabels: {
                enabled: true,
                color: 'white',
                textAlign: 'center',
                render: 'percentage',
                
                
                font: {
                    family:"Roboto",
                    lineHeight: 0,
                    weight: 'bold',
                    size: 22,
                    
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