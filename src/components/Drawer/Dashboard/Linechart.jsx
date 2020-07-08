import React from 'react';
import {Line} from 'react-chartjs-2';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
const statelinechart = {
  labels: ['January', 'February', 'March',
           'April', 'May'],
  datasets: [
    {
      label: 'labelA',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'grey',
      borderColor: 'grey',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56]
    },
    {
        label: 'labelB',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'red',
        color:"red",
        borderColor: 'red',
        borderWidth: 2,
        data: [75, 69, 60, 71, 66]
      }
  ]
}
const useStyles = makeStyles((theme) => ({
  formControl: {
        
    minWidth: 120,
    
    background:"white",
    marginTop:"20px",
    marginLeft:"20px",
    
    '& fieldset': {
      border: "0.3px solid #000000",
    }
    
  }
}))
export default function Linechart () {
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
      <div >
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
              <em style={{fontSize:"12px",fontWeight:"bold",fontStyle:'normal'}}>Select Month</em>
              </MenuItem>  
              <MenuItem value={10} style={{fontSize:"12px",fontWeight:"bold",fontStyle:'normal'}}>Ten</MenuItem>
              <MenuItem value={20} style={{fontSize:"12px",fontWeight:"bold",fontStyle:'normal'}}>Twenty</MenuItem>
              <MenuItem value={30} style={{fontSize:"12px",fontWeight:"bold",fontStyle:'normal'}}>Thirty</MenuItem>
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
              <em style={{fontSize:"12px",fontWeight:"bold",fontStyle:'normal',fontFamily:"Roboto"}}>Select Week Range</em>
              </MenuItem> 
              <MenuItem value={10} style={{fontSize:"12px",fontWeight:"bold",fontStyle:'normal'}}>Ten</MenuItem>
              <MenuItem value={20} style={{fontSize:"12px",fontWeight:"bold",fontStyle:'normal'}}>Twenty</MenuItem>
              <MenuItem value={30} style={{fontSize:"12px",fontWeight:"bold",fontStyle:'normal'}}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </div>
        <div style={{marginTop:"-48px",height:"48%",maxHeight:"350px",minHeight:"350px",marginLeft:"20px",width:"88%"}}>
        <Line
          data={statelinechart}
          
          options={{
            
            maintainAspectRatio: false,
            title:{
              display:true,
              
              
            },
            legend:{
              display:true,
              position:'top',
              align:'end',
              

              labels: {
                
                padding: 25,
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
                  stacked: true,
                  gridLines: {
                      display:false
                  }
              }],
              yAxes: [{
                  stacked: true,
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
          }}
        />
        </div>
        
      </div>
    );
  
}