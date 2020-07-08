import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import NotificationsNoneRoundedIcon from '@material-ui/icons/NotificationsNoneRounded';
import { grey } from '@material-ui/core/colors';
import NotificationBadge from 'react-notification-badge';
import {Effect} from 'react-notification-badge';
import styles from "./NHeader.module.css"
import {Avatar} from "@material-ui/core"
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "18px",
  lineHeight: "27px"
  },
  tool:{
      position:"fixed",
      backgroundColor:"white",
      color:"black",
      height:"70px",
      width:"100%",
      border: "10px solid #FFFFFF",
    boxSizing: "border-box",
    boxShadow: "0px 0px 20px rgba(92, 111, 139, 0.12)",
borderRadius: "1px",
  },
  ic:{
      display:"flex",
      flexDirection:"column",
      
      justifyContent:"flex-start",

  },
  ic1:{
    display:"flex",
    flexDirection:"row",
    


},
userlogo:{
    display:"flex",
    justifyContent:"center",
    background:"#D7F9EF",
    borderRadius:"4.66px",
    width:"41px",
    height:"41px",
    marginTop:'5px'

},
userp:{
    background:"#D7F9EF",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight:"normal",
    fontSize:"21px",
    color:"#0BB783",

},
user:{
    marginRight:"10px",
    marginTop:"0px"
}
}));

export default function Header(props) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [drawer,opendrawer]=React.useState(false)
  console.log(props)
  const handledrawer =()=>{
    opendrawer(!open)
  }
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const count=16;
  return (
    <div className={classes.root}>

      <AppBar >
        <Toolbar className={classes.tool}>
          <Link to="./Dashboard">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={props.call}>
            <ChevronLeftIcon/>
          </IconButton>
          </Link>
          
          <Typography variant="h6" className={classes.title}>
            Notifications
          </Typography>
            
            
            
            
            
            
            
               
             

              
            
          
        </Toolbar>
      </AppBar>
      
    </div>
  );
}