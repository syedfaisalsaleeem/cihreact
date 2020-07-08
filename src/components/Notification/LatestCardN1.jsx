import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded';
import Chip from '@material-ui/core/Chip';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {Avatar,Badge} from "@material-ui/core"
import FolderIcon from '@material-ui/icons/Folder';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import styles from "../Drawer/Dashboard/LatestCard.module.css";
import CloseIcon from '@material-ui/icons/Close';
import brain from "../../Links/images/brain.jpg"
const useStyles = makeStyles((theme) => ({
    Buttons:{
        marginTop:"5px",
        fontSize:'12px !important',
        
    },
    root1: {
        marginBottom:"-50px",
        
      },
    HeaderFont:{
        fontFamily: 'Roboto', 
        
          fontSize:"21px",
          fontWeight:"600px",
          fontStyle:"normal"
      },
    paper: {
      height: 140,
      width: 100,
    },
    f1:{
        width:"100%",
        boxShadow: "0px 0px 35px rgba(181, 181, 195, 0.15)",
        background: "#FFFFFF",
        borderRadius: "2px",
        
        boxSizing: "border-box",
        borderRadius: "2px"
        
        
    },
    f2:{
        width:"100%",
        boxShadow: "0px 0px 0px rgba(181, 181, 195, 0.15)",
        background: "#FFFFFF",
        borderRadius: "2px",
        
        
    },
    f3:{
        width:"100%",
        background: "#FFFFFF",
        borderRadius: "2px",
        border: "0.1px solid #000000",
        boxSizing: "border-box",
        borderRadius: "2px",
        marginTop:"-16px"
        
        
    },
    f4:{
        width:"100%",
        boxShadow: "0px 0px 35px rgba(181, 181, 195, 0.15)",
        background: "black",
        color:"white",
        borderRadius: "2px",
        border: "0.1px solid #000000",
        boxSizing: "border-box",
        borderRadius: "2px"
        
        
    },
    top:{
        display:"flex",
        minWidth:"70px",
        
        minHeight:"30px",
        justifyContent:"flex-start",
        alignItems:"flex-end",
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "17px",
        marginBottom:"5px"
    },
    bottom:{
        display:"flex",minWidth:"70px",minHeight:"30px",justifyContent:"flex-start",alignItems:"flex-start",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "15px"
    },
    chipborder:{
        border:"solid",
        borderColor:"black",
        borderWidth:"0.1px",
        fontSize:"12px",
        fontColor:"black"
    },
    control: {
      padding: theme.spacing(2),
    },
    small1: {
        
        width: theme.spacing(4),
        height: theme.spacing(4),
        color:"black",
        backgroundColor:"white",
        border:"solid",
        borderColor:"black",
        borderWidth:"1px"

      },
      small2: {
        
        width: theme.spacing(6),
        height: theme.spacing(6),
        color:"black",
        backgroundColor:"white",
        border:"solid",
        borderColor:"black",
        borderWidth:"1px"

      },
  }));
export default function LatestCardN1(){
    const classes = useStyles();
    const [st1,set]=React.useState([""]);
    const [click,setclick]=React.useState(false);
    const addcount=()=>{
        setclick(!click)
    }
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    return(
    <div>
        <Grid container spacing={3}>
        <Grid item xs={12} md={12}>

            <Grid container justify="flex-start"  >
                        <Card className={classes.f1}>
                            
                            
                            
                                
                            <Grid container justify="flex-start" direction="row" maxWidth="xl" style={{background:"white"}} spacing={0} >
                                <Grid item xs={12} lg={9}>
                                    <Grid container direction="row">
                                    <Grid item  style={{background:"white",minWidth:"150px",minHeight:"79px",marginRight:"30px"}}>
                                        <div style={{display:"flex",flexDirection:"column",minWidth:"70px",minHeight:"79px",borderStyle:"solid",borderWidth:"0.1px",borderTop:"white",borderLeft:"white",borderBottom:"white"}} >
                                            
                                                <div style={{display:"flex",minWidth:"70px",minHeight:"40px",justifyContent:"center",alignItems:"flex-end",fontSize:"14px"}} >
                                                <Badge color="secondary" variant="dot" overlap="circle" color="primary" >
                                                <Avatar className={classes.small1} >
                                                    <FolderIcon style={{fontSize:"18px"}} />
                                                </Avatar>
                                                </Badge>
                                                </div>
                                                
                                            
                                            
                                            
                                            
                                            
                                                
                                                <div container style={{display:"flex",fontSize:"14px",minWidth:"70px",minHeight:"40px",justifyContent:"center",alignItems:"center",color:"black"}} >
                                                DD-MM-YYYY
                                                </div>
                                            
                                            
                                            
                                            
                                        
                                        </div>

                                    </Grid>
                                    <Grid item >
                                    <div style={{display:"flex",marginTop:"3px",flexDirection:"column",minWidth:"200px",minHeight:"76px",marginLeft:"3vw"}} >
                                            
                                            <div className={classes.top} >
                                            Subject
                                            </div>

                                            <div className={classes.bottom} >
                                            Subject goes here
                                            </div>

                                    </div>
                                        

                                    </Grid>
                                    <Divider orientation="vertical"></Divider>
                                    <Grid item >
                                        <div style={{display:"flex",marginTop:"3px",flexDirection:"column",minWidth:"70px",minHeight:"70px",marginLeft:"3vw",borderLeft:"1px solid rgba(0, 0, 0, 0.5)",paddingLeft:"20px",paddingRight:"20px"}} >
                                            
                                            <div className={classes.top} >
                                            Description
                                            </div>

                                            <div className={classes.bottom} >
                                            Description goes here
                                            </div>

                                        </div>

                                    </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} lg={3}>
                                    <Grid container alignItems="flex-end" justify="flex-end" >
                                        <div style={{display:"flex",minWidth:"120px",minHeight:"76px",marginLeft:"3vw",alignItems:"center",justifyContent:"flex-end"}}>
                                            <div>
                                            
                                            </div>
                                            <div>
                                            <Grid container justify="flex-end" style={{marginTop:"5px"}}>
                                                <IconButton aria-label="settings" onClick={handleClickOpen} >
                                                <ChevronRightIcon style={{fontSize:"30px"}}/>
                                                </IconButton>
                                                
                                            </Grid>
                                            </div>
                                            
                                        </div>
                                    </Grid>
                                    
                                </Grid>
                            </Grid>
                        </Card>
            </Grid>            
        </Grid>
        <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth={"lg"}
                
            >
                
                <DialogTitle>
                                    <Grid container style={{height:"90px",marginTop:"-25px",marginLeft:"-24px"}} >
                                        <Grid items xs={11}>
                                            <Grid container direction="row">
                                            <Grid item xs={2} style={{backgroundColor:"white"}}>
                                                <Grid container direction="row">
                                                    <Grid item xs={10} style={{height:"105px",borderRight:"0.6px solid rgba(0, 0, 0, 0.5)"}}>
                                                    <Grid container justify="center">
                                                        <Grid item>
                                                        <div style={{paddingTop:"20px",paddingLeft:"20px"}}>
                                                        <Avatar className={classes.small2} >
                                                            <FolderIcon style={{fontSize:"23px"}} />
                                                        </Avatar>
                                                        </div>
                                                        
                                                    
                                                    
                                                    
                                                    
                                                    
                                                        
                                                        <div container style={{display:"flex",fontSize:"14px",minWidth:"70px",minHeight:"40px",justifyContent:"center",alignItems:"center",color:"black",opacity: "0.5"}} >
                                                        DD-MM-YYYY
                                                        </div>
                                                        </Grid>
                                                    </Grid>
                                                    
                                                    </Grid>
                                                </Grid>
                                                
                                            
                                            </Grid>
                                            <Grid item xs={4}>
                                            <div style={{display:"flex",flexDirection:"column",marginTop:"10px",minHeight:"60px",marginLeft:"1.5vw"}} >
                                            

                                            <div style={{paddingTop:"23px",fontSize:"22px"}}>
                                            Subject Goes Here ...
                                            </div>

                                            </div>
                                            </Grid>
                                            
                                            </Grid>
                                        
                                        </Grid>
                                        
                                        <Grid items xs={1} style={{display:"flex",justifyContent:"flex-end",alignItems:"center"}}>
                                        
                                        <CloseIcon onClick={handleClose} />
                                        
                                            
                                        </Grid>
                                        
                                        
                                        
                                    </Grid>
                </DialogTitle>                  
                <Divider/>
                <DialogContent >
                

                <Grid item xs={12} style={{margin:"20px"}}>
                    <Grid container justify="center">
                    <img src={brain} style={{width:"440",height:"300px"}} ></img>
                    </Grid>
                    
                
                </Grid>

                <Grid item xs={12} style={{margin:"30px"}}>
                    <Grid container justify="center">
                        <Grid item xs={7} style={{fontSize:"16px",fontWeight:"normal",fontStyle:"normal"}}>
    Hacker groups such as Anonymous are loosely associated international networks of activist and hacktivist entities. They organise attack campaigns that begin with a published manifesto, a statement why the attack takes place, followed by target lists and communication regarding performing the attack. When hacker groups target organisations, this indicates an intentional attempt to break into their systems or perform denial of service attacks that cause downtime for critical systems. Whether attack groups are successful or not depends on the target organisation's security posture and the participating hacktivists' skills and tools. Perform asset discovery to understand what systems are visible from your organisation publicly. Test your network perimeter. Provide awareness training for the users about phishing threats.
                        </Grid>
                    </Grid>

                </Grid>

                


    
        </DialogContent>
        
      </Dialog>
    </Grid>
    </div>
    
    )
    
}