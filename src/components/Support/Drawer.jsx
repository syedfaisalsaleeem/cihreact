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
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
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
import Support from "../../Links/images/support.png"
import ContactC from "./ContactC";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const drawerWidth = 250;

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
    fontSize:"12px",
    height:"60px",
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
    fontSize:"14px",
    color:"white",
    '&:hover': {
       cursor:"pointer",
       
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
    color:"white"
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

export default function SDrawer(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [open1, setopen1] = React.useState(false);
  console.log(props.call)
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
 const changeopen=()=>{
   setopen1(!open1)
 }

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
                <ListItemIcon><img src={Home} width="25px" height="25px"  /> </ListItemIcon>
                <ListItemText  primary={<Typography style={{fontSize:"14px"}}>Home</Typography>}/>
            </ListItem>
          </Link>
            <ListItem className={classes.ltext1}>
                <ListItemIcon><img src={Discover} width="25px" height="25px" /> </ListItemIcon>
                <ListItemText  primary={<Typography style={{fontSize:"14px"}}>Discover</Typography>}/>
            </ListItem>
            
            <ListItem className={classes.ltext1} >
            <ListItemIcon><img src={Exposed} width="25px" height="25px" /> </ListItemIcon>
            <Link to="/Dashboard">
            <Typography className={classes.ltext2}>Exposed Information</Typography> 
                {/* <ListItem className={classes.ltext2}>
                
                  <ListItemText primary={<Typography style={{fontSize:"13px"}}>Exposed Information</Typography> } />
                </ListItem> */}
            </Link>
            <ExpandMoreIcon onClick={changeopen} style={{marginLeft:"5px"}}> </ExpandMoreIcon >     
            </ListItem>

            <Link to="/Exposedinformation">
            <ListItem className={classes.ltext1} style={{display:open1?"block":"none"}}>
                
                <ListItemText primary={<Typography style={{fontSize:"14px"}}>All Alerts</Typography>}  style={{marginLeft:"80px",paddingTop:"5px"}}/>
            </ListItem>
            </Link>
            <Link to="/Monitored">
            <ListItem className={classes.ltext1} >
                <ListItemIcon><img src={Monitored} width="25px" height="25px" /> </ListItemIcon>
                <ListItemText primary={<Typography style={{fontSize:"14px"}}>Monitored Systems</Typography>} />
            </ListItem>
            </Link>
            <Link to="./Settings">
            <ListItem className={classes.ltext1}>
                <ListItemIcon><img src={Settings} width="25px" height="25px" />  </ListItemIcon>
                <ListItemText  primary={<Typography style={{fontSize:"14px"}}>Settings</Typography>} />
            </ListItem>
            </Link>
            <Link to="./Support">
            <ListItem className={classes.ltext1} style={{backgroundColor:"rgba(108, 114, 147, 0.3)"}}>
                <ListItemIcon><img src={Support} width="25px" height="25px" /> </ListItemIcon>
                <ListItemText primary={<Typography style={{fontSize:"14px"}}>Support</Typography>}  />
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
        <ContactC call={props.call}/>
        
      </main>
      <footer>
      
      </footer>
    </div>
  );
}