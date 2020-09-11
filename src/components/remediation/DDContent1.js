import React,{useEffect, useState} from 'react';
import {Grid,Typography,Card,Paper,CardHeader,Divider,Button, IconButton} from "@material-ui/core";
import { makeStyles,withStyles } from '@material-ui/core/styles';
import refresh from "../../Links/images/refresh.png";
import warning from "../../Links/images/warning.png";
import active from "../../Links/images/active.png";
import new1 from "../../Links/images/new.png";
import activesource from "../../Links/images/activesource.png"
import Progressbar from "./progressbar";
import BarGroup from "./BarGroup.jsx";
import Piechart from "./Piechart.jsx";
import drop from "../../Links/images/drop.png";
import Dropup1 from "./Dropup1.js";
import Dropdown1 from "./DropDown1.js";
import GetAppIcon from '@material-ui/icons/GetApp';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import Tooltip from '@material-ui/core/Tooltip';

const LightTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }))(Tooltip);
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      
    },
    button:{
        display:"flex",alignItems:"center",width:"100%",height:"44%",border: "0.6px solid #000000",borderRadius: "2px",fontStyle: "normal",
        fontSize:"10px",                                            
                                                    
        minWidth:"100px",
        color: "rgba(0, 0, 0, 0.6)"
    },
    h:{
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "27.9411px"
    },
    HeaderFont:{
        fontFamily: 'Roboto',
        fontSize: "16.9411px" ,
          fontWeight:"bold",
          fontStyle:"normal"
      },
      progressfont:{
        
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "14px",

        letterSpacing: "-0.0864285px",
        
        color: "#506883"
      },
      paper: {
          
         
        background: "#FFFFFF",
        boxShadow: "0px 0px 35px rgba(181, 181, 195, 0.15)",
        borderRadius: "6px", 
        padding: theme.spacing(2),
        height: "auto",
        
        width:"12vw",
        minWidth:"190px",
        display:"flex",flexDirection:"column",alignItems:"center"

      },
    but:{
        display:"flex",
        
        width: "159px",
        height: "34px",
        marginTop:"14px",
        background: "#464E5F",
        border: "1px solid #000000",
        boxSizing: "border-box",
        borderRadius: "4px"

    },
    dot:{
        marginTop:"10px",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        height: "60px",
        width: "60px",
        background:"black",
        borderRadius: "50%",
        
    },
    fontin:{
        paddingTop:'20px',
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "16px",
        lineHeight: "18px",
        /* identical to box height, or 112% */
        
        
        color: "#B5B5C3"
    },
    f1:{
       width:"100%",
       boxShadow: "0px 0px 19.9579px rgba(56, 71, 109, 0.03)",
        borderRadius: "11.9747px",
        
        height: "422.11px"
    },
    f4:{
        width:"28vw",
        minWidth:"300px",
        boxShadow: "0px 0px 19.9579px rgba(56, 71, 109, 0.03)",
        borderRadius: "11.9747px",
        height: "380px"
        
    },
    f5:{
        width:"100%",
        boxShadow: "0px 0px 19.9579px rgba(56, 71, 109, 0.03)",
         borderRadius: "11.9747px",
         
         paddingBottom:"18px",
         height:"447px"
    },
    f2:{
        background: "#FFFFFF",
        boxShadow: "0px 0px 35px rgba(181, 181, 195, 0.15)",
        borderRadius: "6px", 
        
        height: "405px",
        
     },
     f3:{
        width:"33.3vw",
        minWidth:"400px",
        boxShadow: "0px 0px 19.9579px rgba(56, 71, 109, 0.03)",
        borderRadius: "11.9747px",
        height: "380px"
     },
    control: {
      padding: theme.spacing(2),
    },
  }));
export default function DDContent1(){
    const classes = useStyles();
    const [count,setcount]=useState();
    const [view,setview]=useState(true);
    const [dropc,setdrop]=useState(true);
    const [filter,setfilter]=useState(true);
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
    const calculate = ()=>{
        let char,calculate,x;
        char=(70/300)*100;
        console.log(char,"char")
        x=Math.round(char)
        calculate=String(x).concat("%")
        
        setcount(calculate)
        

    }
    const changefilter=()=>{
        setfilter(!filter)
    }
    useEffect(() => {
        calculate();
      });
    return(
        <div style={{marginTop:"36px"}}>
                {dropc?
                <div>
<Grid container className={classes.root} spacing={3}>

<Grid item xs={12} md={12}>
    <Grid container justify="center">
        <Grid item xs={11} lg={10}>
        <Grid container>
            <Grid item xs={6}>
                <Grid container spacing={2}>
                    <Grid item>
                        <Typography variant="h5">
                           Remediation Log
                        </Typography>
                    </Grid>
                    <Grid item>
                    <LightTooltip title="All remediated actions are stored in the ‘Remediation Log’. It is a repository of risks you have mitigated">
                    <InfoOutlinedIcon />
                    </LightTooltip >
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={6}>
                <Grid container justify="flex-end" >
                    <Grid item xs={6}>
                    <Grid container justify="flex-end">
                    <IconButton>
                        <GetAppIcon/>
                    </IconButton>
                    </Grid>

                    </Grid>

                    
                </Grid>

            </Grid>
        </Grid>
        
        </Grid>                    
    </Grid>

</Grid>



{/* Search  */}
{/* {dropc?
<Dropup/>:

<Dropdown call={handledrop}/>

} */}





</Grid>
                <Dropup1 filter={changefilter} filtervalue={filter}/>
                </div>
                :
                <div>
                    <Dropdown1 call={handledrop} filter={changefilter} filtervalue={filter}/>
                </div>
                
                
            }
            
            
        </div>
    )
}