import React,{useEffect, useState} from 'react';
import {Grid,Typography,Card,Paper,CardHeader,Divider,Button, IconButton} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import refresh from "../../Links/images/refresh.png";
import warning from "../../Links/images/warning.png";
import active from "../../Links/images/active.png";
import new1 from "../../Links/images/new.png";
import activesource from "../../Links/images/activesource.png"
import Piechart from "./Piechart";
import Progressbar from "./progressbar";
import drop from "../../Links/images/drop.png";
import Dropup from "./Dropup.jsx";
import Dropdown from "./Dropdown.jsx"
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
        fontSize: "16px" ,
          fontWeight:"500",
          fontStyle:"normal",
          color: "#B5B5C3"
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
        width:"1093px",
        boxShadow: "0px 0px 35px rgba(181, 181, 195, 0.15)",
        borderRadius: "6px",
        height:"140px"
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
export default function EContent(){
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
            <Grid container alignItems="center">
                <Grid item xs={4} lg={4} >
                <Typography className={classes.h}>
                    Latest Updates
                </Typography>
                </Grid>
                <Grid item xs={8} lg={8}>
                    <Grid container justify="flex-end" alignItems="center" alignContent="flex-end">
                        
                        
                        <div style={{display:"flex",alignItems:'center',padding:"5px"}}>
                            <img src={refresh}>
                            </img>
                            </div>
                            <div>
                            <Typography style={{display:"flex",fontSize:"12px",fontWeight:"600",padding:"6px"}}>
                                Update 00:00 PM 18/9/2022
                            </Typography>
                            </div>
                        
                        
                       
                    
                    
                    </Grid>
                    
                </Grid>
            </Grid>
        
        </Grid>                    
    </Grid>

</Grid>

<Grid item xs={12} >
    <Grid container justify="center" spacing={0} >
        <Grid item xs={11} lg={10}  >
            <div className={classes.root}>
            <Grid container justify="space-between" spacing={1}>
                <Grid item  >
                    <Card className={classes.paper}>
                        
                            <img src={warning}></img>
                            <Typography style={{fontStyle:"normal",fontWeight:"bold",fontSize:"40px",color:"#464E5F"}}>
                                158
                            </Typography>
                            <Typography className={classes.fontin}>
                                Total Alerts Found
                            </Typography>
                        
                        
                    </Card>
                    
                    
                </Grid>
                <Grid item  >
                    <Paper className={classes.paper}>
                            <img src={new1}></img>
                            <Typography style={{fontStyle:"normal",fontWeight:"bold",fontSize:"40px",color:"#464E5F"}}>
                                25
                            </Typography>
                            <Typography className={classes.fontin}>
                                New Alerts Today
                            </Typography>
                    </Paper>
                </Grid>
                <Grid item >
                    <Paper className={classes.paper}>
                            <img src={active}></img>
                            <div className={classes.but} >
                                <div style={{display:"flex",borderRight: "1px solid #000000",width:"117px",height:"32px",fontStyle: "normal",fontWeight: "500",fontSize: "14px",color:"white",alignItems:"center",justifyContent:"center"}}>
                                        Hacker Group
                                </div>
                                <div style={{display:"flex",width:"42px",textAlign:"center",height:"32px",alignItems:"center",justifyContent:"center",fontStyle:"normal",fontWeight: "600",fontSize: "14px",color:"white"}}>
                                    17
                                </div>
                            </div>
                            <Typography className={classes.fontin} style={{paddingTop:"35px"}}>
                                Most Active Category
                            </Typography>
                    </Paper>
                </Grid>
                <Grid item >
                    <Paper className={classes.paper}>
                    <img src={activesource}></img>
                    <span className={classes.dot}>
                        <Typography style={{color:"white",fontStyle: "normal",fontWeight: "600",fontSize: "10px"}}>
                                Dark Web
                        </Typography>
                    </span>
                            <Typography className={classes.fontin} style={{paddingTop:"13px"}}>
                               Most Active Source
                            </Typography>
                    </Paper>
                </Grid>
            </Grid>
            </div>
            
            

        </Grid>
    </Grid>
</Grid>

{/* Charts  */}
<Grid item xs={12} style={{marginTop:"10px"}} >
    <Grid container justify="center" spacing={3} >
        <Grid item xs={11} lg={10}  >
        <Grid container justify="space-between" spacing={2} >
                <Grid item >
                    <Grid container  >
                        <Card className={classes.f3} >
                            <CardHeader
                                className={classes.HeaderFont}
                            
                                disableTypography="true" 
                                
                                
                                title="Exposure By Category "      
                                />
                            <Divider/>
                            <Piechart/>
                                
                            
                            
                        </Card>
                    </Grid>
                
                </Grid>

                <Grid item  >
                    <Grid container  >
                        <Card className={classes.f4} >
                            <CardHeader
                                className={classes.HeaderFont}
                            
                                disableTypography="true" 
                                
                                
                                title="Exposure By Category Type "      
                                />
                            <Divider/>
                            <Grid item xs={12}>
                                <Grid container justify="center" direction="row" >
                                    <Grid item xs={11} style={{marginTop:"30px"}}>
                                        <Grid container >
                                            <Grid item xs={6}>
                                                <div className={classes.progressfont} style={{paddingLeft:"10px"}}>
                                                    Dark Web
                                                </div>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Grid container justify="flex-end">
                                                <div className={classes.progressfont} style={{paddingRight:"10px"}}>
                                                    22 Alerts
                                                </div>
                                                </Grid>
                                                
                                            </Grid>
                                        </Grid>
                                  
                            
                                    </Grid>
                                    <Grid item xs={11} style={{marginTop:"10px"}}>
                                    <Progressbar color={"black"} values={count}/>
                            
                            
                                    </Grid>
                                    <Grid item xs={11} style={{marginTop:"23px"}}>
                                        <Grid container >
                                            <Grid item xs={6}>
                                                <div className={classes.progressfont} style={{paddingLeft:"10px"}}>
                                                    Dark Breach
                                                </div>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Grid container justify="flex-end">
                                                <div className={classes.progressfont} style={{paddingRight:"10px"}}>
                                                    43 Alerts
                                                </div>
                                                </Grid>
                                                
                                            </Grid>
                                        </Grid>
                                  
                            
                                    </Grid>

                                    <Grid item xs={11} style={{marginTop:"10px"}}>
                                    
                                        <Progressbar color={"#8950FC"} values={count}/>
                            
                                    </Grid>

                                    <Grid item xs={11} style={{marginTop:"23px"}}>
                                        <Grid container >
                                            <Grid item xs={6}>
                                                <div className={classes.progressfont} style={{paddingLeft:"10px"}}>
                                                    Deep Web
                                                </div>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Grid container justify="flex-end">
                                                <div className={classes.progressfont} style={{paddingRight:"10px"}}>
                                                    9 Alerts
                                                </div>
                                                </Grid>
                                                
                                            </Grid>
                                        </Grid>
                                  
                            
                                    </Grid>

                                    <Grid item xs={11} style={{marginTop:"10px"}}>
                                    
                                    <Progressbar color={"#313742"} values={count}/>
                            
                                    </Grid>

                                </Grid>
                            </Grid>
                            
                            
                            
                        </Card>
                    </Grid>
                
                </Grid>
        
        
        
        
        
        </Grid>
        </Grid>
    </Grid>
</Grid>
    
{/* Vertical Divider  */}
<Grid item xs={12} style={{display:dropc?"block":"none"}}>
<Grid container justify="flex-end" alignItems="center">
    <Grid item xs={10} lg={10}>
        <Divider style={{height:"3px"}}/>
    </Grid>
    <Grid item xs={1} lg={1} style={{paddingLeft:"8px"}}>
        <IconButton onClick={handledrop1}>
            <img src={drop}  />
        </IconButton>
            
        
        
    </Grid>


</Grid>

</Grid>

{/* Search  */}
{/* {dropc?
<Dropup/>:

<Dropdown call={handledrop}/>

} */}





</Grid>
                <Dropup filter={changefilter} filtervalue={filter}/>
                </div>
                :
                <div>
                    <Dropdown call={handledrop} filter={changefilter} filtervalue={filter}/>
                </div>
                
                
            }
            
            
        </div>
    )
}