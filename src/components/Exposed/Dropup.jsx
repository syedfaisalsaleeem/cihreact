
import ContactGs1 from "./ContactGs1.jsx";
import list from "../../Links/images/list.png";
import grid from "../../Links/images/grid.png";
import filter from "../../Links/images/filter.png";
import LatestCard from "./LatestCard.jsx";
import LatestCardH from "./LatestCardhigh.jsx";
import CardGrid from "./CardGrid.jsx";
import React,{useEffect, useState} from 'react';
import {Grid,Typography,Card,Paper,CardHeader,Divider,Button, IconButton,Chip} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import DatePicker from "react-datepicker";
import Time from "./Time.jsx"; 
import "react-datepicker/dist/react-datepicker.css";
import Menu from '@material-ui/core/Menu';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      
    },
    formControl: {
        
        minWidth: 200,
        
        background:"white",

        
        '& fieldset': {
          border: "0.3px solid #000000",
        }
        
      },
      formControl1: {
        
        minWidth: 150,
        
        background:"white",
        
        '& fieldset': {
          border: "0.3px solid #000000",
        }
        
      },
    button:{
        display:"flex",alignItems:"center",width:"100%",height:"90%",border: "0.6px solid #000000",borderRadius: "2px",fontStyle: "normal",
        fontSize:"10px",                                            
                                                    
        minWidth:"100px",
        color: "rgba(0, 0, 0, 0.6)"
    },
    h:{
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "27.9411px"
    },
    HeaderFont:{
        fontFamily: 'Roboto',
        fontSize: "16px" ,
          fontWeight:"500",
          fontStyle:"normal",
          color: "#B5B5C3"
      },
      progressfont:{
        
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "14px",

        letterSpacing: "-0.0864285px",
        
        color: "#506883"
      },
      paper: {
          
         
        background: "#FFFFFF",
        boxShadow: "0px 0px 35px rgba(181, 181, 195, 0.15)",
        borderRadius: "6px", 
        padding: theme.spacing(2),
        height: "auto",
        
        width:"12vw",
        minWidth:"190px",
        display:"flex",flexDirection:"column",alignItems:"center"

      },
    but:{
        display:"flex",
        
        width: "159px",
        height: "34px",
        marginTop:"14px",
        background: "#464E5F",
        border: "1px solid #000000",
        boxSizing: "border-box",
        borderRadius: "4px"

    },
    dot:{
        marginTop:"10px",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        height: "60px",
        width: "60px",
        background:"black",
        borderRadius: "50%",
        
    },
    fontin:{
        paddingTop:'20px',
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "16px",
        lineHeight: "18px",
        /* identical to box height, or 112% */
        
        
        color: "#B5B5C3"
    },
    f1:{
       width:"100%",
       boxShadow: "0px 0px 19.9579px rgba(56, 71, 109, 0.03)",
        borderRadius: "11.9747px",
        
        height: "422.11px"
    },
    f4:{
        width:"28vw",
        minWidth:"300px",
        boxShadow: "0px 0px 19.9579px rgba(56, 71, 109, 0.03)",
        borderRadius: "11.9747px",
        height: "380px"
        
    },
    f5:{
        width:"1093px",
        boxShadow: "0px 0px 35px rgba(181, 181, 195, 0.15)",
        borderRadius: "6px",
        height:"140px"
    },
    f2:{
        background: "#FFFFFF",
        boxShadow: "0px 0px 35px rgba(181, 181, 195, 0.15)",
        borderRadius: "6px", 
        paddingBottom:"40px"
        
        
     },
     f3:{
        width:"33.3vw",
        minWidth:"400px",
        boxShadow: "0px 0px 19.9579px rgba(56, 71, 109, 0.03)",
        borderRadius: "11.9747px",
        height: "380px"
     },
    control: {
      padding: theme.spacing(2),
    },
    chip: {
        padding:theme.spacing(0.5),
        fontStyle: "normal",
         fontWeight: "normal",
          fontSize: "12px",
          background:"white",
          border: "1px solid #000000"
      },
  }));

  const initialState = {count: 0};
export default function Dropup(props){
    const classes=useStyles();
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open1 = Boolean(anchorEl);
    const [view,setview]=useState(true);
    const [dropc,setdrop]=useState(true);
    const handleview=()=>{
            setview(true)
    }
    const handleview1=()=>{
        setview(false)
}
    const handledrop=()=>{
            setdrop(true)
    }
    const handledrop1=()=>{
        setdrop(false)
    }
    const [age1, setAge1] = React.useState('');
    const [open,handleopen]=React.useState(false)
    const funcopen=()=>{
      handleopen(true)
    }
    const funcclose=()=>{
      handleopen(false)
    }
    const handleChange = (event) => {
        setAge1(event.target.value);
    };
    const [startDate,setDate]=React.useState( new Date())
    const handleChange3 = date => {
        setDate(date)

      };
      const [startDate1,setDate1]=React.useState( new Date())
      const handleChange4 = date => {
          setDate1(date)
  
        };
     return(
        <div style={{marginBottom:"30px"}}>
            <Grid item xs={12}>
                <Grid container justify="center">
                    <Grid item xs={11} lg={9} >
                        <Card className={classes.f2}>
                            <CardHeader
                                className={classes.HeaderFont}
                            
                                disableTypography="true" 
                                
                                
                                title="Filter Results "      
                                />
                                <Divider />
                                <Grid item xs={12} style={{marginTop:"26px"}}>
                                    <Grid container justify="center">
                                        <Grid item xs={11}>
                                            <Grid container spacing={0}>
                                                <Grid item xs={8}>
                                                    <ContactGs1/>
                                                </Grid>
                                                <Grid item xs={2} >
                                                    <Grid container style={{width:"100%"}} spacing={1} >
                                                        <Grid item>
                                                            <Button
                                                            variant="outlined"
                                                            
                                                            className={classes.button}
                                                            startIcon={<img src={grid} />}
                                                            onClick={handleview1}
                                                            style={{border:view?"0.6px solid #000000":"1px solid #8950FC"}}
                                                            >
                                                            Grid View
                                                        </Button>
                                                        </Grid>
                                                        <Grid item>

                                                            <Button
                                                            variant="outlined"
                                                            
                                                            className={classes.button}
                                                            startIcon={<img src={list} />}
                                                            onClick={handleview}
                                                            
                                                            style={{border:view?"1px solid #8950FC":"0.6px solid #000000"}}
                                                        >
                                                            List View
                                                        </Button>
                                                        </Grid>
                                                    </Grid>

                                                    
                                                </Grid>
                                                <Grid item >


                                                </Grid> 
                                                <Grid item xs={1}>
                                                    <Button style={{width:"60%",height:"100%",minWidth:"45px",borderRadius: "2px",border:props.filtervalue?"0.6px solid #000000":"0.6px solid #8950FC"}} variant="outlined" onClick={props.filter}>
                                                    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"60%",height:"100%",fontStyle: "normal",
                                                    fontWeight: "normal",
                                                    fontSize: "13px",
                                                    minWidth:"45px",
                                                    color: "rgba(0, 0, 0, 0.6)"}}>
                                                        <img src={filter}>
                                                        </img>
                                                        <div>
                                                            Filter
                                                        </div>
                                                            
                                                    </div>
                                                    </Button>
                                                </Grid> 
                                                <Grid item xs={1}>
                                                    <Button onClick={handleMenu} style={{width:"50%",height:"100%",minWidth:"45px",borderRadius: "2px",border:props.filtervalue?"0.6px solid #000000":"0.6px solid #8950FC"}} variant="outlined" >
                                                    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"60%",height:"100%",fontStyle: "normal",
                                                    fontWeight: "normal",
                                                    fontSize: "13px",
                                                    minWidth:"45px",
                                                    color: "rgba(0, 0, 0, 0.6)"}}>
                                                        <img src={filter}>
                                                        </img>
                                                        <div>
                                                            Sort 
                                                        </div>
                                                            
                                                    </div>
                                                    </Button>
                                                    <Menu
                                                        id="simple-menu"
                                                        getContentAnchorEl={null}
                                                        anchorOrigin={{
                                                        vertical: "bottom",
                                                        horizontal: "left"
                                                        }}
                                                        transformOrigin={{
                                                        vertical: "top",
                                                        horizontal: "left"
                                                        }}
                                                        keepMounted
                                                        anchorEl={anchorEl}
                                                        open={Boolean(anchorEl)}
                                                        onClose={handleClose}
                                                    >
                                                        <MenuItem onClick={handleClose}>Newest to oldest</MenuItem>
                                                        
                                                        <MenuItem >Oldest to newest</MenuItem>
                                                        <MenuItem >Severity: high to low</MenuItem>
                                                        <MenuItem >Severity: low to high</MenuItem>
                                                        <MenuItem >Keywords: most to least alerts</MenuItem>
                                                        <MenuItem >Keywords: least to most alerts</MenuItem>
                                                        <MenuItem >Keywords: A to Z</MenuItem>
                                                        <MenuItem >Keywords: Z to A</MenuItem>
                                                    </Menu>
                                                </Grid> 
                                            </Grid>
                                        </Grid>

                                    </Grid>
                                </Grid>
                                {props.filtervalue?
                                    <div>

                                    </div>:
                                    <div>
                                    <Grid item xs={12} style={{marginTop:"26px"}}>
                                    <Grid container justify="center">
                                        <Grid item xs={11}>
                                            <div style={{fontStyle: "normal",fontWeight: "500",fontSize: "15px",color: "#000000"}}>
                                                Severity Level 
                                            </div>

                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} style={{marginTop:"10px"}}>
                                    <Grid container justify="center">
                                        <Grid item xs={11}>
                                            <div style={{display:"flex",width:"50%",height:"23px"}}>
                                                <Button variant="outlined" style={{border: "0.6px solid #8950FC",borderRadius: "2px",width:"81px",height:"23px",textTransform:"capitalize"}}>
                                                <div style={{display:"flex",alignItems:"center",justifyContent:"center",
                                                            fontStyle: "normal",fontWeight: "normal",fontSize: "13px",color: "rgba(0, 0, 0, 0.8)"}}>
                                                    Low
                                                </div>
                                                </Button>
                                                <Button variant="outlined" style={{border: "0.6px solid #000000",borderRadius: "2px",width:"81px",height:"23px",textTransform:"capitalize",marginLeft:"16px"}}>
                                                <div style={{display:"flex",alignItems:"center",justifyContent:"center",
                                                fontStyle: "normal",fontWeight: "normal",fontSize: "13px",color: "rgba(0, 0, 0, 0.8)"}}>
                                                    Medium
                                                </div>
                                                </Button>
                                                <Button variant="outlined" style={{border: "0.6px solid #000000",borderRadius: "2px",width:"81px",height:"23px",textTransform:"capitalize",marginLeft:"16px"}}>
                                                <div style={{display:"flex",alignItems:"center",justifyContent:"center",
                                            fontStyle: "normal",fontWeight: "normal",fontSize: "13px",color: "rgba(0, 0, 0, 0.8)"}}>
                                                    High
                                                </div>
                                                </Button>
                                            </div>
                                            

                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} style={{marginTop:"26px"}}>
                                    <Grid container justify="center">
                                        <Grid item xs={11}>
                                            <div style={{fontStyle: "normal",fontWeight: "500",fontSize: "15px",color: "#000000"}}>
                                                Source
                                            </div>

                                        </Grid>
                                    </Grid>
                                </Grid>
                                
                                <Grid item xs={12} style={{marginTop:"20px"}}>
                                    <Grid container justify="center">
                                        <Grid item xs={11}>
                                        <Grid container spacing={2}>
                                            <Grid item>
                                                <Chip  size="small" className={classes.chip}   label="Deep Web" variant="outlined"/> 
      
                                            </Grid>
                                            <Grid item>
                                                <Chip size="small" className={classes.chip} label="Dark Web" variant="outlined"/>       
                                         
                                            </Grid>
                                            <Grid item>
                                                <Chip  size="small" className={classes.chip} label="Data Breach" variant="outlined"/>   
                                            </Grid>
                                        </Grid>

                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} style={{marginTop:"26px"}}>
                                    <Grid container justify="center">
                                        <Grid item xs={11}>
                                            <div style={{fontStyle: "normal",fontWeight: "500",fontSize: "15px",color: "#000000"}}>
                                                Exposure Category
                                            </div>

                                        </Grid>
                                    </Grid>
                                </Grid>


                                <Grid item xs={12} style={{marginTop:"20px"}}>
                                    <Grid container justify="center">
                                        <Grid item xs={11}>
                                            <Grid container >
                                                <Grid item xs={10}>
                                                <Grid container spacing={1}>
                                                
                                                <Grid item>
                                                    <Grid container alignItems="center">
                                                        <Grid item>
                                                            <Chip  size="small" className={classes.chip} label=" Sensitive Information" variant="outlined"/> 
                                                        </Grid>
                                                        <Grid item>
                                                            <IconButton>
                                                                <ArrowRightIcon/>
                                                            </IconButton>
                                                        </Grid>
                                                    </Grid>

                                                      
                                        
                                                    
                                                        
                                                    
                                                </Grid>
                                                <Grid item>
                                                    <Grid container alignItems="center">
                                                        <Grid item>
                                                            <Chip  size="small" className={classes.chip} label=" Discussions" variant="outlined"/> 
                                                        </Grid>
                                                        <Grid item>
                                                            <IconButton>
                                                                <ArrowRightIcon/>
                                                            </IconButton>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item>
                                                    <Grid container alignItems="center">
                                                        <Grid item>
                                                            <Chip  size="small" className={classes.chip} label=" Black Markets" variant="outlined"/> 
                                                        </Grid>
                                                        <Grid item>
                                                            <IconButton>
                                                                <ArrowRightIcon/>
                                                            </IconButton>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item>
                                                    <Grid container alignItems="center">
                                                        <Grid item>
                                                            <Chip  size="small" className={classes.chip} label=" Financial" variant="outlined"/> 
                                                        </Grid>
                                                        <Grid item>
                                                            <IconButton>
                                                                <ArrowRightIcon/>
                                                            </IconButton>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item>
                                                    <Grid container alignItems="center">
                                                        <Grid item>
                                                            <Chip  size="small" className={classes.chip} label="Exposed Credentials" variant="outlined"/> 
                                                        </Grid>
                                                        <Grid item>
                                                            <IconButton>
                                                                <ArrowRightIcon/>
                                                            </IconButton>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item>
                                                    <Grid container alignItems="center">
                                                        <Grid item>
                                                            <Chip  size="small" className={classes.chip} label="Personal Information" variant="outlined"/> 
                                                        </Grid>
                                                        <Grid item>
                                                            <IconButton>
                                                                <ArrowRightIcon/>
                                                            </IconButton>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item>
                                                    <Grid container alignItems="center">
                                                        <Grid item>
                                                            <Chip  size="small" className={classes.chip} label="Hacker Group Targeting" variant="outlined"/> 
                                                        </Grid>
                                                        <Grid item>
                                                            <IconButton>
                                                                <ArrowRightIcon/>
                                                            </IconButton>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item>
                                                    <Grid container alignItems="center">
                                                        <Grid item>
                                                            <Chip  size="small" className={classes.chip} label=" Attacks & Compromises" variant="outlined"/> 
                                                        </Grid>
                                                        <Grid item>
                                                            <IconButton>
                                                                <ArrowRightIcon/>
                                                            </IconButton>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item>
                                                    <Grid container alignItems="center">
                                                        <Grid item>
                                                            <Chip  size="small" className={classes.chip} label=" Under Analysis" variant="outlined"/> 
                                                        </Grid>
                                                        <Grid item>
                                                            <IconButton>
                                                                <ArrowRightIcon/>
                                                            </IconButton>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>


                                                </Grid>
                                                </Grid>
                                            </Grid>

                                        </Grid>
                                    </Grid>
                                    </Grid>
                                    <Grid item xs={12} style={{marginTop:"0px"}}>
                                        <Grid container justify="center">
                                            <Grid item xs={11}>
                                                <Grid container alignItems="center">
                                                    <Grid item>
                                                        <div style={{fontStyle: "normal",fontWeight: "500",fontSize: "15px",color: "#000000"}}>
                                                        Language
                                                        </div>
                                                    </Grid>
                                                    <Grid item>

                                                            <IconButton>
                                                                <ArrowRightIcon/>
                                                            </IconButton>
                                                    </Grid>
                                                </Grid>

                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} style={{marginTop:"0px"}}>
                                        <Grid container justify="center">
                                            <Grid item xs={11}>
                                                <Grid container alignItems="center">
                                                    <Grid item>
                                                        <div style={{fontStyle: "normal",fontWeight: "500",fontSize: "15px",color: "#000000"}}>
                                                        Social Security Number
                                                        </div>
                                                    </Grid>
                                                    <Grid item>

                                                            <IconButton>
                                                                <ArrowRightIcon/>
                                                            </IconButton>
                                                    </Grid>
                                                </Grid>

                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} style={{marginTop:"0px"}}>
                                        <Grid container justify="center">
                                            <Grid item xs={11}>
                                                <Grid container alignItems="center">
                                                    <Grid item>
                                                        <div style={{fontStyle: "normal",fontWeight: "500",fontSize: "15px",color: "#000000"}}>
                                                        Other
                                                        </div>
                                                    </Grid>
                                                    <Grid item>

                                                            <IconButton>
                                                                <ArrowRightIcon/>
                                                            </IconButton>
                                                    </Grid>
                                                </Grid>

                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid>
                                        <Time/>
                                    </Grid>
                                    <Grid item xs={12} style={{marginTop:"20px"}}>
                                        <Grid container justify="center">
                                            <Grid item xs={11}>
                                                <Grid container alignItems="center">
                                                    <Grid item>
                                                        <div style={{fontStyle: "normal",fontWeight: "500",fontSize: "15px",color: "#000000"}}>
                                                        Alert group
                                                        </div>
                                                    </Grid>
                                                </Grid>

                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} style={{marginTop:"20px"}}>
                                        <Grid container justify="center">
                                            <Grid item xs={11}>
                                                <Chip  size="small" className={classes.chip} label="Highlighted Alerts" variant="outlined"/> 
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    </div>


                                }
                                
                                
                        
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
            
            {view ?
            <Grid item xs={12} style={{marginTop:"35px"}}>
                <Grid container justify="center" >
                    <Grid item xs={11} lg={11}>
                        <Grid container justify="space-evenly" spacing={2}>
                            <Grid item>
                                <LatestCard/>
                            </Grid>
                            <Grid item>
                                <LatestCardH/>
                            </Grid>
                            <Grid item>
                                <LatestCard/>
                            </Grid>
                        </Grid>
                        
                        
                        
                        
                        
                    
                    </Grid>
                    
                </Grid>
            </Grid>:
            <Grid item xs={12} style={{marginTop:"35px"}}>
                <Grid container justify="center">
                    <Grid item xs={11} lg={11}>
                        
                           <Grid container justify="space-around">
                               
                               <CardGrid/>
                                <CardGrid/>
                                <CardGrid/>
                                <CardGrid/>
                               

                           </Grid>

                            
                            {/* <Grid item >
                                <CardGrid/>
                            </Grid>
                            <Grid item >
                                <CardGrid/>
                            </Grid>
                            <Grid item >
                                <CardGrid/>
                            </Grid>
                            <Grid item >
                                <CardGrid/>
                            </Grid> */}
                            
                       
                        

                    </Grid>
                </Grid>
            </Grid>
            }
        </div>
     )
 }