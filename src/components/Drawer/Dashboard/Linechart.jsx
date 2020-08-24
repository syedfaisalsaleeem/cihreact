import React from 'react';
import {Line} from 'react-chartjs-2';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import { Multiselect } from 'multiselect-react-dropdown';
import MultiSelect from "react-multi-select-component";
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
      label: 'labelA',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'grey',
      borderColor: 'grey',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56,11,54,123,23,22,333,55,11,22,35,32,22,65,33,22,111,233,444,22]
    },
    {
        label: 'labelB',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'red',
        color:"red",
        borderColor: 'red',
        borderWidth: 2,
        data: [75, 69, 60, 71, 66,54,123,23,22,333,55,11,22,35,32,22,65,33,22,111,233,444,22,88]
      }
  ]
}
const useStyles = makeStyles((theme) => ({
  formControl: {
        
    minWidth: 200,
    
    background:"white",
    marginTop:"20px",
    marginLeft:"50px",
    
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
  const options = [
    { label: "Sensitive Information", value: "Sensitive Information" },
    { label: "Discussions", value: "Discussions" },
    { label: "Black Markets", value: "Black Markets"},
    { label: "Financial", value: "Financial" },
    { label: "Exposed Credential", value: "Exposed Credential" },
    { label: "Personal Information", value: "Personal Information" },
    { label: "Hacker Group Targeting", value: "Hacker Group Targeting" },
    { label: "Attacks and Compromises", value: "Attacks and Compromises" },
  ];
 
  const [selected, setSelected] = React.useState([]);
  

    return (
      <div >
        <div style={{width:"40%",marginTop:"20px",marginLeft:"20px"}}>
        <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
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
        <div style={{marginTop:"-5px",height:"48%",maxHeight:"350px",minHeight:"300px",marginLeft:"20px",width:"88%"}}>
        <Line
          data={statelinechart}
          
          options={{
            
            maintainAspectRatio: false,
            title:{
              display:true,
              
              
            },
            legend:{
              display:false,
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