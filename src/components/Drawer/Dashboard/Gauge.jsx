import React from 'react';
import GaugeChart from './Assets';
import {Typography,Grid} from '@material-ui/core';
import CountUp from 'react-countup';

import { makeStyles } from '@material-ui/core/styles';
import styles from "./Gauge.module.css"
const useStyles = makeStyles((theme) => ({
    fontgauge: {
        
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "31.9326px",
        
        color: "#506883"
      
    },

  }));
export default function Gauge(){
    const classes = useStyles();
 return(
    <div>
    <Grid container justify="center" alignItems="center" className={styles.gauge}>
        <Grid item >
        <GaugeChart id="gauge-chart3" 
        nrOfLevels={20} 
        colors={["#F76B1C ", "#D8D8D8"]} 
        arcWidth={0.37}
        needleColor={"#506883"}
        needleBaseColor={"#506883"}
        percent={0.37} 
        textColor={"transparent"}
        className={styles.ingauge}
        
    />
    
        </Grid>
    </Grid>
   
    <Grid container direction="row" alignItems="center" justify="center" className={styles.mkheight} >
        <Grid item  >
        <Typography className={classes.fontgauge}> <CountUp start={0} end={143} duration={2.5} separator=","/></Typography>
        
        </Grid>
        <Grid item>
        <Typography className={classes.fontgauge} >/</Typography>
        </Grid>
        
        <Grid item >
        <Typography className={classes.fontgauge}> <CountUp start={0} end={300} duration={2.5} separator=","/></Typography>
        </Grid>


            

            
        
    </Grid>
            

    </div>
    

    
 )
}