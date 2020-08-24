import React from 'react';
import Grid from '@material-ui/core/Grid';

import { makeStyles,withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Divider from "@material-ui/core/Divider";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import IconButton from '@material-ui/core/IconButton';
import Graph from "./Graph.jsx";
import Latest from "./Latest.jsx";
import Piechart from "./Piechart.jsx";
import Linechart from "./Linechart.jsx";
import BarGroup from "./BarGroup.jsx";
import Gauge from "./Gauge.jsx"
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import GetAppIcon from '@material-ui/icons/GetApp';
import Tooltip from '@material-ui/core/Tooltip';
import SpiderWeb from './SpiderWeb.jsx';
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
      height: 140,
      width: 100,
    },
    fontheader:{

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
export default function Dcontent (){
    const classes = useStyles();
    const handleClickOpen2=()=>{
        
    }
    return(

        <div>
            
            <main>
            
            <Grid container className={classes.root} spacing={3}>
                <Grid item xs={12} md={12}>
                    <Grid container justify="center">
                        <Grid item xs={11}>
                            <Grid container>
                                <Grid item xs={6}>
                                    <Typography className={classes.h}>
                                    Exposed Information
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Grid container justify="flex-end">
                                        <Grid item>
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
                <Grid item xs={12} md={12}>
                    <Grid container justify="center" spacing={4} >
                        <Grid item xs={12} md={5} >
                                    <Grid container justify="center"  >
                                        <Card className={classes.f1} >
                                            <CardHeader
                                                className={classes.HeaderFont}
                                            
                                                disableTypography="true" 

                                                
                                            title={<div style={{display:"flex"}}><Typography>Exposure Meter </Typography>
                                                <Grid item style={{marginLeft:"10px"}}>
                                                <LightTooltip title=" Companies are given their exposure score based on identified risk in the last 12 months divided by employee count. The score ranges from 0 to 300+. Companies without exposure in the past 12 months score 0. Companies that have the score 300+ represent the top 10% most exposed companies.">

                                                    <InfoOutlinedIcon />
                                                    </LightTooltip >
                                                </Grid>
                                        </div>}      
                                                />
                                            <Divider/>
                                            
                                                <Gauge/>
                                            
                                            
                                        </Card>
                                    </Grid>
                                
                        </Grid>
                        <Grid item  xs={12} md={6}>
                                    <Grid container justify="center" maxWidth="xl"  >
                                        <Card className={classes.f4}>
                                            <CardHeader
                                            className={classes.HeaderFont}
                                        
                                            disableTypography="true" 

                                            
                                            title={<div style={{display:"flex"}}><Typography>Finding vs Risks </Typography>
                                            <Grid item style={{marginLeft:"10px"}}>
                                                <InfoOutlinedIcon />
                                            </Grid>
                                    </div>}        
                                            />
                                            <Divider/>
                                            
                                                
                                            <SpiderWeb/>
                                        
                                        </Card>
                                    </Grid>
                                
                            
                        </Grid>
                    </Grid>
                </Grid>
                

                
                

                
                <Grid item  xs={12} md={12} >
                    <Grid container justify="center" maxWidth="xl" style={{background:"transparent"}} >
                        <Grid items xs={12} md={11}>
                            <Card className={classes.f5}>
                                <CardHeader
                                className={classes.HeaderFont}
                            
                                disableTypography="true" 
                                
                                title={<div style={{display:"flex"}}><Typography>Exposure Trend </Typography>
                                <Grid item style={{marginLeft:"10px"}}>
                                    <InfoOutlinedIcon />
                                </Grid>
                        </div>}      
                                />
                                <Divider/>
                                <Linechart/>
                                
                                    
                                
                            
                            </Card>
                        </Grid>
                        
                    </Grid>

                </Grid>
                <Grid item xs={12} md={12}>
                    <Grid container justify="center" style={{background:"transparent"}}>
                        <Grid items md={11}>
                        <Card className={classes.f2}>
                            <CardHeader
                                className={classes.HeaderFont}
                            
                                disableTypography="true" 
                                action={
                                    
                                    <IconButton color="primary" >
                                    <ChevronRightIcon style={{fontSize:"25px"}}/>
                                    </IconButton>
                                    
                                }
                                
                                title="Latest Alerts "      
                                />
                            <Divider/>
                            <CardContent>
                                <Latest/>
                            </CardContent>
                            
                        </Card>
                        </Grid>
                        
                    </Grid>

                </Grid>


            </Grid>
                
            </main>            
        </div>
    )
}