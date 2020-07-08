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
import ContactC from "./ContactC"
const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    background:"#E5E5E5",
  },
  ltext:{
    

  },
  ltext1:{
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight:"normal",
    fontSize:"17px",
    height:"60px",
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
  console.log(props.call)
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
        <Link to="/Dashboard">
            <ListItem  className={classes.ltext1} >
                <ListItemIcon><img src={Home} width="28px" height="28px"  /> </ListItemIcon>
                <ListItemText  primary={"Home"}/>
            </ListItem>
            </Link> 
            <ListItem className={classes.ltext1}>
                <ListItemIcon><img src={Discover} width="28px" height="28px" /> </ListItemIcon>
                <ListItemText  primary={"Discover"}/>
            </ListItem>
            <ListItem className={classes.ltext1}>
                <ListItemIcon><img src={Exposed} width="28px" height="28px" /> </ListItemIcon>
                <ListItemText primary={"Exposed Information"}/>
            </ListItem>
            <ListItem className={classes.ltext1}>
                <ListItemIcon><img src={Monitored} width="28px" height="28px" /> </ListItemIcon>
                <ListItemText  primary={"Monitored Systems"}/>
            </ListItem>
            
            <ListItem className={classes.ltext1} >
                <ListItemIcon><img src={Settings} width="28px" height="28px" />  </ListItemIcon>
                <ListItemText   primary={"Settings"}/>
            </ListItem>
            
            
            <ListItem className={classes.ltext1} style={{backgroundColor:"rgba(108, 114, 147, 0.3)"}}>
                <ListItemIcon><img src={Support} width="28px" height="28px" /> </ListItemIcon>
                <ListItemText  primary={"Support"}/>
            </ListItem>
            
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