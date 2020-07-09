import React from 'react';
import {Container,Grid,Chip,Divider,Typography} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import LatestCard from "../Drawer/Dashboard/LatestCard";

import LatestCardN1 from "./LatestCardN1.jsx";
import LatestCardN2 from "./LatestCardN2.jsx";
import {Link} from "react-router-dom";
import styles from "./NContent.module.css"
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'flex-start',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
      },
      chipborder:{
        border:"solid",
        borderColor:"black",
        borderWidth:"0.5px",
        fontColor:"black",

    },
    },
  }));
export default function NContent (){
    const classes = useStyles();
    return(
        <div style={{background:"#F2F3F7",width:"98vw"}}>
            <Grid container   justify="center" spacing={2}>
                <Grid item xs={11} style={{marginTop:"70px"}}>

                </Grid>
                <Grid item xs={11}  className={classes.root}>
                <Link to="./ServiceUpdates">
                <Chip size="Large" label="Service Updates" variant="outlined" className={classes.chipborder}  style={{padding:"10px",background:"#F2F3F7",fontSize:"16px",color:"black",border: "0.6px solid #000000"}}/>
                </Link>
                <Link to="./LatestAlerts">
                <Chip size="Large" label="Latest Alerts" variant="outlined" className={classes.chipborder} style={{padding:"10px",background:"#F2F3F7",fontSize:"16px",color:"black",border: "0.6px solid #000000"}}/>
                </Link>
                <Link to="./SupportUpdates">
                <Chip size="Large" label="Support Updates" variant="outlined" className={classes.chipborder} style={{padding:"10px",background:"#F2F3F7",fontSize:"16px",color:"black",border: "0.6px solid #000000"}}/>
                </Link>
                </Grid>
            
                <Grid item xs={11} style={{margin:"17px"}} >
                    <Grid container direction="row" spacing={3}>
                        <Grid item >
                            <Typography variant="h4" style={{fontSize:"20px",fontStyle:"normal",fontWeight:"500"}}>
                                Service Updates
                                
                            </Typography>
                        </Grid>
                        
                        <Grid item >
                            
                            <Typography component="div" className={styles.header} >
                                
                            
                                </Typography>
                            
                            
                            
                        </Grid>

                    </Grid>

                </Grid>
                
                <Grid item xs={11}>
                    <Grid container>
                        <Grid item xs={12}>
                        <LatestCardN1/>
                        <LatestCardN1/>
                        <LatestCardN1/>
                        </Grid>
                    </Grid>
                
                
                </Grid>
                <Grid item xs={11} style={{margin:"17px",marginTop:"25px"}}>
                    <Grid container direction="row" spacing={3}>
                        <Grid item >
                            <Typography variant="h4" style={{fontSize:"20px",fontStyle:"normal",fontWeight:"500"}}>
                                Latest Alerts
                                
                            </Typography>
                        </Grid>
                        
                        <Grid item  >
                            
                                
                                    <Typography component="div" className={styles.header1}  >
                                    
                                
                                    </Typography>
                                
                            
                        
                            
                            
                            
                        </Grid>

                    </Grid>

                </Grid>
                <Grid item xs={11} >
                <LatestCard/>
                <LatestCard/>
                <LatestCard/>
               
                </Grid>
                <Grid item xs={11} style={{margin:"17px",marginTop:"25px"}}>
                    <Grid container direction="row" spacing={3}>
                        <Grid item>
                            <Typography variant="h4" style={{fontSize:"20px",fontStyle:"normal",fontWeight:"500"}}>
                                Support Updates
                                
                            </Typography>
                        </Grid>
                        
                        <Grid item xs={10} >
                            
                            <Typography component="div" className={styles.header}>
                                
                            
                                </Typography>
                            
                            
                            
                        </Grid>

                    </Grid>

                </Grid>
                <Grid item xs={11}>
                <LatestCardN1/>
                <LatestCardN1/>
                <LatestCardN1/>
               
                </Grid>

                
                <Grid item xs={11} style={{marginTop:"70px"}}>

                </Grid>

                <Grid item xs={11} style={{margin:"17px",marginTop:"25px"}}>
                    <Grid container direction="row" spacing={3}>
                        <Grid item>
                            <Typography variant="h4" style={{fontSize:"20px",fontStyle:"normal",fontWeight:"500"}}>
                                Latest Updates
                                
                            </Typography>
                        </Grid>
                        
                        <Grid item xs={10} >
                            
                            <Typography component="div" className={styles.header}>
                                
                            
                                </Typography>
                            
                            
                            
                        </Grid>

                    </Grid>

                </Grid>
                <Grid item xs={11}>
                <LatestCardN2/>
                <LatestCardN2/>
                <LatestCardN2/>
               
                </Grid>

                
                <Grid item xs={11} style={{marginTop:"70px"}}>

                </Grid>
            </Grid>
        </div>
    )
}