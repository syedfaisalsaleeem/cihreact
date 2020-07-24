import React from 'react'
import {Card,Grid,Button,Chip,Dialog,DialogTitle,Typography,Divider,DialogContent,DialogActions,DialogContentText,IconButton, TextField,InputBase,
    FormControl,InputLabel,Select,MenuItem,Box
} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import radar from "../../Links/images/radar.png";
import { makeStyles} from '@material-ui/core/styles';
import Progressbar from './progressbar';
import ShowAssets from './ShowAssets';
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
    formControl: {
        
        width:"34ch",
        border:0,
        background:"#F3F6F9",
        fontSize:"13px",
       
        '& fieldset': {
          border: "0",
        }
    }
  }));
export default function ProgressDialog(props){
    const classes=styles();
    const [open,setopen]=React.useState(true);
    const [counter, setCounter] = React.useState(0);

    const handleClose=()=>{
        setopen(!open)
        props.changedon()
    }
    React.useEffect(() => {
        const timer = setInterval(() => {
          setCounter(prevCount => prevCount + 1); // <-- Change this line!
        }, 100);
        return () => {
          clearInterval(timer);
        };
      }, []); // Pass in empty array to run effect only once!
    if(counter<170){
        
        return (
            <div>
            <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            maxWidth={"lg"} 
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
                                        
                                        <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose} >
                                            <CloseIcon  />
                                        </IconButton>
                                            
                                       
                                        
                                    </Grid>
                                </Grid>
                                
                            </Grid>
                        </Grid>
                    </Grid>

                </DialogTitle> 
            <DialogContent dividers>
                <Grid container style={{height:"60vh"}}>
                <Grid item xs={12} >
                    <Grid container direction="column" justify="center" alignItems="center" >
    
                        <Grid item  style={{height:"60vh",width:"50%"}}>
                            <Box style={{ display:"flex",alignItems:"center",minHeight:"70%"}}>
                                <Grid container direction="column"  spacing={2} >
                                    <Grid item >
                                        <Grid container justify="center">
                                            <Grid item style={{fontStyle:"normal",fontWeight:"500",fontSize:"34px",color:"#000000"}}>
                                                Processing
                                            </Grid>
                                        </Grid>
                                    
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container justify="center">
                                            <Grid item xs={11}>
                                        Our asset discovery tool automatically suggests assets that might belong to you. 
                                        You can then accept or reject these suggestions and form a complete picture of how 
                                        visible your infrastructure and information footprint really is.
                                            </Grid>
                                        </Grid>
                                    
                                    </Grid>
                                    <Grid item>
                                        <Progressbar values={String(counter).concat("%")} color={"#8950FC"}/>
                                    </Grid>
                                </Grid>
                            </Box>


                        </Grid>

                    </Grid>
                </Grid>
                </Grid>
            </DialogContent>
            </Dialog>
        </div>
          );
    }
    else{
        return(
            <div>
            <ShowAssets changedon={props.changedon}/>
        </div>
        )

    }

    }  
    // return(
    //     <div>
    //         <Dialog
    //         open={open}
    //         onClose={handleClose}
    //         aria-labelledby="alert-dialog-title"
    //         aria-describedby="alert-dialog-description"
    //         maxWidth={"lg"} 
    //         >
    //             <DialogTitle>
    //                 <Grid item xs={12}>
    //                     <Grid container justify="space-between">
    //                         <Grid item xs={10}>
    //                             <Grid container spacing={2}>
    //                                 <Grid item >
    //                                     <img src={radar}>
    //                                     </img>
    //                                 </Grid>
    //                                 <Grid item >
    //                                     Add New Asset
    //                                 </Grid>
    //                             </Grid>

    //                         </Grid>

    //                         <Grid item xs={1}>
    //                             <Grid container justify="center" >
    //                                 <Grid item>
                                        
    //                                     <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose} >
    //                                         <CloseIcon  />
    //                                     </IconButton>
                                            
                                       
                                        
    //                                 </Grid>
    //                             </Grid>
                                
    //                         </Grid>
    //                     </Grid>
    //                 </Grid>

    //             </DialogTitle> 
    //         <DialogContent dividers>
    //             <Grid container style={{height:"60vh"}}>
    //             <Grid item xs={12} >
    //                 <Grid container direction="column" justify="center" alignItems="center" >
    
    //                     <Grid item  style={{height:"60vh",width:"50%"}}>
    //                         <Box style={{ display:"flex",alignItems:"center",minHeight:"70%"}}>
    //                             <Grid container direction="column"  spacing={2} >
    //                                 <Grid item >
    //                                     <Grid container justify="center">
    //                                         <Grid item style={{fontStyle:"normal",fontWeight:"500",fontSize:"34px",color:"#000000"}}>
    //                                             Processing
    //                                         </Grid>
    //                                     </Grid>
                                    
    //                                 </Grid>
    //                                 <Grid item xs={12}>
    //                                     <Grid container justify="center">
    //                                         <Grid item xs={11}>
    //                                     Our asset discovery tool automatically suggests assets that might belong to you. 
    //                                     You can then accept or reject these suggestions and form a complete picture of how 
    //                                     visible your infrastructure and information footprint really is.
    //                                         </Grid>
    //                                     </Grid>
                                    
    //                                 </Grid>
    //                                 <Grid item>
    //                                     <Progressbar values={"80%"} color={"#8950FC"}/>
    //                                 </Grid>
    //                             </Grid>
    //                         </Box>


    //                     </Grid>

    //                 </Grid>
    //             </Grid>
    //             </Grid>
    //         </DialogContent>
    //         </Dialog>
    //     </div>
    // )
// }