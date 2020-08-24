import React from 'react';
import {Grid, Typography,IconButton,Card,CardHeader,Divider} from "@material-ui/core";
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import GetAppIcon from '@material-ui/icons/GetApp';
import BarGroup from "./BarGroup.jsx";
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import Piechart from "./Piechart.jsx";
import LatestCard from './LatestCard.jsx';
import Tooltip from '@material-ui/core/Tooltip';

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
export default function SIContent(){
    const classes = useStyles();
    const handleClickOpen2=()=>{
        
    }
    return(
        <div>
            <Grid item xs={12} style={{marginTop:"40px"}}>
                <Grid container justify="center">
                    <Grid item xs={10}>
                        <Grid container>
                            <Grid item xs={6}>
                                <Grid container spacing={2}>
                                    <Grid item>
                                        <Typography variant="h5">
                                            Sensitive Information
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                    <LightTooltip title="Discover your leaked or stolen documents, such as business plans, internal memos or internal emails. ">

                                    <InfoOutlinedIcon />
                                    </LightTooltip >
 
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={6}>
                                <Grid container justify="flex-end" >
                                    <Grid item xs={6}>
                                    <Grid container justify="flex-end">
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
                <Grid container justify="center" style={{marginTop:"20px"}}>
                    <Grid item xs={12} md={12} lg={10}>
                        <Grid container spacing={2} justify="space-between">
                            <Grid item xs={6} lg={7}>
                            <Card className={classes.f5}>
                                <CardHeader
                                className={classes.HeaderFont}
                            
                                disableTypography="true" 
                                action={
                                    
                                    <IconButton color="primary"  >
                                        
                                        </IconButton>
                                    
                                }
                                
                                title={<div style={{display:"flex"}}><Typography>Sensitive Information Trend </Typography>
                                <Grid item style={{marginLeft:"10px"}}>
                                <LightTooltip title="This bar chart depicts the number of alerts found per month over the past two years.">

<InfoOutlinedIcon />
</LightTooltip >
                                </Grid>
                        </div>}      
                                />
                                <Divider/>
                                <BarGroup/>
                                
                                    
                                
                            
                            </Card>
                                
                            </Grid>
                            <Grid item xs={6} lg={5}>
                            <Card className={classes.f5}>
                                <CardHeader
                                className={classes.HeaderFont}
                            
                                disableTypography="true" 
                                action={
                                    
                                    <IconButton color="primary"  >
                                        
                                        </IconButton>
                                    
                                }
                                
                                title={<div style={{display:"flex"}}><Typography>Location</Typography>
                                <Grid item style={{marginLeft:"10px"}}>
                                <LightTooltip title="This pie chart depicts the percentage of alerts found on the dark web, deep web and data breaches. Adjust the chart by selecting one or more sources.">

<InfoOutlinedIcon />
</LightTooltip >
                                </Grid>
                        </div>}      
                                />
                                <Divider/>
                                <Piechart/>
                                
                                    
                                
                            
                            </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container justify="center" style={{marginTop:"40px"}}>
                    <Grid item xs={12} md={12} lg={11}>
                        <Grid container spacing={2}>
                            
                            <LatestCard/>
                            <LatestCard/>
                            <LatestCard/>
                            <LatestCard/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </div>
    )
}