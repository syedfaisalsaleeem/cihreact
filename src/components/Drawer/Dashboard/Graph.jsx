import React,{Component} from 'react';
import {Bar,Line,Pie} from 'react-chartjs-2';
import {Grid,Button, Typography} from "@material-ui/core";
import styles1 from "./Graph.module.css";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
const bargraph={
    
        labels:['Monday',"Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        datasets: [
            {
                label: "A",
                backgroundColor:  '#0BB783',
                borderColor: '#0BB783',
                data: [60, 90, 120, 60, 90, 120, 60]
            },
            {
                label: "B",
                backgroundColor: '#F64E60',
                borderColor: '#F64E60',
                data: [40, 60, 80, 40, 60, 80, 40]
            },
             {
                 label: "C",
                 backgroundColor: '#8950FC',
                 borderColor: '#8950FC',
                 data: [20, 30, 40, 20, 30, 40, 20]
             }

          ]
    
}
 const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(4),
      height: theme.spacing(4),
      color:"white",
      backgroundColor:"#F64E60"
    },
    small1: {
        width: theme.spacing(4),
        height: theme.spacing(4),
        color:"white",
        backgroundColor:"#8950FC"
      },
    small2: {
        width: theme.spacing(4),
        height: theme.spacing(4),
        color:"white",
        backgroundColor:"#0BB783"
      },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }));
export default function Graph (){
    const classes=useStyles()
    return(

        <div >
            <Grid container direction="row" justify="flex-start" >
                <Grid items className={styles1.graphwidth}>
                <Bar
                    data={bargraph}
                    
                    height={280}
                    options={{
                        
                        maintainAspectRatio: false,
                        title:{
                            display:false,
                            
                        },
                        legend:{
                            display:false,
                            position:"right"
                        },
                        plugins:{
                            datalabels:{
                                color:"transparent"
                            }
                        },
                        scales: {
                            ticks: {
                                min:0,
                                max:100
                            },
                            xAxes: [{
                                stacked: true,
                                gridLines: {
                                    display:false
                                }
                            }],
                            yAxes: [{
                                stacked: true,
                                gridLines: {
                                display:true,
                                borderDash: [8, 4]
                                }  
                                
                            }]
                        }
                    }}
                    />
                </Grid>
                <Grid items className={styles1.buttongraph} >
                    
                        
                            <Button color="primary" variant="outlined" className={styles1.buttons}>
                                Last Week
                            </Button>
                            <Button color="primary" variant="contained" className={styles1.buttons}>
                                Last 24 Hours
                            </Button>
                        
                        
                    

                </Grid>
            </Grid>
        <Grid items xs={12} md={12} lg={12} style={{marginTop:"10px"}} >
            <Grid container direction="row">
            
                <Grid items style={{marginLeft:"1.2vw"}}>
                    <Grid container direction="row" alignItems="center">
                        <Grid items >
                            <Avatar className={classes.small} >
                                <FolderIcon style={{fontSize:"17px"}} />
                            </Avatar>
                        </Grid>
                        <Grid items >
                            <Grid container direction="column" style={{marginLeft:"10px"}} >
                                <Typography style={{fontSize:"14px"}}> 29</Typography>
                                <Typography style={{fontSize:"13px",color:"#B5B5C3",fontWeight:"bold"}}> Personal Information </Typography>

                            </Grid>
                        </Grid>

                    </Grid>
                    

                </Grid>
                <Grid items style={{marginLeft:"0.7vw"}} >
                    <Grid container direction="row" alignItems="center">
                        <Grid items>
                            <Avatar className={classes.small1}>
                                <FolderIcon style={{fontSize:"17px"}} />
                            </Avatar>
                        </Grid>
                        <Grid items >
                            <Grid container direction="column" style={{marginLeft:"10px"}} >
                                <Typography style={{fontSize:"14px"}}> 62</Typography>
                                <Typography style={{fontSize:"13px",color:"#B5B5C3",fontWeight:"bold"}}> Passwords Found </Typography>

                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
                <Grid items style={{marginLeft:"0.7vw"}}>
                    <Grid container direction="row" alignItems="center">
                        <Grid items>
                            <Avatar className={classes.small2}>
                                <FolderIcon style={{fontSize:"17px"}} />
                            </Avatar>
                        </Grid>
                        <Grid items >
                            <Grid container direction="column" style={{marginLeft:"10px"}} >
                                <Typography style={{fontSize:"14px"}}> 20</Typography>
                                <Typography style={{fontSize:"13px",color:"#B5B5C3",fontWeight:"bold"}}> Hacker Group Targets  </Typography>

                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>


        </Grid>
        </div>
    )
}
