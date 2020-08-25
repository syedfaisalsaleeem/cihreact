import React from 'react'
import {Card,Grid,Button,Chip,Dialog,DialogTitle,Typography,Divider,DialogContent,DialogActions,DialogContentText,IconButton, TextField,InputBase,
    FormControl,InputLabel,Select,MenuItem,Box
} from "@material-ui/core";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CloseIcon from '@material-ui/icons/Close';
import radar from "../../Links/images/radar.png";
import os from "../../Links/images/os.png";
import edit from "../../Links/images/edit.png";
import { makeStyles, withStyles} from '@material-ui/core/styles';
import Progressbar from './progressbar';
import Appi from "../../Links/images/App.png";
import Menu from '@material-ui/core/Menu';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';

import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import SuggestAsset from "./SuggestAsset.jsx"
import SuggestAsset1 from "./SuggestAsset1.jsx"
import RejectAsset from './RejectAsset.jsx';
function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Application', " 000.000.000", " https://www.domain-name.com",""),
    createData('Application', " 000.000.000", " https://www.domain-name.com",""),
    createData('Application', " 000.000.000", " https://www.domain-name.com",""),
    createData('Application', " 000.000.000", " https://www.domain-name.com",""),
    createData('Application', " 000.000.000", " https://www.domain-name.com",""),
  ];
  const StyledTab = withStyles((theme) => ({
    root: {
      textTransform: 'none',
      color: '#fff',
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.pxToRem(15),
      marginRight: theme.spacing(1),
      '&:focus': {
        opacity: 1,
      },
    },
  }))((props) => <Tab disableRipple {...props} />);
const styles = makeStyles((theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[900],
    },
    textf:{
        background: "#F3F6F9",
        borderRadius: "4px",
        height: "41.02px",
        padding: theme.spacing(1),
        fontSize:"13px",
        width:"33ch",

    },
    chip1:{
        border: "1px solid #000000",
        borderRadius: "2px",
        margin:theme.spacing(1),
        background:"#F3F6F9"
    },
    chip2:{
        color:"white",
        margin:theme.spacing(0.7),
        fontSize:"12px",
        padding:theme.spacing(1)
    },
    formControl: {
        
        width:"34ch",
        border:0,
        background:"#F3F6F9",
        fontSize:"13px",
       
        '& fieldset': {
          border: "0",
        }
    },
    app1:{
        background:"white",
        boxShadow: "0px 0px 0px rgba(181, 181, 195, 0.15), 0px 0px 0px rgba(0, 0, 0, 0.25)",
        fontStyle: "normal",
        fontWeight:"500",
        fontSize:"20px",
        color: "#000000",
        height:"72px",
        '&$selected': {
            backgroundColor: '#004C9B',
            color: 'white',
            fontWeight: theme.typography.fontWeightMedium,
        },
        inkBar: {
            backgroundColor: 'yellow'
            },
            indicator: {
                backgroundColor: '#1890ff',
              },

    },
    tlist:{
        '&$selected': {
            backgroundColor: '#004C9B',
            color: 'white',
            fontWeight: theme.typography.fontWeightMedium,
        },
        indicator: {
            backgroundColor: '#1890ff',
          },
          inkBar: {
            backgroundColor: 'yellow'
            }
    },
    stab:{
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(17),
        padding:"7px",paddingBottom:"20px", 
        '&$selected': {
            backgroundColor: '#004C9B',
            color: 'white',
            fontWeight: theme.typography.fontWeightMedium,
        },
        inkBar: {
            backgroundColor: 'yellow'
            },
            indicator: {
                backgroundColor: '#1890ff',
              },
        
    }
  }));
export default function ShowAssets(props){
    const classes=styles();
    const [open1,setopen1]=React.useState(true);
    const handleClose1=()=>{
        setopen1(!open1)
        props.changedon()
    }
    const [value, setValue] = React.useState('2');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return(
        <React.Fragment>
            <Dialog
            open={open1}
            onClose={handleClose1}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            maxWidth={"xl"}
            fullWidth={"xl"}
            
            scroll={"body"}
            
            >
                <DialogTitle>
                    <Grid item xs={12}>
                        <Grid container justify="space-between">
                            <Grid item xs={10}>
                                <Grid container spacing={2}>
                                    <Grid item >
                                        <img src={radar}>
                                        </img>
                                    </Grid>
                                    <Grid item >
                                        Add New Asset
                                    </Grid>
                                </Grid>

                            </Grid>

                            <Grid item xs={1}>
                                <Grid container justify="center" >
                                    <Grid item>
                                        
                                        <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose1} >
                                            <CloseIcon  />
                                        </IconButton>
                                            
                                       
                                        
                                    </Grid>
                                </Grid>
                                
                            </Grid>
                        </Grid>
                    </Grid>

                </DialogTitle> 
            <DialogContent style={{background:"#F3F6F9"}}>
                <Grid container>
                <Grid item xs={12} style={{width:"100%",height:"100%",overflow:"hidden"}}>
                    <Grid container>
                        <Grid item  style={{minWidth:"14%"}}>
                            <Grid container spacing={3}>
                                <Grid item >
                                    <Box style={{display:"flex",height:"244px",minWidth:"13%",alignItems:"center",justifyContent:"center"}}>
                                        <Grid container direction="column" spacing={1} justify="center" alignItems="center">
                                            <Grid item style={{fontStyle:"normal",fontWeight:"600",fontSize:"18px"}}>
                                                TYPE
                                            </Grid>
                                            <Grid item>
                                                <img src={Appi}/>
                                            </Grid>
                                        </Grid>
                                        
                                    </Box>
                                </Grid>
                                <Grid item>
                                    <Divider orientation="vertical"/>
                                </Grid>
                            </Grid>

                            
                        </Grid>
                        <Grid item style={{width:"86%"}} >
                            <Grid container direction="column" spacing={2}>
                                <Grid item >
                                    <Grid container justify="flex-end">
                                        <Grid item >
                                            <Button variant="outlined">
                                                <Grid container spacing={1}>
                                                    <Grid item>
                                                        <img src={edit}/>
                                                    </Grid>
                                                    <Grid item>
                                                        Edit
                                                    </Grid>
                                                </Grid>
                                                
                                            </Button>
                                        </Grid>

                                    </Grid>

                                </Grid>
                                <Grid item style={{width:"84%"}}>
                                    <Grid container direction="column" spacing={3}>
                                        <Grid item>
                                            <Grid container spacing={3} justify="space-between">
                                                <Grid item style={{width:"31%"}}>
                                                    <Grid container direction="column" spacing={2}>
                                                        <Grid item>
                                                            <Grid container direction="column" spacing={1}>
                                                                <Grid item style={{fontStyle:"normal",fontWeight:"600",fontSize:"18px"}}>
                                                                    IP Address
                                                                </Grid>
                                                                <Grid item style={{fontStyle:"normal",fontWeight:"normal",fontSize:"16px"}}>
                                                                    000.00.00.00
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid item>
                                                            <Grid container direction="column" spacing={2}>
                                                                <Grid item style={{fontStyle:"normal",fontWeight:"600",fontSize:"18px"}}>
                                                                    Open Ports
                                                                </Grid>
                                                                <Grid item>
                                                                    <Chip label="4000" className={classes.chip1} size="small"/>
                                                                    <Chip label="4000" className={classes.chip1} size="small"/>
                                                                    <Chip label="4000" className={classes.chip1} size="small"/>
                                                                    <Chip label="4000" className={classes.chip1} size="small"/>
                                                                    <Chip label="4000" className={classes.chip1} size="small"/>
                                                                    <Chip label="4000" className={classes.chip1} size="small"/>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>

                                                    </Grid>
                                                </Grid>
                                                <Grid item style={{width:"41%"}}>
                                                    <Grid container direction="column" spacing={2}>
                                                        <Grid item>
                                                            <Grid container direction="column" spacing={1}>
                                                                <Grid item style={{fontStyle:"normal",fontWeight:"600",fontSize:"18px"}}>
                                                                    Host Name
                                                                </Grid>
                                                                <Grid item>
                                                                https://website.web.com
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid item>
                                                            <Grid container direction="column" spacing={2}>
                                                                <Grid item style={{fontStyle:"normal",fontWeight:"600",fontSize:"18px"}}>
                                                                    Tags
                                                                </Grid>
                                                                <Grid item>
                                                                    <Chip label="Tag Here" className={classes.chip2} size="small" style={{background:"#03BD5B"}}/>
                                                                    <Chip label="Tag Here" className={classes.chip2} size="small" style={{background:"#38875D"}}/>
                                                                    <Chip label="Tag Here" className={classes.chip2} size="small" style={{background:"#778A80"}}/>
                                                                    <Chip label="Tag Here" className={classes.chip2} size="small" style={{background:"#1612C6"}}/>
                                                                    <Chip label="Tag Here" className={classes.chip2} size="small" style={{background:"#5978E7"}}/>
                                                                    <Chip label="Tag Here" className={classes.chip2} size="small" style={{background:"#D839C8"}}/>
                                                                    <Chip label="Tag Here" className={classes.chip2} size="small" style={{background:"#929DD6"}}/>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>

                                                    </Grid>
                                                </Grid>
                                                <Grid item>
                                                    <Grid container direction="column">
                                                        <Grid item style={{fontStyle:"normal",fontWeight:"600",fontSize:"18px"}}>
                                                            OS TYPE
                                                        </Grid>
                                                        <Grid item>
                                                            <Grid container spacing={1}>
                                                                <Grid item>
                                                                    <img src={os}/>
                                                                </Grid>
                                                                <Grid item style={{fontStyle:"normal",fontWeight:"normal",fontSize:"16px"}}>
                                                                Ubuntu Linux 18.04 LTS
                                                                </Grid>
                                                            </Grid>
                                                          
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>

                                    </Grid>
                                    
                                </Grid>
                                
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                </Grid>
                </DialogContent>
                <DialogContent style={{background:"white"}} dividers> 
                <Grid item xs={12} style={{width:"100%",height:"72px"}}>
                    <Grid container >
                        <Grid item style={{width:"70%",height:"100%"}}>
                            <Grid container>
                            <TabContext value={value}>
                                <AppBar position="static" className={classes.app1}>
                                <TabList onChange={handleChange} aria-label="simple tabs example" className={classes.tlist}>
                                    <Tab label="Confimed Assets" value="1" style={{width:"33%"}} className={classes.stab} />
                                    <Tab label="Suggested Assets" value="2" style={{width:"33%"}} className={classes.stab}/>
                                    <Tab label="Rejected Assets" value="3" style={{width:"33%"}} className={classes.stab}/>
                                </TabList>
                                </AppBar>
                                <TabPanel value="1" ></TabPanel>
                                <TabPanel value="2"></TabPanel>
                                <TabPanel value="3"></TabPanel>
                            </TabContext>
                            {/* <Tabs
                                value={value}
                                onChange={handleChange}
                                variant="fullWidth"
                                indicatorColor="primary"
                                textColor="primary"
                                aria-label="icon tabs example"
                            >

                                {/* <Tab icon={<PhoneIcon />} aria-label="phone" />
                                <Tab icon={<FavoriteIcon />} aria-label="favorite" />
                                <Tab icon={<PersonPinIcon />} aria-label="person" /> 
                                <Tab>
                                <Grid item style={{display:"flex",justifyContent:"center",fontStyle:"normal",fontWeight:"500",fontSize:"20px",padding:"10px",paddingBottom:"25px",width:"33%"}}>
                                    Confirmed Assets
                                </Grid>
                                </Tab>
                                <Tab>
                                <Grid item style={{display:"flex",justifyContent:"center",fontStyle:"normal",fontWeight:"500",fontSize:"20px",padding:"10px",paddingBottom:"25px",width:"33%",borderBottom:"5px solid #000000"}}>
                                    Suggested Assets
                                </Grid>
                                </Tab>
                                <Tab  style={{display:"flex",justifyContent:"center",fontStyle:"normal",fontWeight:"500",fontSize:"20px",padding:"10px",paddingBottom:"25px",width:"33%"}}>
                                <Grid item style={{display:"flex",justifyContent:"center",fontStyle:"normal",fontWeight:"500",fontSize:"20px",padding:"10px",paddingBottom:"25px",width:"33%"}}>
                                    Rejected Assets
                                </Grid>
                                </Tab>

                                </Tabs> */}
                            </Grid>
                        </Grid>
                        <Grid item style={{width:"30%"}}>
                            <Grid container spacing={2}  justify="center">
                                <Grid item style={{width:"50%"}}>
                                    <Button variant="outlined" style={{padding:"13px",height:"40px",paddingLeft:"13px",paddingRight:"13px"}}>
                                            Refresh Assets
                                    </Button>
                                </Grid>
                                <Grid item style={{width:"50%"}}>
                                < Button style={{height:"40px",background:"#FF6A7A",color:"white",paddingLeft:"13px",paddingRight:"13px"}}>
                                        Reject All
                                    </Button>
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                <Divider />
                </Grid>
                
                <Grid item xs={12}>
                    <SuggestAsset value={value}/>
                    <SuggestAsset1 value={value}/>
                    <RejectAsset value={value}/>
                </Grid>

                {/* <Grid item xs={12}>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell>
                                    <Select>

                                    </Select>
                                
                                </TableCell>
                                <TableCell align="center">IP Address</TableCell>
                                <TableCell align="center">Host Name</TableCell>
                                <TableCell align="center"></TableCell>
                                
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="center">{row.calories}</TableCell>
                                <TableCell align="center">{row.fat}</TableCell>
                                <TableCell align="right">
                                    <IconButton>
                                        <MoreVertIcon/>
                                    </IconButton>
                                </TableCell>
                                
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                </Grid> */}
                </DialogContent>

                
            
            </Dialog>
        </React.Fragment>
    )
}