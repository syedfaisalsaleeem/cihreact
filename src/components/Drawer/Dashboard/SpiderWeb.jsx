import React,{Component} from 'react';
import {Radar} from 'react-chartjs-2';
import {Grid} from "@material-ui/core";
import { Router } from 'react-router';
import {BrowserRouter,Link,Switch,Route,Redirect,useHistory,withRouter} from 'react-router-dom';

const calculate=()=>{
    console.log("123")
  }
const radarData = {

    labels: ['Sensitive Information', 'Discussions', 'Black Markets', 'Financial', 'Exposed Credential', 'Personal Information','Hacker Group Targeting',' Attacks and Compromises'],
    datasets: [
      {
        label: 'Sensitive Information',
        backgroundColor: '#1F77B4',
        pointBackgrounColor: '#1F77B4',
        pointRadius: 1,
        data: [39, 52, 43, 60, 35, 65]
        
        
      },
      {
        label: 'Discussions',
        backgroundColor: '#AEC7E8',
        pointBackgrounColor: '#AEC7E8',
        pointRadius: 1,
        data: [58, 64, 58, 80, 75, 80]
      },
      {
        label: 'Black Markets',
        backgroundColor: '#FF7F0E',
        pointBackgrounColor: '#FF7F0E',
        pointRadius: 1,
        data: [78, 84, 78, 109, 45, 100]
      },
      {
        label: 'Financial',
        backgroundColor: "#FFBB78",
        pointBackgrounColor: "#FFBB78",
        pointRadius: 1,
        data: [78, 84, 78, 109, 55, 100]
      },
      {
        label: 'Exposed Credential',
        backgroundColor: '#2CA02C',
        pointBackgrounColor: '#2CA02C',
        pointRadius: 1,
        data: [78, 84, 78, 19, 85, 100]
      },
      {
        label: 'Personal Information',
        backgroundColor: '#98DF8A',
        pointBackgrounColor: '#98DF8A',
        pointRadius: 1,
        data: [78, 84, 38, 109, 85, 100]
      },
      {
        label: 'Hacker Group Targeting',
        backgroundColor: '#D62728',
        pointBackgroundColor: '#D62728',
        pointRadius: 1,
        data: [78, 84, 28, 109, 85, 100]
      },
      {
        label: 'Attacks and Compromises',
        
        backgroundColor: '#00FF00',
        pointBackgroundColor: '#00FF00',
        pointRadius: 1,
        data: [88, 11, 78, 109, 85, 100],
        onHover:calculate
      }
    ],

  }

  const SpiderWeb = (props) => {

      const calculate1=()=>{
        console.log("dasas")
    }
    let history = useHistory();
    return (
      <div style={{height:"380px"}}>
          <Radar data={radarData}          options={{
              maintainAspectRatio: false,
              label:{
                onClick:function(event,LegendItem){
                    if(LegendItem.text==="Hacker Group Targeting"){
                        history.push("/HackerGroupTargeting")
                    }
                    else if(LegendItem.text==="Exposed Credential"){
                        history.push("/ExposedCredentials")
                    }
                    else if(LegendItem.text==="Attacks and Compromises"){
                        history.push("/AttackandCompromises")
                    }
                    else if(LegendItem.text==="Personal Information"){
                        history.push("/PersonalInformation")
                    }
                    else if(LegendItem.text==="Financial"){
                        history.push("/Financial")
                    }
                    else if(LegendItem.text==="Black Markets"){
                        history.push("/BlackMarket")
                    }
                    else if(LegendItem.text==="Discussions"){
                        history.push("/Discussion")
                    }
                    else if(LegendItem.text==='Sensitive Information'){
                        history.push("/SensitiveInformation")
                    }
                }
              },
              legend:{
                    display:true,
                    onHover:function(event,LegendItem){
                        // console.log(LegendItem)
                        // calculate1()
                        if(LegendItem.text==="Hacker Group Targeting"){
                            calculate1()
                        }
                        else if(LegendItem.text==="Hacker Group Targeting"){
                            calculate1()
                        }
                        else if(LegendItem.text==="Hacker Group Targeting"){
                            calculate1()
                        }
                        else if(LegendItem.text==="Hacker Group Targeting"){
                            calculate1()
                        }
                        else if(LegendItem.text==="Hacker Group Targeting"){
                            calculate1()
                        }
                        
                    },
                    onClick:function(event,LegendItem){
                        if(LegendItem.text==="Hacker Group Targeting"){
                            history.push("/HackerGroupTargeting")
                        }
                        else if(LegendItem.text==="Exposed Credential"){
                            history.push("/ExposedCredentials")
                        }
                        else if(LegendItem.text==="Attacks and Compromises"){
                            history.push("/AttackandCompromises")
                        }
                        else if(LegendItem.text==="Personal Information"){
                            history.push("/PersonalInformation")
                        }
                        else if(LegendItem.text==="Financial"){
                            history.push("/Financial")
                        }
                        else if(LegendItem.text==="Black Markets"){
                            history.push("/BlackMarket")
                        }
                        else if(LegendItem.text==="Discussions"){
                            history.push("/Discussion")
                        }
                        else if(LegendItem.text==='Sensitive Information'){
                            history.push("/SensitiveInformation")
                        }
                    }
              },
              tooltips:{
                  enabled:false
              },
plugins:{
            
    datalabels:{
        color:"transparent"
    }
}
          }} />
      </div>
    )
  }
  
  export default SpiderWeb