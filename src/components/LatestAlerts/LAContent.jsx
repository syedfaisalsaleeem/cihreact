import React from 'react';
import {Container,Grid,Chip,Divider,Typography} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import LatestCard from "../Drawer/Dashboard/LatestCard";
import {Link} from "react-router-dom";
import styles from "../Notification/NContent.module.css"
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems:"center",
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
export default function SUContent (){
    const classes = useStyles();
    return(
        <div style={{background:"#F2F3F7",width:"98vw"}}>
            <Grid container   justify="center" spacing={2}>
                <Grid item xs={12} style={{marginTop:"70px"}}>

                </Grid>
                <Grid item xs={11}  className={classes.root}>
                <Link to="./ServiceUpdates">
                <Chip size="medium" label="Service Updates" variant="outlined" className={classes.chipborder} style={{padding:"10px",background:"#F2F3F7",fontSize:"16px",color:"black",border: "0.6px solid #000000"}}/>
                </Link>
                <Link to="./Notification">
                <Chip size="medium" label="Latest Alerts" variant="outlined" className={classes.chipborder} style={{padding:"10px",background:"#35374C",fontSize:"16px",color:"white",border: "0.6px solid #35374C"}}/>
                </Link>
                <Link to="./SupportUpdates">
               <Chip size="medium" label="Support Updates" variant="outlined" className={classes.chipborder} style={{padding:"10px",background:"#F2F3F7",fontSize:"16px",color:"black",border: "0.6px solid #000000"}} />
               </Link>
                </Grid>
            
            <Grid item xs={11} className={classes.root}>
                <Typography style={{fontStyle:"normal",fontWeight:"500",fontSize:"16px"}}>

                    Filters
                </Typography>
                
                
                <Chip size="medium" label="Low" variant="outlined" className={classes.chipborder} style={{width:"128px",height:"30px",fontWeight:"500",fontStyle:"Normal",background:"#66BB6A",fontSize:"12px",color:"white",border: "2px solid #8950FC"}}/>
                
                
                <Chip size="medium" label="Medium" variant="outlined" className={classes.chipborder} style={{width:"128px",height:"30px",fontWeight:"500",fontStyle:"Normal",background:"#F2F3F7",fontSize:"12px",color:"black",border: "0.5px solid #000000"}}/>
                
                
               <Chip size="medium" label="High" variant="outlined" className={classes.chipborder} style={{width:"128px",height:"30px",fontWeight:"500",fontStyle:"Normal",background:"#F2F3F7",fontSize:"12px",color:"black",border: "0.5px solid #000000"}} />
               
                
            </Grid>
                
                <Grid item xs={11} style={{margin:"17px",marginTop:"20px"}}>
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


                
            
            </Grid>
        </div>
    )
}