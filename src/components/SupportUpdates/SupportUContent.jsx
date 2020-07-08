import React from 'react';
import {Container,Grid,Chip,Divider,Typography} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import LatestCardN from "../Notification/LatestCardN.jsx";
import LatestCardN1 from "../Notification/LatestCardN1.jsx";
import {Link} from "react-router-dom";
import styles from "../Notification/NContent.module.css";
import FaceIcon from '@material-ui/icons/Face';
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'flex-start',
      flexWrap: 'wrap',
      alignItems:"center",
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
export default function SupportUContent (){
    const classes = useStyles();
    return(
        <div style={{background:"#E5E5E5",height:"100vh",width:"98vw"}}>
            <Grid container   justify="center" spacing={2}>
                <Grid item xs={12} style={{marginTop:"70px"}}>

                </Grid>
                <Grid item xs={11}  className={classes.root}>
                <Link to="./ServiceUpdates">
                <Chip size="medium" label="Service Updates" variant="outlined" className={classes.chipborder} style={{padding:"10px",background:"#E5E5E5",fontSize:"16px",color:"black",border: "0.6px solid #000000"}}/>
                </Link>
                <Link to="./LatestAlerts">
                <Chip size="medium" label="Latest Alerts" variant="outlined" className={classes.chipborder} style={{padding:"10px",background:"#E5E5E5",fontSize:"16px",color:"black",border: "0.6px solid #000000"}}/>
                </Link>
                <Link to="./Notification">
               <Chip size="medium" label="Support Updates" variant="outlined" className={classes.chipborder} style={{padding:"10px",background:"#35374C",fontSize:"16px",color:"white",border: "0.6px solid #35374C"}} />
               </Link>
                </Grid>
                <Grid item xs={11} className={classes.root}>
                <Typography style={{fontStyle:"normal",fontWeight:"500",fontSize:"16px"}}>

                    Filters
                </Typography>
                
                
               <Chip
                    variant="outlined"
                    size="medium"
                    icon={<FaceIcon />}
                    label="Announcment"
                    style={{width: "145px",height:"30px",background:"#E5E5E5",fontSize:"12px",color:"black",fontWeight:"500",fontStyle:"Normal",border: "0.6px solid #000000"}}
                    
                />
                <Chip
                    variant="outlined"
                    size="medium"
                    icon={<FaceIcon />}
                    label="Updates"
                    style={{width: "121px",height:"30px",background:"#E5E5E5",fontSize:"12px",color:"black",fontWeight:"500",fontStyle:"Normal",border: "2px solid #8950FC"}}  
                    
                />
                <Chip
                    variant="outlined"
                    size="medium"
                    icon={<FaceIcon />}
                    label="Alerts"
                    style={{width: "105px",height:"30px",background:"#E5E5E5",fontSize:"12px",color:"black",fontWeight:"500",fontStyle:"Normal",border: "0.6px solid #000000"}}  
                    
                />
                
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
            </Grid>
        </div>
    )
}