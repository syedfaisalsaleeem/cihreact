import React from 'react';
import Grid from '@material-ui/core/Grid';
import Head from "next/head";
import { makeStyles } from '@material-ui/core/styles';
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
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      
    },
    HeaderFont:{
        fontFamily: 'Roboto', 
        
          fontSize:"21px",
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
       width:"95%"
    },
    f2:{
        width:"97.4%"
     },
     f3:{
        width:"95%"
     },
    control: {
      padding: theme.spacing(2),
    },
  }));
export default function (){
    const classes = useStyles();
    const handleClickOpen2=()=>{
        
    }
    return(

        <div>
            <Head>
            </Head>
            <main>
            
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={10} md={12}>
                <Typography variant="h4" gutterBottom>
                    Security Overview
                </Typography>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Grid container justify="flex-start"  >
                        <Grid item xs={10} md={12} >

                            <Grid container  justify="space-evenly" spacing={4}>

                            
                                <Grid item xs={12} sm={10}  lg={5}  >
                                
                                    <Grid container justify="flex-start"  >
                                        <Card className={classes.f1} >
                                            <CardHeader
                                                className={classes.HeaderFont}
                                            
                                                disableTypography="true" 
                                                action={
                                                    
                                                    <IconButton color="primary" >
                                                    <ChevronRightIcon style={{fontSize:"25px"}}/>
                                                    </IconButton>
                                                    
                                                }
                                                
                                                title="Cyber Exposure Score "      
                                                />
                                            <Divider/>
                                            
                                                <Gauge/>
                                            
                                            
                                        </Card>
                                    </Grid>
                                </Grid>
                                
                                <Grid item  xs={12} sm={10}  lg={7}>
                                    <Grid container justify="flex-start" maxWidth="xl"  >
                                        <Card className={classes.f1}>
                                            <CardHeader
                                            className={classes.HeaderFont}
                                        
                                            disableTypography="true" 
                                            action={
                                                
                                                <IconButton color="primary"  >
                                                    <ChevronRightIcon style={{fontSize:"25px"}} />
                                                    </IconButton>
                                                
                                            }
                                            
                                            title="Exposed Information"      
                                            />
                                            <Divider/>
                                            
                                                <Graph/>
                                            
                                        
                                        </Card>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                
                <Grid item xs={10} md={12}>
                    <Grid container justify="flex-start" style={{background:"transparent"}}>
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
                
                <Grid item xs={10} md={12}>
                <Divider style={{marginTop:"20px",marginBottom:"20px"}}/>
                <Typography variant="h4" gutterBottom>
                    Security Overview
                </Typography>
                </Grid>

                <Grid item xs={10} md={10} lg={6} >
                    <Grid container justify="flex-start"  style={{background:"transparent"}}>
                        <Card className={classes.f1}>
                            <CardHeader
                                className={classes.HeaderFont}
                            
                                disableTypography="true" 
                                action={
                                    
                                    <IconButton color="primary" >
                                    <ChevronRightIcon style={{fontSize:"25px"}}/>
                                    </IconButton>
                                    
                                }
                                
                                title="By Category"      
                                />
                            <Divider/>
                            
                            <Piechart/>
                            
                            
                        </Card>
                    </Grid>
                </Grid>
                <Grid item  xs={10} md={10} lg={6}>
                    <Grid container justify="flex-start" maxWidth="xl" style={{background:"transparent"}} >
                        <Card className={classes.f3}>
                            <CardHeader
                            className={classes.HeaderFont}
                           
                            disableTypography="true" 
                            action={
                                
                                <IconButton color="primary"  >
                                    <ChevronRightIcon style={{fontSize:"25px"}} />
                                    </IconButton>
                                
                            }
                            
                            title="By Risk"      
                            />
                            <Divider/>
                         
                                <Linechart/>
                           
                          
                        </Card>
                    </Grid>

                </Grid>
                <Grid item  xs={10} md={12} >
                    <Grid container justify="flex-start" maxWidth="xl" style={{background:"transparent"}} >
                        <Card className={classes.f2}>
                            <CardHeader
                            className={classes.HeaderFont}
                           
                            disableTypography="true" 
                            action={
                                
                                <IconButton color="primary"  >
                                    <ChevronRightIcon style={{fontSize:"25px"}} />
                                    </IconButton>
                                
                            }
                            
                            title="By Risk"      
                            />
                            <Divider/>
                            
                                <BarGroup/>
                            
                          
                        </Card>
                    </Grid>

                </Grid>


            </Grid>
                
            </main>            
        </div>
    )
}