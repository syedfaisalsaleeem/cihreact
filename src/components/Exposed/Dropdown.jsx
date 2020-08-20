
import ContactGs1 from "./ContactGs1.jsx";
import list from "../../Links/images/list.png";
import grid from "../../Links/images/grid.png";
import filter from "../../Links/images/filter.png";
import LatestCard from "./LatestCard.jsx";
import LatestCardH from "./LatestCardhigh.jsx";
import CardGrid from "./CardGrid.jsx";
import React,{useEffect, useState} from 'react';
import {Grid,Typography,Card,Paper,CardHeader,Divider,Button, IconButton} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import drop1 from "../../Links/images/drop1.png";
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      
    },
    button:{
        display:"flex",alignItems:"center",width:"100%",height:"44%",border: "0.6px solid #000000",borderRadius: "2px",fontStyle: "normal",
        fontSize:"10px",                                            
                                                    
        minWidth:"100px",
        color: "rgba(0, 0, 0, 0.6)"
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
        paddingBottom:"20px",
        height: "auto",
        
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
  }));
export default function Dropdown(props){
    const classes=useStyles();
    const [view,setview]=useState(true);
    const [dropc,setdrop]=useState(true);
    const handleview=()=>{
            setview(true)
    }
    const handleview1=()=>{
        setview(false)
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

     return(
         
        <div style={{width:"100%",marginTop:"-30px",marginBottom:"30px",padding:"-15px",height:"100vh"}}>
            
            <Grid container justify="flex-start">
            <Grid item xs={12} lg={12} >
                <Grid container justify="center">
                    <Grid item xs={11} lg={11} >
                        <Card className={classes.f2}>

                                
                                <Grid item xs={12} style={{marginTop:"26px"}}>
                                    <Grid container justify="center">
                                        <Grid item xs={12} >
                                            <Grid container justify="center" spacing={2} >
                                                <Grid item xs={7}>
                                                    <ContactGs1/>
                                                </Grid>
                                                <Grid item  >
                                                    <div style={{height:"100%",width:"60%",display:'flex',flexDirection:"column",justifyContent:"space-between"}}>
                                                    
                                                    {/* <div item style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"46%",border: "0.6px solid #000000",borderRadius: "2px",fontStyle: "normal",
                                                    fontWeight: "normal",
                                                    fontSize: "13px",
                                                    minWidth:"80px",
                                                    color: "rgba(0, 0, 0, 0.6)"}}>
                                                        <div>
                                                        <img src={grid}>
                                                        </img>
                                                        </div>
                                                        
                                                        <div style={{paddingBottom:"2px",paddingLeft:"5px"}}>
                                                            Grid View
                                                        </div>
                                                                    
                                                    </div> */}
                                                    <Button
                                                        variant="outlined"
                                                        
                                                        className={classes.button}
                                                        startIcon={<img src={grid} />}
                                                        onClick={handleview1}
                                                        style={{border:view?"0.6px solid #000000":"1px solid #8950FC"}}
                                                    >
                                                        Grid View
                                                    </Button>
                                                    <Button
                                                        variant="outlined"
                                                        
                                                        className={classes.button}
                                                        startIcon={<img src={list} />}
                                                        onClick={handleview}
                                                        style={{border:view?"1px solid #8950FC":"0.6px solid #000000"}}
                                                    >
                                                        List View
                                                    </Button>
                                                    {/* <Button item style={{display:"flex",alignItems:"center",width:"100%",height:"46%",border: "0.6px solid #000000",borderRadius: "2px",fontStyle: "normal",
                                                    
                                                    
                                                    minWidth:"80px",
                                                    color: "rgba(0, 0, 0, 0.6)"}}>
                                                        <div style={{paddingTop:"2px",paddingRight:""}}>
                                                        <img src={list}>
                                                        </img>
                                                        </div>
                                                       
                                                        <div style={{paddingBottom:"0px",paddingLeft:"0px",fontStyle:"normal",fontWeight: "normal",
                                                    fontSize: "10px",}}>
                                                            List View
                                                        </div>
                                                                  
                                                    </Button> */}
                                                    </div>
                                                    
                                                </Grid>
                                                <Grid item xs={1}>
                                                    <Button style={{width:"46%",height:"100%",minWidth:"45px",borderRadius: "2px",border:props.filtervalue?"0.6px solid #000000":"0.6px solid #8950FC"}} variant="outlined" onClick={props.filter}>
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
                                                {props.filtervalue?
                                                <div>

                                                </div>
                                                :
                                    <div>
                                    <Grid item xs={12} style={{marginTop:"26px"}}>
                                    <Grid container justify="center">
                                        <Grid item xs={10}>
                                            <div style={{fontStyle: "normal",fontWeight: "500",fontSize: "15px",color: "#000000"}}>
                                                Severity Level 
                                            </div>

                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} style={{marginTop:"10px"}}>
                                    <Grid container justify="center">
                                        <Grid item xs={10}>
                                            <div style={{display:"flex",width:"50%",height:"23px"}}>
                                                <div style={{display:"flex",alignItems:"center",justifyContent:"center",border: "0.6px solid #8950FC",borderRadius: "2px",width:"81px",height:"23px",
                                                            fontStyle: "normal",fontWeight: "normal",fontSize: "13px",color: "rgba(0, 0, 0, 0.8)"}}>
                                                    Low
                                                </div>
                                                <div style={{display:"flex",alignItems:"center",justifyContent:"center",border: "0.6px solid #000000",borderRadius: "2px",width:"81px",height:"23px",
                                                marginLeft:"16px",fontStyle: "normal",fontWeight: "normal",fontSize: "13px",color: "rgba(0, 0, 0, 0.8)"}}>
                                                    Medium
                                                </div>
                                                <div style={{display:"flex",alignItems:"center",justifyContent:"center",border: "0.6px solid #000000",borderRadius: "2px",width:"81px",height:"23px",marginLeft:"16px",
                                            fontStyle: "normal",fontWeight: "normal",fontSize: "13px",color: "rgba(0, 0, 0, 0.8)"}}>
                                                    High
                                                </div>
                                            </div>
                                            

                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid item xs={12} style={{marginTop:"26px"}}>
                                    <Grid container justify="center">
                                        <Grid item xs={10}>
                                            <div style={{fontStyle: "normal",fontWeight: "500",fontSize: "15px",color: "#000000"}}>
                                                Severity Type 
                                            </div>

                                        </Grid>
                                    </Grid>
                                </Grid>


                                <Grid item xs={12} style={{marginTop:"20px"}}>
                                    <Grid container justify="center">
                                        <Grid item xs={10}>
                                            <Grid container >
                                                <Grid item xs={10}>
                                                <Grid container spacing={2}>
                                                
                                                <Grid item>
                                                    <div style={{display:"flex",alignItems:"center",justifyContent:"center",border: "0.6px solid #000000",borderRadius: "2px",width:"157px",height:"25px",
                                                                fontStyle: "normal",fontWeight: "normal",fontSize: "13px",color: "rgba(0, 0, 0, 0.8)"}}>
                                                        Sensitive Information
                                                    </div>
                                                </Grid>
                                                <Grid item>
                                                    <div style={{display:"flex",alignItems:"center",justifyContent:"center",border: "0.6px solid #000000",borderRadius: "2px",width:"101px",height:"25px",
                                                    marginLeft:"0px",fontStyle: "normal",fontWeight: "normal",fontSize: "13px",color: "rgba(0, 0, 0, 0.8)"}}>
                                                        Discussions
                                                    </div>
                                                </Grid>
                                                <Grid item>
                                                    <div style={{display:"flex",alignItems:"center",justifyContent:"center",border: "0.6px solid #000000",borderRadius: "2px",width:"116px",height:"25px",marginLeft:"0px",
                                                fontStyle: "normal",fontWeight: "normal",fontSize: "13px",color: "rgba(0, 0, 0, 0.8)"}}>
                                                        Black Markets
                                                    </div>
                                                </Grid>
                                                <Grid item>
                                                    <div style={{display:"flex",alignItems:"center",justifyContent:"center",border: "0.6px solid #000000",borderRadius: "2px",width:"81px",height:"25px",marginLeft:"0px",
                                                fontStyle: "normal",fontWeight: "normal",fontSize: "13px",color: "rgba(0, 0, 0, 0.8)"}}>
                                                        Financial
                                                    </div>
                                                </Grid>
                                                <Grid item>
                                                    <div style={{display:"flex",alignItems:"center",justifyContent:"center",border: "0.6px solid #000000",borderRadius: "2px",width:"157px",height:"25px",marginLeft:"0px",
                                                fontStyle: "normal",fontWeight: "normal",fontSize: "13px",color: "rgba(0, 0, 0, 0.8)"}}>
                                                        Exposed Credentials
                                                    </div>
                                                </Grid>
                                                <Grid item>
                                                    <div style={{display:"flex",alignItems:"center",justifyContent:"center",border: "0.6px solid #000000",borderRadius: "2px",width:"157px",height:"25px",marginLeft:"0px",
                                                fontStyle: "normal",fontWeight: "normal",fontSize: "13px",color: "rgba(0, 0, 0, 0.8)"}}>
                                                        Personal Information
                                                    </div>
                                                </Grid>
                                                <Grid item>
                                                    <div style={{display:"flex",alignItems:"center",justifyContent:"center",border: "0.6px solid #000000",borderRadius: "2px",width:"175px",height:"25px",marginLeft:"0px",
                                                fontStyle: "normal",fontWeight: "normal",fontSize: "13px",color: "rgba(0, 0, 0, 0.8)"}}>
                                                        Hacker Group Targeting
                                                    </div>
                                                </Grid>
                                                <Grid item>
                                                    <div style={{display:"flex",alignItems:"center",justifyContent:"center",border: "0.6px solid #000000",borderRadius: "2px",width:"76px",height:"25px",marginLeft:"0px",
                                                fontStyle: "normal",fontWeight: "normal",fontSize: "13px",color: "rgba(0, 0, 0, 0.8)"}}>
                                                        Attacks
                                                    </div>
                                                </Grid>
                                                <Grid item>
                                                    <div style={{display:"flex",alignItems:"center",justifyContent:"center",border: "0.6px solid #000000",borderRadius: "2px",width:"117px",height:"25px",marginLeft:"0px",
                                                fontStyle: "normal",fontWeight: "normal",fontSize: "13px",color: "rgba(0, 0, 0, 0.8)"}}>
                                                        Compromises
                                                    </div>
                                                </Grid>
                                                <Grid item>
                                                    <div style={{display:"flex",alignItems:"center",justifyContent:"center",border: "0.6px solid #000000",borderRadius: "2px",width:"117px",height:"25px",marginLeft:"0px",
                                                fontStyle: "normal",fontWeight: "normal",fontSize: "13px",color: "rgba(0, 0, 0, 0.8)"}}>
                                                        Under Analysis
                                                    </div>
                                                </Grid>

                                                </Grid>
                                                </Grid>
                                            </Grid>

                                        </Grid>
                                    </Grid>
                                    </Grid>
                                    <Grid item xs={12} style={{marginTop:"26px"}}>
                                        <Grid container justify="center">
                                            <Grid item xs={10}>
                                                <div style={{fontStyle: "normal",fontWeight: "500",fontSize: "15px",color: "#000000"}}>
                                                    Time
                                                </div>

                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} style={{marginTop:"20px"}}>
                                        <Grid container justify="center">
                                            <Grid item xs={10}>
                                            <FormControl className={classes.formControl} size="small" >
                                                <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={age1}
                                                onChange={handleChange}
                                                style={{height:30}}
                                                variant="outlined"
                                                displayEmpty
                                                >
                                            <MenuItem value="" >
                                            <em style={{fontSize:"12px",fontWeight:"bold",fontStyle:'normal'}}>All History</em>
                                            </MenuItem>  
                                            <MenuItem value={10} style={{fontSize:"12px",fontWeight:"bold",fontStyle:'normal'}}>Ten</MenuItem>
                                            <MenuItem value={20} style={{fontSize:"12px",fontWeight:"bold",fontStyle:'normal'}}>Twenty</MenuItem>
                                            <MenuItem value={30} style={{fontSize:"12px",fontWeight:"bold",fontStyle:'normal'}}>Thirty</MenuItem>
                                                </Select>
                                            </FormControl>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} style={{marginTop:"20px"}}>
                                        <Grid container justify="center">
                                            <Grid item xs={10}>
                                                <Grid container>
                                                    <Grid item>
                                                    <FormControl className={classes.formControl1}>
                                                        <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={age1}
                                                        onChange={handleChange}
                                                        style={{height:30}}
                                                        variant="outlined"
                                                        displayEmpty
                                                        >
                                                    <MenuItem value="" >
                                                    <em style={{fontSize:"12px",fontWeight:"bold",fontStyle:'normal'}}>From</em>
                                                    </MenuItem>  
                                                    <MenuItem value={10} style={{fontSize:"12px",fontWeight:"bold",fontStyle:'normal'}}>Ten</MenuItem>
                                                    <MenuItem value={20} style={{fontSize:"12px",fontWeight:"bold",fontStyle:'normal'}}>Twenty</MenuItem>
                                                    <MenuItem value={30} style={{fontSize:"12px",fontWeight:"bold",fontStyle:'normal'}}>Thirty</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                    </Grid>
                                                    <Grid item>
                                                    <FormControl className={classes.formControl1} style={{marginLeft:"20px"}}>
                                                        <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={age1}
                                                        onChange={handleChange}
                                                        style={{height:30}}
                                                        variant="outlined"
                                                        displayEmpty
                                                        >
                                                    <MenuItem value="" >
                                                    <em style={{fontSize:"12px",fontWeight:"bold",fontStyle:'normal'}}>To</em>
                                                    </MenuItem>  
                                                    <MenuItem value={10} style={{fontSize:"12px",fontWeight:"bold",fontStyle:'normal'}}>Ten</MenuItem>
                                                    <MenuItem value={20} style={{fontSize:"12px",fontWeight:"bold",fontStyle:'normal'}}>Twenty</MenuItem>
                                                    <MenuItem value={30} style={{fontSize:"12px",fontWeight:"bold",fontStyle:'normal'}}>Thirty</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>

                                    </Grid>
                                    </div>
                                                } 
                                            </Grid>
                                        </Grid>
                                        

                                    </Grid>
                                </Grid>
                                
                                
                                

                        
                        </Card>
                    </Grid>
                    <Grid item xs={1} style={{background:"#F3F6F9",borderLeft:"0.4px solid #000000"}}>
                                    <Grid container direction="column" justify="center" alignItems="center" width="100%" style={{marginTop:"24px"}}>
                                        <Grid item >
                                            <IconButton size="small" onClick={props.call}>
                                                <img src={drop1} />
                                            </IconButton>
                                                    
                                        </Grid>
                                        <Grid item style={{paddingTop:"-25px"}}>
                                            Overview
                                        </Grid>

                                    </Grid>
                    </Grid>
                </Grid>
            </Grid>
            </Grid>
            {view ?
                <Grid item xs={12} style={{marginTop:"30px"}}>
                <Grid container justify="center" >
                    <Grid item xs={12} lg={11}>
                        
                        <LatestCard/>
                        <LatestCardH/>
                        <LatestCard/>
                        
                    
                    </Grid>
                    
                </Grid>
            </Grid>:
            <Grid item xs={12} style={{marginTop:"30px"}}>
                <Grid container justify="center">
                    <Grid item xs={12} lg={11}>
                        <Grid container justify="space-evenly" spacing={2}>
                            <Grid item >
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
                            </Grid>
                            
                        </Grid>
                        

                    </Grid>
                </Grid>
            </Grid>
            }
            
        </div>
     )
 }