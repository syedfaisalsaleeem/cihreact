
import EContent from "./EContent.jsx";


import React from 'react';
import {BrowserRouter,Link,Switch,Route,Redirect} from 'react-router-dom';

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Home from "../../Links/images/dashboard.png"
import Discover from "../../Links/images/discovery.png"
import Exposed from "../../Links/images/information.png"
import Monitored from "../../Links/images/exposedsystems.png"
import Settings from "../../Links/images/settings.png"
import Support from "../../Links/images/support.png";
import Network from "../../Links/images/network.png"

import Side from "../../Links/images/side.png"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const drawerWidth = 255;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    background:"#F2F3F7",
  },
  ltext:{
    

  },
  ltext1:{
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight:"normal",
    fontSize:"16px",
    height:"58px",
    color:"white",
    '&:hover': {
       cursor:"pointer",
       background:"rgba(108, 114, 147, 0.3)",
    },
  },
  ltext2:{
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight:"normal",
    fontSize:"16px",
    color:"white",
    '&:hover': {
       cursor:"pointer",
       background:"rgba(108, 114, 147, 0.3)",
    },
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    
    
  },
  drawerPaper: {
    display:"flex", 
    width: drawerWidth,
    marginTop:"70px",
    backgroundColor:"#1E1E2D",
    color:"white",
    paddingBottom:"70px"
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
    
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
    
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function HDrawer(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [open1,setOpen1]=React.useState(true);
  console.log(props.call)
  const control=()=>{
      setOpen1(!open1)
  }
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
     
    
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={props.call}    
        classes={{
          paper: classes.drawerPaper,
        }}
      >

        <Divider/>
        <List className={classes.ltext}>
            <Link to="/Home">
                <ListItem  className={classes.ltext1} >
                    <ListItemIcon style={{marginLeft:"-5px"}}><img src={Home} width="28px" height="28px"  /> </ListItemIcon>
                    <ListItemText primary={
                    <Typography style={{fontSize:"13px",marginLeft:"-14px",color:'white',marginTop:"0px"}}>
                    Home
                    </Typography>}/>
                </ListItem>
            </Link>
            
            <ListItem className={classes.ltext1}>
                <ListItemIcon style={{marginLeft:"-5px"}}><img src={Discover} width="28px" height="28px" /> </ListItemIcon>
                <ListItemText primary={
                    <Typography style={{fontSize:"13px",marginLeft:"-14px",color:'white',marginTop:"0px"}}>
                    Discover
                    </Typography>}
                        />
            </ListItem>
            
            
            <ListItem className={classes.ltext1} >
                <ListItemIcon style={{marginLeft:"-5px"}}><img src={Exposed} width="28px" height="28px" /> </ListItemIcon>
                <ListItemText primary={
                    <div style={{display:"flex",width:"100%"}}>
                        <div>
                        <Link to="/Dashboard">
                        <pre style={{fontSize:"13px",marginLeft:"-14px",color:'white',marginTop:"14px",fontFamily:"Roboto"}}>Exposed Information</pre>
                        </Link>
                        </div>
                        <div style={{paddingLeft:"10px"}} >  
                        <IconButton style={{color:"white"}}onClick={control}><ExpandMoreIcon/></IconButton>
                        </div>
                        
                        
                    </div>}/>
            </ListItem>
            <div style={{display:open1?"block":"none"}}>
            <Link to="/ExposedInformation">
                  <ListItem className={classes.ltext2}>
                    <ListItemIcon style={{marginLeft:"-20px"}}><img src={Side}  /> </ListItemIcon>
                    <ListItemText style={{marginLeft:"20px"}} primary={
                        <Typography style={{color:"white",fontSize:"14px"}}>
                            All Alerts
                            </Typography>
                }/>
                </ListItem>
            </Link>
            <Link to="/SensitiveInformation">
            <ListItem className={classes.ltext2}>
                
                    <ListItemText style={{marginLeft:"20px"}} primary={
                        <Typography style={{color:"white",fontSize:"14px"}}>
                            Sensitive Information
                            </Typography>

             }/>
                </ListItem>
            </Link>
            <Link to="/Discussion">
                <ListItem className={classes.ltext2}>
                
                    <ListItemText style={{marginLeft:"20px"}} primary={
                        <Typography style={{color:"white",fontSize:"14px"}}>
                            Discussions
                            </Typography>
                }/>
                </ListItem>
            </Link>
            <Link to="/BlackMarket">
                <ListItem className={classes.ltext2}>
                
                    <ListItemText style={{marginLeft:"20px"}} primary={
                        <Typography style={{color:"white",fontSize:"14px"}}>
                            Black Markets
                            </Typography>
                }/>
                </ListItem>
            </Link>
            <Link to="/Financial">
                <ListItem className={classes.ltext2}>
                    
                    <ListItemText style={{marginLeft:"20px"}} primary={
                        <Typography style={{color:"white",fontSize:"14px"}}>
                            Financial
                            </Typography>
                }/>
                </ListItem>
            </Link>
            <Link to="/ExposedCredentials">
                <ListItem className={classes.ltext2}>
                    
                    <ListItemText style={{marginLeft:"20px"}} primary={
                        <Typography style={{color:"white",fontSize:"14px"}}>
                            Exposed Credentials
                            </Typography>
                }/>
                </ListItem>
            </Link>
            <Link to="/PersonalInformation">
                <ListItem className={classes.ltext2}>
                    
                    <ListItemText style={{marginLeft:"20px"}} primary={
                        <Typography style={{color:"white",fontSize:"14px"}}>
                            Personal Information
                            </Typography>
                }/>
                </ListItem>
            </Link>
            <Link to="/HackerGroupTargeting">
                <ListItem className={classes.ltext2}>
                    
                    <ListItemText style={{marginLeft:"20px"}} primary={
                        <Typography style={{color:"white",fontSize:"14px"}}>
                            Hacker Group Targeting
                            </Typography>
                }/>
                </ListItem>
            </Link>
            <Link to="/AttackandCompromises">
                <ListItem className={classes.ltext2}>
                    
                    <ListItemText style={{marginLeft:"20px"}} primary={
                        <Typography style={{color:"white",fontSize:"14px"}}>
                            Attacks & Compromises
                            </Typography>
                }/>
                </ListItem>
            </Link>
            <Link to="/UnderAnalysis">
                <ListItem className={classes.ltext2}>
                    
                    <ListItemText style={{marginLeft:"20px"}} primary={
                        <Typography style={{color:"white",fontSize:"14px"}}>
                            Under Analysis
                            </Typography>
                }/>
                </ListItem>
            </Link>
            <Link to="/Remediation">
                <ListItem className={classes.ltext2}>
                    
                    <ListItemText style={{marginLeft:"20px"}} primary={
                        <Typography style={{color:"white",fontSize:"14px"}}>
                            Remediation
                            </Typography>
                }/>
                </ListItem>
            </Link>
            </div>
            <Link to="/Monitored">
            <ListItem className={classes.ltext1}>
                <ListItemIcon style={{marginLeft:"-5px"}}><img src={Monitored} width="28px" height="28px" /> </ListItemIcon>
                <ListItemText primary={
                    <Typography style={{fontSize:"13px",marginLeft:"-14px",color:'white',marginTop:"0px"}}>
                    Exposed Systems
                    </Typography>}/>
            </ListItem>
            </Link>
            
            <ListItem className={classes.ltext1}>
                <ListItemIcon style={{marginLeft:"-5px"}}><img src={Network} width="28px" height="28px" />  </ListItemIcon>
                <ListItemText primary={
                    <Typography style={{fontSize:"13px",marginLeft:"-14px",color:'white',marginTop:"0px"}}>
                    Exposed People
                    </Typography>}/>
            </ListItem>
            
            <Link to="./Settings">
            <ListItem className={classes.ltext1}>
                <ListItemIcon style={{marginLeft:"-5px"}}><img src={Settings} width="28px" height="28px" />  </ListItemIcon>
                <ListItemText primary={
                    <Typography style={{fontSize:"13px",marginLeft:"-14px",color:'white',marginTop:"0px"}}>
                    Settings
                    </Typography>}/>
            </ListItem>
            </Link>
            <Link to="./Support">
            <ListItem className={classes.ltext1}>
                <ListItemIcon style={{marginLeft:"-5px"}}><img src={Support} width="28px" height="28px" /> </ListItemIcon>
                <ListItemText primary={
                    <Typography style={{fontSize:"13px",marginLeft:"-14px",color:'white',marginTop:"0px"}}>
                    Support
                    </Typography>}/>
            </ListItem>
            </Link>
        </List>

      </Drawer>
      
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: props.call,
        })} 
      >
        <div className={classes.drawerHeader} />
            <EContent/>
        
      </main>
      <footer>
      
      </footer>
    </div>
  );
}