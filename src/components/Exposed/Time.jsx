import React,{useState,useReducer} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Grid,Typography,Card,Paper,CardHeader,Divider,Button, IconButton} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { addDays,addMonths } from "date-fns";
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      
    },
    formControl: {
        
        minWidth: 200,
        
        background:"white",

        
        '& fieldset': {
          border: "0.3px solid #000000",
        }
        
      },
      formControl1: {
        
        minWidth: 150,
        
        background:"white",
        
        '& fieldset': {
          border: "0.3px solid #000000",
        }
        
      },

  }));
function reducer(state,action){
    switch(action.type){
        case 'Inc':
            return state+1
        case 'dec':
            return state-1
        case "week":
            return 1

            // MenuItem value={"week"} style={{fontSize:"13px",fontWeight:"bold",fontStyle:'normal'}}>Past Week</MenuItem>
            //             <MenuItem value={"month"} style={{fontSize:"13px",fontWeight:"bold",fontStyle:'normal'}}>Past months</MenuItem>
            //             <MenuItem value={"month6"} style={{fontSize:"13px",fontWeight:"bold",fontStyle:'normal'}}>Past 6 months</MenuItem>
            //             <MenuItem value={"year"} style={{fontSize:"13px",fontWeight:"bold",fontStyle:'normal'}}>Past year</MenuItem>
            //             <MenuItem value={"year2"} style={{fontSize:"13px",fontWeight:"bold",fontStyle:'normal'}}>Past 2 years</MenuItem>
            //             <MenuItem value={"custom"}
        default:
            return state;
    }

}
function timing(data,startDate,startDate1,handleChange3,handleChange4){
    console.log(data)
    switch(data){
        case "week":

        return(
        <Grid item xs={12}>
            <Grid container style={{marginTop:"10px"}} justify="center">
                <Grid item xs={11}>
                        <Grid container spacing={4}>
                            <Grid item>
                            <DatePicker
                            selected={new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)}

                            disabled
                      
                            />
                            </Grid>
                            <Grid item>
                            <DatePicker
                            selected={new Date()}
                            disabled
                            />
                            </Grid>

                        </Grid>
                    
                </Grid>

            </Grid>
        </Grid>
        )
        case "month":

            return(
            <Grid item xs={12}>
                <Grid container style={{marginTop:"10px"}} justify="center">
                    <Grid item xs={11}>
                        <Grid container spacing={4}>
                            <Grid item>
                            <DatePicker
                            selected={new Date(Date.now() - 31 * 24 * 60 * 60 * 1000)}

                            disabled
                      
                            />
                            </Grid>
                            <Grid item>
                            <DatePicker
                            selected={new Date()}
                            disabled
                            />
                            </Grid>

                        </Grid>
                        
                    </Grid>
    
                </Grid>
            </Grid>
            )
            case "month6":

                return(
                <Grid item xs={12}>
                    <Grid container style={{marginTop:"10px"}} justify="center">
                        <Grid item xs={11}>
                        <Grid container spacing={4}>
                            <Grid item>
                            <DatePicker
                            selected={new Date(Date.now() - 186 * 24 * 60 * 60 * 1000)}

                            disabled
                      
                            />
                            </Grid>
                            <Grid item>
                            <DatePicker
                            selected={new Date()}
                            disabled
                            />
                            </Grid>

                        </Grid>
                            
                        </Grid>
        
                    </Grid>
                </Grid>
                )
                case "year":

                    return(
                    <Grid item xs={12}>
                        <Grid container style={{marginTop:"10px"}} justify="center">
                            <Grid item xs={11}>
                            <Grid container spacing={4}>
                            <Grid item>
                            <DatePicker
                            selected={new Date(Date.now() - 365 * 24 * 60 * 60 * 1000)}

                            disabled
                      
                            />
                            </Grid>
                            <Grid item>
                            <DatePicker
                            selected={new Date()}
                            disabled
                            />
                            </Grid>

                        </Grid>
                                
                            </Grid>
            
                        </Grid>
                    </Grid>
                    )
                    case "year2":

                        return(
                        <Grid item xs={12}>
                            <Grid container style={{marginTop:"10px"}} justify="center">
                                <Grid item xs={11}>
                                <Grid container spacing={4}>
                            <Grid item>
                            <DatePicker
                            selected={new Date(Date.now() - 365*2 * 24 * 60 * 60 * 1000)}

                            disabled
                      
                            />
                            </Grid>
                            <Grid item>
                            <DatePicker
                            selected={new Date()}
                            disabled
                            />
                            </Grid>

                        </Grid>
                                    
                                </Grid>
                
                            </Grid>
                        </Grid>
                        )
        default:
            return (
                <Grid item xs={12}>
                <Grid container style={{marginTop:"10px"}} justify="center">
                    <Grid item xs={11}>
                            <Grid container spacing={4}>
                                <Grid item>
                                <DatePicker
                                selected={startDate}
                                onChange={handleChange3}
                                />
                                </Grid>
                                <Grid item>
                                <DatePicker
                                selected={startDate1}
                                onChange={handleChange4}
                                />
                                </Grid>
    
                            </Grid>
                        
                    </Grid>
    
                </Grid>
            </Grid>
            
            )
    }
}
export default function Time(){
    const classes=useStyles();
    const [count,dispatch]=useReducer(reducer,0);
    const [view,setview]=useState(true);
    const [dropc,setdrop]=useState(true);
    const handleview=()=>{
            setview(true)
    }
    const handleview1=()=>{
        setview(false)
}
    const handledrop=()=>{
            setdrop(true)
    }
    const handledrop1=()=>{
        setdrop(false)
    }
    const [age1, setAge1] = React.useState('');
    const [open,handleopen]=React.useState(false)
    const funcopen=()=>{
      handleopen(true)
    }
    const funcclose=()=>{
      handleopen(false)
    }
    const handleChange = (event) => {
        console.log(event.target.value)
        
        // dispatch({type:'event.target.value'})
        setAge1(event.target.value);


    };
    const [startDate,setDate]=React.useState( new Date())
    const handleChange3 = date => {
        setDate(date)

      };
      const [startDate1,setDate1]=React.useState( new Date())
      const handleChange4 = date => {
          setDate1(date)
  
        };
    return(
        <div>
            <Grid item xs={12} style={{marginTop:"26px"}}>
                <Grid container justify="center">
                    <Grid item xs={11}>
                        <div style={{fontStyle: "normal",fontWeight: "500",fontSize: "15px",color: "#000000"}}>
                            Time
                        </div>

                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} style={{marginTop:"20px"}}>
                <Grid container justify="center">
                    <Grid item xs={11}>
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
                        <em style={{fontSize:"12px",fontWeight:"bold",fontStyle:'normal'}}>All History</em>
                        </MenuItem>  
                        <MenuItem value={"week"} style={{fontSize:"13px",fontWeight:"bold",fontStyle:'normal'}}>Past Week</MenuItem>
                        <MenuItem value={"month"} style={{fontSize:"13px",fontWeight:"bold",fontStyle:'normal'}}>Past month</MenuItem>
                        <MenuItem value={"month6"} style={{fontSize:"13px",fontWeight:"bold",fontStyle:'normal'}}>Past 6 months</MenuItem>
                        <MenuItem value={"year"} style={{fontSize:"13px",fontWeight:"bold",fontStyle:'normal'}}>Past year</MenuItem>
                        <MenuItem value={"year2"} style={{fontSize:"13px",fontWeight:"bold",fontStyle:'normal'}}>Past 2 years</MenuItem>
                        <MenuItem value={"custom"} style={{fontSize:"13px",fontWeight:"bold",fontStyle:'normal'}}>Custom range</MenuItem>

                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>


            </Grid>
            <Grid item xs={12}>
                <Grid container style={{marginTop:"20px"}} justify="center">
                    <Grid item xs={11}>
                        <Grid container spacing={4}>
                            <Grid item style={{width:"210px"}}>
                                From
                            </Grid>
                            <Grid item>
                                To
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>
                {
                    timing(age1,startDate,startDate1,handleChange3,handleChange4)
                }
               

               

                

            
        </div>
    )
}