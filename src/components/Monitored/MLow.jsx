import React from 'react';
import {Card,Grid,Chip} from "@material-ui/core";
import styles from "./LatestCard.module.css";
import application from "../../Links/images/application.png";
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      listStyle: 'none',
      padding: theme.spacing(0.5),
      margin: 0,
    },
    chip: {
      margin: theme.spacing(0.5),
      padding:theme.spacing(0.5),
      fontStyle: "normal",
       fontWeight: "normal",
        fontSize: "10px",
        color: "#FFFFFF"
    },
    chip1: {
        margin: theme.spacing(0.5),
        paddingLeft:theme.spacing(0.5),
        paddingRight:theme.spacing(0.5),
        paddingTop:theme.spacing(0.3),
        paddingBottom:theme.spacing(0.3),
        fontStyle: "normal",
         fontWeight: "normal",
          fontSize: "10px",
          height:"15px",
          border: "1px solid #000000",
          borderRadius:"2px"

      },
    tag:{
        fontFamily: "Arial, Helvetica, sans-serif",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "14px",
        color: "#000000"
    },
  }));
export default function MLow(){
    const classes=useStyles()
    return(
        <Card style={{marginBottom:"20px"}}>

                                    
                <div className={styles.main}>

        <div className={styles.box1}>



        <div >
        <img src={application}/>

        </div>

        <div class={styles.apli}>
        Application
        </div>
        </div>

        <div className={styles.colom}>

        <div className={styles.row}>



        <div className={styles.box2} style={{width:"13%"}}>
        <div className={styles.ip}>
        <p>IP Address</p>
        </div>
        <div className={styles.ipnum}>
        <p>000.00.00.00</p>
        </div>
        </div>

        <div className={styles.bright} >
        </div>

        <div className={styles.box3} style={{width:"10%"}}>
        <div className={styles.name}>
        <p>Name</p>
        </div>
        <div className={styles.namelink}>
        <p>https://website.web.com</p>
        </div>
        </div>

        <div className={styles.bright2}>
        </div>

        <div className={styles.box4} style={{width:"10%"}}>

        <div className={styles.os}>
        <p>OS Type</p>
        </div>
        <div className={styles.ostext} >
        <p>Ubuntu Linux 18.04</p>
        </div>
        </div>

        <div className={styles.bright3}>
        </div>

        <div className={styles.box5} style={{width:"27%"}}>
        <Grid item xs={12}>
                <Grid container justify="center">
                    <Grid item xs={11}>
                        <Grid container direction="column" style={{paddingTop:"7px"}} >
                            <Grid item className={classes.tag} >
                                Open Ports
                            </Grid>
                            <Grid item style={{paddingTop:"8px"}}>
                            <Chip  size="small" className={classes.chip1} label="4000" variant="outlined"/>       
                            <Chip  size="small" className={classes.chip1} label="4000" variant="outlined" /> 
                            <Chip  size="small" className={classes.chip1} label="4000"  variant="outlined"/>   
                             
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>

        </div>

        <div className={styles.box6} style={{height:"100%",width:"100%"}}>
            <Grid item xs={12}>
                <Grid container justify="center">
                    <Grid item xs={11}>
                        <Grid container direction="column" style={{paddingTop:"13px"}} >
                            <Grid item className={classes.tag} >
                                Tags
                            </Grid>
                            <Grid item style={{paddingTop:"2px"}}>
                            <Chip  size="small" className={classes.chip} label="Tags Here" style={{background:"#03BD5B"}}/>       
                            <Chip  size="small" className={classes.chip} label="Tags Here" style={{background:"#55836B"}}/> 
                            <Chip  size="small" className={classes.chip} label="Tags Here" style={{background:"#75A08A"}}/>   
                            <Chip  size="small" className={classes.chip} label="Tags Here" style={{background:"#F5A623"}}/>   
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>


        </div>




        </div>


        <div className={styles.bright4}>
        </div>


        <div className={styles.boxlast}>

        <div className={styles.value} style={{background:"#03BD5B"}}>
        <p>Low</p>
        </div>
        <div className={styles.new}>
        <div className={styles.no}>
        15
        </div>
        <div className={styles.expo}>
        Exposure Score
        </div>
        </div>

        </div>

        </div>                  
        </Card>
    )
}