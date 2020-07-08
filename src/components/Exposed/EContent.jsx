import React from 'react';
import {Grid,Typography,Card,Paper} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import refresh from "../../Links/images/refresh.png";
import warning from "../../Links/images/warning.png";
import active from "../../Links/images/active.png";
import new1 from "../../Links/images/new.png";
import activesource from "../../Links/images/activesource.png"
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      
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
      paper: {
          
         
        background: "#FFFFFF",
        boxShadow: "0px 0px 35px rgba(181, 181, 195, 0.15)",
        borderRadius: "6px", 
        padding: theme.spacing(2),
        height: "170px",
        
        width:"230px",
        display:"flex",flexDirection:"column",alignItems:"center"

      },
    fontheader:{

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
        width:"100%",
       boxShadow: "0px 0px 19.9579px rgba(56, 71, 109, 0.03)",
        borderRadius: "11.9747px",
        
        paddingBottom:"18px",
        
    },
    f5:{
        width:"100%",
        boxShadow: "0px 0px 19.9579px rgba(56, 71, 109, 0.03)",
         borderRadius: "11.9747px",
         
         paddingBottom:"18px",
         height:"447px"
    },
    f2:{
        width:"100%",
        boxShadow: "0px 0px 19.9579px rgba(56, 71, 109, 0.03)",
        borderRadius: "11.9747px",
        
     },
     f3:{
        width:"100%",
        boxShadow: "0px 0px 19.9579px rgba(56, 71, 109, 0.03)",
        borderRadius: "11.9747px",
        height: "483px"
     },
    control: {
      padding: theme.spacing(2),
    },
  }));
export default function EContent(){
    const classes = useStyles();
    return(
        <div>
            <Grid container className={classes.root} spacing={3}>
                <Grid item xs={12} md={12}>
                    <Grid container justify="center">
                        <Grid item xs={11}>
                            <Grid container alignItems="center">
                                <Grid item xs={4} >
                                <Typography className={classes.h}>
                                    Latest Updates
                                </Typography>
                                </Grid>
                                <Grid item xs={8} >
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
                    <Grid container justify="center" spacing={3} >
                        <Grid item xs={11}  >
                            <div className={classes.root}>
                            <Grid container justify="space-between" spacing={2}>
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
                                            <Typography style={{fontStyle:"normal",fontWeight:"bold",fontSize:"40px",color:"#464E5F"}}>
                                                25
                                            </Typography>
                                            <Typography className={classes.fontin}>
                                                Most Active Category
                                            </Typography>
                                    </Paper>
                                </Grid>
                                <Grid item >
                                    <Paper className={classes.paper}>
                                    <img src={activesource}></img>
                                    <span className={classes.dot}></span>
                                            <Typography className={classes.fontin}>
                                               Most Active Source
                                            </Typography>
                                    </Paper>
                                </Grid>
                            </Grid>
                            </div>
                            
                            

                        </Grid>
                    </Grid>
                </Grid>    
                    
            
            
            
            
            
            
            </Grid>
        </div>
    )
}