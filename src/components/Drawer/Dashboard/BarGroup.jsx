import React from "react";
import ReactDOM from "react-dom";
import { Bar} from "react-chartjs-2";



import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

require('./RoundedBars.js')



    const databar = {
      
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July"
        ],
        datasets: [
          {
            label: "My First dataset",
            backgroundColor: "#50E3C2",
            borderColor: "#50E3C2",
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            //stack: 1,
            
            data: [65, 59, 80, 81, 56, 55, 40]
          },

          {
            label: "My second dataset",
            backgroundColor: " #F5A623",
            borderColor: " #F5A623",
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            //stack: 1,
           
            data: [45, 79, 50, 41, 16, 85, 20]
          },
          {
            label: "My third dataset",
            backgroundColor: "#03BD5B",
            borderColor: "#03BD5B",
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            //stack: 1,
            
            data: [5, 39, 40, 61, 26, 45, 50]
          }
        ]
      }
    
  
  
  
    const useStyles = makeStyles((theme) => ({
      formControl: {
        
        minWidth: 120,
        
        background:"white",
        marginTop:"0px",
        marginLeft:"20px",
        
        '& fieldset': {
          border: "0.3px solid #000000",
        }
        
      }
    }))
    
    const options = {
      
      maintainAspectRatio: false,
      cornerRadius:0,
      legend: {
        display:true,
        position:'top',
        align:'end',
        labels:{
          padding:25,
          usePointStyle: true ,
          fontFamily:"Roboto",
          fontStyle:"bold",
        }
      },
      scales: {
        ticks: {
            min:0,
            max:100
        },
        xAxes: [{
          barPercentage: 0.5,
          categoryPercentage: 0.5,
            barPercentage: 0.7,
            gridLines: {
                display:false
            }
        }],
        yAxes: [{
            
            gridLines: {
            display:true,
            borderDash: [8, 4]
            }  
            
        }]
    },
    plugins:{
      datalabels:{
          color:"transparent"
      }
  },

      type: "bar"

    };
  export default function BarGroup(){
    const classes = useStyles();
  const [age1, setAge1] = React.useState('');
  const [open,handleopen]=React.useState(false)
  const funcopen=()=>{
    handleopen(true)
  }
  const funcclose=()=>{
    handleopen(false)
  }
  const handleChange = (event) => {
      setAge1(event.target.value);
  };
    return (
      <div>

      
      
      <main>

      
      <div style={{maxHeight:"455px",minHeight:"455px",margin:"10px"}}>
          <div styles={{display:"flex",postion:"absolute"}}>
          <FormControl className={classes.formControl} size="small" >
                
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
              <em style={{fontSize:"13px",fontWeight:"bold",fontStyle:'normal'}}>Select Month</em>
              </MenuItem>  
              <MenuItem value={10} style={{fontSize:"13px",fontWeight:"bold",fontStyle:'normal'}}>Ten</MenuItem>
              <MenuItem value={20} style={{fontSize:"13px",fontWeight:"bold",fontStyle:'normal'}}>Twenty</MenuItem>
              <MenuItem value={30} style={{fontSize:"13px",fontWeight:"bold",fontStyle:'normal'}}>Thirty</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl} size="small" >
                
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age1}
                onChange={handleChange}
                style={{height:30}}
                
                variant="outlined"
                displayEmpty
                >
               <MenuItem value="">
              <em style={{fontSize:"13px",fontWeight:"bold",fontStyle:'normal'}}>Select Week Range</em>
              </MenuItem> 
              <MenuItem value={10} style={{fontSize:"13px",fontWeight:"bold",fontStyle:'normal'}}>Ten</MenuItem>
              <MenuItem value={20} style={{fontSize:"13px",fontWeight:"bold",fontStyle:'normal'}}>Twenty</MenuItem>
              <MenuItem value={30} style={{fontSize:"13px",fontWeight:"bold",fontStyle:'normal'}}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </div>
        <div style={{maxHeight:"320px",minHeight:"320px",marginTop:"-20px"}}>
          

          
        <Bar
          data={databar}
          
          options={options}
        />
        </div>
        </div>
      
      </main>
      
      </div>
    );
  

}