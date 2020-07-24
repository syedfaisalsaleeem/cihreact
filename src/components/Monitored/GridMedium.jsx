import React from 'react';
import {Card,Grid,Chip} from "@material-ui/core";
import styles from "./Grid.module.css";
import MGrid from "../../Links/images/MGrid.png";
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
      padding:theme.spacing(0.2),
      fontStyle: "normal",
       fontWeight: "normal",
        fontSize: "10px",
        color: "#FFFFFF",
        
    },
    chip1: {
        margin: theme.spacing(0.5),
        paddingLeft:theme.spacing(0.5),
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
export default function GridMedium(){
    const classes=useStyles()
    return(
        <Card style={{marginBottom:"20px",width:"95%"}}>

                                    
<div className={styles.main}>

<div className={styles.rowbox1}>

<div className={styles.logo}>
<img src={MGrid}  />
</div>

<div className={styles.application}>
<p>Application</p>
</div>
<div className={styles.mm}>
    <div className={styles.medium} >
    <p>Medium</p>
    </div>
    <div className={styles.last}>
        <div className={styles.num}>
        45
        </div>

        <div className={styles.expo}>
        Exposure Score
        </div>
    </div>

</div>

</div>


<div className={styles.rowbox2} >

<div className={styles.ipaddress}>
    <div className={styles.ip}>
        <p>IP Address</p>
    </div>
    <div className={styles.ipnum}>
        <p>000.00.00.00</p>
    </div>
</div>

<div className={styles.namediv}>
<div className={styles.name}>
<p>Name</p>
</div>
<div className={styles.namelink}>
<p>https://website.web.com</p>
</div>
</div>

<div className={styles.ostype}>
<div className={styles.type}>
<p>OS type</p>
</div>
<div className={styles.ostext}>
<p>Ubuntu Linux 18.04</p>
</div>
</div>

</div>


<div className={styles.rowbox3}>

<div className={styles.openport}>
<div className={styles.open}>
<p>Open Port</p>
</div>
<div className={styles.opennum}>
<div className={styles.n14000}>
<p>4000</p>
</div>
<div className={styles.n4000}>
    <p>4000</p>
    </div>
    <div className={styles.n4000}>
        <p>4000</p>
        </div>
</div>
</div>

<div  style={{width:"60%",height:"130px"}}>
        <Grid item xs={12}>
            <Grid container justify="center">
                    <Grid item xs={11}>
                        <Grid container direction="column"  style={{paddingTop:"24px",paddingLeft:"10px"}} >
                            <Grid item className={classes.tag} >
                                Tags
                            </Grid>
                            <Grid item style={{paddingTop:"4px"}}>
                            <Chip  size="small" className={classes.chip} label="Tags Here" style={{background:"#03BD5B"}}/>       
                            <Chip  size="small" className={classes.chip} label="Tags Here" style={{background:"#55836B"}}/> 
                            <Chip  size="small" className={classes.chip} label="Tags Here" style={{background:"#75A08A"}}/>   
                            <Chip  size="small" className={classes.chip}  label="Tags Here" style={{background:"#F5A623"}}/>   
                            </Grid>
                        </Grid>
                    </Grid>

            </Grid>
        </Grid>


</div>

</div>





    </div>
        </Card>
    )
}