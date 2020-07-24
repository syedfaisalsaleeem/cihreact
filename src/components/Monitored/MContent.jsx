import { makeStyles } from '@material-ui/core/styles';
import ContactGs1 from "../Exposed/ContactGs1.jsx";
import list from "../../Links/images/list.png";
import grid from "../../Links/images/grid.png";
import filter from "../../Links/images/filter.png";
import appi from "../../Links/images/1.png";
import host from "../../Links/images/2.png";
import add from "../../Links/images/add.png";
import csv from "../../Links/images/csv.png";
import view1 from "../../Links/images/view.png";

import React,{useEffect, useState} from 'react';
import {Grid,Typography,Card,Paper,CardHeader,Divider,Button, IconButton} from "@material-ui/core";
import LatestCard from "./LatestCard.jsx";
import styles from "./LatestCard.module.css";
import MHigh from "./MHigh.jsx";
import MLow from "./MLow.jsx";
import MMedium from "./MMedium.jsx";
import GridHigh from "./GridHigh.jsx";
import GridMedium from "./GridMedium.jsx";
import AddAsset from "./AddAsset.jsx";

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
      button1:{
        display:"flex",alignItems:"center",width:"100%",height:"44%",borderRadius: "2px",fontStyle: "normal",
        fontSize:"10px",                                            
                                                    
        minWidth:"20px",
        
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
          
          height: "auto",
          paddingBottom:"30px"
          
       },
       topcard:{
          width:"100%",
          minWidth:"400px",
          box: "0px 0px 35px rgba(181, 181, 195, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.25)",
          borderRadius: "2px",
          height: "79px"

       },
       incontent:{
        display:"flex",height:"79px",borderBottom:"solid 6px #8950FC",alignItems:"center",justifyContent:"center",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "22px",
        color: "#464E5F",
        "&:hover": {
            cursor:"pointer"
          }
       },
       incontent1:{
        display:"flex",height:"79px",alignItems:"center",justifyContent:"center",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "22px",
        color: "#464E5F",
        "&:hover": {
            cursor:"pointer"
          }
       },
       rightfont:{
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "10px",
        
        color: "rgba(0, 0, 0, 0.6)",
       },
      control: {
        padding: theme.spacing(2),
      },
}))
export default function MContent(){
    const classes=useStyles();
    const [view,setview]=useState(true);
    const [dropc,setdrop]=useState(true);
    const [open,setopen]=useState(false);
    const handleview=()=>{
            setview(true)
    }
    const handleview1=()=>{
        setview(false)
}
const handleClose=()=>{
    setopen(!open)
}
    return(
        <div style={{width:"100%"}}>
            <Grid container justify="flex-start" >
                <Grid item xs={12} lg={12} >
                    <Card className={classes.topcard}>
                        <Grid container  alignItems="flex-end">
                            <Grid item xs={6}  className={classes.incontent}>
                                Tracked Assets
                            </Grid>
                            <Grid item xs={6} className={classes.incontent1}>
                                Keywords
                            </Grid>
                        </Grid>
                    </Card>

                </Grid>
                <Grid item xs={12} lg={12} style={{marginTop:"2px"}}>
                    <Grid container justify="center">
                        <Grid item xs={11} lg={11} >
                            <Card className={classes.f2}>

                                    
                                    <Grid item xs={12} style={{marginTop:"26px"}}>
                                        <Grid container justify="center">
                                            <Grid item xs={12} >
                                                <Grid container justify="center" spacing={2} >
                                                    <Grid item xs={7} >
                                                        <ContactGs1/>
                                                    </Grid>
                                                    <Grid item  >
                                                        <div style={{height:"100%",width:"60%",display:'flex',flexDirection:"column",justifyContent:"space-between"}}>
                                                        
                                                        {/* <div item style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"46%",border: "0.6px solid #000000",borderRadius: "2px",fontStyle: "normal",
                                                        fontWeight: "normal",
                                                        fontSize: "13px",
                                                        minWidth:"80px",
                                                        color: "rgba(0, 0, 0, 0.6)"}}>
                                                            <div>
                                                            <img src={grid}>
                                                            </img>
                                                            </div>
                                                            
                                                            <div style={{paddingBottom:"2px",paddingLeft:"5px"}}>
                                                                Grid View
                                                            </div>
                                                                        
                                                        </div> */}
                                                        <Button
                                                            variant="outlined"
                                                            
                                                            className={classes.button}
                                                            startIcon={<img src={grid} />}
                                                            onClick={handleview1}
                                                            style={{border:view?"0.6px solid #000000":"1px solid #8950FC"}}
                                                        >
                                                            Grid View
                                                        </Button>
                                                        <Button
                                                            variant="outlined"
                                                            
                                                            className={classes.button}
                                                            startIcon={<img src={list} />}
                                                            onClick={handleview}
                                                            style={{border:view?"1px solid #8950FC":"0.6px solid #000000"}}
                                                        >
                                                            List View
                                                        </Button>
                                                        {/* <Button item style={{display:"flex",alignItems:"center",width:"100%",height:"46%",border: "0.6px solid #000000",borderRadius: "2px",fontStyle: "normal",
                                                        
                                                        
                                                        minWidth:"80px",
                                                        color: "rgba(0, 0, 0, 0.6)"}}>
                                                            <div style={{paddingTop:"2px",paddingRight:""}}>
                                                            <img src={list}>
                                                            </img>
                                                            </div>
                                                        
                                                            <div style={{paddingBottom:"0px",paddingLeft:"0px",fontStyle:"normal",fontWeight: "normal",
                                                        fontSize: "10px",}}>
                                                                List View
                                                            </div>
                                                                    
                                                        </Button> */}
                                                        </div>
                                                        
                                                    </Grid>
                                                    <Grid item >
                                                        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"40%",height:"100%",border: "0.6px solid #8950FC",borderRadius: "2px",fontStyle: "normal",
                                                        fontWeight: "normal",
                                                        fontSize: "13px",
                                                        minWidth:"45px",
                                                        color: "rgba(0, 0, 0, 0.6)"}}>
                                                            <img src={filter}>
                                                            </img>
                                                            <div>
                                                                Filter
                                                            </div>
                                                                
                                                        </div>
                                                    </Grid> 
                                                </Grid>
                                            </Grid>
                                            

                                        </Grid>
                                    </Grid>
                                    
                                    <Grid item xs={12} style={{marginTop:"26px"}}>
                                        <Grid container justify="center" >
                                            <Grid item xs={12} >
                                                <Grid container justify="center" spacing={2} >
                                                    <Grid item xs={8}  >
                                                        <Grid container spacing={5}>
                                                            <Grid item>
                                                                <Grid container direction="column" spacing={1} justify="center">
                                                                    <Grid item style={{fontWeight: "600",fontSize: "16px",fontStyle:"normal"}}>
                                                                        Severity Level
                                                                    </Grid>
                                                                    <Grid item>
                                                                    <div style={{display:"flex",width:"100%",height:"100%"}}>
                                                                    <Button  variant="outlined"
                                                                            
                                                                            className={classes.button}>
                                                                            Low
                                                                        </Button>
                                                                        <Button  variant="outlined"
                                                                            style={{marginLeft:"8px"}}
                                                                            className={classes.button}>
                                                                            Medium
                                                                        </Button>
                                                                        <Button  variant="outlined"
                                                                            style={{marginLeft:"8px"}}
                                                                            className={classes.button}>
                                                                            High
                                                                        </Button>
                                                                    </div>
                                                                    </Grid>
                                                                </Grid>

                                                            </Grid>
                                                            <Grid item >
                                                                <Grid container direction="column" spacing={1} justify="center">
                                                                    <Grid item style={{fontWeight: "600",fontSize: "16px",fontStyle:"normal"}}>
                                                                        Asset Type
                                                                    </Grid>
                                                                    <Grid item>
                                                                    <div style={{display:"flex",width:"100%",height:"100%"}}>
                                                                    <Button
                                                                            variant="outlined"
                                                                            
                                                                            className={classes.button}
                                                                            startIcon={<img src={appi} />}
                                                                            
                                                                        >
                                                                            Application
                                                                        </Button>
                                                                        <Button
                                                                            variant="outlined"
                                                                            
                                                                            className={classes.button}
                                                                            startIcon={<img src={host} />}
                                                                            
                                                                            style={{marginLeft:"8px"}}
                                                                        >
                                                                            host
                                                                        </Button>
                                                                       
                                                                    </div>
                                                                    </Grid>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                        
                                                    </Grid>
                                                    <Grid item  >
                                                        <div style={{height:"100%",width:"60%",display:'flex',flexDirection:"column",justifyContent:"space-between"}}>
                                                        
                                                        <div
                                                            className={classes.button1}
                                                        >
                                                            
                                                        </div>
                                                        
      
                                                        </div>
                                                        
                                                    </Grid>
                                                    <Grid item >
                                                        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"40%",height:"100%",borderRadius: "2px",fontStyle: "normal",
                                                        fontWeight: "normal",
                                                        fontSize: "13px",
                                                        minWidth:"45px",
                                                        }}>
                                                            
                                                                
                                                        </div>
                                                    </Grid> 
                                                </Grid>
                                            </Grid>
                                            

                                        </Grid>
                                    </Grid>                                    
                                    
                                    

                            
                            </Card>
                        </Grid>
                        <Grid item xs={1} style={{background:"#F3F6F9",borderLeft:"0.4px solid #000000"}}>
                                        <Grid container direction="column" justify="center" alignItems="center" width="100%" style={{marginTop:"0px",height:"100%"}}>
                                            <Grid item style={{height:"30%"}} >
                                                <Grid container direction="column" justify="center" alignItems="center" width="100%" onClick={handleClose}>
                                                    <Grid item>
                                                        <img src={add}/>
                                                        
                                                    </Grid>
                                                    <Grid item className={classes.rightfont} >
                                                        Add Asset
                                                    </Grid>
                                                </Grid>
                                                
                                                        
                                            </Grid>
                                            <Grid item style={{height:"30%"}}>
                                                <Grid container direction="column" justify="center" alignItems="center" width="100%">
                                                    <Grid item>
                                                        <img src={csv}/>
                                                        
                                                    </Grid>
                                                    <Grid item className={classes.rightfont}>
                                                    Download Assets
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item style={{height:"30%"}}>
                                                <Grid container direction="column" justify="center" alignItems="center" width="100%">
                                                    <Grid item>
                                                        <img src={view1}/>
                                                        
                                                    </Grid>
                                                    <Grid item className={classes.rightfont}>
                                                    View Asset Map
                                                    </Grid>
                                                </Grid>
                                            </Grid>

                                        </Grid>
                        </Grid>
                    </Grid>

                </Grid>

                <Grid item xs={12} lg={12} style={{marginTop:"20px"}}>
                {view ?
                    <div>
                        <Grid container justify="center">
                            <Grid item xs={12} lg={11}>
                                <MHigh/>
                                <MLow/>
                                <MHigh/>
                                <MMedium/>                         
                                <MHigh/>
                            </Grid>
                        </Grid>
                    </div>:
                    <div>
                        <Grid container justify="center">
                            <Grid item xs={12} lg={11}>
                                <Grid container justify="center" >
                                    <Grid item>
                                        <GridHigh/>
                                    </Grid>
                                    <Grid item>
                                        <GridMedium/>
                                    </Grid>
                                    <Grid item>
                                        <GridHigh/>
                                    </Grid>
                                    <Grid item>
                                        <GridMedium/>
                                    </Grid>
                                </Grid>
                                

                            </Grid>

                        </Grid>
                    </div>
                }             
                </Grid>

            </Grid>
            <AddAsset open={open} handleClose={handleClose}/>
        </div>
    )
}